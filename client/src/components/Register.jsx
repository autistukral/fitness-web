import { useRef, useState, useEffect } from "react";
import { faCheck, faTimes, faInfoCircle } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import axios from "../api/axios";
import '../css/register.css'

const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,24}$/;
const REGISTER_URL = '/register';

const Register = () => {
    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState('');
    const [validName, setValidName] = useState(false);
    const [userFocus, setUserFocus] = useState(false);

    const [pwd, setPwd] = useState('');
    const [validPwd, setValidPwd] = useState(false);
    const [pwdFocus, setPwdFocus] = useState(false);

    const [matchPwd, setMatchPwd] = useState('');
    const [validMatch, setValidMatch] = useState(false);
    const [matchFocus, setMatchFocus] = useState(false);

    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        const result = USER_REGEX.test(user);
        console.log(result);
        console.log(user);
        setValidName(result);
    }, [user])

    useEffect(() => {
        const result = PWD_REGEX.test(pwd);
        console.log(result);
        console.log(pwd);
        setValidPwd(result);
        const match = pwd === matchPwd;
        setValidMatch(match);
    }, [pwd, matchPwd])

    useEffect(() => {
        setErrMsg('');
    }, [user, pwd, matchPwd])

    const handleSubmit = async (e) => {
        e.preventDefault();
        const v1 = USER_REGEX.test(user);
        const v2 = PWD_REGEX.test(pwd);
        if (!v1 || !v2) {
            setErrMsg("Invalid Entry");
            return;
        }
        try {
            const response = await axios.post(REGISTER_URL,
                JSON.stringify({ user, pwd }),
                {
                    headers: { 'Content-Type': 'application/json' },
                    withCredentials: true
                });
            console.log(response.data);
            console.log(response.accessToken);
            console.log(JSON.stringify(response));
            setSuccess(true);
        } catch (err) {
            if (!err?.response) {
                setErrMsg('No server response');
            } else if (err.response?.status === 409) {
                setErrMsg('Username Taken')
            } else {
                setErrMsg('Registration Failed')
            }
            errRef.current.focus();
        }
    }

    return (
        <>
            {success ? (
                <div className='w-full min-h-screen'>
                    <section className='w-[100%] max-w-[420px] min-h-[400px] flex flex-col justify-center px-[32px] py-[24px] bg-[#a88bbb] rounded-[24px] absolute left-[50%] translate-y-[40%] translate-x-[-50%]'>
                        <h1 className='text-[32px] text-[#fff] mx-auto'>Registrováno!</h1>
                        <p className='mx-auto mt-[40px]'>
                            <a href="/login" className='text-[24px] text-[#fff] px-[20px] py-[6px] bg-[#2e65ad] hover:bg-[#193860] rounded-[8px]'>Přihlásit</a>
                        </p>
                    </section>
                </div>
            ) : (
                <div className='w-full min-h-screen'>
                    <section className='w-[100%] max-w-[420px] min-h-[400px] flex flex-col justify-center px-[32px] py-[24px] bg-[#a88bbb] rounded-[24px] absolute left-[50%] translate-y-[40%] translate-x-[-50%]'>
                        <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
                        <h1 className='mt-0 mx-auto mb-[20px] text-[24px] text-[#fff] font-bold'>Registrace</h1>
                        <form onSubmit={handleSubmit} className='flex flex-col justify-evenly flex-grow pb-[1rem]'>
                            <label htmlFor="username">
                                Jméno:
                                <span className={validName ? "valid" : "hide"}>
                                    <FontAwesomeIcon icon={faCheck} />
                                </span>
                                <span className={validName || !user ? "hide" : "invalid"}>
                                    <FontAwesomeIcon icon={faTimes} />
                                </span>
                            </label>
                            <input
                                type="text"
                                id="username"
                                ref={userRef}
                                autoComplete="off"
                                onChange={(e) => setUser(e.target.value)}
                                required
                                aria-invalid={validName ? "false" : "true"}
                                aria-describedby="uidnote"
                                onFocus={() => setUserFocus(true)}
                                onBlur={() => setUserFocus(false)}
                            />
                            <p id="uidnote" className={userFocus && user && !validName ? "instructions" : "offscreen"}>
                                <FontAwesomeIcon icon={faInfoCircle} />4 až 24 charakterů<br />
                                Musí začít písmenem<br />
                                Písmena, čísla, podtržítka, pomlčky jsou povolené
                            </p>

                            <label htmlFor="password">
                                Heslo:
                                <span className={validPwd ? "valid" : "hide"}>
                                    <FontAwesomeIcon icon={faCheck} />
                                </span>
                                <span className={validPwd || !pwd ? "hide" : "invalid"}>
                                    <FontAwesomeIcon icon={faTimes} />
                                </span>
                            </label>
                            <input
                                type="password"
                                id="password"
                                onChange={(e) => setPwd(e.target.value)}
                                required
                                aria-invalid={validPwd ? "false" : "true"}
                                aria-describedby="pwdnote"
                                onFocus={() => setPwdFocus(true)}
                                onBlur={() => setPwdFocus(false)}
                            />
                            <p id="pwdnote" className={pwdFocus && !validPwd ? "instructions" : "offscreen"}>
                                <FontAwesomeIcon icon={faInfoCircle} />
                                8 až 24 charakterů<br />
                                Musí obsahovat velká a malá písmena a číslo
                            </p>

                            <label htmlFor="confirm_pwd">
                                Potvrďte heslo:
                                <span className={validMatch && matchPwd ? "valid" : "hide"}>
                                    <FontAwesomeIcon icon={faCheck} />
                                </span>
                                <span className={validMatch || !matchPwd ? "hide" : "invalid"}>
                                    <FontAwesomeIcon icon={faTimes} />
                                </span>
                            </label>
                            <input
                                type="password"
                                id="confirm_pwd"
                                onChange={(e) => setMatchPwd(e.target.value)}
                                required
                                aria-invalid={validMatch ? "false" : "true"}
                                aria-describedby="confirmnote"
                                onFocus={() => setMatchFocus(true)}
                                onBlur={() => setMatchFocus(false)}
                            />
                            <p id="confirmnote" className={matchFocus && !validMatch ? "instructions" : "offscreen"}>
                                <FontAwesomeIcon icon={faInfoCircle} />
                                Heslo musí být stejné
                            </p>

                            <button disabled={!validName || !validPwd || !validMatch ? true : false}>Registrovat</button>
                        </form>
                        <p className="mateUcet">
                            Již máte svůj účet?<br />
                            <span className="line">
                                {
                                    <a href="/login">Přihlásit</a>
                                }
                            </span>
                        </p>
                    </section>
                </div>
            )}
        </>
    )
}

export default Register
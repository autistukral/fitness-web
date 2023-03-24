import { useRef, useState, useEffect } from 'react';
import '../css/register.css'
import '../css/login.css'
import useAuth from '../hooks/useAuth';
import axios from '../api/axios';
import { useNavigate, useLocation } from 'react-router-dom';
const LOGIN_URL = '/auth';

const Login = () => {
    const { setAuth } = useAuth();

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');

    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setErrMsg('');
    }, [user, pwd])

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(LOGIN_URL,
                JSON.stringify({ user, pwd }),
                {
                    headers: { 'Content-Type': 'application/json' },
                    withCredentials: true
                }
            );
            console.log(JSON.stringify(response?.data));
            //console.log(JSON.stringify(response));
            const accessToken = response?.data?.accessToken;
            setAuth({ user, pwd, accessToken });
            setUser('');
            setPwd('');
            navigate(from, { replace: true });
        } catch (err) {
            if (!err?.response) {
                setErrMsg('No Server Response');
            } else if (err.response?.status === 400) {
                setErrMsg('Missing Username or Password');
            } else if (err.response?.status === 401) {
                setErrMsg('Unauthorized');
            } else {
                setErrMsg('Login Failed');
            }
            errRef.current.focus();
        }
    }

    return (
        <div className='w-full min-h-screen'>
            <section className='w-[100%] max-w-[420px] min-h-[400px] flex flex-col justify-center px-[32px] py-[24px] bg-[#a88bbb] rounded-[24px] absolute left-[50%] translate-y-[40%] translate-x-[-50%]'>
                <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
                <h1 className='mt-0 mx-auto mb-[20px] text-[24px] text-[#fff] font-bold'>Přihlášení</h1>
                <form onSubmit={handleSubmit} className='flex flex-col justify-evenly flex-grow pb-[1rem]'>
                    <label htmlFor="username">Jméno:</label>
                    <input
                        type="text"
                        id="username"
                        ref={userRef}
                        autoComplete="off"
                        onChange={(e) => setUser(e.target.value)}
                        value={user}
                        required
                    />

                    <label htmlFor="password">Heslo:</label>
                    <input
                        type="password"
                        id="password"
                        onChange={(e) => setPwd(e.target.value)}
                        value={pwd}
                        required
                    />
                    <button>Přihlásit</button>
                </form>
                <p className="mateUcet">
                    Nemáte účet?<br />
                    <span className="line">
                        <a href="/register">Registrovat</a>
                    </span>
                </p>
            </section>
        </div>
    )
}

export default Login

import React from 'react'
import Zumba from '../assets/img/aktivity/zumba.jpg'
import Yoga from '../assets/img/aktivity/yoga.jpg'
import Pilates from '../assets/img/aktivity/pilates.jpg'
import IndoorCycling from '../assets/img/aktivity/indoor-cycling.jpg'
import trener1 from '../assets/img/treneri/trener1.jpg'
import trener2 from '../assets/img/treneri/trener2.jpg'
import trener3 from '../assets/img/treneri/trener3.jpg'
import trener4 from '../assets/img/treneri/trener4.jpg'
import { useRef, useEffect, useState } from 'react'

function Rezervace() {
    const myRef = useRef();
    const [myElementIsVisible, setMyElementIsVisible] = useState();
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            const entry = entries[0];
            setMyElementIsVisible(entry.isIntersecting)
        })
        observer.observe(myRef.current);
    }, [])
    return (
        <div className='w-full min-h-screen'>
            {/* Container */}
            <div className='max-w-[1000px] min-h-fit mx-auto mb-6 pt-[14vh] px-[2vw] flex flex-col justify-center' id='Rezervace'>
                <div className='flex flex-col h-screen justify-center translate-y-[-20%]'>
                    <p className='text-2xl text-[#f7fafc] font-bold mx-auto mb-2'>Rezervace</p>
                    <form action="" className='flex flex-col mx-auto mt-[20px] w-[500px]'>
                        <div className='flex flex-row gap-10 justify-between'>
                            <div className='flex flex-col gap-[20px]'>
                                <div className='flex flex-row'>
                                    <label htmlFor="date" className='mr-[10px] font-bold text-[#f7fafc] my-auto'>Datum</label>
                                    <input type="date" name="date" id="date"
                                        className='bg-[#a88bbb] w-[160px] h-[40px] rounded-[8px] p-[4px] text-[#fff] mx-auto outline-none' />
                                </div>
                                <div className='flex flex-row ml-auto'>
                                    <label htmlFor="price" className='mr-[10px] font-bold text-[#f7fafc] my-auto'>Cena</label>
                                    <input type="text" name="price" id="price" disabled
                                        className='bg-[#a88bbb] w-[160px] h-[40px] rounded-[8px] p-[4px] text-[#fff] mx-auto outline-none' />
                                </div>
                            </div>
                            <div className='flex flex-col gap-[20px]'>
                                <div className='flex flex-row'>
                                    <label htmlFor="activity" className='mr-[10px] font-bold text-[#f7fafc] my-auto'>Aktivita</label>
                                    <select name="activity" id="activity"
                                        className='bg-[#a88bbb] w-[160px] h-[40px] rounded-[8px] p-[4px] text-[#fff] mx-auto outline-none'>
                                        <option value="indoorcycling">Indoor cycling</option>
                                        <option value="pilates">Pilates</option>
                                        <option value="yoga">Yoga</option>
                                        <option value="zumba">Zumba</option>
                                    </select>
                                </div>
                                <div className='flex flex-row ml-auto'>
                                    <label htmlFor="trainer" className='mr-[10px] font-bold text-[#f7fafc] my-auto'>Trenér</label>
                                    <select name="trainer" id="trainer"
                                        className='bg-[#a88bbb] w-[160px] h-[40px] rounded-[8px] p-[4px] text-[#fff] mx-auto outline-none'>
                                        <option value="franta-placeny">Franta Placený</option>
                                        <option value="mirek-hmotny">Mirek Hmotný</option>
                                        <option value="pepa-zdepa">Pepa Zdepa</option>
                                        <option value="lucie-zmaknuta">Lucie Zmáknutá</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <button
                            className='bg-[#2e65ad] h-[50px] rounded-[8px] py-[3px] px-[30px] text-[#fff] text-lg mx-auto mt-[32px] hover:bg-[#193860]'>
                            Rezervovat</button>
                    </form>
                </div>
                <div className='flex flex-col mt-[80px] scroll-mt-[124px]' id='Aktivity' ref={myRef}>
                    <p className='text-2xl text-[#f7fafc] font-bold mx-auto mb-6'>Aktivity</p>
                    <div className='flex flex-row mx-auto justify-between w-[640px]'>
                        <div className='flex flex-col gap-[24px]'>
                            <div className='flex flex-col w-[280px] bg-[#6CB4AC] p-[8px] pb-1 rounded-[12px]'>
                                <img src={Zumba} alt="" className='rounded-[8px]' />
                                <p className='mx-auto text-[#fff] text-[24px] font-bold'>Zumba</p>
                            </div>
                            <div className='flex flex-col w-[280px] bg-[#6CB4AC] p-[8px] pb-1 rounded-[12px]'>
                                <img src={Yoga} alt="" className='rounded-[8px]' />
                                <p className='mx-auto text-[#fff] text-[24px] font-bold'>Yoga</p>
                            </div>
                        </div>
                        <div className='flex flex-col gap-[24px]'>
                            <div className='flex flex-col w-[280px] bg-[#6CB4AC] p-[8px] pb-1 rounded-[12px]'>
                                <img src={Pilates} alt="" className='rounded-[8px]' />
                                <p className='mx-auto text-[#fff] text-[24px] font-bold'>Pilates</p>
                            </div>
                            <div className='flex flex-col w-[280px] bg-[#6CB4AC] p-[8px] pb-1 rounded-[12px]'>
                                <img src={IndoorCycling} alt="" className='rounded-[8px]' />
                                <p className='mx-auto text-[#fff] text-[24px] font-bold'>Indoor Cycling</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col mt-[80px]'>
                    <p className='text-2xl text-[#f7fafc] font-bold mx-auto mb-6'>Trenéři</p>
                    <div className='flex flex-row mx-auto justify-between w-[640px]'>
                        <div className='flex flex-col gap-[24px]'>
                            <div className='flex flex-col w-[280px] bg-[#D7C2C4] p-[8px] pb-1 rounded-[12px]'>
                                <img src={trener1} alt="" className='rounded-[8px]' />
                                <p className='mx-auto text-[#fff] text-[24px] font-bold'>Pepa Zdepa</p>
                            </div>
                            <div className='flex flex-col w-[280px] bg-[#D7C2C4] p-[8px] pb-1 rounded-[12px]'>
                                <img src={trener4} alt="" className='rounded-[8px]' />
                                <p className='mx-auto text-[#fff] text-[24px] font-bold'>Lucie Zmáknutá</p>
                            </div>
                        </div>
                        <div className='flex flex-col gap-[24px]'>
                            <div className='flex flex-col w-[280px] bg-[#D7C2C4] p-[8px] pb-1 rounded-[12px]'>
                                <img src={trener2} alt="" className='rounded-[8px]' />
                                <p className='mx-auto text-[#fff] text-[24px] font-bold'>Franta Placený</p>
                            </div>
                            <div className='flex flex-col w-[280px] bg-[#D7C2C4] p-[8px] pb-1 rounded-[12px]'>
                                <img src={trener3} alt="" className='rounded-[8px]' />
                                <p className='mx-auto text-[#fff] text-[24px] font-bold'>Mirek Hmotný</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <a href={myElementIsVisible ? '#Rezervace' : '#Aktivity'}
                    className='fixed right-[20%] bottom-[103px] text-[#f7fafc] text-[24px] bg-[#4171a8] px-[32px] py-[8px] rounded-[16px]
                    hover:text-[38px] transition:hover:text-[40px] duration-[80ms] hover:px-[40px] hover:py-[0]'>
                    {myElementIsVisible ? 'Rezervace' : 'Aktivity'}
                </a>
            </div>
        </div>
    )
}

export default Rezervace
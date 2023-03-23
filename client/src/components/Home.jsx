import React from 'react'
import Logo from '../assets/logo/logo1.png'

const Home = () => {
    return (
        <div className='w-full min-h-screen'>
            {/* Container */}
            <div className='max-w-[1000px] min-h-fit mx-auto mb-6 pt-[14vh] px-[2vw] flex flex-col justify-center'>
                <div className='h-[150px] mt-[25px]'>
                    <img src={Logo} alt="" style={{ height: '100px', filter: 'invert(100%)' }} className='mx-auto' />
                </div>
                <div className='text-[#f7fafc]'>
                    <p className='text-[64px] mx-auto text-center mb-[64px]'>
                        Vítejte na Hladké Bříško!
                    </p>
                    <p className='text-[32px] text-center mx-auto w-[40vw] mb-[32px]'>
                        fitness stránce, <br />
                        která vám pomůže dosáhnout vašeho cíle a získat <br />
                        perfektní postavu!
                    </p>
                    <p className='text-[24px] text-center mb-[24px]'>
                        Naše webová stránka vám nabízí širokou škálu cvičení a tréninkových plánů, které jsou navrženy tak, aby vám pomohly posílit vaše tělo a dosáhnout kvalitní svalové hmoty.
                    </p>
                    <p className='text-[24px] text-center'>
                        Navíc jsou tyto cvičení zaměřeny především na břišní partie, což vám umožní získat hladké a dokonale vytvarované bříško.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Home
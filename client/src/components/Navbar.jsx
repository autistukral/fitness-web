import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import Logo from '../assets/logo/logo1.png'

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)
    return (
        <div className='fixed w-full h-[60px] flex justify-between items-center px-4 bg-[#2e65ad] text-[#fff] z-[999]'>
            <div>
                <img src={Logo} alt="" style={{ height: '40px', filter: 'invert(100%)' }} />
            </div>

            {/* Menu */}
            <ul className='hidden md:flex absolute left-[50%] translate-x-[-50%] text-2xl font-bold'>
                <li className='hover:text-[#141414]'>
                    <a href='/'>Domů</a>
                </li>
                <li className='hover:text-[#141414]'>
                    <a href='/rezervace'>Rezervace</a>
                </li>
                <li className='hover:text-[#141414]'>
                    <a href='/galerie'>Galerie</a>
                </li>
                <li className='hover:text-[#141414]'>
                    <a href='/account'>Účet</a>
                </li>
                <li className='hover:text-[#141414]'>
                    <a href='/register'>Registrace</a>
                </li>
            </ul>

            {/* Burgir */}
            <div onClick={handleClick} className='md:hidden z-10'>
                {!nav ? <FaBars size={40} /> : <FaTimes size={40} />}
            </div>

            {/* Mobile menu */}
            <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#2e65ad] flex flex-col justify-center items-center'}>
                <li className='py-6 text-4xl hover:text-[#141414]'>
                    <a href='/'>Domů</a>
                </li>
                <li className='py-6 text-4xl hover:text-[#141414]'>
                    <a href='/rezervace'>Rezervace</a>
                </li>
                <li className='py-6 text-4xl hover:text-[#141414]'>
                    <a href='/galerie'>Galerie</a>
                </li>
                <li className='py-6 text-4xl hover:text-[#141414]'>
                    <a href='/account'>Účet</a>
                </li>
            </ul>
        </div>
    )
}

export default Navbar
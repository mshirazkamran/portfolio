
import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'

const Navbar = ({ isDarkMode, setIsDarkMode }) => {

    const [isScroll, setIsScroll] = useState(false)

    const sideMenuRef = useRef();

    const openMenu = () => {

        sideMenuRef.current.style.transform = 'translateX(-16rem)'
    }

    const closeMenu = () => {

        sideMenuRef.current.style.transform = 'translateX(16rem)'
    }

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (scrollY > 50) {
                setIsScroll(true)
            } else {
                setIsScroll(false)
            }

        })

    }, [])

    return (
        <>

            <div className='fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] dark:hidden'>
                <Image src={assets.header_bg_color} alt='' className='w-full' />
            </div>

            <nav className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 ${isScroll ? "bg-white bg-opacity-50 backdrop-blur-lg shadow-sm dark:bg-darkTheme dark:shadow-mywhite/2" : ""}`}>

                <a href="#top">
                    <Image src={assets.logo_dark} alt="Shiraz Logo" className='h-10 w-auto cursor-pointer mr-14' width={200} height={40} priority />
                </a>

                <ul className={`hidden md:flex items-center gap-8 lg:gap-12 rounded-full px-16 py-3 ${isScroll ? "" : " bg-white shadow-sm bg-opacity-50 dark border dark:border-white/50 dark:bg-transparent "}`}>
                    <li><a className='font-Outfit text-lg relative navbar-link' href="#top" >Home</a></li>
                    <li><a className='font-Outfit text-lg relative navbar-link' href="#about" >About me</a></li>
                    <li><a className='font-Outfit text-lg relative navbar-link' href="#work" >My&nbsp;Work</a></li>
                    <li><a className='font-Outfit text-lg relative navbar-link' href="#contact" >Contact me</a></li>
                </ul>

                <div className='flex items-center gap-4'>
                    <button onClick={() => setIsDarkMode(prev => !prev)} >
                        <Image src={isDarkMode ? assets.sun_icon : assets.moon_icon} alt="" className='mr-4 w-6' />
                    </button>

                    <a href="https://www.linkedin.com/in/mshirazkamran/" target="_blank" className='flex items-center gap-2 px-8 py-2.5 border-2 border-gray-500 rounded-full font-Outfit text-lg dark:border-white/50'>Connect<Image src={isDarkMode ? assets.arrow_icon_dark : assets.arrow_icon} alt="" className='w-3' /></a>

                    <button className='block md:hidden ml-3' onClick={openMenu}>
                        <Image src={isDarkMode ? assets.menu_white : assets.menu_black} alt="" className='w-6' />
                    </button>
                </div>

                {/*-------------- mobile menu ----------------------*/}
                <ul ref={sideMenuRef} className='flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500 dark:bg-darkHover dark:text-white'>

                    <div className='absolute right-6 top-6' onClick={closeMenu}>
                        <Image src={isDarkMode ? assets.close_white : assets.close_black} alt='' className='w-5 cursor-pointer' />
                    </div>


                    <li><a className='font-Ovo' onClick={closeMenu} href="#top" >Home</a></li>
                    <li><a className='font-Ovo' onClick={closeMenu} href="#about" >About me</a></li>
                    <li><a className='font-Ovo' onClick={closeMenu} href="#work" >My Work</a></li>
                    <li><a className='font-Ovo' onClick={closeMenu} href="#contact" >Contact me</a></li>
                </ul>

            </nav>
        </>
    )
}

export default Navbar

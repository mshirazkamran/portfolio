'use client'

import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

const Navbar = ({ isDarkMode, setIsDarkMode }) => {
    const [isScroll, setIsScroll] = useState(false)
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setIsScroll(true)
            } else {
                setIsScroll(false)
            }
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <>
            <nav className={`w-full fixed top-0 left-0 right-0 z-50 h-16 border-b transition-all duration-300 ${
                isScroll 
                ? "bg-canvas/80 backdrop-blur-md border-hairline shadow-lg shadow-black/10" 
                : "bg-transparent border-transparent"
            }`}>
                <div className='max-w-7xl mx-auto h-full flex items-center justify-between px-6 md:px-12'>
                    
                    {/* Logo */}
                    <a href="#top" className="flex items-center gap-2 group">
                        <Image 
                            src={assets.logo_dark} 
                            alt="Shiraz Logo" 
                            className='h-7 w-auto object-contain opacity-95 group-hover:opacity-100 transition' 
                            width={140} 
                            height={28} 
                            priority 
                        />
                    </a>

                    {/* Nav Links (Desktop) */}
                    <ul className='hidden md:flex items-center gap-1.5 bg-canvas-soft/70 border border-hairline rounded-full px-4 py-1.5 backdrop-blur-sm shadow-inner shadow-black/20'>
                        <li>
                            <a className='font-mono text-xs tracking-wider text-body px-3 py-1.5 rounded-full hover:text-accent hover:bg-canvas-soft-2/50 transition-all duration-200' href="#top">
                                HOME
                            </a>
                        </li>
                        <li>
                            <a className='font-mono text-xs tracking-wider text-body px-3 py-1.5 rounded-full hover:text-accent hover:bg-canvas-soft-2/50 transition-all duration-200' href="#about">
                                ABOUT
                            </a>
                        </li>
                        <li>
                            <a className='font-mono text-xs tracking-wider text-body px-3 py-1.5 rounded-full hover:text-accent hover:bg-canvas-soft-2/50 transition-all duration-200' href="#work">
                                WORK
                            </a>
                        </li>
                        <li>
                            <a className='font-mono text-xs tracking-wider text-body px-3 py-1.5 rounded-full hover:text-accent hover:bg-canvas-soft-2/50 transition-all duration-200' href="#contact">
                                CONTACT
                            </a>
                        </li>
                    </ul>

                    {/* Right CTA */}
                    <div className='flex items-center gap-3'>


                        {/* LinkedIn Connect Button */}
                        <a 
                            href="https://www.linkedin.com/in/mshirazkamran/" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className='hidden sm:flex items-center gap-1.5 px-4.5 py-1.8 bg-accent text-on-primary border border-accent hover:bg-yellow-500 hover:border-yellow-500 rounded-full font-mono text-[11px] tracking-wider font-bold transition-all duration-200 shadow-[0_0_15px_rgba(250,204,21,0.15)] hover:shadow-[0_0_20px_rgba(250,204,21,0.35)]'
                        >
                            CONNECT
                            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </a>

                        {/* Mobile Menu Toggle */}
                        <button 
                            className='block md:hidden p-2 rounded-full border border-hairline hover:bg-canvas-soft text-body hover:text-ink' 
                            onClick={() => setIsMenuOpen(true)}
                            aria-label="Open Menu"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                            </svg>
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu Panel */}
            <div className={`fixed inset-0 z-50 bg-canvas/98 backdrop-blur-xl transition-all duration-300 flex flex-col justify-between p-8 ${
                    isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
                }`}>
                    <div>
                        <div className='flex items-center justify-between mb-16'>
                            <Image 
                                src={assets.logo_dark} 
                                alt="Shiraz Logo" 
                                className='h-6 w-auto opacity-95' 
                                width={120} 
                                height={24} 
                            />
                            <button 
                                className='p-2 rounded-full border border-hairline hover:bg-canvas-soft text-body hover:text-ink' 
                                onClick={() => setIsMenuOpen(false)}
                                aria-label="Close Menu"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>

                        <ul className='flex flex-col gap-6 text-left pl-4'>
                            <li>
                                <a 
                                    className='font-mono text-xl tracking-wider text-body hover:text-accent transition' 
                                    onClick={() => setIsMenuOpen(false)} 
                                    href="#top"
                                >
                                    01 / HOME
                                </a>
                            </li>
                            <li>
                                <a 
                                    className='font-mono text-xl tracking-wider text-body hover:text-accent transition' 
                                    onClick={() => setIsMenuOpen(false)} 
                                    href="#about"
                                >
                                    02 / ABOUT
                                </a>
                            </li>
                            <li>
                                <a 
                                    className='font-mono text-xl tracking-wider text-body hover:text-accent transition' 
                                    onClick={() => setIsMenuOpen(false)} 
                                    href="#work"
                                >
                                    03 / WORK
                                </a>
                            </li>
                            <li>
                                <a 
                                    className='font-mono text-xl tracking-wider text-body hover:text-accent transition' 
                                    onClick={() => setIsMenuOpen(false)} 
                                    href="#contact"
                                >
                                    04 / CONTACT
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="flex flex-col gap-4">
                        <a 
                            href="https://www.linkedin.com/in/mshirazkamran/" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className='w-full text-center py-3 bg-accent text-on-primary hover:bg-yellow-500 font-mono text-xs tracking-widest font-bold rounded-lg transition-all duration-200 shadow-[0_0_15px_rgba(250,204,21,0.2)]'
                        >
                            CONNECT ON LINKEDIN
                        </a>
                        <p className="text-center text-[10px] font-mono text-mute">
                            © 2026 MUHAMMAD SHIRAZ KAMRAN.
                        </p>
                    </div>
                </div>
        </>
    )
}

export default Navbar

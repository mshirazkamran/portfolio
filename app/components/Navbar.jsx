'use client'

import React, { useEffect, useState } from 'react'
import Magnet from './react-bits/Magnet'
import AnimatedThemeToggle from './react-bits/AnimatedThemeToggle'

import Image from 'next/image'
import logoWritten from '@/assets/shiraz-logo-written.png'
import logoWrittenDark from '@/assets/shiraz-logo-written-dark.png'

const Navbar = ({ isDarkMode, onToggleTheme }) => {
  const [isScroll, setIsScroll] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScroll(true)
      } else {
        setIsScroll(false)
      }

      // Check if user is near the bottom of the page -> active section is 'contact'
      const isAtBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 80
      if (isAtBottom) {
        setActiveSection('contact')
        return
      }

      const sections = ['home', 'about', 'work', 'contact']
      const scrollPosition = window.scrollY + 200

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId)
        if (el) {
          const top = el.offsetTop
          const height = el.offsetHeight
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <nav
        className={`w-full fixed top-0 left-0 right-0 z-40 h-16 transition-all duration-300 ${
          isScroll
            ? "bg-[#f4f5f8]/85 dark:bg-[#08090d]/80 backdrop-blur-xl border-b border-slate-200/80 dark:border-zinc-800/80 shadow-sm dark:shadow-black/50"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto h-full flex items-center justify-between px-6 md:px-12">
          
          {/* Brand Logo & Name */}
          <a href="#home" className="flex items-center group select-none py-1">
            <Image
              src={logoWrittenDark}
              alt="Shiraz Logo"
              height={44}
              className="h-10 sm:h-11 w-auto object-contain dark:hidden transition-transform group-hover:scale-105 duration-200"
              priority
            />
            <Image
              src={logoWritten}
              alt="Shiraz Logo"
              height={44}
              className="h-10 sm:h-11 w-auto object-contain hidden dark:block transition-transform group-hover:scale-105 duration-200"
              priority
            />
          </a>

          {/* Desktop Nav Pill */}
          <ul className="hidden md:flex items-center gap-1.5 bg-slate-200/50 dark:bg-zinc-900/60 border border-slate-300/50 dark:border-zinc-800/80 rounded-full px-3.5 py-1.5 backdrop-blur-md shadow-inner">
            {[
              { id: 'home', label: 'HOME' },
              { id: 'about', label: 'ABOUT' },
              { id: 'work', label: 'WORK' },
              { id: 'contact', label: 'CONTACT' },
            ].map(item => (
              <li key={item.id}>
                <a
                  className={`font-mono text-xs lg:text-sm tracking-wider font-semibold px-4 py-1.5 rounded-full transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 ${
                    activeSection === item.id
                      ? 'text-slate-900 dark:text-zinc-100 bg-[#fafafc] dark:bg-zinc-800 shadow-xs'
                      : 'text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-zinc-100 hover:bg-white/60 dark:hover:bg-zinc-800/50'
                  }`}
                  href={`#${item.id}`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Right Action CTA Group */}
          <div className="flex items-center gap-3">
            
            {/* Seamless Theme Toggle Button inside Top Bar */}
            <AnimatedThemeToggle theme={isDarkMode ? 'dark' : 'light'} onToggle={onToggleTheme} />

            <a
              href="https://www.linkedin.com/in/mshirazkamran/"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2 bg-amber-500 hover:bg-amber-600 text-zinc-950 font-mono text-xs lg:text-sm tracking-wider font-bold rounded-full transition-all duration-200 shadow-md shadow-amber-500/20 hover:shadow-amber-500/35 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
            >
              CONNECT
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>

            {/* Mobile Menu Button */}
            <button
              className="block md:hidden p-2 rounded-xl border border-slate-300 dark:border-zinc-800 bg-white/60 dark:bg-zinc-900/60 text-slate-700 dark:text-zinc-300 hover:text-amber-500 transition-colors"
              onClick={() => setIsMenuOpen(true)}
              aria-label="Open Navigation Menu"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Drawer */}
      <div
        className={`fixed inset-0 z-50 bg-[#f4f5f8]/95 dark:bg-zinc-950/95 backdrop-blur-2xl transition-all duration-300 flex flex-col justify-between p-8 ${
          isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div>
          <div className="flex items-center justify-between mb-12">
            <a href="#home" onClick={() => setIsMenuOpen(false)} className="flex items-center group select-none">
              <Image
                src={logoWrittenDark}
                alt="Shiraz Logo"
                height={32}
                className="h-8 w-auto object-contain dark:hidden transition-transform group-hover:scale-105 duration-200"
              />
              <Image
                src={logoWritten}
                alt="Shiraz Logo"
                height={32}
                className="h-8 w-auto object-contain hidden dark:block transition-transform group-hover:scale-105 duration-200"
              />
            </a>
            <button
              className="p-2 rounded-xl border border-slate-300 dark:border-zinc-800 text-slate-700 dark:text-zinc-300 hover:text-amber-500"
              onClick={() => setIsMenuOpen(false)}
              aria-label="Close Navigation Menu"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <ul className="flex flex-col gap-6 text-left pl-2">
            <li>
              <a
                className="font-mono text-2xl tracking-wider font-semibold text-slate-700 dark:text-zinc-300 hover:text-amber-500 transition"
                onClick={() => setIsMenuOpen(false)}
                href="#home"
              >
                01 / HOME
              </a>
            </li>
            <li>
              <a
                className="font-mono text-2xl tracking-wider font-semibold text-slate-700 dark:text-zinc-300 hover:text-amber-500 transition"
                onClick={() => setIsMenuOpen(false)}
                href="#about"
              >
                02 / ABOUT
              </a>
            </li>
            <li>
              <a
                className="font-mono text-2xl tracking-wider font-semibold text-slate-700 dark:text-zinc-300 hover:text-amber-500 transition"
                onClick={() => setIsMenuOpen(false)}
                href="#work"
              >
                03 / WORK
              </a>
            </li>
            <li>
              <a
                className="font-mono text-2xl tracking-wider font-semibold text-slate-700 dark:text-zinc-300 hover:text-amber-500 transition"
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
            className="w-full text-center py-3 bg-amber-500 text-zinc-950 font-mono text-xs tracking-widest font-bold rounded-xl transition-all shadow-md shadow-amber-500/20"
          >
            CONNECT ON LINKEDIN
          </a>
          <p className="text-center text-[11px] font-mono text-slate-500 dark:text-zinc-500">
            © 2026 MUHAMMAD SHIRAZ KAMRAN
          </p>
        </div>
      </div>
    </>
  )
}

export default Navbar

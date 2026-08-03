'use client'

import React from 'react'
import Magnet from './react-bits/Magnet'

import Image from 'next/image'
import logoWritten from '@/assets/shiraz-logo-written.png'
import logoWrittenDark from '@/assets/shiraz-logo-written-dark.png'

const Footer = ({ isDarkMode }) => {
  return (
    <footer className="w-full border-t border-slate-200 dark:border-zinc-800/80 bg-white/60 dark:bg-zinc-950/60 transition-colors duration-400 py-10 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        
        {/* Brand & Copyright */}
        <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
          <a href="#home" className="flex items-center group select-none">
            <Image
              src={logoWrittenDark}
              alt="Shiraz Logo"
              height={28}
              className="h-7 w-auto object-contain dark:hidden transition-transform group-hover:scale-105 duration-200"
            />
            <Image
              src={logoWritten}
              alt="Shiraz Logo"
              height={28}
              className="h-7 w-auto object-contain hidden dark:block transition-transform group-hover:scale-105 duration-200"
            />
          </a>
          <span className="hidden sm:inline text-slate-300 dark:text-zinc-700">•</span>
          <p className="text-xs font-mono text-slate-500 dark:text-zinc-500">
            © 2026 MUHAMMAD SHIRAZ KAMRAN. ALL RIGHTS RESERVED.
          </p>
        </div>

        {/* Back to top CTA */}
        <Magnet padding={40} magnetStrength={2.5}>
          <a
            href="#home"
            className="inline-flex items-center gap-2 px-4 py-2 bg-slate-100 dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 rounded-full font-mono text-[11px] font-semibold text-slate-700 dark:text-zinc-300 hover:text-amber-600 dark:hover:text-amber-400 hover:border-amber-500/40 transition-colors shadow-sm cursor-pointer"
          >
            BACK TO TOP
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </a>
        </Magnet>

      </div>
    </footer>
  )
}

export default Footer

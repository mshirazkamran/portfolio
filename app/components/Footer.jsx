'use client'

import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <footer className='w-full border-t border-hairline bg-canvas text-ink py-12 px-6 md:px-12 mt-20 relative z-10'>
      <div className='max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 pb-8'>
        
        {/* Logo and Brand */}
        <div className='flex flex-col items-center md:items-start gap-2'>
          <Image 
            src={assets.logo_dark} 
            alt='logo' 
            className='h-7 w-auto brightness-0 invert opacity-80' 
            width={140} 
            height={28}
          />
          <p className="text-[11px] font-mono text-mute">
            Programming part time and fighting with Bugs full time (:
          </p>
        </div>

        {/* Contact Email Link */}
        <a
          href="mailto:mshirazkamran@gmail.com"
          className="group inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full border border-hairline bg-canvas-soft/60 text-body hover:text-accent hover:border-accent/40 transition duration-200 font-mono text-xs"
        >
          <svg className="w-3.5 h-3.5 text-mute group-hover:text-accent transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 00-2 2z" />
          </svg>
          mshirazkamran@gmail.com
        </a>

      </div>

      {/* Bottom Sub-footer */}
      <div className='max-w-7xl mx-auto pt-8 border-t border-hairline/60 flex flex-col-reverse sm:flex-row items-center justify-between gap-4'>
        <p className='text-[11px] text-mute font-mono tracking-tight'>
          © 2026 MUHAMMAD SHIRAZ KAMRAN. ALL RIGHTS RESERVED.
        </p>
        
        <ul className='flex items-center gap-6 font-mono text-[11px] text-body'>
          <li>
            <a 
              target='_blank' 
              rel="noopener noreferrer"
              href='https://www.linkedin.com/in/mshirazkamran/' 
              className="hover:text-accent transition"
            >
              LINKEDIN
            </a>
          </li>
          <li>
            <a 
              target='_blank' 
              rel="noopener noreferrer"
              href='https://github.com/mshirazkamran/' 
              className="hover:text-accent transition"
            >
              GITHUB
            </a>
          </li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer

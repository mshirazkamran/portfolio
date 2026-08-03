'use client'

import React from 'react'
import Magnet from './react-bits/Magnet'
import Image from 'next/image'
import logoWritten from '@/assets/shiraz-logo-written.png'
import logoWrittenDark from '@/assets/shiraz-logo-written-dark.png'
import { ArrowUp, LinkedinLogo, EnvelopeSimple, GithubLogo } from '@phosphor-icons/react'

const Footer = ({ isDarkMode }) => {
  return (
    <footer className="w-full border-t border-slate-200 dark:border-zinc-800/80 bg-slate-50/50 dark:bg-zinc-950/60 transition-colors duration-400 pt-14 pb-10 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">

        {/* Top Multi-column Section */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-200/80 dark:border-zinc-800/80">

          {/* Col 1: Brand & Tagline */}
          <div className="md:col-span-5 flex flex-col items-start gap-4">
            <a href="#home" className="flex items-center group select-none">
              <Image
                src={logoWrittenDark}
                alt="Shiraz Logo"
                height={30}
                className="h-7.5 w-auto object-contain dark:hidden transition-transform group-hover:scale-105 duration-200"
              />
              <Image
                src={logoWritten}
                alt="Shiraz Logo"
                height={30}
                className="h-7.5 w-auto object-contain hidden dark:block transition-transform group-hover:scale-105 duration-200"
              />
            </a>
            <p className="text-xs text-slate-600 dark:text-zinc-400 font-mono max-w-sm leading-relaxed">
              Full-Stack & AI Systems Engineer building scalable web services, retrieval systems, and high-performance APIs.
            </p>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="md:col-span-3 flex flex-col gap-3">
            <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400">
              NAVIGATION
            </h4>
            <ul className="space-y-2 font-mono text-xs text-slate-600 dark:text-zinc-400">
              <li>
                <a href="#home" className="hover:text-amber-600 dark:hover:text-amber-400 transition-colors">00 / HOME</a>
              </li>
              <li>
                <a href="#about" className="hover:text-amber-600 dark:hover:text-amber-400 transition-colors">01 / ABOUT & TECH STACK</a>
              </li>
              <li>
                <a href="#work" className="hover:text-amber-600 dark:hover:text-amber-400 transition-colors">02 / FEATURED WORK</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-amber-600 dark:hover:text-amber-400 transition-colors">03 / GET IN TOUCH</a>
              </li>
            </ul>
          </div>

          {/* Col 3: Social & Contact Links */}
          <div className="md:col-span-4 flex flex-col gap-3">
            <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400">
              CONNECT & INQUIRIES
            </h4>
            <div className="flex flex-col gap-2 font-mono text-xs text-slate-600 dark:text-zinc-400">
              <a
                href="https://github.com/mshirazkamran"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-amber-600 dark:hover:text-amber-400 transition-colors"
              >
                <GithubLogo size={15} weight="bold" />
                <span>github.com/mshirazkamran</span>
              </a>
              <a
                href="https://www.linkedin.com/in/mshirazkamran/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-amber-600 dark:hover:text-amber-400 transition-colors"
              >
                <LinkedinLogo size={15} weight="bold" />
                <span>linkedin.com/in/mshirazkamran</span>
              </a>
              <a
                href="mailto:mshirazkamran@gmail.com"
                className="inline-flex items-center gap-2 hover:text-amber-600 dark:hover:text-amber-400 transition-colors"
              >
                <EnvelopeSimple size={15} weight="bold" />
                <span>mshirazkamran@gmail.com</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom copyright & Back to top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs font-mono text-slate-500 dark:text-zinc-500 text-center sm:text-left">
            © 2026 MUHAMMAD SHIRAZ KAMRAN. ALL RIGHTS RESERVED.
          </p>

          <Magnet padding={40} magnetStrength={2.5}>
            <a
              href="#home"
              className="inline-flex items-center gap-2 px-4 py-2 bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 rounded-full font-mono text-[11px] font-semibold text-slate-700 dark:text-zinc-300 hover:text-amber-600 dark:hover:text-amber-400 hover:border-amber-500/40 transition-colors shadow-sm cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
            >
              <span>BACK TO TOP</span>
              <ArrowUp size={14} weight="bold" className="text-amber-500" />
            </a>
          </Magnet>
        </div>

      </div>
    </footer>
  )
}

export default Footer

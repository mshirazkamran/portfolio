'use client'

import React from 'react'
import { motion, useReducedMotion } from 'motion/react'
import DecryptedText from './react-bits/DecryptedText'
import BlurText from './react-bits/BlurText'
import ClickSpark from './react-bits/ClickSpark'
import { ArrowDown, DownloadSimple } from '@phosphor-icons/react'

const Header = () => {
  const shouldReduceMotion = useReducedMotion()

  return (
    <ClickSpark sparkColor="#f59e0b" sparkSize={10} sparkRadius={20} sparkCount={10}>
      <div id="home" className="relative w-full min-h-[100dvh] flex flex-col items-center justify-center bg-[#f4f5f8] dark:bg-[#08090d] text-slate-900 dark:text-zinc-100 overflow-hidden pt-20 sm:pt-24 pb-12 px-6 transition-colors duration-400">

        {/* Ambient Mesh Gradients & Fine Grid */}
        <div className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-hidden">
          <div className="absolute inset-0 w-full h-full bg-[linear-gradient(to_right,rgba(100,116,139,0.25)_1px,transparent_1px),linear-gradient(to_bottom,rgba(100,116,139,0.25)_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,rgba(148,163,184,0.25)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.25)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_40%,#000_80%,transparent_100%)] opacity-55 dark:opacity-40"></div>

          <div className="absolute top-[15%] left-[20%] w-[380px] h-[380px] rounded-full bg-amber-400/10 dark:bg-amber-500/10 blur-[140px]"></div>
        </div>

        {/* Hero Content Stack */}
        <div className="relative z-10 w-full max-w-4xl flex flex-col items-center text-center">

          {/* 1. Sleek Typographic Greeting */}
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2.5 mb-6 select-none font-mono text-sm sm:text-base md:text-lg tracking-widest font-extrabold text-amber-600 dark:text-amber-400 uppercase"
          >
            <span className="w-6 sm:w-8 h-[2px] bg-amber-500/80 rounded-full"></span>
            <span>HI, I'M SHIRAZ</span>
            <span className="w-6 sm:w-8 h-[2px] bg-amber-500/80 rounded-full"></span>
          </motion.div>

          {/* 2. Scaled Down Main Headline (Font mono for full consistency) */}
          <motion.h1
            initial={shouldReduceMotion ? false : { opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-zinc-100 leading-snug sm:leading-tight max-w-3xl font-mono"
          >
            Engineered for the{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-amber-500 dark:from-amber-400 dark:to-yellow-300 inline-block">
              backend
            </span>
            .<br />
            Equipped for the{' '}
            <DecryptedText
              text="frontend."
              animateOn="view"
              speed={40}
              maxIterations={10}
              className="text-slate-900 dark:text-zinc-100"
            />
          </motion.h1>

          {/* 3. Subtext with BlurText */}
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="text-base sm:text-lg md:text-xl text-slate-600 dark:text-zinc-400 max-w-2xl mt-5 leading-relaxed font-sans"
          >
            <BlurText
              text="Building RAG applications, FastAPI backend services, lightweight CLI tools, and responsive web interfaces."
              delay={60}
              animateBy="words"
              direction="top"
            />
          </motion.div>

          {/* 4. Action CTAs */}
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.45 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8 w-full sm:w-auto"
          >
            <a
              href="#work"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 bg-amber-500 hover:bg-amber-600 active:scale-95 text-zinc-950 font-mono text-xs font-bold tracking-wider rounded-full transition-all duration-200 shadow-lg shadow-amber-500/25 hover:shadow-amber-500/40 cursor-pointer select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
            >
              SEE MY WORK
              <ArrowDown size={16} weight="bold" />
            </a>

            <a
              href="/my-resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 border border-slate-300 dark:border-zinc-800 bg-white/70 dark:bg-zinc-900/70 text-slate-800 dark:text-zinc-200 hover:border-amber-500/60 active:scale-95 font-mono text-xs font-semibold tracking-wider rounded-full transition-all duration-200 backdrop-blur-md shadow-sm hover:shadow-md cursor-pointer select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
            >
              MY RESUME
              <DownloadSimple size={16} weight="bold" />
            </a>
          </motion.div>

        </div>
      </div>
    </ClickSpark>
  )
}

export default Header

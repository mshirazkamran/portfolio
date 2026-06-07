'use client'

import React from 'react'
import { motion } from 'framer-motion'

const Header = () => {
  // Animation transitions preset
  const springTransition = {
    type: 'spring',
    stiffness: 100,
    damping: 20
  }

  return (
    <div id="home" className='relative w-full min-h-screen flex flex-col items-center justify-center bg-canvas text-ink overflow-hidden pt-16 px-6'>

      {/* Premium Ambient Glowing Mesh Gradients */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-hidden">
        {/* Subtle grid pattern of lines fading out at the edges */}
        <div className="absolute inset-0 w-full h-full bg-[linear-gradient(to_right,var(--color-hairline)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-hairline)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] opacity-35"></div>

        <div className="absolute top-[10%] left-[15%] w-[400px] h-[400px] rounded-full bg-gradient-to-tr from-accent to-dev-end opacity-[0.15] blur-[120px] animate-mesh-1"></div>
        <div className="absolute bottom-[20%] right-[10%] w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-canvas-soft-2 to-prev-end opacity-[0.12] blur-[140px] animate-mesh-2"></div>
        <div className="absolute top-[40%] right-[30%] w-[350px] h-[350px] rounded-full bg-gradient-to-tr from-accent to-ship-end opacity-[0.1] blur-[100px] animate-mesh-3"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-4xl flex flex-col items-center text-center">


        {/* Intro Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="font-mono text-xs tracking-widest text-accent font-semibold uppercase mb-4"
        >
          MUHAMMAD SHIRAZ KAMRAN
        </motion.p>

        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...springTransition, delay: 0.3 }}
          className="text-xl sm:text-6xl md:text-7xl font-extrabold tracking-[-0.04em] text-ink leading-[1.08] max-w-3xl font-sans"
        >
          Engineered for the backend. Equipped for the frontend.        </motion.h1>

        {/* Supporting Copy */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-base sm:text-lg md:text-xl text-body max-w-2xl mt-6 leading-relaxed font-sans"
        >
          Building full-stack applications with FastAPI, React, Flutter, and AI-powered systems.
          Turning complex problems into elegant solutions.        </motion.p>

        {/* Action CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10 w-full sm:w-auto"
        >
          <a
            href="#work"
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-3 bg-accent text-on-primary font-bold rounded-full hover:bg-yellow-500 transition-all duration-200 text-sm shadow-[0_0_20px_rgba(250,204,21,0.25)] hover:shadow-[0_0_25px_rgba(250,204,21,0.45)]"
          >
            See My Work
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </a>

          <a
            href="/my-resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-3 border border-hairline bg-canvas-soft/60 text-body font-semibold rounded-full hover:bg-canvas-soft-2 hover:text-ink hover:border-accent/40 transition-all duration-200 text-sm backdrop-blur-sm"
          >
            My Resume
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
          </a>
        </motion.div>

      </div>
    </div>
  )
}

export default Header

import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from "motion/react"

const Header = () => {
  return (
    <div className='w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-2'>

      {/* Animated SVG - Minimalistic Code & Network */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className='w-full max-w-md md:max-w-lg mb-8'
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 350" fill="none" preserveAspectRatio="xMidYMid meet" className='w-full h-auto'>
          <defs>
            <linearGradient id="codeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" className="dark:stop-color-[#818cf8] stop-color-[#6366f1]" />
              <stop offset="100%" className="dark:stop-color-[#a78bfa] stop-color-[#8b5cf6]" />
            </linearGradient>

            <linearGradient id="accentGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" className="dark:stop-color-[#22d3ee] stop-color-[#06b6d4]" />
              <stop offset="100%" className="dark:stop-color-[#818cf8] stop-color-[#6366f1]" />
            </linearGradient>

            <filter id="softGlow">
              <feGaussianBlur stdDeviation="2" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>

            <style>
              {`
                /* Theme-aware colors */
                .svg-stroke-primary {
                  stroke: #6366f1;
                }
                
                .dark .svg-stroke-primary {
                  stroke: #818cf8;
                }
                
                .svg-stroke-accent {
                  stroke: #06b6d4;
                }
                
                .dark .svg-stroke-accent {
                  stroke: #22d3ee;
                }
                
                .svg-fill-primary {
                  fill: #6366f1;
                }
                
                .dark .svg-fill-primary {
                  fill: #818cf8;
                }

                /* Minimalistic animations */
                .code-bracket {
                  stroke-width: 2.5;
                  stroke-linecap: round;
                  stroke-linejoin: round;
                  stroke-dasharray: 100;
                  stroke-dashoffset: 100;
                  animation: drawCode 2s ease-out forwards, floatGentle 4s ease-in-out infinite 2s;
                  filter: url(#softGlow);
                }

                .code-line {
                  stroke-width: 2;
                  stroke-linecap: round;
                  stroke-dasharray: 150;
                  stroke-dashoffset: 150;
                  animation: drawLine 1.5s ease-out forwards;
                  opacity: 0.7;
                }

                .node-circle {
                  animation: fadeInScale 1s ease-out forwards, pulseSubtle 3s ease-in-out infinite 1s;
                  transform-origin: center;
                  filter: url(#softGlow);
                }

                .connection-line {
                  stroke-width: 1.5;
                  stroke-linecap: round;
                  stroke-dasharray: 200;
                  stroke-dashoffset: 200;
                  animation: drawLine 2s ease-out forwards;
                  opacity: 0.4;
                }

                .data-particle {
                  opacity: 0;
                  animation: particleTravel 4s ease-in-out infinite;
                }

                /* Keyframes */
                @keyframes drawCode {
                  to { stroke-dashoffset: 0; }
                }

                @keyframes drawLine {
                  to { stroke-dashoffset: 0; }
                }

                @keyframes fadeInScale {
                  0% { opacity: 0; transform: scale(0); }
                  100% { opacity: 1; transform: scale(1); }
                }

                @keyframes pulseSubtle {
                  0%, 100% { opacity: 0.8; transform: scale(1); }
                  50% { opacity: 1; transform: scale(1.15); }
                }

                @keyframes floatGentle {
                  0%, 100% { transform: translateY(0); }
                  50% { transform: translateY(-8px); }
                }

                @keyframes particleTravel {
                  0% { opacity: 0; offset-distance: 0%; }
                  10% { opacity: 0.8; }
                  90% { opacity: 0.8; }
                  100% { opacity: 0; offset-distance: 100%; }
                }

                /* Delay classes */
                .delay-1 { animation-delay: 0.3s; }
                .delay-2 { animation-delay: 0.6s; }
                .delay-3 { animation-delay: 0.9s; }
                .delay-4 { animation-delay: 1.2s; }
                .delay-5 { animation-delay: 1.5s; }
              `}
            </style>
          </defs>

          {/* Main illustration group */}
          <g transform="translate(50, 60)">

            {/* Code brackets - Left */}
            <path
              d="M 80 100 L 50 140 L 80 180"
              className="code-bracket svg-stroke-primary delay-1"
              fill="none"
            />

            {/* Code brackets - Right */}
            <path
              d="M 420 100 L 450 140 L 420 180"
              className="code-bracket svg-stroke-primary delay-2"
              fill="none"
            />

            {/* Code lines in the middle */}
            <line x1="140" y1="115" x2="240" y2="115" className="code-line svg-stroke-accent delay-3" />
            <line x1="140" y1="140" x2="280" y2="140" className="code-line svg-stroke-accent delay-4" />
            <line x1="140" y1="165" x2="220" y2="165" className="code-line svg-stroke-accent delay-5" />

            <line x1="260" y1="115" x2="360" y2="115" className="code-line svg-stroke-primary delay-3" />
            <line x1="300" y1="140" x2="360" y2="140" className="code-line svg-stroke-primary delay-4" />
            <line x1="240" y1="165" x2="360" y2="165" className="code-line svg-stroke-primary delay-5" />

            {/* Network nodes and connections */}
            <g className="network-layer" opacity="0.6">
              {/* Connection lines */}
              <line x1="120" y1="60" x2="250" y2="40" className="connection-line svg-stroke-accent delay-1" />
              <line x1="250" y1="40" x2="380" y2="60" className="connection-line svg-stroke-accent delay-2" />
              <line x1="120" y1="220" x2="250" y2="240" className="connection-line svg-stroke-primary delay-2" />
              <line x1="250" y1="240" x2="380" y2="220" className="connection-line svg-stroke-primary delay-3" />

              {/* Nodes */}
              <circle cx="120" cy="60" r="4" className="node-circle svg-fill-primary delay-1" />
              <circle cx="250" cy="40" r="5" className="node-circle svg-fill-accent delay-2" />
              <circle cx="380" cy="60" r="4" className="node-circle svg-fill-primary delay-3" />

              <circle cx="120" cy="220" r="4" className="node-circle svg-fill-primary delay-2" />
              <circle cx="250" cy="240" r="5" className="node-circle svg-fill-accent delay-3" />
              <circle cx="380" cy="220" r="4" className="node-circle svg-fill-primary delay-4" />
            </g>

            {/* Floating particles */}
            <circle cx="200" cy="140" r="2.5" className="data-particle svg-fill-accent delay-1" style={{ animationDelay: '2s' }}>
              <animateMotion dur="4s" repeatCount="indefinite" begin="2s">
                <mpath href="#particle-path-1" />
              </animateMotion>
            </circle>

            <circle cx="300" cy="140" r="2.5" className="data-particle svg-fill-primary delay-2" style={{ animationDelay: '3s' }}>
              <animateMotion dur="4s" repeatCount="indefinite" begin="3s">
                <mpath href="#particle-path-2" />
              </animateMotion>
            </circle>

            {/* Hidden paths for particles */}
            <path id="particle-path-1" d="M 120,60 Q 185,100 250,40" fill="none" opacity="0" />
            <path id="particle-path-2" d="M 250,240 Q 315,200 380,220" fill="none" opacity="0" />
          </g>
        </svg>
      </motion.div>

      <motion.h3
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className='flex items-center gap-2 mb-3 text-xl md:text-2xl font-Outfit'>Hi, I'm Muhammad Shiraz Kamran, an undergrad Software Engineer. <Image src={assets.hand_icon} alt='' className=' w-5' /></motion.h3>
      <motion.h1
        initial={{ y: -30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className='text-2xl leading-tight sm:text-3xl lg:text-4xl font-Outfit font-bold'>Building Intelligent Solutions with Modern Tech Stack</motion.h1>
      {/* <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className='text-lg mx-auto mt-3 font-Outfit max-w-2xl text-gray-700 dark:text-gray-300'>
        Backend Engineer | FastAPI Enthusiast | Passionate about AI & Semantic Search
      </motion.p> */}

      <div className='flex flex-col sm:flex-row items-center gap-4 mt-7 '>
        <motion.a
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          href='#contact' className='px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2 dark:bg-transparent'> Say Hi ! &nbsp;&nbsp; <Image src={assets.arrow_icon_dark} alt='' className='w-2' /></motion.a>
        <motion.a
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          href='/my-resume.pdf' target='_blank' className='px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 bg-white dark:text-black'>My resume<Image src={assets.download_icon} alt='' className='w-4' /></motion.a>
      </div>

    </div>
  )
}

export default Header

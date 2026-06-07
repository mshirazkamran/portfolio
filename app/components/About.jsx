'use client'

import { assets, educationData, experienceData, toolsData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'

const About = () => {
  // Common animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { type: 'spring', stiffness: 300, damping: 24 }
    }
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
      id='about' 
      className='w-full max-w-7xl mx-auto px-6 md:px-12 py-24 scroll-mt-16 bg-canvas text-ink'
    >
      {/* Eyebrow & Title */}
      <div className="mb-16 text-center md:text-left">
        <motion.p
          variants={fadeInUp}
          transition={{ duration: 0.5 }}
          className='font-mono text-xs tracking-wider text-accent font-semibold uppercase mb-3'
        >
          01 / MY JOURNEY
        </motion.p>
        <motion.h2
          variants={fadeInUp}
          transition={{ duration: 0.5, delay: 0.1 }}
          className='text-3xl md:text-5xl font-extrabold tracking-[-0.03em] text-ink'
        >
          Education & volunteering.
        </motion.h2>
      </div>

      {/* Grid: Education & Volunteering */}
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20'>
        
        {/* Education Card */}
        <motion.div
          variants={fadeInUp}
          transition={{ duration: 0.6 }}
          className='bg-canvas-soft border border-hairline hover:border-accent/30 rounded-xl p-8 relative overflow-hidden group shadow-lg shadow-black/10 transition-all duration-300'
        >
          
          <div className='flex items-center gap-3 mb-6'>
            <svg className='w-5 h-5 text-body group-hover:text-accent transition-colors' fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
            </svg>
            <h3 className='font-mono text-xs tracking-widest text-body uppercase font-semibold'>EDUCATION</h3>
          </div>

          <div className='space-y-6'>
            {educationData.map((edu, index) => (
              <div key={index} className='border-b border-hairline last:border-0 pb-6 last:pb-0'>
                <div className='flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-2'>
                  <div>
                    <h4 className='text-lg font-bold text-ink leading-snug'>{edu.degree}</h4>
                    <p className='text-sm text-body font-medium'>{edu.institution}</p>
                  </div>
                  <span className='font-mono text-[11px] text-body bg-canvas-soft-2 border border-hairline px-2 py-0.5 rounded h-max w-max mt-1 sm:mt-0'>{edu.duration}</span>
                </div>
                <p className='text-sm text-body mb-4 leading-relaxed font-sans'>{edu.description}</p>
                <div className='flex flex-wrap gap-1.5'>
                  {edu.highlights.map((highlight, idx) => (
                    <span key={idx} className='px-2.5 py-1 bg-canvas-soft-2 border border-hairline/80 text-body rounded text-[11px] font-mono tracking-tight'>
                      {highlight}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Volunteering Card */}
        <motion.div
          variants={fadeInUp}
          transition={{ duration: 0.6, delay: 0.1 }}
          className='bg-canvas-soft border border-hairline hover:border-accent/30 rounded-xl p-8 relative overflow-hidden group shadow-lg shadow-black/10 transition-all duration-300'
        >

          <div className='flex items-center gap-3 mb-6'>
            <svg className='w-5 h-5 text-body group-hover:text-accent transition-colors' fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <h3 className='font-mono text-xs tracking-widest text-body uppercase font-semibold'>VOLUNTEERING</h3>
          </div>

          <div className='space-y-6'>
            {experienceData.map((exp, index) => (
              <div key={index} className='border-b border-hairline last:border-0 pb-6 last:pb-0'>
                <div className='flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-2'>
                  <div>
                    <h4 className='text-lg font-bold text-ink leading-snug'>{exp.role}</h4>
                    <p className='text-sm text-body font-medium'>{exp.company}</p>
                  </div>
                  <span className='font-mono text-[11px] text-body bg-canvas-soft-2 border border-hairline px-2 py-0.5 rounded h-max w-max mt-1 sm:mt-0'>{exp.duration}</span>
                </div>
                <p className='text-sm text-body mb-4 leading-relaxed font-sans'>{exp.description}</p>
                <div className='flex flex-wrap gap-1.5'>
                  {exp.skills.map((skill, idx) => (
                    <span key={idx} className='px-2.5 py-1 bg-canvas-soft-2 border border-hairline/80 text-body rounded text-[11px] font-mono tracking-tight'>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Tools Section */}
      <div className='mt-24 border-t border-hairline pt-16'>
        <div className="mb-12 text-center">
          <motion.p
            variants={fadeInUp}
            className='font-mono text-xs tracking-wider text-accent font-semibold uppercase mb-3'
          >
            02 / TECH STACK
          </motion.p>
          <motion.h3
            variants={fadeInUp}
            className='text-2xl md:text-3xl font-extrabold tracking-[-0.02em] text-ink'
          >
            Tools & technologies.
          </motion.h3>
        </div>

        <motion.div 
          variants={containerVariants}
          className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 max-w-5xl mx-auto'
        >
          {toolsData.map((tool, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.03, 
                borderColor: 'var(--color-accent)', 
                backgroundColor: 'var(--color-canvas-soft-2)',
                transition: { type: 'spring', stiffness: 400, damping: 15 } 
              }}
              whileTap={{ scale: 0.98 }}
              className='px-4.5 py-3.5 bg-canvas-soft border border-hairline rounded-lg shadow-sm cursor-pointer transition-colors duration-200 flex items-center gap-3.5 group'
            >
              <div className="relative w-7 h-7 flex items-center justify-center overflow-hidden">
                <Image 
                  src={tool.logo} 
                  alt={tool.name} 
                  fill 
                  sizes="28px" 
                  className='object-contain opacity-100' 
                />
              </div>
              <span className='font-mono text-xs tracking-tight font-medium text-body group-hover:text-ink transition-colors duration-200'>
                {tool.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  )
}

export default About

'use client'

import { assets, workData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'

const Work = () => {
  // Spring transition preset
  const springTransition = {
    type: 'spring',
    stiffness: 300,
    damping: 25
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
      id='work' 
      className='w-full max-w-7xl mx-auto px-6 md:px-12 py-24 scroll-mt-16 bg-canvas text-ink'
    >
      {/* Title Header */}
      <div className="mb-16 text-center md:text-left">
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className='font-mono text-xs tracking-wider text-accent font-semibold uppercase mb-3'
        >
          03 / PROJECTS
        </motion.p>
        <br />
        <motion.h2
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className='text-3xl md:text-5xl font-extrabold tracking-[-0.03em] text-ink'
        >
          My selected projects.
        </motion.h2>
        {/* <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className='text-sm text-body max-w-xl mt-4 font-sans leading-relaxed'
        >
          Explore interactive, offline-first mobile apps, semantic search engines, and developer command-line utilities. Live demo and repository links are available on each card.
        </motion.p> */}
      </div>

      {/* Projects List */}
      <div className='flex flex-col gap-10 md:gap-12'>
        {workData.map((project, index) => {
          // Extract tags from description
          const tags = project.description.split(',').map(tag => tag.trim());
          
          // Verify if github link is active (not just the base profile page)
          const isRepoActive = project.github && project.github.replace(/\/$/, '') !== 'https://github.com/mshirazkamran';

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`flex flex-col ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              } bg-canvas-soft border border-hairline hover:border-accent/40 rounded-xl overflow-hidden hover:-translate-y-1.5 transition-all duration-300 shadow-lg shadow-black/30 group`}
            >
              {/* Image Section */}
              <div className={`w-full md:w-1/2 aspect-video md:aspect-auto min-h-[300px] relative overflow-hidden bg-canvas-soft-2 border-b md:border-b-0 border-hairline ${
                index % 2 === 0 ? 'md:border-r' : 'md:border-l'
              }`}>
                <Image 
                  src={project.bgImage} 
                  alt={project.title} 
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className='object-cover group-hover:scale-[1.02] transition-all duration-300 opacity-80 group-hover:opacity-100'
                />
                <div className='absolute inset-0 bg-gradient-to-t from-canvas-soft via-transparent to-transparent opacity-60'></div>
              </div>

              {/* Info Section */}
              <div className='w-full md:w-1/2 p-6 md:p-8 flex flex-col justify-between flex-grow'>
                <div>
                  {/* Tech Tags */}
                  <div className='flex flex-wrap gap-1.5'>
                    {tags.slice(0, 3).map((tag, idx) => (
                      <span key={idx} className='px-2 py-0.5 bg-canvas-soft-2 border border-hairline text-[10px] font-mono text-body rounded uppercase tracking-wider'>
                        {tag}
                      </span>
                    ))}
                    {tags.length > 3 && (
                      <span className='px-2 py-0.5 bg-canvas-soft-2 border border-hairline text-[10px] font-mono text-mute rounded uppercase tracking-wider'>
                        +{tags.length - 3}
                      </span>
                    )}
                  </div>

                  <h3 className='text-xl font-bold text-ink mt-4 leading-snug flex items-center gap-2'>
                    {project.title}
                  </h3>

                  {/* Condensed Details Bullet Points */}
                  <ul className="mt-4 space-y-2.5 text-xs text-body font-sans leading-relaxed">
                    {project.fullDetails ? project.fullDetails.slice(0, 3).map((bullet, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-left">
                        <svg className="w-3.5 h-3.5 text-accent mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                        </svg>
                        <span>{bullet}</span>
                      </li>
                    )) : (
                      <li className="flex items-start gap-2 text-left">
                        <svg className="w-3.5 h-3.5 text-accent mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                        </svg>
                        <span>{project.description}</span>
                      </li>
                    )}
                  </ul>
                </div>

                {/* Direct Action Links */}
                <div className='flex items-center gap-3 mt-6 pt-4 border-t border-hairline/60'>
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-center py-2.5 px-4 bg-accent hover:bg-yellow-500 text-on-primary font-bold rounded-lg transition-all text-xs font-mono tracking-wider shadow-sm"
                    >
                      LIVE WEBSITE
                    </a>
                  )}
                  {isRepoActive && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-center py-2.5 px-4 border border-hairline bg-canvas-soft-2/45 text-body hover:text-ink hover:border-accent/40 rounded-lg transition-all text-xs font-mono tracking-wider"
                    >
                      REPOSITORY
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          )
        })}
      </div>

      {/* GitHub Callout Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className='mt-20 border-t border-hairline pt-16 flex flex-col items-center'
      >
        <a 
          target='_blank' 
          rel='noopener noreferrer'
          href='https://github.com/mshirazkamran/' 
          className='inline-flex items-center gap-2 px-6 py-3 border border-hairline bg-canvas-soft/40 text-body hover:text-ink hover:bg-canvas-soft-2 hover:border-accent/30 rounded-full font-mono text-xs tracking-tight transition duration-200'
        >
          VIEW ALL ON GITHUB
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.137 20.162 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
          </svg>
        </a>
      </motion.div>

    </motion.div>
  )
}

export default Work

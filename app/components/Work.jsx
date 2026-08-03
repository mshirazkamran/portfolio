'use client'

import { workData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from 'motion/react'
import SpotlightCard from './react-bits/SpotlightCard'
import Magnet from './react-bits/Magnet'
import ClickSpark from './react-bits/ClickSpark'

const Work = ({ isDarkMode }) => {
  const [selectedProject, setSelectedProject] = React.useState(null);

  return (
    <ClickSpark sparkColor="#f59e0b" sparkSize={9} sparkRadius={18} sparkCount={8}>
      <div
        id='work'
        className='w-full max-w-7xl mx-auto px-6 md:px-12 py-20 sm:py-28 scroll-mt-16 text-slate-900 dark:text-zinc-100 transition-colors duration-400'
      >
        {/* Section Header */}
        <div className="mb-16 text-center md:text-left">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className='font-mono text-sm sm:text-base tracking-widest text-amber-600 dark:text-amber-400 font-bold uppercase mb-3'
          >
            03 / FEATURED PROJECTS
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className='text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-zinc-100 font-mono'
          >
            Featured engineering projects.
          </motion.h2>
        </div>

        {/* Project Cards Stack */}
        <div className='flex flex-col gap-10 md:gap-12'>
          {workData.map((project, index) => {
            const tags = project.description.split(',').map(tag => tag.trim());
            const isRepoActive = project.github && project.github.replace(/\/$/, '') !== 'https://github.com/mshirazkamran';

            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <SpotlightCard
                  spotlightColor={isDarkMode ? "rgba(251, 191, 36, 0.14)" : "rgba(217, 119, 6, 0.08)"}
                  className="bg-white dark:bg-zinc-900/60 border border-slate-200 dark:border-zinc-800/80 rounded-2xl overflow-hidden shadow-md hover:border-amber-500/40 transition-all duration-300 group"
                >
                  <div className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>

                    {/* Image Container with Clickable Lightbox Trigger */}
                    <div
                      onClick={() => setSelectedProject(project)}
                      className={`w-full lg:w-1/2 aspect-video lg:aspect-auto min-h-[300px] relative overflow-hidden bg-slate-100 dark:bg-zinc-950 border-b lg:border-b-0 border-slate-200 dark:border-zinc-800 cursor-pointer ${index % 2 === 0 ? 'lg:border-r' : 'lg:border-l'
                        }`}
                    >
                      <Image
                        src={project.bgImage}
                        alt={project.title}
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className='object-cover group-hover:scale-105 transition-all duration-500 opacity-90 group-hover:opacity-100'
                      />
                      <div className='absolute inset-0 bg-gradient-to-t from-white/40 dark:from-zinc-950/60 via-transparent to-transparent opacity-80'></div>

                      {/* Click to Preview Hover Badge */}
                      <div className="absolute inset-0 bg-zinc-950/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                        <span className="px-3.5 py-1.5 rounded-full bg-zinc-950/80 text-white font-mono text-[11px] font-bold uppercase tracking-wider backdrop-blur-md border border-white/20 shadow-lg flex items-center gap-1.5">
                          <svg className="w-3.5 h-3.5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                          </svg>
                          EXPAND PREVIEW
                        </span>
                      </div>
                    </div>

                    {/* Information Details */}
                    <div className='w-full lg:w-1/2 p-6 sm:p-8 flex flex-col justify-between flex-grow'>
                      <div>
                        {/* Tech Stack Badges */}
                        <div className='flex flex-wrap gap-1.5 mb-4'>
                          {tags.slice(0, 4).map((tag, idx) => (
                            <span key={idx} className='px-2.5 py-0.5 bg-slate-100 dark:bg-zinc-800/80 border border-slate-200 dark:border-zinc-700/60 text-[11px] font-mono font-medium text-slate-700 dark:text-zinc-300 rounded-full tracking-wide'>
                              {tag}
                            </span>
                          ))}
                          {tags.length > 4 && (
                            <span className='px-2 py-0.5 bg-slate-100 dark:bg-zinc-800/80 border border-slate-200 dark:border-zinc-700/60 text-[10px] font-mono text-slate-500 dark:text-zinc-400 rounded-full'>
                              +{tags.length - 4}
                            </span>
                          )}
                        </div>

                        <h3 className='text-2xl font-bold font-mono text-slate-900 dark:text-zinc-100 leading-snug'>
                          {project.title}
                        </h3>

                        {/* Feature Highlights */}
                        <ul className="mt-4 space-y-2.5 text-[13px] sm:text-sm text-slate-600 dark:text-zinc-400 font-sans leading-relaxed">
                          {project.fullDetails ? project.fullDetails.slice(0, 3).map((bullet, idx) => (
                            <li key={idx} className="flex items-start gap-2.5 text-left">
                              <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1.5 shrink-0"></span>
                              <span>{bullet}</span>
                            </li>
                          )) : (
                            <li className="flex items-start gap-2.5 text-left">
                              <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1.5 shrink-0"></span>
                              <span>{project.description}</span>
                            </li>
                          )}
                        </ul>
                      </div>

                      {/* Action Links */}
                      <div className='flex items-center gap-3 mt-8 pt-5 border-t border-slate-200 dark:border-zinc-800/80'>
                        {project.link && (
                          <Magnet padding={40} magnetStrength={3} wrapperClassName="flex-1">
                            <a
                              href={project.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 px-4 bg-amber-500 hover:bg-amber-600 text-zinc-950 font-bold rounded-xl transition-all text-xs font-mono tracking-wider shadow-md shadow-amber-500/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
                            >
                              LIVE WEBSITE
                              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                              </svg>
                            </a>
                          </Magnet>
                        )}

                        <Magnet padding={40} magnetStrength={3} wrapperClassName={project.link ? "flex-1" : "w-full"}>
                          <a
                            href={project.github || "https://github.com/mshirazkamran"}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`w-full inline-flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-xl border transition-all text-xs font-mono font-bold tracking-wider focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 ${isRepoActive
                                ? 'bg-slate-100 hover:bg-slate-200 dark:bg-zinc-800/90 dark:hover:bg-zinc-700/90 border-slate-300 dark:border-zinc-700 text-slate-800 dark:text-zinc-200'
                                : 'bg-slate-100/50 dark:bg-zinc-850 border-slate-200 dark:border-zinc-800 text-slate-400 dark:text-zinc-500 cursor-not-allowed'
                              }`}
                          >
                            <span>{isRepoActive ? 'REPOSITORY' : 'PRIVATE REPO'}</span>
                            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                              <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.137 20.162 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                            </svg>
                          </a>
                        </Magnet>
                      </div>
                    </div>

                  </div>
                </SpotlightCard>
              </motion.div>
            );
          })}
        </div>

        {/* Global GitHub Callout Banner */}
        <div className="mt-16 text-center">
          <Magnet padding={40} magnetStrength={2} wrapperClassName="inline-block">
            <a
              href="https://github.com/mshirazkamran"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 text-slate-800 dark:text-zinc-200 hover:border-amber-500/60 transition-all font-mono text-xs font-bold tracking-wider shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
            >
              <span>VIEW ALL REPOSITORIES ON GITHUB</span>
              <svg className="w-4 h-4 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </Magnet>
        </div>

        {/* Fullscreen Interactive Lightbox Modal */}
        {selectedProject && (
          <div
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-zinc-950/80 backdrop-blur-md cursor-zoom-out animate-fadeIn"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-5xl w-full bg-slate-900 border border-zinc-800 rounded-2xl overflow-hidden shadow-2xl cursor-default"
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-800 bg-zinc-950/80">
                <h3 className="font-mono text-sm font-bold text-zinc-100 uppercase tracking-wider">
                  {selectedProject.title} — PREVIEW
                </h3>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-400 hover:text-zinc-100 transition-colors font-mono text-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
                >
                  ✕ CLOSE
                </button>
              </div>

              {/* Modal Image */}
              <div className="relative aspect-video w-full bg-zinc-950">
                <Image
                  src={selectedProject.bgImage}
                  alt={selectedProject.title}
                  fill
                  sizes="100vw"
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </ClickSpark>
  )
}

export default Work

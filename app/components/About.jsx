'use client'

import { educationData, experienceData, toolsData } from '@/assets/assets'
import Image from 'next/image'
import React, { useState } from 'react'
import { motion } from 'motion/react'
import SpotlightCard from './react-bits/SpotlightCard'
import CountUp from './react-bits/CountUp'
import ClickSpark from './react-bits/ClickSpark'

const About = ({ isDarkMode }) => {
  const [activeCategory, setActiveCategory] = useState('ALL');

  const toolCategories = [
    { id: 'ALL', label: 'ALL TOOLS' },
    { id: 'LANG', label: 'LANGUAGES' },
    { id: 'BACKEND', label: 'BACKEND & AI' },
    { id: 'DB', label: 'DATABASES' },
    { id: 'CLOUD', label: 'DEVOPS & CLOUD' }
  ];

  const getToolCategory = (name) => {
    if (['Java', 'Python', 'JavaScript'].includes(name)) return 'LANG';
    if (['Node.js', 'React', 'FastAPI', 'Fastify', 'SentenceTransformers'].includes(name)) return 'BACKEND';
    if (['SQL', 'PostgreSQL', 'Supabase'].includes(name)) return 'DB';
    return 'CLOUD';
  };

  const filteredTools = activeCategory === 'ALL'
    ? toolsData
    : toolsData.filter(t => getToolCategory(t.name) === activeCategory);

  return (
    <ClickSpark sparkColor="#f59e0b" sparkSize={8} sparkRadius={16} sparkCount={6}>
      <div
        id='about'
        className='w-full max-w-7xl mx-auto px-6 md:px-12 py-20 sm:py-28 scroll-mt-16 text-slate-900 dark:text-zinc-100 transition-colors duration-400'
      >
        {/* Eyebrow & Title */}
        <div className="mb-16 text-center md:text-left">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className='font-mono text-sm sm:text-base tracking-widest text-amber-600 dark:text-amber-400 font-bold uppercase mb-3'
          >
            01 / MY JOURNEY
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className='text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-zinc-100 font-sans'
          >
            Education, leadership & tech stack.
          </motion.h2>
        </div>

        {/* Metrics Banner with CountUp */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-16">
          <SpotlightCard
            spotlightColor={isDarkMode ? "rgba(251, 191, 36, 0.14)" : "rgba(217, 119, 6, 0.1)"}
            className="p-6 rounded-2xl bg-white dark:bg-zinc-900/70 border border-slate-200 dark:border-zinc-800 shadow-sm"
          >
            <div className="flex flex-col">
              <span className="font-mono text-xs font-semibold text-amber-600 dark:text-amber-400 uppercase tracking-wider mb-2">
                COMMUNITY IMPACT
              </span>
              <div className="text-3xl sm:text-4xl font-extrabold font-mono text-slate-900 dark:text-zinc-100 flex items-baseline gap-1">
                <CountUp to={350} duration={2} suffix="K+" prefix="" />
                <span className="text-sm font-sans text-slate-500 dark:text-zinc-400 font-normal">PKR Raised</span>
              </div>
              <p className="text-xs text-slate-600 dark:text-zinc-400 mt-2">
                Co-led Gaza Relief fundraising campaign team of 5 students.
              </p>
            </div>
          </SpotlightCard>

          <SpotlightCard
            spotlightColor={isDarkMode ? "rgba(251, 191, 36, 0.14)" : "rgba(217, 119, 6, 0.1)"}
            className="p-6 rounded-2xl bg-white dark:bg-zinc-900/70 border border-slate-200 dark:border-zinc-800 shadow-sm"
          >
            <div className="flex flex-col">
              <span className="font-mono text-xs font-semibold text-amber-600 dark:text-amber-400 uppercase tracking-wider mb-2">
                TECHNICAL VERSATILITY
              </span>
              <div className="text-3xl sm:text-4xl font-extrabold font-mono text-slate-900 dark:text-zinc-100 flex items-baseline gap-1">
                <CountUp to={16} duration={1.8} suffix="+" />
                <span className="text-sm font-sans text-slate-500 dark:text-zinc-400 font-normal">Tools & Frameworks</span>
              </div>
              <p className="text-xs text-slate-600 dark:text-zinc-400 mt-2">
                Python, FastAPI, RAGs, Supabase, PostgreSQL, Fastify & Docker.
              </p>
            </div>
          </SpotlightCard>
        </div>

        {/* Grid: Education & Volunteering */}
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20'>

          {/* Education Card */}
          <SpotlightCard
            spotlightColor={isDarkMode ? "rgba(251, 191, 36, 0.12)" : "rgba(217, 119, 6, 0.08)"}
            className="bg-white dark:bg-zinc-900/60 border border-slate-200 dark:border-zinc-800/80 rounded-2xl p-7 sm:p-8 shadow-sm transition-all"
          >
            <div className='flex items-center gap-2 mb-6'>
              <span className="w-2 h-2 rounded-full bg-amber-500"></span>
              <h3 className='font-mono text-xs sm:text-sm tracking-widest text-amber-600 dark:text-amber-400 uppercase font-bold'>EDUCATION</h3>
            </div>

            <div className='space-y-6'>
              {educationData.map((edu, index) => (
                <div key={index}>
                  <div className='flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-3'>
                    <div>
                      <h4 className='text-lg font-bold font-mono text-slate-900 dark:text-zinc-100 leading-snug'>{edu.degree}</h4>
                      <p className='text-sm text-slate-600 dark:text-zinc-400 font-medium'>{edu.institution}</p>
                    </div>
                    <span className='inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-amber-500/10 dark:bg-amber-500/15 border border-amber-500/25 dark:border-amber-400/25 font-mono text-xs font-semibold text-amber-700 dark:text-amber-400 mt-1 sm:mt-0 shrink-0'>
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      {edu.duration}
                    </span>
                  </div>
                  <p className='text-sm text-slate-600 dark:text-zinc-400 mb-4 leading-relaxed font-sans'>{edu.description}</p>
                  <div className='flex flex-wrap gap-1.5'>
                    {edu.highlights.map((highlight, idx) => (
                      <span key={idx} className='px-2.5 py-1 bg-slate-100 dark:bg-zinc-800/80 border border-slate-200 dark:border-zinc-700/60 text-slate-700 dark:text-zinc-300 rounded-md text-[11px] font-mono'>
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </SpotlightCard>

          {/* Volunteering Card */}
          <SpotlightCard
            spotlightColor={isDarkMode ? "rgba(251, 191, 36, 0.12)" : "rgba(217, 119, 6, 0.08)"}
            className="bg-white dark:bg-zinc-900/60 border border-slate-200 dark:border-zinc-800/80 rounded-2xl p-7 sm:p-8 shadow-sm transition-all"
          >
            <div className='flex items-center gap-2 mb-6'>
              <span className="w-2 h-2 rounded-full bg-amber-500"></span>
              <h3 className='font-mono text-xs sm:text-sm tracking-widest text-amber-600 dark:text-amber-400 uppercase font-bold'>LEADERSHIP & VOLUNTEERING</h3>
            </div>

            <div className='space-y-6'>
              {experienceData.map((exp, index) => (
                <div key={index}>
                  <div className='flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-3'>
                    <div>
                      <h4 className='text-lg font-bold font-mono text-slate-900 dark:text-zinc-100 leading-snug'>{exp.role}</h4>
                      <p className='text-sm text-slate-600 dark:text-zinc-400 font-medium'>{exp.company}</p>
                    </div>
                    <span className='inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-amber-500/10 dark:bg-amber-500/15 border border-amber-500/25 dark:border-amber-400/25 font-mono text-xs font-semibold text-amber-700 dark:text-amber-400 mt-1 sm:mt-0 shrink-0'>
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      {exp.duration}
                    </span>
                  </div>
                  <p className='text-sm text-slate-600 dark:text-zinc-400 mb-4 leading-relaxed font-sans'>{exp.description}</p>
                  <div className='flex flex-wrap gap-1.5'>
                    {exp.skills.map((skill, idx) => (
                      <span key={idx} className='px-2.5 py-1 bg-slate-100 dark:bg-zinc-800/80 border border-slate-200 dark:border-zinc-700/60 text-slate-700 dark:text-zinc-300 rounded-md text-[11px] font-mono'>
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </SpotlightCard>
        </div>

        {/* Tech Stack Directory Section */}
        <div className='mt-24 border-t border-slate-200 dark:border-zinc-800/80 pt-16'>
          <div className="mb-8 text-center md:text-left flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className='font-mono text-sm sm:text-base tracking-widest text-amber-600 dark:text-amber-400 font-bold uppercase mb-3'
              >
                02 / TECH STACK
              </motion.p>
              <motion.h3
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className='text-2xl md:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-zinc-100 font-mono'
              >
                Tools & technologies.
              </motion.h3>
            </div>

            {/* Category Filter Tabs with Count Badges */}
            <div className="flex flex-wrap gap-1.5 bg-slate-200/60 dark:bg-zinc-900/60 p-1.5 rounded-xl border border-slate-300/60 dark:border-zinc-800/80">
              {toolCategories.map(cat => {
                const count = cat.id === 'ALL' ? toolsData.length : toolsData.filter(t => getToolCategory(t.name) === cat.id).length;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={`px-3 py-1.5 rounded-lg text-[11px] font-mono font-bold tracking-wider transition-all cursor-pointer flex items-center gap-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 ${activeCategory === cat.id
                        ? 'bg-amber-500 text-zinc-950 shadow-sm'
                        : 'text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-zinc-100'
                      }`}
                  >
                    <span>{cat.label}</span>
                    <span className={`px-1.5 py-0.2 rounded text-[10px] ${activeCategory === cat.id ? 'bg-zinc-950/20 text-zinc-950' : 'bg-slate-300/70 dark:bg-zinc-800 text-slate-500 dark:text-zinc-400'}`}>
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Tools Grid (Centered Big Icons & Text) */}
          <div className='grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-3 sm:gap-4'>
            {filteredTools.map((tool, index) => (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.25, delay: index * 0.02 }}
                className="w-full"
              >
                <SpotlightCard
                  spotlightColor={isDarkMode ? "rgba(251, 191, 36, 0.18)" : "rgba(217, 119, 6, 0.12)"}
                  className='w-full h-full p-4 bg-white dark:bg-zinc-900/70 border border-slate-200 dark:border-zinc-800 rounded-xl shadow-sm hover:border-amber-500/50 dark:hover:border-amber-400/50 transition-all duration-200 group flex flex-col items-center justify-center text-center cursor-default hover:-translate-y-0.5'
                >
                  <div className="relative w-10 h-10 sm:w-11 sm:h-11 flex items-center justify-center overflow-hidden shrink-0 mb-2.5">
                    <Image
                      src={tool.logo}
                      alt={tool.name}
                      fill
                      sizes="48px"
                      className='object-contain transition-transform group-hover:scale-110 duration-200'
                    />
                  </div>
                  <span className='font-mono text-[11px] font-semibold text-slate-700 dark:text-zinc-300 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors text-center truncate max-w-full'>
                    {tool.name}
                  </span>
                </SpotlightCard>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </ClickSpark>
  )
}

export default About

'use client'

import React, { useState } from 'react'
import { motion } from 'motion/react'
import SpotlightCard from './react-bits/SpotlightCard'
import Magnet from './react-bits/Magnet'
import ClickSpark from './react-bits/ClickSpark'

const Contact = ({ isDarkMode }) => {
  const [copied, setCopied] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("mshirazkamran@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setIsSubmitted(false), 6000);
    }, 700);
  };

  return (
    <ClickSpark sparkColor="#f59e0b" sparkSize={8} sparkRadius={16} sparkCount={6}>
      <div
        id='contact'
        className='w-full max-w-7xl mx-auto px-6 md:px-12 py-20 sm:py-28 scroll-mt-16 text-slate-900 dark:text-zinc-100 transition-colors duration-400'
      >
        {/* Title Header */}
        <div className="mb-16 text-center md:text-left">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className='font-mono text-sm sm:text-base tracking-widest text-amber-600 dark:text-amber-400 font-bold uppercase mb-3'
          >
            04 / CONTACT
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className='text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-zinc-100 font-sans'
          >
            Let's build something remarkable.
          </motion.h2>
          {/* <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base text-slate-600 dark:text-zinc-400 max-w-xl mt-4 leading-relaxed font-sans"
          >
            Whether you're looking to discuss backend architecture, AI pipelines, or full-stack applications, feel free to reach out.
          </motion.p> */}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

          {/* Left Column: Direct Links & Info */}
          <div className="lg:col-span-5 flex flex-col gap-6">

            <SpotlightCard
              spotlightColor={isDarkMode ? "rgba(251, 191, 36, 0.14)" : "rgba(217, 119, 6, 0.08)"}
              className="p-8 rounded-2xl bg-white dark:bg-zinc-900/60 border border-slate-200 dark:border-zinc-800/80 shadow-sm"
            >
              <h3 className="font-mono text-xs font-bold uppercase text-amber-600 dark:text-amber-400 tracking-wider mb-3">
                DIRECT EMAIL
              </h3>
              <p className="text-sm text-slate-600 dark:text-zinc-400 mb-6 font-sans">
                Click below to copy email address directly to your clipboard:
              </p>
              <button
                onClick={handleCopyEmail}
                className="w-full flex items-center justify-between px-4 py-3 bg-slate-100 dark:bg-zinc-800/80 border border-slate-200 dark:border-zinc-700/60 rounded-xl hover:border-amber-500/50 transition-colors font-mono text-xs text-slate-800 dark:text-zinc-200 font-semibold group cursor-pointer"
              >
                <span>mshirazkamran@gmail.com</span>
                <span className="text-[11px] text-amber-600 dark:text-amber-400 font-bold uppercase">
                  {copied ? "COPIED ✓" : "COPY"}
                </span>
              </button>
            </SpotlightCard>

            <SpotlightCard
              spotlightColor={isDarkMode ? "rgba(251, 191, 36, 0.14)" : "rgba(217, 119, 6, 0.08)"}
              className="p-8 rounded-2xl bg-white dark:bg-zinc-900/60 border border-slate-200 dark:border-zinc-800/80 shadow-sm"
            >
              <h3 className="font-mono text-xs font-bold uppercase text-amber-600 dark:text-amber-400 tracking-wider mb-4">
                CONNECT & NETWORK
              </h3>
              <div className="flex flex-col gap-3">
                <a
                  href="https://www.linkedin.com/in/mshirazkamran/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-xl bg-slate-50 dark:bg-zinc-800/50 border border-slate-200 dark:border-zinc-700/60 text-slate-800 dark:text-zinc-200 font-mono text-xs font-semibold hover:border-amber-500/60 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <svg className="w-4 h-4 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.75a1.45 1.45 0 1 0 0 2.9 1.45 1.45 0 0 0 0-2.9Z" />
                    </svg>
                    <span>LinkedIn Profile</span>
                  </div>
                  <svg className="w-3.5 h-3.5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>

                <a
                  href="https://github.com/mshirazkamran"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-xl bg-slate-50 dark:bg-zinc-800/50 border border-slate-200 dark:border-zinc-700/60 text-slate-800 dark:text-zinc-200 font-mono text-xs font-semibold hover:border-amber-500/60 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <svg className="w-4 h-4 text-slate-800 dark:text-zinc-100" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.137 20.162 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                    </svg>
                    <span>GitHub Repositories</span>
                  </div>
                  <svg className="w-3.5 h-3.5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </SpotlightCard>

          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7">
            <SpotlightCard
              spotlightColor={isDarkMode ? "rgba(251, 191, 36, 0.14)" : "rgba(217, 119, 6, 0.08)"}
              className="p-8 rounded-2xl bg-white dark:bg-zinc-900/60 border border-slate-200 dark:border-zinc-800/80 shadow-sm"
            >
              {isSubmitted && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-700 dark:text-emerald-400 flex items-start gap-3 text-sm font-sans"
                >
                  <svg className="w-5 h-5 shrink-0 mt-0.5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <strong className="font-bold block font-mono text-xs uppercase tracking-wider mb-0.5">MESSAGE SENT SUCCESSFULLY!</strong>
                    <span>Thank you for reaching out. I will review your message and reply back shortly.</span>
                  </div>
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-xs font-mono font-bold text-slate-700 dark:text-zinc-300 uppercase tracking-wider mb-2">
                    YOUR NAME
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Hamza Ahmed"
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-zinc-800/60 border border-slate-300 dark:border-zinc-700/80 text-slate-900 dark:text-zinc-100 placeholder-slate-400 dark:placeholder-zinc-500 text-sm focus:outline-none focus:border-amber-500 dark:focus:border-amber-400 focus-visible:ring-2 focus-visible:ring-amber-500 transition-colors font-sans"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono font-bold text-slate-700 dark:text-zinc-300 uppercase tracking-wider mb-2">
                    YOUR EMAIL
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="hamza.ahmed@gmail.com"
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-zinc-800/60 border border-slate-300 dark:border-zinc-700/80 text-slate-900 dark:text-zinc-100 placeholder-slate-400 dark:placeholder-zinc-500 text-sm focus:outline-none focus:border-amber-500 dark:focus:border-amber-400 focus-visible:ring-2 focus-visible:ring-amber-500 transition-colors font-sans"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono font-bold text-slate-700 dark:text-zinc-300 uppercase tracking-wider mb-2">
                    MESSAGE
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Assalamu Alaikum Shiraz, I'd like to discuss a project..."
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-zinc-800/60 border border-slate-300 dark:border-zinc-700/80 text-slate-900 dark:text-zinc-100 placeholder-slate-400 dark:placeholder-zinc-500 text-sm focus:outline-none focus:border-amber-500 dark:focus:border-amber-400 focus-visible:ring-2 focus-visible:ring-amber-500 transition-colors resize-none font-sans"
                  ></textarea>
                </div>

                <Magnet padding={50} magnetStrength={3} wrapperClassName="w-full">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 px-6 bg-amber-500 hover:bg-amber-600 disabled:opacity-75 text-zinc-950 font-mono text-xs font-bold tracking-widest uppercase rounded-xl transition-all shadow-md shadow-amber-500/20 cursor-pointer flex items-center justify-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="w-4 h-4 animate-spin text-zinc-950" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        <span>SENDING...</span>
                      </>
                    ) : (
                      <span>SEND MESSAGE</span>
                    )}
                  </button>
                </Magnet>
              </form>
            </SpotlightCard>
          </div>

        </div>

        {/* Floating Toast Notification */}
        {copied && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2.5 px-5 py-3 rounded-full bg-slate-900/90 dark:bg-zinc-100/90 text-white dark:text-zinc-950 border border-slate-700/60 dark:border-zinc-300/60 shadow-2xl backdrop-blur-md font-mono text-xs font-bold select-none pointer-events-none"
          >
            <svg className="w-4 h-4 text-emerald-500 dark:text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
            </svg>
            <span>Copied to clipboard!</span>
          </motion.div>
        )}
      </div>
    </ClickSpark>
  )
}

export default Contact

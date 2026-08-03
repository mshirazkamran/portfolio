'use client'

import React, { useState } from 'react'
import { motion, useReducedMotion } from 'motion/react'
import SpotlightCard from './react-bits/SpotlightCard'
import Magnet from './react-bits/Magnet'
import { LinkedinLogo, GithubLogo, ArrowRight, PaperPlaneRight, CheckCircle, Check, Spinner, Copy } from '@phosphor-icons/react'

const Contact = ({ isDarkMode }) => {
  const [copied, setCopied] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const shouldReduceMotion = useReducedMotion();

  const handleCopyEmail = async () => {
    const emailText = "mshirazkamran@gmail.com";
    try {
      if (navigator?.clipboard?.writeText) {
        await navigator.clipboard.writeText(emailText);
      } else {
        // Fallback for mobile WebKit & non-HTTPS HTTP connections
        const textArea = document.createElement("textarea");
        textArea.value = emailText;
        textArea.style.position = "fixed";
        textArea.style.left = "-9999px";
        textArea.style.top = "-9999px";
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        document.execCommand("copy");
        document.body.removeChild(textArea);
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch (err) {
      console.error("Copy failed: ", err);
    }
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
    <div
      id='contact'
      className='w-full max-w-7xl mx-auto px-6 md:px-12 py-20 sm:py-28 scroll-mt-16 text-slate-900 dark:text-zinc-100 transition-colors duration-400'
    >
      {/* Title Header */}
      <div className="mb-16 text-center md:text-left">
        <motion.p
          initial={shouldReduceMotion ? false : { opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className='font-mono text-sm sm:text-base tracking-widest text-amber-600 dark:text-amber-400 font-bold uppercase mb-3'
        >
          GET IN TOUCH
        </motion.p>
        <motion.h2
          initial={shouldReduceMotion ? false : { opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className='text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-zinc-100 font-mono'
        >
          Let's build something remarkable.
        </motion.h2>
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
            <p className="text-sm text-slate-600 dark:text-zinc-400 mb-6 font-mono">
              Click below to copy email address directly to your clipboard:
            </p>
            <button
              onClick={handleCopyEmail}
              className="w-full flex items-center justify-between px-4 py-3 bg-slate-100 dark:bg-zinc-800/80 border border-slate-200 dark:border-zinc-700/60 rounded-xl hover:border-amber-500/50 transition-colors font-mono text-xs text-slate-800 dark:text-zinc-200 font-semibold group cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
            >
              <span>mshirazkamran@gmail.com</span>
              <span className="text-[11px] text-amber-600 dark:text-amber-400 font-bold uppercase flex items-center gap-1">
                {copied ? (
                  <>
                    <Check size={14} weight="bold" />
                    <span>COPIED</span>
                  </>
                ) : (
                  <>
                    <Copy size={14} weight="bold" />
                    <span>COPY</span>
                  </>
                )}
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
                className="flex items-center justify-between p-3.5 rounded-xl bg-slate-50 dark:bg-zinc-800/50 border border-slate-200 dark:border-zinc-700/60 text-slate-800 dark:text-zinc-200 font-mono text-xs font-semibold hover:border-amber-500/60 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
              >
                <div className="flex items-center gap-3">
                  <LinkedinLogo size={18} weight="bold" className="text-blue-600 dark:text-blue-400" />
                  <span>LinkedIn Profile</span>
                </div>
                <ArrowRight size={14} weight="bold" className="text-slate-400" />
              </a>

              <a
                href="https://github.com/mshirazkamran"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3.5 rounded-xl bg-slate-50 dark:bg-zinc-800/50 border border-slate-200 dark:border-zinc-700/60 text-slate-800 dark:text-zinc-200 font-mono text-xs font-semibold hover:border-amber-500/60 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
              >
                <div className="flex items-center gap-3">
                  <GithubLogo size={18} weight="bold" className="text-slate-800 dark:text-zinc-100" />
                  <span>GitHub Repositories</span>
                </div>
                <ArrowRight size={14} weight="bold" className="text-slate-400" />
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
                <CheckCircle size={20} weight="bold" className="shrink-0 mt-0.5 text-emerald-500" />
                <div>
                  <strong className="font-bold block font-mono text-xs uppercase tracking-wider mb-0.5">MESSAGE SENT SUCCESSFULLY!</strong>
                  <span className="font-mono text-xs">Thank you for reaching out. I will review your message and reply back shortly.</span>
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
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-zinc-800/60 border border-slate-300 dark:border-zinc-700/80 text-slate-900 dark:text-zinc-100 placeholder-slate-400 dark:placeholder-zinc-500 text-sm focus:outline-none focus:border-amber-500 dark:focus:border-amber-400 focus-visible:ring-2 focus-visible:ring-amber-500 transition-colors font-mono"
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
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-zinc-800/60 border border-slate-300 dark:border-zinc-700/80 text-slate-900 dark:text-zinc-100 placeholder-slate-400 dark:placeholder-zinc-500 text-sm focus:outline-none focus:border-amber-500 dark:focus:border-amber-400 focus-visible:ring-2 focus-visible:ring-amber-500 transition-colors font-mono"
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
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-zinc-800/60 border border-slate-300 dark:border-zinc-700/80 text-slate-900 dark:text-zinc-100 placeholder-slate-400 dark:placeholder-zinc-500 text-sm focus:outline-none focus:border-amber-500 dark:focus:border-amber-400 focus-visible:ring-2 focus-visible:ring-amber-500 transition-colors resize-none font-mono"
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
                      <Spinner size={16} weight="bold" className="animate-spin text-zinc-950" />
                      <span>SENDING...</span>
                    </>
                  ) : (
                    <>
                      <span>SEND MESSAGE</span>
                      <PaperPlaneRight size={14} weight="bold" />
                    </>
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
          <CheckCircle size={16} weight="bold" className="text-emerald-500 dark:text-emerald-600" />
          <span>Copied to clipboard!</span>
        </motion.div>
      )}
    </div>
  )
}

export default Contact

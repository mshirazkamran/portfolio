'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
const Contact = () => {
  const [result, setResult] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setResult("Sending message...");
    const formData = new FormData(event.target);

    formData.append("access_key", "aca76711-8064-4fdb-b9a7-2b65cfda7a09");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setResult("Thank you! Your message has been sent successfully.");
        event.target.reset();
      } else {
        console.error("Error submitting form:", data);
        setResult(data.message || "Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Network error:", error);
      setResult("Network error. Please verify your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
      id='contact' 
      className='w-full max-w-7xl mx-auto px-6 md:px-12 py-24 scroll-mt-16 bg-canvas text-ink relative'
    >
      {/* Grid lines decorative background */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-hidden opacity-25">
        <div className="absolute left-[10%] top-0 bottom-0 w-[1px] bg-hairline"></div>
        <div className="absolute right-[10%] top-0 bottom-0 w-[1px] bg-hairline"></div>
      </div>

      <div className="relative z-10 max-w-2xl mx-auto">
        
        {/* Title */}
        <div className="text-center mb-12">
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className='font-mono text-xs tracking-wider text-accent font-semibold uppercase mb-3'
          >
            04 / CONTACT
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className='text-3xl md:text-5xl font-extrabold tracking-[-0.03em] text-ink'
          >
            Get in touch.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className='text-sm text-body mt-4 font-sans leading-relaxed'
          >
            Have a question, opportunity, or feedback? Drop me a message below. I will get back to you as soon as possible.
          </motion.p>
        </div>

        {/* Contact Form */}
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          onSubmit={onSubmit} 
          className='space-y-6'
        >
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
            
            {/* Name Input */}
            <div className="flex flex-col">
              <label htmlFor="name" className="font-mono text-[10px] text-mute uppercase mb-2">Full Name</label>
              <input
                id="name"
                name='name'
                type='text' 
                placeholder='Enter your name' 
                required
                className='w-full px-4 py-3 outline-none border border-hairline focus:border-accent bg-canvas-soft rounded-lg text-ink text-sm font-sans placeholder-mute transition-colors duration-200' 
              />
            </div>
 
            {/* Email Input */}
            <div className="flex flex-col">
              <label htmlFor="email" className="font-mono text-[10px] text-mute uppercase mb-2">Email Address</label>
              <input
                id="email"
                name='email'
                type='email' 
                placeholder='Enter your email' 
                required
                className='w-full px-4 py-3 outline-none border border-hairline focus:border-accent bg-canvas-soft rounded-lg text-ink text-sm font-sans placeholder-mute transition-colors duration-200' 
              />
            </div>
 
          </div>
 
          {/* Message Input */}
          <div className="flex flex-col">
            <label htmlFor="message" className="font-mono text-[10px] text-mute uppercase mb-2">Your Message</label>
            <textarea
              id="message"
              name='message'
              rows='6' 
              placeholder='Write your message here...' 
              required
              className='w-full p-4 outline-none border border-hairline focus:border-accent bg-canvas-soft rounded-lg text-ink text-sm font-sans placeholder-mute transition-colors duration-200 resize-none'
            ></textarea>
          </div>

          {/* Action Row */}
          <div className="flex flex-col items-center pt-4">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type='submit' 
              disabled={isSubmitting}
              className='px-8 py-3 bg-accent text-on-primary font-bold rounded-full hover:bg-yellow-500 transition-all text-xs font-mono tracking-widest w-full sm:w-auto flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(250,204,21,0.2)] hover:shadow-[0_0_20px_rgba(250,204,21,0.4)] disabled:opacity-50 disabled:cursor-not-allowed'
            >
              {isSubmitting ? "SENDING MESSAGE..." : "SUBMIT MESSAGE"}
              {!isSubmitting && (
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              )}
            </motion.button>
 
            {/* Results Feedback Message */}
            {result && (
              <motion.p 
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                className={`mt-6 text-xs font-mono tracking-wide ${
                  result.includes("successfully") ? "text-accent font-semibold" : "text-body"
                }`}
              >
                {result}
              </motion.p>
            )}
          </div>

        </motion.form>
      </div>
    </motion.div>
  )
}

export default Contact

import { assets, educationData, experienceData, toolsData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from "motion/react"

const About = ({ isDarkMode }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}

      id='about' className='w-full px-[8%] md:px-[12%] py-20 scroll-mt-20 relative overflow-hidden'>

      {/* Animated Background SVG */}
      {/* <div className='absolute top-0 right-0 w-96 h-96 opacity-10 dark:opacity-5'>
        <motion.svg
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#6366f1"
            d="M44.7,-76.4C58.8,-69.2,71.8,-59.1,79.6,-45.8C87.4,-32.6,90,-16.3,88.5,-0.9C87,14.6,81.4,29.2,73.1,42.8C64.8,56.4,53.8,69,40.1,76.3C26.4,83.6,10,85.6,-5.8,84.8C-21.6,84,-32.8,80.4,-45.2,73.5C-57.6,66.6,-71.2,56.4,-79.4,43.1C-87.6,29.8,-90.4,13.4,-89.1,-2.6C-87.8,-18.6,-82.4,-34.2,-73.6,-47.2C-64.8,-60.2,-52.6,-70.6,-38.8,-77.9C-25,-85.2,-9.6,-89.4,4.3,-88.3C18.2,-87.2,30.6,-83.6,44.7,-76.4Z"
            transform="translate(100 100)"
          />
        </motion.svg>
      </div> */}

      {/* <div className='absolute bottom-20 left-10 w-64 h-64 opacity-10 dark:opacity-5'>
        <motion.svg
          animate={{
            rotate: -360,
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#a78bfa"
            d="M39.5,-65.5C51.4,-58.7,61.3,-48.2,67.8,-36C74.3,-23.8,77.4,-9.9,76.2,3.5C75,16.9,69.5,29.8,61.5,40.8C53.5,51.8,43,61,30.8,67.8C18.6,74.6,4.7,79,-10.3,80.2C-25.3,81.4,-41.4,79.4,-54.2,72.8C-67,66.2,-76.5,55,-81.4,42.2C-86.3,29.4,-86.6,15,-83.5,1.8C-80.4,-11.4,-73.9,-23.4,-65.8,-34.2C-57.7,-45,-48,-54.6,-36.5,-61.6C-25,-68.6,-11.9,-73,0.5,-73.9C12.9,-74.8,27.6,-72.3,39.5,-65.5Z"
            transform="translate(100 100)"
          />
        </motion.svg>
      </div> */}

      <motion.h4
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}

        className='text-center mb-2 text-xl font-Outfit text-gray-700 dark:text-gray-300'>My Journey</motion.h4>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}

        className='text-center text-4xl md:text-5xl font-Outfit font-bold text-gray-900 dark:text-white mb-16'>Education & Volunteering</motion.h2>

      <div className='max-w-5xl mx-auto'>

        {/* Education Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className='mb-16'
        >
          <div className='flex items-center gap-3 mb-8'>
            <div className='w-12 h-12 rounded-full bg-indigo-500 dark:bg-purple-500 flex items-center justify-center'>
              <svg className='w-6 h-6 text-white' fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
              </svg>
            </div>
            <h3 className='text-3xl font-Outfit font-semibold text-gray-900 dark:text-white'>Education</h3>
          </div>

          <div className='space-y-6'>
            {educationData.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
                whileHover={{ scale: 1.02 }}
                className='bg-white dark:bg-gray-800 rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-indigo-500 dark:border-purple-500'
              >
                <div className='flex flex-col md:flex-row md:items-start md:justify-between mb-3'>
                  <div>
                    <h4 className='text-xl md:text-2xl font-Outfit font-bold text-gray-900 dark:text-white mb-2'>{edu.degree}</h4>
                    <p className='text-lg font-Outfit text-indigo-600 dark:text-purple-400 mb-1'>{edu.institution}</p>
                  </div>
                  <span className='text-base font-Outfit text-gray-600 dark:text-gray-400 mt-2 md:mt-0'>{edu.duration}</span>
                </div>
                <p className='text-base md:text-lg text-gray-700 dark:text-gray-300 mb-4 leading-relaxed'>{edu.description}</p>
                <div className='flex flex-wrap gap-2'>
                  {edu.highlights.map((highlight, idx) => (
                    <span key={idx} className='px-3 py-1 bg-indigo-100 dark:bg-purple-900/30 text-indigo-700 dark:text-purple-300 rounded-full text-sm font-Outfit'>
                      {highlight}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Experience Section */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className='flex items-center gap-3 mb-8'>
            <div className='w-12 h-12 rounded-full bg-indigo-500 dark:bg-purple-500 flex items-center justify-center'>
              <svg className='w-6 h-6 text-white' fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className='text-3xl font-Outfit font-semibold text-gray-900 dark:text-white'>Volunteering</h3>
          </div>

          <div className='space-y-6'>
            {experienceData.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                whileHover={{ scale: 1.02 }}
                className='bg-white dark:bg-gray-800 rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-indigo-500 dark:border-purple-500'
              >
                <div className='flex flex-col md:flex-row md:items-start md:justify-between mb-3'>
                  <div>
                    <h4 className='text-xl md:text-2xl font-Outfit font-bold text-gray-900 dark:text-white mb-2'>{exp.role}</h4>
                    <p className='text-lg font-Outfit text-indigo-600 dark:text-purple-400 mb-1'>{exp.company}</p>
                  </div>
                  <span className='text-base font-Outfit text-gray-600 dark:text-gray-400 mt-2 md:mt-0'>{exp.duration}</span>
                </div>
                <p className='text-base md:text-lg text-gray-700 dark:text-gray-300 mb-4 leading-relaxed'>{exp.description}</p>
                <div className='flex flex-wrap gap-2'>
                  {exp.skills.map((skill, idx) => (
                    <span key={idx} className='px-3 py-1 bg-indigo-100 dark:bg-purple-900/30 text-indigo-700 dark:text-purple-300 rounded-full text-sm font-Outfit'>
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Tools Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
          className='mt-16'
        >
          <h4 className='text-2xl font-Outfit font-semibold text-gray-900 dark:text-white mb-6 text-center'>Tools & Technologies</h4>
          <div className='flex flex-wrap items-center justify-center gap-3 md:gap-4 max-w-4xl mx-auto'>
            {toolsData.map((tool, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.1 }}
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className='px-4 py-3 md:px-5 md:py-4 bg-white/40 dark:bg-gray-800/40 backdrop-blur-md border border-gray-300 dark:border-gray-600 rounded-xl shadow-md hover:shadow-xl cursor-pointer transition-all duration-300 flex items-center gap-3'
              >
                <Image src={tool.logo} alt={tool.name} width={32} height={32} className='w-6 h-6 md:w-8 md:h-8 object-contain' />
                <span className='font-Outfit font-medium text-sm md:text-base text-gray-800 dark:text-gray-200'>{tool.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </motion.div>
  )
}

export default About

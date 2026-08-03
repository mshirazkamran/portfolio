'use client'

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sun, Moon } from 'lucide-react';

const AnimatedThemeToggle = ({ theme, onToggle }) => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [targetThemeText, setTargetThemeText] = useState('');

  const handleToggle = () => {
    if (isAnimating) return;

    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    const targetLabel = nextTheme === 'light' ? 'Light' : 'Dark';
    setTargetThemeText(targetLabel);
    setIsAnimating(true);

    // Switch theme halfway through animation
    setTimeout(() => {
      onToggle();
    }, 400);

    // Return to compact navbar state
    setTimeout(() => {
      setIsAnimating(false);
    }, 1500);
  };

  const isDark = theme === 'dark';

  return (
    <div className="relative inline-flex items-center">
      <motion.button
        onClick={handleToggle}
        disabled={isAnimating}
        layout
        transition={{
          type: 'spring',
          stiffness: 300,
          damping: 25,
          mass: 0.7,
        }}
        whileHover={!isAnimating ? { scale: 1.06 } : {}}
        whileTap={!isAnimating ? { scale: 0.94 } : {}}
        aria-label={`Switch to ${isDark ? 'light' : 'dark'} theme`}
        className={`relative flex items-center justify-center h-9 sm:h-10 border backdrop-blur-xl shadow-sm transition-colors duration-400 cursor-pointer overflow-hidden ${
          isAnimating ? 'px-4 sm:px-5 rounded-full z-50' : 'w-9 sm:w-10 rounded-full'
        } ${
          isDark
            ? 'bg-zinc-900/90 border-zinc-700/80 text-amber-400 hover:border-amber-400/60 shadow-amber-500/10'
            : 'bg-white/90 border-slate-300/80 text-amber-600 hover:border-amber-500/60 shadow-slate-200/50'
        }`}
      >
        {/* Sweeping Glow Light Beam */}
        {isAnimating && (
          <motion.div
            initial={{ x: '-100%', opacity: 0 }}
            animate={{ x: '220%', opacity: [0, 1, 1, 0] }}
            transition={{
              duration: 1.0,
              ease: 'easeInOut',
            }}
            className={`absolute inset-y-0 w-1/2 pointer-events-none -skew-x-12 ${
              targetThemeText === 'Light'
                ? 'bg-gradient-to-r from-transparent via-amber-400/50 to-transparent'
                : 'bg-gradient-to-r from-transparent via-indigo-400/50 to-transparent'
            }`}
          />
        )}

        <AnimatePresence mode="wait">
          {isAnimating ? (
            <motion.div
              key="banner"
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.85 }}
              transition={{ duration: 0.15 }}
              className="relative z-10 flex items-center gap-2 whitespace-nowrap select-none"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 3, ease: 'linear' }}
                className="flex items-center justify-center shrink-0"
              >
                {targetThemeText === 'Light' ? (
                  <Sun className="w-4 h-4 text-amber-500 drop-shadow-[0_0_6px_rgba(245,158,11,0.6)]" />
                ) : (
                  <Moon className="w-4 h-4 text-indigo-400 drop-shadow-[0_0_6px_rgba(99,102,241,0.5)]" />
                )}
              </motion.div>
              <span className="font-mono text-[11px] font-semibold tracking-wide flex items-center gap-1.5">
                <span className={isDark ? 'text-zinc-200' : 'text-slate-800'}>
                  Changing theme to
                </span>
                <span
                  className={`px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                    targetThemeText === 'Light'
                      ? 'bg-amber-400/20 text-amber-700 dark:text-amber-300 border border-amber-400/40'
                      : 'bg-indigo-500/20 text-indigo-700 dark:text-indigo-300 border border-indigo-400/40'
                  }`}
                >
                  {targetThemeText}
                </span>
              </span>
            </motion.div>
          ) : (
            <motion.div
              key="icon"
              initial={{ opacity: 0, rotate: -90 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: 90 }}
              transition={{ duration: 0.2 }}
              className="flex items-center justify-center shrink-0"
            >
              {isDark ? (
                <Sun className="w-4 h-4 text-amber-400 drop-shadow-[0_0_6px_rgba(251,191,36,0.5)]" />
              ) : (
                <Moon className="w-4 h-4 text-indigo-600 drop-shadow-[0_0_6px_rgba(79,70,229,0.4)]" />
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
};

export default AnimatedThemeToggle;

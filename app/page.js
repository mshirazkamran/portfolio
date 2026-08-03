'use client'

import { useEffect, useState } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Work from "./components/Work";
import CursorFollower from "./components/CursorFollower";

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (localStorage.theme === 'dark') {
      setIsDarkMode(true);
    } else if (localStorage.theme === 'light') {
      setIsDarkMode(false);
    } else {
      setIsDarkMode(false); // Default to clean light mode
    }
  }, []);

  useEffect(() => {
    if (!mounted) return;
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
    }
  }, [isDarkMode, mounted]);

  const toggleTheme = () => {
    setIsDarkMode(prev => !prev);
  };

  return (
    <div className="relative min-h-screen bg-[#f4f5f8] dark:bg-[#08090d] text-slate-900 dark:text-zinc-100 transition-colors duration-400">
      <CursorFollower />
      <Navbar isDarkMode={isDarkMode} onToggleTheme={toggleTheme} />
      <Header isDarkMode={isDarkMode} />
      <About isDarkMode={isDarkMode} />
      <Work isDarkMode={isDarkMode} />
      <Contact isDarkMode={isDarkMode} />
      <Footer isDarkMode={isDarkMode} />
    </div>
  );
}

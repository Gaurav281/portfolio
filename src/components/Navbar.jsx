import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaSun, FaMoon } from 'react-icons/fa';
import { useTheme } from '../context/ThemeContext';
import { portfolioData } from '../data/portfolioData';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, setTheme } = useTheme();

  const navItems = ['Home', 'About', 'Services', 'Projects', 'Contact'];

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 dark:bg-slate-900/90 backdrop-blur-lg shadow-md'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="h-16 flex items-center justify-between">
          {/* LOGO */}
          <a
            href="#home"
            className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent"
          >
            { portfolioData.personalInfo.name}
          </a>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center gap-10">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="relative font-medium text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition"
              >
                {item}
                <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300 hover:w-full" />
              </a>
            ))}
          </div>

          {/* RIGHT ACTIONS */}
          <div className="flex items-center gap-4">
            {/* THEME TOGGLE */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="p-2 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 hover:from-blue-500/20 hover:to-purple-500/20 transition"
            >
              {theme === 'dark' ? (
                <FaSun className="text-yellow-400" />
              ) : (
                <FaMoon className="text-slate-700 dark:text-slate-300" />
              )}
            </button>

            {/* HAMBURGER */}
            <button
              onClick={() => setIsOpen(true)}
              className="md:hidden p-2 text-slate-700 dark:text-slate-300"
              aria-label="Open menu"
            >
              <FaBars size={22} />
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU OVERLAY */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* BACKDROP */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black z-40"
            />

            {/* SLIDE MENU */}
            <motion.div
              initial={{ y: '-100%' }}
              animate={{ y: 0 }}
              exit={{ y: '-100%' }}
              transition={{ type: 'spring', stiffness: 120, damping: 18 }}
              className="fixed top-0 left-0 right-0 bg-white dark:bg-slate-900 z-50 shadow-xl"
            >
              <div className="p-6">
                <div className="flex justify-between items-center mb-8">
                  <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Menu
                  </span>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="text-slate-700 dark:text-slate-300"
                    aria-label="Close menu"
                  >
                    <FaTimes size={24} />
                  </button>
                </div>

                <div className="flex flex-col gap-6">
                  {navItems.map((item) => (
                    <a
                      key={item}
                      href={`#${item.toLowerCase()}`}
                      onClick={() => setIsOpen(false)}
                      className="text-lg font-medium text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition"
                    >
                      {item}
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;

import React from 'react';
import { motion } from 'framer-motion';
import { FaDownload, FaArrowDown, FaCheckCircle } from 'react-icons/fa';
import { portfolioData } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';

const Home = () => {
  const { theme } = useTheme();

  return (
    <section id="home" className="min-h-screen flex items-center pt-16 relative">
      {/* Dotted Background */}
      <div className="absolute inset-0 
bg-[radial-gradient(rgba(148,163,184,0.4)_1.2px,transparent_1.2px)] 
[background-size:28px_28px] 
dark:bg-[radial-gradient(rgba(148,163,184,0.25)_1.2px,transparent_1.2px)]">
      </div>


      {/* Animated Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="space-y-6">
              <div>
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-600 dark:text-blue-400 text-sm font-medium border border-blue-200 dark:border-blue-800">
                  <FaCheckCircle /> Available for Hire
                </span>
              </div>

              <h1 className="text-5xl md:text-6xl font-bold text-slate-900 dark:text-white">
                Hi, I'm{' '}
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient"
                  style={{
                    backgroundSize: '200% 200%',
                    animation: 'gradient 4s ease infinite',
                  }}
                >
                  {portfolioData.personalInfo.name}
                </span>
              </h1>

              <p className="text-2xl text-slate-700 dark:text-slate-300 font-medium">
                {portfolioData.personalInfo.title}
              </p>

              <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                {portfolioData.personalInfo.bio}
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href={portfolioData.resumeUrl}
                  download
                  className="group px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold flex items-center gap-3 hover:shadow-2xl transition-all duration-300 hover:from-blue-700 hover:to-purple-700"
                >
                  <FaDownload className="group-hover:animate-bounce" />
                  Download CV
                </motion.a>

                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="#contact"
                  className="group px-8 py-4 rounded-xl border-2 border-blue-600 text-blue-600 dark:text-blue-400 font-semibold hover:bg-gradient-to-r hover:from-blue-600/10 hover:to-purple-600/10 dark:hover:from-blue-600/20 dark:hover:to-purple-600/20 transition-all duration-300"
                >
                  Get In Touch →
                </motion.a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            {/* Floating Experience Badge */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 3 }}
              className="absolute -top-4 -right-4 z-20"
            >
              <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-3 rounded-full shadow-2xl flex items-center gap-2">
                <span className="text-xl font-bold">2+</span>
                <span className="text-sm">Years of Projects Experience</span>
              </div>
            </motion.div>

            {/* Floating Available Badge */}
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 2.5, delay: 0.5 }}
              className="absolute -bottom-4 -left-4 z-20"
            >
              <div className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-6 py-3 rounded-full shadow-2xl flex items-center gap-2">
                <FaCheckCircle />
                <span className="text-sm font-medium">Available for Hire</span>
              </div>
            </motion.div>

            {/* Profile Image Container */}
            <div className="relative w-80 h-80 mx-auto">
              {/* Outer Glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full animate-spin-slow opacity-20 blur-xl"></div>

              {/* Inner Ring */}
              <div className="absolute inset-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full opacity-20 blur-lg"></div>

              {/* Profile Image */}
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white/20 dark:border-slate-800/20 shadow-2xl backdrop-blur-sm">
                <img
                  src={portfolioData.personalInfo.avatar}
                  alt={portfolioData.personalInfo.name}
                  className="w-full h-full object-cover object-[50%_35%] scale-100"

                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-4 md:bottom-2 left-1/2 transform -translate-x-1/2 hidden md:block"
        >
          <a href="#about" className="flex flex-col items-center gap-2 group">
            <span className="text-sm text-slate-500 dark:text-slate-400 group-hover:text-blue-600 transition-colors">
              Scroll to explore
            </span>
            <div className="w-6 h-10 border-2 border-slate-300 dark:border-slate-600 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-slate-400 dark:bg-slate-500 rounded-full mt-2 group-hover:bg-blue-500 group-hover:animate-bounce transition-all"></div>
            </div>
          </a>
        </motion.div>
      </div>


    </section>
  );
};

export default Home;
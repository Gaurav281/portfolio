import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaPalette, FaServer, FaMobile, FaRocket, FaShieldAlt, FaCloud, FaDatabase } from 'react-icons/fa';
import { portfolioData } from '../data/portfolioData';

const Services = () => {
  const iconComponents = {
    FaCode,
    FaPalette,
    FaServer,
    FaMobile,
    FaRocket,
    FaShieldAlt,
    FaCloud,
    FaDatabase
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  // Gradient colors for each service card
  const cardGradients = [
    'from-blue-500/20 via-blue-600/20 to-blue-700/20',
    'from-purple-500/20 via-purple-600/20 to-purple-700/20',
    'from-pink-500/20 via-pink-600/20 to-pink-700/20',
    'from-cyan-500/20 via-cyan-600/20 to-cyan-700/20',
    'from-emerald-500/20 via-emerald-600/20 to-emerald-700/20',
    'from-amber-500/20 via-amber-600/20 to-amber-700/20',
  ];

  return (
    <section id="services" className="py-20 bg-slate-50 dark:bg-slate-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-600 dark:text-blue-400 font-medium mb-4 border border-blue-200 dark:border-blue-800">
            My Services
          </span>
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
            What I <span className="text-blue-600 dark:text-blue-400">Offer</span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Comprehensive solutions to bring your digital ideas to life
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {portfolioData.services.map((service, index) => {
            const IconComponent = iconComponents[service.icon] || FaCode;
            
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group relative"
              >
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${cardGradients[index % cardGradients.length]} rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                
                {/* Main Card */}
                <div className="relative bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl p-8 border border-slate-200/50 dark:border-slate-700/50 shadow-lg hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-2 overflow-hidden">
                  
                  {/* Animated Border */}
                  <div className="absolute inset-0 rounded-2xl p-[1px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/20 to-transparent animate-shimmer"></div>
                  </div>
                  
                  {/* Icon */}
                  <div className="relative mb-6">
                    <div className="inline-flex p-4 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 text-white shadow-lg">
                      <IconComponent size={28} />
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="relative">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
                      {service.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    
                    {/* Hover Indicator */}
                    {/* <div className="flex items-center text-blue-600 dark:text-blue-400 font-medium">
                      <span className="mr-2 group-hover:translate-x-1 transition-transform">Learn more</span>
                      <svg className="w-4 h-4 transform group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </div> */}
                  </div>
                  
                  {/* Corner Accents */}
                  <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
                    <div className="absolute -top-8 -right-8 w-16 h-16 bg-gradient-to-br from-blue-500/20 to-transparent rounded-full"></div>
                  </div>
                  <div className="absolute bottom-0 left-0 w-16 h-16 overflow-hidden">
                    <div className="absolute -bottom-8 -left-8 w-16 h-16 bg-gradient-to-tr from-purple-500/20 to-transparent rounded-full"></div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
import React from 'react';
import { motion } from 'framer-motion';
import { FaHeart, FaArrowUp, FaLinkedin, FaGithub, FaTwitter, FaCode } from 'react-icons/fa';
import { portfolioData } from '../data/portfolioData';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-slate-900 dark:bg-slate-950 text-white pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              {portfolioData.personalInfo.name.split(' ')[0]}
            </h3>
            <p className="text-slate-400 mb-6">
              Passionate Software Development Engineer creating amazing digital experiences.
            </p>
            <div className="flex gap-4">
              {portfolioData.socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-slate-800 hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 transition-all"
                  aria-label={social.name}
                >
                  {social.name === 'LinkedIn' && <FaLinkedin />}
                  {social.name === 'GitHub' && <FaGithub />}
                  {social.name === 'Twitter' && <FaTwitter />}
                  {social.name === 'LeetCode' && <FaCode />}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'About', 'Services', 'Projects', 'Contact'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Services</h4>
            <ul className="space-y-3">
              {portfolioData.services.map((service, index) => (
                <li key={index}>
                  <a
                    href="#services"
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    {service.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="mt-1">
                  <svg className="w-4 h-4 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </div>
                <a
                  href={`mailto:${portfolioData.personalInfo.email}`}
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  {portfolioData.personalInfo.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1">
                  <svg className="w-4 h-4 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-slate-400">
                  {portfolioData.personalInfo.location}
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-slate-400 mb-4 md:mb-0">
            &copy; {currentYear} {portfolioData.personalInfo.name}. All rights reserved.
          </div>
          
          <div className="flex items-center gap-2 text-slate-400">
            Made with <FaHeart className="text-red-500 mx-1" /> by {portfolioData.personalInfo.name}
          </div>
          
          <button
            onClick={scrollToTop}
            className="mt-4 md:mt-0 p-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 hover:shadow-lg transition-all"
            aria-label="Back to top"
          >
            <FaArrowUp />
          </button>
        </div>

        {/* Download Resume Link */}
        <div className="mt-8 text-center">
          <a
            href={portfolioData.resumeUrl}
            download
            className="inline-flex items-center gap-2 px-6 py-2 rounded-full border border-slate-700 text-slate-400 hover:text-white hover:border-blue-500 transition-all"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Download Resume
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
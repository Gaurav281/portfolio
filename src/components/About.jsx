import React from 'react';
import { motion } from 'framer-motion';
import {
  FaGraduationCap,
  FaBriefcase,
  FaStar,
  FaCloud,
} from 'react-icons/fa';
import {
  SiJavascript,
  SiTailwindcss,
  SiNodedotjs,
  SiMongodb,
  SiReact,
  SiPython,
} from 'react-icons/si';
import { portfolioData } from '../data/portfolioData';

const About = () => {
  const { personalInfo, education, experience, skills } = portfolioData;

  const skillIconMap = {
    React: SiReact,
    JavaScript: SiJavascript,
    'Node.js': SiNodedotjs,
    Python: SiPython,
    MongoDB: SiMongodb,
    AWS: FaCloud,
    Tailwind: SiTailwindcss,
  };

  return (
    <section
      id="about"
      className="relative py-24 bg-gradient-to-b from-white via-slate-50 to-white dark:from-slate-900 dark:via-slate-900 dark:to-slate-800 overflow-x-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="inline-block px-6 py-2 rounded-full bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 text-blue-600 dark:text-blue-400 font-medium border border-blue-200/60 dark:border-blue-800 mb-5">
            About Me
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {personalInfo.title}
          </h2>
        </motion.div>

        {/* GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-10"
          >
            {/* BIO CARD */}
            <div className="relative bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl rounded-3xl p-8 border border-slate-200/50 dark:border-slate-700/50 shadow-xl">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                Hi, I’m {personalInfo.name} 👋
              </h3>
              <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                {personalInfo.bio}
              </p>

              <div className="mt-6 flex flex-wrap gap-4 text-sm">
                <span className="px-4 py-1 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400">
                  📍 {personalInfo.location}
                </span>
                <span className="px-4 py-1 rounded-full bg-purple-500/10 text-purple-600 dark:text-purple-400">
                  ✉️ {personalInfo.email}
                </span>
              </div>
            </div>

            {/* MARQUEE SKILLS */}
            <div className="relative bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl rounded-3xl p-8 border border-slate-200/50 dark:border-slate-700/50 shadow-xl">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6">
                Technologies I Work With
              </h3>

              <div className="marquee-wrapper">
                <div className="marquee-track gap-10 pr-10">
                  {[...skills, ...skills].map((skill, index) => {
                    const Icon = skillIconMap[skill.name] || FaCloud;
                    return (
                      <div
                        key={index}
                        className="min-w-[110px] flex flex-col items-center text-center"
                      >
                        <div className="p-4 rounded-2xl bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 text-blue-600 dark:text-blue-400 shadow-lg">
                          <Icon size={28} />
                        </div>
                        <span className="mt-2 text-sm font-medium text-slate-700 dark:text-slate-300">
                          {skill.name}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-10"
          >
            {/* EDUCATION */}
            <div className="relative bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-slate-800 dark:via-slate-800 dark:to-slate-900 rounded-3xl p-8 border dark:border-slate-700 shadow-xl">
              <div className="flex items-center gap-3 mb-6">
                <FaGraduationCap className="text-xl text-blue-600" />
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  Education
                </h3>
              </div>

              {education.map((edu, index) => (
                <div key={index} className="mb-6 last:mb-0">
                  <h4 className="font-semibold text-slate-900 dark:text-white">
                    {edu.degree}
                  </h4>
                  <p className="text-blue-600 dark:text-blue-400">
                    {edu.institution}
                  </p>
                  <div className="flex justify-between text-sm text-slate-500 dark:text-slate-400">
                    <span>{edu.year}</span>
                    <span className="text-emerald-600 dark:text-emerald-400">
                      {edu.grade}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* EXPERIENCE */}
            <div className="relative bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50 dark:from-slate-800 dark:via-slate-800 dark:to-slate-900 rounded-3xl p-8 border dark:border-slate-700 shadow-xl">
              <div className="flex items-center gap-3 mb-6">
                <FaBriefcase className="text-xl text-purple-600" />
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  Experience
                </h3>
              </div>

              {experience.map((exp, index) => (
                <div key={index} className="mb-6 last:mb-0">
                  <div className="flex justify-between items-center mb-3">
                    <div>
                      <h4 className="font-semibold text-slate-900 dark:text-white">
                        {exp.role}
                      </h4>
                      <p className="text-purple-600 dark:text-purple-400">
                        {exp.company}
                      </p>
                    </div>
                    <span className="text-xs px-3 py-1 rounded-full bg-purple-500/10 text-purple-600 dark:text-purple-400">
                      {exp.period}
                    </span>
                  </div>

                  <ul className="space-y-2">
                    {exp.description.map((item, i) => (
                      <li
                        key={i}
                        className="flex gap-2 text-sm text-slate-600 dark:text-slate-300"
                      >
                        <FaStar className="text-yellow-500 mt-1" size={12} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

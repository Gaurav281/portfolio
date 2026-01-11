import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaCode } from "react-icons/fa";
import { portfolioData } from "../data/portfolioData";

const Projects = () => {
  const projects = portfolioData.projects || [];

  /* Animations */
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12 },
    },
  };

  const cardVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <section
      id="projects"
      className="py-24 bg-gradient-to-b from-white to-slate-50 dark:from-slate-900 dark:to-slate-950 overflow-x-hidden"
    >
      <div className="container mx-auto px-6">

        {/* SECTION HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-600 dark:text-blue-400 font-medium mb-4 border border-blue-200 dark:border-blue-800">
            Portfolio
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-5">
            My <span className="text-blue-600 dark:text-blue-400">Projects</span>
          </h2>

          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            A curated selection of applications showcasing my skills in frontend,
            backend, and full-stack development.
          </p>
        </motion.div>

        {/* PROJECTS GRID */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              className="group relative"
            >
              {/* Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none" />

              {/* Card */}
              <div className="relative h-full bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-200/60 dark:border-slate-700/60 group-hover:-translate-y-2">

                {/* Image */}
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

                  {/* Live Button */}
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute bottom-4 right-4 flex items-center gap-2 px-4 py-2 bg-white/90 dark:bg-slate-900/90 backdrop-blur rounded-lg text-sm font-medium text-slate-900 dark:text-white hover:bg-white dark:hover:bg-slate-900 transition"
                  >
                    <FaExternalLinkAlt size={14} />
                    Live
                  </a>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col h-[calc(100%-13rem)]">
                  {/* Tech */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-xs font-medium rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-800"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                    {project.title}
                  </h3>

                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6 flex-grow">
                    {project.description}
                  </p>

                  {/* Links */}
                  <div className="flex items-center justify-between pt-4 border-t border-slate-100 dark:border-slate-700">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition"
                    >
                      <span className="p-2 rounded-lg bg-slate-100 dark:bg-slate-700">
                        <FaGithub />
                      </span>
                      <span className="text-sm font-medium">Code</span>
                    </a>

                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-slate-700 dark:text-slate-300 hover:text-purple-600 dark:hover:text-purple-400 transition"
                    >
                      <span className="p-2 rounded-lg bg-slate-100 dark:bg-slate-700">
                        <FaExternalLinkAlt />
                      </span>
                      <span className="text-sm font-medium">Demo</span>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* VIEW MORE */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600/10 to-purple-600/10 hover:from-blue-600/20 hover:to-purple-600/20 border border-blue-200 dark:border-blue-800 text-blue-600 dark:text-blue-400 font-semibold transition-all duration-300 hover:shadow-lg"
          >
            <FaCode />
            View More on GitHub
            <FaExternalLinkAlt size={14} />
          </a>
        </motion.div>

      </div>
    </section>
  );
};

export default Projects;

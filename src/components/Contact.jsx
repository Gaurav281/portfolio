import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane, FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';
import { portfolioData } from '../data/portfolioData';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Construct mailto link
    const mailtoLink = `mailto:${portfolioData.personalInfo.email}?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    
    // Open email client
    window.location.href = mailtoLink;
    
    // Simulate submission delay
    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    }, 2000);
  };

  const socialIcons = {
    LinkedIn: FaLinkedin,
    GitHub: FaGithub,
    Twitter: FaTwitter
  };

  return (
    <section id="contact" className="py-20 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20 text-blue-600 dark:text-blue-400 font-medium mb-4">
            Get In Touch
          </span>
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Contact <span className="text-blue-600 dark:text-blue-400">Me</span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Let's discuss your project and bring your ideas to life
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
                Contact Information
              </h3>
              
              <div className="space-y-6">
                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-blue-100 dark:bg-blue-900/30">
                    <FaEnvelope className="text-blue-600 dark:text-blue-400 text-xl" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 dark:text-white mb-1">
                      Email
                    </h4>
                    <a
                      href={`mailto:${portfolioData.personalInfo.email}`}
                      className="text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      {portfolioData.personalInfo.email}
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-purple-100 dark:bg-purple-900/30">
                    <FaMapMarkerAlt className="text-purple-600 dark:text-purple-400 text-xl" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 dark:text-white mb-1">
                      Location
                    </h4>
                    <p className="text-slate-600 dark:text-slate-300">
                      {portfolioData.personalInfo.location}
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-8 pt-8 border-t border-slate-200 dark:border-slate-700">
                <h4 className="font-semibold text-slate-900 dark:text-white mb-4">
                  Connect with me
                </h4>
                <div className="flex gap-4">
                  {portfolioData.socialLinks.map((social, index) => {
                    const Icon = socialIcons[social.name] || FaGithub;
                    return (
                      <a
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-full bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-white hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 shadow-md hover:shadow-lg transition-all"
                      >
                        <Icon size={20} />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Additional Info */}
            <div className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-8">
              <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
                Availability
              </h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-slate-600 dark:text-slate-300">Status</span>
                  <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-full text-sm font-medium">
                    Available for Work
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-600 dark:text-slate-300">Response Time</span>
                  <span className="font-semibold text-slate-900 dark:text-white">
                    Within 24 hours
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-600 dark:text-slate-300">Timezone</span>
                  <span className="font-semibold text-slate-900 dark:text-white">
                    UTC/GMT
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 border border-slate-100 dark:border-slate-700">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
                Send a Message
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="Project Inquiry"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    Your Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>
                
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-8 py-4 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold flex items-center justify-center gap-3 hover:shadow-xl transition-shadow disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <FaPaperPlane />
                      Send Message
                    </>
                  )}
                </motion.button>
                
                <p className="text-sm text-slate-500 dark:text-slate-400 text-center">
                  * This will open your default email client
                </p>
              </form>
            </div>
            
            {/* Quick Contact */}
            <div className="mt-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-6 text-white">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-lg mb-2">Need immediate assistance?</h4>
                  <p className="text-blue-100 text-sm">Feel free to email me directly</p>
                </div>
                <a
                  href={`mailto:${portfolioData.personalInfo.email}`}
                  className="px-6 py-2 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors"
                >
                  Quick Email
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
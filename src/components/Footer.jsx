import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Heart, ArrowUp } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/Mohammed-Azab",
      label: "GitHub",
      color: "hover:text-gray-300",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/mohammed-azab/",
      label: "LinkedIn",
      color: "hover:text-blue-400",
    },
    {
      icon: Mail,
      href: "mailto:Mohammed@azab.io",
      label: "Email",
      color: "hover:text-electric-blue",
    },
  ];

  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Publications", href: "#publications" },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-dark-surface border-t border-dark-border">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-circuit-pattern opacity-5"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 10 }} // Reduced movement from 20 to 10
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }} // Increased duration and added easing
              viewport={{ once: true, amount: 0.3 }} // Only trigger when 30% visible
            >
              <h3 className="text-2xl font-futuristic font-bold text-gradient mb-4">
                Mohammed Abdelazim
              </h3>
              <p className="text-gray-400 mb-6 max-w-md leading-relaxed">
                Mechatronics Engineering student passionate about robotics,
                control systems, and innovative technology solutions. Building
                the future through code and creativity.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target={social.href.startsWith("http") ? "_blank" : "_self"}
                    rel={
                      social.href.startsWith("http")
                        ? "noopener noreferrer"
                        : ""
                    }
                    className={`p-2 text-gray-400 ${social.color} transition-colors duration-200`}
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label={social.label}
                  >
                    <social.icon size={24} />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Quick Links */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold text-white mb-4">
                Quick Links
              </h4>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <motion.a
                      href={link.href}
                      className="text-gray-400 hover:text-electric-blue transition-colors duration-200"
                      whileHover={{ x: 5 }}
                    >
                      {link.name}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Contact Info */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold text-white mb-4">
                Get in Touch
              </h4>
              <div className="space-y-2 text-gray-400">
                <p>📧 Mohammed@azab.io</p>
                <p>📍 Berlin, Germany</p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="py-6 border-t border-dark-border">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 text-gray-400 text-sm"
            >
              <span>© 2025 Mohammed Abdelazim. Made with</span>
              <Heart size={16} className="text-red-500 animate-pulse" />
              <span>and lots of ☕</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 text-sm text-gray-400"
            >
              <span>Built with React + TailwindCSS</span>
              <motion.button
                onClick={scrollToTop}
                className="p-2 bg-electric-blue/10 border border-electric-blue/30 rounded-lg text-electric-blue hover:bg-electric-blue/20 transition-colors"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Back to top"
              >
                <ArrowUp size={16} />
              </motion.button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-electric-blue via-neon-green to-purple-500"></div>

      {/* Floating Particles */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-electric-blue rounded-full opacity-50"
          style={{
            top: `${20 + i * 30}%`,
            left: `${10 + i * 40}%`,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 1, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            delay: i * 1.5,
          }}
        />
      ))}
    </footer>
  );
};

export default Footer;

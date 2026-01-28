import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X, Github, Linkedin, Mail } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Get all sections
      const sections = [
        "home",
        "about",
        "experience",
        "education",
        "publications",
        "skills",
        "projects",
        "courses",
        "volunteering",
        "sports",
        "awards",
        "contact",
      ];
      const scrollPosition = window.scrollY + 100; // Offset for navbar height

      // Find which section is currently in view
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Call once to set initial state
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth-scroll without leaving a hash fragment in the URL
  const handleNav = (e, id) => {
    if (e) e.preventDefault();

    // Close menu first for better UX
    setIsOpen(false);

    // Small delay to allow menu to start closing, then scroll
    setTimeout(() => {
      const targetElement = document.getElementById(id);
      if (targetElement) {
        const offset = 80; // Approximate navbar height
        const top =
          targetElement.getBoundingClientRect().top +
          window.pageYOffset -
          offset;
        window.scrollTo({ top, behavior: "smooth" });
      }
      // Remove any hash from URL while keeping current path/query
      window.history.replaceState(
        null,
        "",
        window.location.pathname + window.location.search,
      );
    }, 100);
  };

  // If page loads with a hash, scroll once then strip it
  useEffect(() => {
    if (window.location.hash) {
      const id = window.location.hash.slice(1);
      const targetElement = document.getElementById(id);
      if (targetElement) {
        const offset = 80;
        const top =
          targetElement.getBoundingClientRect().top +
          window.pageYOffset -
          offset;
        window.scrollTo({ top, behavior: "smooth" });
        window.history.replaceState(
          null,
          "",
          window.location.pathname + window.location.search,
        );
      }
    }
  }, []);

  const navItems = [
    { name: "Home", href: "#home", id: "home" },
    { name: "About", href: "#about", id: "about" },
    { name: "Experience", href: "#experience", id: "experience" },
    { name: "Education", href: "#education", id: "education" },
    { name: "Publications", href: "#publications", id: "publications" },
    { name: "Skills", href: "#skills", id: "skills" },
    { name: "Projects", href: "#projects", id: "projects" },
    { name: "Courses", href: "#courses", id: "courses" },
    { name: "Volunteering", href: "#volunteering", id: "volunteering" },
    { name: "Sports", href: "#sports", id: "sports" },
    { name: "Awards", href: "#awards", id: "awards" },
    { name: "Contact", href: "#contact", id: "contact" },
  ];

  const socialLinks = [
    { icon: Github, href: "https://github.com/Mohammed-Azab", label: "GitHub" },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/mohammed-azab/",
      label: "LinkedIn",
    },
    { icon: Mail, href: "mailto:mohammed@azab.io", label: "Email" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-dark-bg/90 backdrop-blur-md border-b border-dark-border"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-16 gap-4">
          {/* Logo */}
          <motion.div
            className="flex-shrink-0 w-16"
            whileHover={{ scale: 1.05 }}
          >
            <a
              href="#home"
              onClick={(e) => handleNav(e, "home")}
              className="text-xl font-futuristic font-bold text-gradient"
            >
              MA
            </a>
          </motion.div>

          {/* Desktop Navigation - Horizontal Scrollable */}
          <div className="hidden xl:flex flex-1 justify-center items-center overflow-hidden">
            <div className="flex items-baseline justify-center gap-2 2xl:gap-4 overflow-x-auto scrollbar-hide px-4 max-w-full">
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => handleNav(e, item.id)}
                    className={`px-2 2xl:px-3 py-2 rounded-md text-xs 2xl:text-sm font-medium transition-all duration-200 whitespace-nowrap flex-shrink-0 ${
                      isActive
                        ? "text-electric-blue bg-electric-blue/10 border border-electric-blue/30"
                        : "text-gray-300 hover:text-electric-blue hover:bg-electric-blue/5"
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {item.name}
                  </motion.a>
                );
              })}
            </div>
          </div>

          {/* Social Links */}
          <div className="hidden xl:flex items-center gap-3 2xl:gap-4 flex-shrink-0">
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-electric-blue transition-colors duration-200"
                whileHover={{ scale: 1.2, rotate: 360 }}
                whileTap={{ scale: 0.9 }}
              >
                <social.icon size={20} />
              </motion.a>
            ))}
          </div>

          {/* Mobile/Tablet menu button */}
          <div className="xl:hidden ml-auto">
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-400 hover:text-electric-blue"
              whileTap={{ scale: 0.95 }}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile/Tablet Navigation */}
      <motion.div
        initial={false}
        animate={
          isOpen ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }
        }
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="xl:hidden overflow-hidden bg-dark-surface/95 backdrop-blur-md border-b border-dark-border"
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navItems.map((item, index) => {
            const isActive = activeSection === item.id;
            return (
              <motion.a
                key={item.name}
                href={item.href}
                onClick={(e) => handleNav(e, item.id)}
                className={`block px-3 py-2 rounded-md text-base font-medium cursor-pointer ${
                  isActive
                    ? "text-electric-blue bg-electric-blue/10 border border-electric-blue/30"
                    : "text-gray-300 hover:text-electric-blue hover:bg-electric-blue/5"
                }`}
                initial={false}
                animate={isOpen ? { x: 0, opacity: 1 } : { x: -20, opacity: 0 }}
                transition={{ delay: isOpen ? index * 0.05 : 0, duration: 0.2 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.name}
              </motion.a>
            );
          })}

          {/* Mobile Social Links */}
          <div className="flex items-center space-x-4 px-3 py-2">
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-electric-blue transition-colors duration-200"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <social.icon size={20} />
              </motion.a>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;

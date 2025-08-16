import React, { useState, useEffect } from "react";

import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Github,
  ExternalLink,
  Calendar,
  Crown,
  X,
  ZoomIn,
  ZoomOut,
} from "lucide-react";
import { projectsData, projectCategories } from "../data/projects";
import AnimatedLottie from "./AnimatedLottie";
import fireAnim from "../animation/Fire/animations/30949077-b689-4718-85ea-341dc646bc35.json";
import droneAnim from "../animation/drone/animations/6cb975bb-c16c-4507-81b2-8d2d7a61d935.json";

const Projects = () => {
  useEffect(() => {
    // Simulate loading delay for better UX
    const timer = setTimeout(() => {
      setLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, []);
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [loading, setLoading] = useState(false); // Set to false since we're using static data
  const [expandedId, setExpandedId] = useState(null);
  const [lightbox, setLightbox] = useState({
    open: false,
    src: null,
    alt: null,
    scale: 1,
  });
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Lightbox keyboard controls (Esc to close, +/- to zoom)
  useEffect(() => {
    if (!lightbox.open) return;
    const onKey = (e) => {
      if (e.key === "Escape") {
        setLightbox({ open: false, src: null, alt: null, scale: 1 });
      } else if (e.key === "+") {
        setLightbox((s) => ({ ...s, scale: Math.min(4, s.scale + 0.2) }));
      } else if (e.key === "-") {
        setLightbox((s) => ({ ...s, scale: Math.max(1, s.scale - 0.2) }));
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightbox.open]);

  // Transform projects data to match the expected format
  const githubProjects = projectsData.map((project) => ({
    id: project.id,
    name: project.title,
    description: project.description,
    longDescription: project.longDescription || project.description,
    technologies: project.technologies,
    category: project.category,
    github: project.github,
    demo: project.demo,
    achievement: project.achievement,
    features: project.features || [],
    images: project.images || [],

    language: project.technologies[0], // Use first technology as primary language
    timeline: project.timeline,
  }));

  // Use imported categories instead of generating them
  const categories = projectCategories;

  const expandedProject = expandedId
    ? githubProjects.find((p) => p.id === expandedId)
    : null;

  // Filter projects by category
  const filteredProjects =
    selectedCategory === "All"
      ? githubProjects
      : githubProjects.filter(
          (project) => project.category === selectedCategory
        );

  const getLanguageColor = (language) => {
    const colors = {
      "C++": "#f34b7d",
      Python: "#3572A5",
      JavaScript: "#f1e05a",
      MATLAB: "#e16737",
      C: "#555555",
      TypeScript: "#2b7489",
    };
    return colors[language] || "#8b5cf6";
  };

  const getTechBadge = (tech) => {
    const techBadges = {
      // Languages
      Python:
        "https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54",
      Java: "https://img.shields.io/badge/java-%23ED8B00.svg?style=for-the-badge&logo=openjdk&logoColor=white",
      JavaScript:
        "https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E",
      CSS: "https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white",
      "C++":
        "https://img.shields.io/badge/c++-%2300599C.svg?style=for-the-badge&logo=c%2B%2B&logoColor=white",
      C: "https://img.shields.io/badge/c-%2300599C.svg?style=for-the-badge&logo=c&logoColor=white",
      VHDL: "https://img.shields.io/badge/VHDL-%23A5915F.svg?style=for-the-badge&logo=verilog&logoColor=white",
      "x86 Assembly":
        "https://img.shields.io/badge/assembly%20script-%23000000.svg?style=for-the-badge&logo=assemblyscript&logoColor=white",

      // Frameworks & Tools
      ROS2: "https://img.shields.io/badge/ros2-%230A0FF9.svg?style=for-the-badge&logo=ros&logoColor=white",
      JavaFX:
        "https://img.shields.io/badge/javafx-%23FF0000.svg?style=for-the-badge&logo=javafx&logoColor=white",
      FreeRTOS:
        "https://img.shields.io/badge/freertos-%23000000.svg?style=for-the-badge&logo=freertos&logoColor=white",

      // Hardware
      "NVIDIA Jetson":
        "https://img.shields.io/badge/nVIDIA_Jetson-%2376B900.svg?style=for-the-badge&logo=nVIDIA&logoColor=white",
      ESP32:
        "https://img.shields.io/badge/ESP32-%23000000.svg?style=for-the-badge&logo=espressif&logoColor=white",
      STM32:
        "https://img.shields.io/badge/STM32-%230073C7.svg?style=for-the-badge&logo=stmicroelectronics&logoColor=white",
      FPGA: "https://img.shields.io/badge/FPGA-%230071C5.svg?style=for-the-badge&logo=intel&logoColor=white",
      Arduino:
        "https://img.shields.io/badge/-Arduino-00979D?style=for-the-badge&logo=Arduino&logoColor=white",

      // Software & Tools
      MATLAB: "https://img.shields.io/badge/MATLAB-0076A8?style=for-the-badge",
      Simulink:
        "https://img.shields.io/badge/Simulink-0076A8?style=for-the-badge",
      Git: "https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white",
      GitHub:
        "https://img.shields.io/badge/GitHub-%23121011.svg?style=for-the-badge&logo=github&logoColor=white",
      "Altera Quartus":
        "https://img.shields.io/badge/Quartus-%230071C5.svg?style=for-the-badge&logo=intel&logoColor=white",

      // Control Systems
      PID: "https://img.shields.io/badge/PID-orange?style=for-the-badge",
      "Lead–Lag":
        "https://img.shields.io/badge/Lead--Lag-green?style=for-the-badge",
      MPC: "https://img.shields.io/badge/MPC-violet?style=for-the-badge",

      // AI/ML
      AI: "https://img.shields.io/badge/AI-%23FF6F00.svg?style=for-the-badge&logo=tensorflow&logoColor=white",
      OpenCV:
        "https://img.shields.io/badge/opencv-%23white.svg?style=for-the-badge&logo=opencv&logoColor=white",

      // Specialized
      SLAM: "https://img.shields.io/badge/SLAM-blue?style=for-the-badge",
      "AES‑128":
        "https://img.shields.io/badge/AES--128-red?style=for-the-badge",
      NLP: "https://img.shields.io/badge/NLP-%234285F4.svg?style=for-the-badge&logo=google&logoColor=white",
      RViz: "https://img.shields.io/badge/RViz-%230A0FF9.svg?style=for-the-badge&logo=ros&logoColor=white",
      Gazebo:
        "https://img.shields.io/badge/Gazebo-%23FF6600.svg?style=for-the-badge&logo=gazebo&logoColor=white",

      // Technical/Algorithms
      "Extended Kalman Filter":
        "https://img.shields.io/badge/Extended_Kalman_Filter-purple?style=for-the-badge",
      "Matrix Theory":
        "https://img.shields.io/badge/Matrix_Theory-darkblue?style=for-the-badge",
      "Digital Signal Processing":
        "https://img.shields.io/badge/DSP-darkgreen?style=for-the-badge",

      // Communication/Protocols
      MQTT: "https://img.shields.io/badge/MQTT-3C5280?style=for-the-badge&logo=eclipsemosquitto&logoColor=white",
      UART: "https://img.shields.io/badge/UART-orange?style=for-the-badge",

      // Hardware/Sensors
      "Thermal LiDAR":
        "https://img.shields.io/badge/Thermal_LiDAR-red?style=for-the-badge",
      Servo: "https://img.shields.io/badge/Servo-blue?style=for-the-badge",
      Ultrasonic:
        "https://img.shields.io/badge/Ultrasonic-lightblue?style=for-the-badge",
    };

    return techBadges[tech] || null;
  };

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-surface via-dark-bg to-dark-surface opacity-50"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-futuristic font-bold mb-6"
          >
            Featured <span className="text-gradient">Projects</span>
          </motion.h2>

          <motion.div
            variants={itemVariants}
            className="w-24 h-1 bg-gradient-to-r from-electric-blue to-neon-green mx-auto mb-8"
          ></motion.div>

          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-400 max-w-3xl mx-auto"
          >
            A showcase of my engineering projects, from embedded systems and
            robotics to control algorithms and IoT solutions. Each project
            represents a step forward in my journey of innovation and technical
            excellence.
          </motion.p>
        </motion.div>

        {/* Category Filter Buttons */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              variants={itemVariants}
              onClick={() => {
                setSelectedCategory(category);
                setExpandedId(null); // Reset expanded state when filtering
              }}
              className={`px-6 py-3 rounded-lg font-medium text-sm transition-all duration-300 flex items-center gap-2 ${
                selectedCategory === category
                  ? "bg-gradient-to-r from-electric-blue to-neon-green text-dark-bg shadow-lg"
                  : "bg-dark-surface border border-dark-border text-gray-300 hover:border-electric-blue hover:text-electric-blue"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>{category}</span>
              <span
                className={`text-xs px-2 py-1 rounded-full ${
                  selectedCategory === category
                    ? "bg-dark-bg/20 text-dark-bg"
                    : "bg-electric-blue/20 text-electric-blue"
                }`}
              >
                {category === "All"
                  ? githubProjects.length
                  : githubProjects.filter((p) => p.category === category)
                      .length}
              </span>
            </motion.button>
          ))}
        </motion.div>

        {/* Filter Status */}
        {selectedCategory !== "All" && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-8"
          >
            <span className="text-gray-400 text-sm">
              Showing {filteredProjects.length} project
              {filteredProjects.length !== 1 ? "s" : ""} in{" "}
              <span className="text-electric-blue font-medium">
                {selectedCategory}
              </span>
            </span>
          </motion.div>
        )}

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, index) => (
              <motion.div
                key={index}
                className="bg-dark-surface border border-dark-border rounded-lg p-6 animate-pulse"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="h-4 bg-gray-700 rounded w-3/4 mb-4"></div>
                <div className="h-3 bg-gray-700 rounded w-full mb-2"></div>
                <div className="h-3 bg-gray-700 rounded w-2/3 mb-4"></div>
                <div className="flex gap-2 mb-4">
                  <div className="h-6 bg-gray-700 rounded w-16"></div>
                  <div className="h-6 bg-gray-700 rounded w-20"></div>
                  <div className="h-6 bg-gray-700 rounded w-14"></div>
                </div>
                <div className="flex justify-between items-center">
                  <div className="h-8 bg-gray-700 rounded w-20"></div>
                  <div className="h-8 bg-gray-700 rounded w-20"></div>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div>
            {/* Expanded single project view (top) */}
            <AnimatePresence>
              {expandedId !== null && expandedProject && (
                <motion.div
                  key={expandedProject.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.3 }}
                  className="bg-dark-surface border border-dark-border rounded-2xl overflow-hidden p-6 md:p-8 lg:p-10 mb-10"
                >
                  <div className="flex flex-col gap-6">
                    {/* Header */}
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                      <div>
                        <h3 className="text-2xl md:text-3xl font-bold text-white">
                          {expandedProject.name}
                        </h3>
                        {/* Achievement */}
                        {expandedProject.achievement && (
                          <div className="mt-3 mb-2">
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-electric-blue/10 to-neon-green/10 border border-electric-blue/20 rounded-lg">
                              <Crown className="w-4 h-4 text-yellow-400" />
                              <span className="text-sm text-electric-blue font-medium">
                                {expandedProject.achievement}
                              </span>
                            </div>
                          </div>
                        )}
                        <p className="text-gray-400 mt-2 max-w-3xl">
                          {expandedProject.description}
                        </p>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-gray-300">
                        {expandedProject.language && (
                          <div className="flex items-center gap-2">
                            <span
                              className="w-3 h-3 rounded-full"
                              style={{
                                backgroundColor: getLanguageColor(
                                  expandedProject.language
                                ),
                              }}
                            ></span>
                            <span>{expandedProject.language}</span>
                          </div>
                        )}


                        <div className="flex items-center gap-1">
                          <Calendar size={16} />
                          <span>
                            {new Date(
                              expandedProject.updated
                            ).toLocaleDateString()}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Main content: full description first */}
                    <div>
                      {/* Sections */}
                      <div className="space-y-6">
                        <section>
                          <h4 className="text-neon-green font-semibold mb-2">
                            Overview
                          </h4>
                          <p className="text-gray-300 leading-relaxed whitespace-pre-line">
                            {expandedProject.longDescription}
                          </p>
                        </section>

                        <section>
                          <h4 className="text-neon-green font-semibold mb-2">
                            Technologies
                          </h4>
                          <div className="flex flex-wrap gap-3">
                            {expandedProject.technologies.map((tech) => {
                              const badgeUrl = getTechBadge(tech);
                              return (
                                <div
                                  key={tech}
                                  className="hover:scale-105 transition-transform duration-200"
                                >
                                  {badgeUrl ? (
                                    <img
                                      src={badgeUrl}
                                      alt={tech}
                                      className="h-7 object-contain hover:shadow-lg transition-shadow duration-200"
                                      loading="lazy"
                                    />
                                  ) : (
                                    <span className="px-3 py-1 bg-dark-bg border border-electric-blue/30 rounded-full text-xs text-electric-blue font-mono">
                                      {tech}
                                    </span>
                                  )}
                                </div>
                              );
                            })}
                          </div>
                        </section>

                        <section>
                          <h4 className="text-neon-green font-semibold mb-2">
                            Highlights
                          </h4>
                          <ul className="list-disc list-inside text-gray-300 space-y-1">
                            {(expandedProject.features &&
                            expandedProject.features.length > 0
                              ? expandedProject.features
                              : [
                                  "Clear objectives and measurable outcomes",
                                  "Robust architecture and reliability",
                                  "Demonstrated end-to-end validation",
                                ]
                            ).map((f, i) => (
                              <li key={i}>{f}</li>
                            ))}
                          </ul>
                        </section>

                        {/* Photos at the end */}
                        <section>
                          <h4 className="text-neon-green font-semibold mb-2">
                            Photos
                          </h4>
                          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                            {((expandedProject.images || []).length
                              ? expandedProject.images
                              : [
                                  "/images/projects/project-placeholder.svg",
                                  "/images/projects/project-placeholder.svg",
                                  "/images/projects/project-placeholder.svg",
                                ]
                            ).map((src, idx) => (
                              <button
                                key={idx}
                                onClick={() =>
                                  setLightbox({
                                    open: true,
                                    src,
                                    alt: `${expandedProject.name} photo ${
                                      idx + 1
                                    }`,
                                    scale: 1,
                                  })
                                }
                                className="relative group aspect-video overflow-hidden rounded-lg border border-dark-border bg-transparent hover:ring-2 hover:ring-electric-blue transition-all duration-300"
                                aria-label="Open photo"
                              >
                                <img
                                  src={src}
                                  alt={`Project photo ${idx + 1}`}
                                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 bg-transparent"
                                />
                                {/* Hover overlay with zoom indicator */}
                                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                  <div className="bg-white/90 rounded-full p-2">
                                    <ZoomIn className="w-6 h-6 text-gray-800" />
                                  </div>
                                </div>
                              </button>
                            ))}
                          </div>
                        </section>

                        <div className="flex flex-wrap gap-3 pt-2">
                          <motion.a
                            href={expandedProject.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-2 py-2 px-4 bg-dark-bg border border-electric-blue text-electric-blue rounded-lg text-sm font-medium hover:bg-electric-blue hover:text-dark-bg transition-colors"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            <Github size={16} />
                            Code
                          </motion.a>
                          {expandedProject.demo && (
                            <motion.a
                              href={expandedProject.demo}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center justify-center gap-2 py-2 px-4 bg-gradient-to-r from-electric-blue to-neon-green text-dark-bg rounded-lg text-sm font-medium hover:scale-105 transition-transform"
                              whileHover={{ scale: 1.02 }}
                              whileTap={{ scale: 0.98 }}
                            >
                              <ExternalLink size={16} />
                              Demo
                            </motion.a>
                          )}
                          <button
                            onClick={() => setExpandedId(null)}
                            className="ml-auto py-2 px-4 bg-gray-700/60 hover:bg-gray-600 text-white rounded-lg text-sm font-medium border border-dark-border"
                          >
                            Show Less
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Lightbox for photos */}
            <AnimatePresence>
              {lightbox.open && (
                <motion.div
                  className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={(e) => {
                    if (e.target === e.currentTarget)
                      setLightbox({
                        open: false,
                        src: null,
                        alt: null,
                        scale: 1,
                      });
                  }}
                >
                  {/* Control buttons */}
                  <div className="absolute top-4 right-4 flex gap-2 z-10">
                    <button
                      onClick={() =>
                        setLightbox((s) => ({
                          ...s,
                          scale: Math.min(4, s.scale + 0.2),
                        }))
                      }
                      className="p-2 bg-gray-700/80 hover:bg-gray-600/80 text-white rounded-lg transition-colors"
                      title="Zoom In (+)"
                    >
                      <ZoomIn className="w-5 h-5" />
                    </button>
                    <button
                      onClick={() =>
                        setLightbox((s) => ({
                          ...s,
                          scale: Math.max(1, s.scale - 0.2),
                        }))
                      }
                      className="p-2 bg-gray-700/80 hover:bg-gray-600/80 text-white rounded-lg transition-colors"
                      title="Zoom Out (-)"
                    >
                      <ZoomOut className="w-5 h-5" />
                    </button>
                    <button
                      onClick={() =>
                        setLightbox({
                          open: false,
                          src: null,
                          alt: null,
                          scale: 1,
                        })
                      }
                      className="p-2 bg-gray-700/80 hover:bg-gray-600/80 text-white rounded-lg transition-colors"
                      title="Close (Esc)"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>
                  <motion.img
                    key={lightbox.src}
                    src={lightbox.src}
                    alt={lightbox.alt || "Project photo"}
                    style={{ transform: `scale(${lightbox.scale})` }}
                    className="max-h-[85vh] max-w-[90vw] object-contain rounded bg-transparent"
                    onWheel={(e) => {
                      setLightbox((s) => ({
                        ...s,
                        scale: Math.max(
                          1,
                          Math.min(4, s.scale + (e.deltaY < 0 ? 0.1 : -0.1))
                        ),
                      }));
                    }}
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.9, opacity: 0 }}
                  />
                  {/* Caption */}
                  {lightbox.alt && (
                    <div className="absolute bottom-4 left-4 right-4 text-center">
                      <div className="bg-black/80 rounded-lg px-4 py-2 inline-block">
                        <p className="text-white text-sm">{lightbox.alt}</p>
                      </div>
                    </div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>

            {/* Grid view (default) */}
            {expandedId === null && (
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {filteredProjects.map((project) => (
                  <motion.div
                    key={project.id}
                    variants={itemVariants}
                    className="bg-dark-surface border border-dark-border rounded-lg overflow-hidden card-hover group"
                    whileHover={{ y: -5 }}
                  >
                    <div className="relative p-6">
                      {/* Project Animation - minimized and in outer frame */}
                      {(project.name === "TriFlameX Rocket" ||
                        project.name === "SkyMindOS") && (
                        <div className="absolute top-4 right-4 flex items-center justify-center z-10">
                          {project.name === "TriFlameX Rocket" && (
                            <AnimatedLottie
                              animationData={fireAnim}
                              className="w-10 h-10"
                            />
                          )}
                          {project.name === "SkyMindOS" && (
                            <AnimatedLottie
                              animationData={droneAnim}
                              className="w-8 h-8"
                            />
                          )}
                        </div>
                      )}

                      {/* Project Header */}
                      <div className="flex items-start justify-between mb-4">
                        <h3 className="text-xl font-bold text-white group-hover:text-electric-blue transition-colors">
                          {project.name}
                        </h3>
                        <div className="flex items-center gap-2">
                          {project.language && (
                            <div
                              className="w-3 h-3 rounded-full"
                              style={{
                                backgroundColor: getLanguageColor(
                                  project.language
                                ),
                              }}
                            ></div>
                          )}
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                        {project.description}
                      </p>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.technologies.slice(0, 4).map((tech) => {
                          const badgeUrl = getTechBadge(tech);
                          return (
                            <div
                              key={tech}
                              className="hover:scale-105 transition-transform duration-200"
                            >
                              {badgeUrl ? (
                                <img
                                  src={badgeUrl}
                                  alt={tech}
                                  className="h-6 object-contain hover:shadow-lg transition-shadow duration-200"
                                  loading="lazy"
                                />
                              ) : (
                                <span className="px-3 py-1 bg-dark-bg border border-electric-blue/30 rounded-full text-xs text-electric-blue font-mono">
                                  {tech}
                                </span>
                              )}
                            </div>
                          );
                        })}
                        {project.technologies.length > 4 && (
                          <span className="px-3 py-1 bg-dark-bg border border-gray-600 rounded-full text-xs text-gray-400 font-mono">
                            +{project.technologies.length - 4}
                          </span>
                        )}
                      </div>

                      {/* Timeline */}
                      <div className="flex items-center gap-2 mb-4 text-sm text-gray-500">
                        <Calendar size={14} />
                        <span>{project.timeline}</span>
                      </div>

                      {/* Achievement */}
                      {project.achievement && (
                        <div className="mb-4 p-3 bg-gradient-to-r from-electric-blue/10 to-neon-green/10 border border-electric-blue/20 rounded-lg">
                          <p className="text-sm text-electric-blue font-medium leading-relaxed">
                            🏆 {project.achievement}
                          </p>
                        </div>
                      )}

                      {/* Action Buttons */}
                      <div className="flex gap-3">
                        <motion.a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 flex items-center justify-center gap-2 py-2 px-4 bg-dark-bg border border-electric-blue text-electric-blue rounded-lg text-sm font-medium hover:bg-electric-blue hover:text-dark-bg transition-colors"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <Github size={16} />
                          Code
                        </motion.a>

                        {project.demo && (
                          <motion.a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 flex items-center justify-center gap-2 py-2 px-4 bg-gradient-to-r from-electric-blue to-neon-green text-dark-bg rounded-lg text-sm font-medium hover:scale-105 transition-transform"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            <ExternalLink size={16} />
                            Demo
                          </motion.a>
                        )}
                      </div>
                      {/* Expand Button */}
                      <button
                        className="mt-4 w-full py-2 px-4 bg-electric-blue text-dark-bg rounded-lg font-semibold hover:bg-neon-green transition-colors"
                        onClick={() => setExpandedId(project.id)}
                      >
                        Show Details
                      </button>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}
            {/* Other projects below expanded (when expanded) */}
            {expandedId !== null && (
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {filteredProjects
                  .filter((p) => p.id !== expandedId)
                  .map((project) => (
                    <motion.div
                      key={project.id}
                      variants={itemVariants}
                      className="bg-dark-surface border border-dark-border rounded-lg overflow-hidden card-hover group"
                      whileHover={{ y: -5 }}
                    >
                      <div className="relative p-6">
                        <div className="flex items-start justify-between mb-4">
                          <h3 className="text-xl font-bold text-white group-hover:text-electric-blue transition-colors">
                            {project.name}
                          </h3>
                          <div className="flex items-center gap-2">
                            {project.language && (
                              <div
                                className="w-3 h-3 rounded-full"
                                style={{
                                  backgroundColor: getLanguageColor(
                                    project.language
                                  ),
                                }}
                              ></div>
                            )}
                          </div>
                        </div>
                        <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                          {project.description}
                        </p>
                        <div className="flex flex-wrap gap-2 mb-6">
                          {project.technologies.slice(0, 4).map((tech) => {
                            const badgeUrl = getTechBadge(tech);
                            return (
                              <div
                                key={tech}
                                className="hover:scale-105 transition-transform duration-200"
                              >
                                {badgeUrl ? (
                                  <img
                                    src={badgeUrl}
                                    alt={tech}
                                    className="h-6 object-contain hover:shadow-lg transition-shadow duration-200"
                                    loading="lazy"
                                  />
                                ) : (
                                  <span className="px-3 py-1 bg-dark-bg border border-electric-blue/30 rounded-full text-xs text-electric-blue font-mono">
                                    {tech}
                                  </span>
                                )}
                              </div>
                            );
                          })}
                        </div>
                        <div className="flex gap-3">
                          <motion.a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 flex items-center justify-center gap-2 py-2 px-4 bg-dark-bg border border-electric-blue text-electric-blue rounded-lg text-sm font-medium hover:bg-electric-blue hover:text-dark-bg transition-colors"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            <Github size={16} />
                            Code
                          </motion.a>
                          {project.demo && (
                            <motion.a
                              href={project.demo}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex-1 flex items-center justify-center gap-2 py-2 px-4 bg-gradient-to-r from-electric-blue to-neon-green text-dark-bg rounded-lg text-sm font-medium hover:scale-105 transition-transform"
                              whileHover={{ scale: 1.02 }}
                              whileTap={{ scale: 0.98 }}
                            >
                              <ExternalLink size={16} />
                              Demo
                            </motion.a>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  ))}
              </motion.div>
            )}
          </div>
        )}

        {/* GitHub CTA */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mt-16"
        >
          <motion.a
            href="https://github.com/Mohammed-Azab"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-electric-blue to-neon-green text-dark-bg rounded-lg font-bold text-lg hover:scale-105 transition-transform"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Github size={24} />
            View All Projects on GitHub
          </motion.a>
        </motion.div>
      </div>

      {/* Section Divider */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-electric-blue to-transparent opacity-50"></div>
    </section>
  );
};

export default Projects;

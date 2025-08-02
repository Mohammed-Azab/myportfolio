import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Github, ExternalLink, Star, GitFork, Calendar } from 'lucide-react'

const Projects = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [githubProjects, setGithubProjects] = useState([])
  const [loading, setLoading] = useState(true)

  // Featured projects data (fallback if GitHub API fails)
  const featuredProjects = [
    {
      id: 1,
      name: "TriFlameX Rocket",
      description: "Advanced rocket control system with real-time telemetry and autonomous flight capabilities. Features custom PCB design and embedded software for flight control.",
      technologies: ["C++", "STM32", "PCB Design", "Telemetry", "Control Systems"],
      github: "https://github.com/Mohammed-Azab/TriFlameX",
      demo: null,
      stars: 15,
      forks: 3,
      language: "C++",
      updated: "2024-01-15"
    },
    {
      id: 2,
      name: "SkyMindOS",
      description: "Intelligent drone operating system with autonomous navigation, obstacle avoidance, and mission planning capabilities using computer vision and machine learning.",
      technologies: ["Python", "ROS2", "Computer Vision", "Machine Learning", "Autonomous Systems"],
      github: "https://github.com/Mohammed-Azab/SkyMindOS",
      demo: "https://skymindos-demo.vercel.app",
      stars: 28,
      forks: 7,
      language: "Python",
      updated: "2024-02-20"
    },
    {
      id: 3,
      name: "Robotic Arm Controller",
      description: "6-DOF robotic arm with inverse kinematics, path planning, and precise positioning control. Includes simulation environment and real-time control interface.",
      technologies: ["MATLAB", "Simulink", "Kinematics", "Control Theory", "Simulation"],
      github: "https://github.com/Mohammed-Azab/RoboArm-Controller",
      demo: null,
      stars: 12,
      forks: 4,
      language: "MATLAB",
      updated: "2023-12-10"
    },
    {
      id: 4,
      name: "Smart Greenhouse IoT",
      description: "IoT-based greenhouse monitoring and control system with environmental sensors, automated irrigation, and remote monitoring capabilities.",
      technologies: ["Arduino", "IoT", "Sensors", "Node.js", "React", "MongoDB"],
      github: "https://github.com/Mohammed-Azab/Smart-Greenhouse",
      demo: "https://greenhouse-monitor.vercel.app",
      stars: 20,
      forks: 8,
      language: "JavaScript",
      updated: "2024-01-05"
    },
    {
      id: 5,
      name: "PID Controller Library",
      description: "High-performance PID controller implementation with auto-tuning capabilities, designed for embedded systems and real-time applications.",
      technologies: ["C", "Embedded Systems", "Control Theory", "Real-time"],
      github: "https://github.com/Mohammed-Azab/PID-Controller-Lib",
      demo: null,
      stars: 35,
      forks: 12,
      language: "C",
      updated: "2024-03-01"
    },
    {
      id: 6,
      name: "Mechatronics Toolkit",
      description: "Comprehensive toolkit for mechatronics engineers with simulation tools, control system design utilities, and embedded system templates.",
      technologies: ["Python", "MATLAB", "C++", "Simulation", "Tools"],
      github: "https://github.com/Mohammed-Azab/Mechatronics-Toolkit",
      demo: "https://mechatronics-toolkit.github.io",
      stars: 42,
      forks: 15,
      language: "Python",
      updated: "2024-02-28"
    }
  ]

  useEffect(() => {
    // Simulate GitHub API call - replace with actual API call
    const fetchGithubProjects = async () => {
      try {
        // Simulated delay
        await new Promise(resolve => setTimeout(resolve, 1000))
        setGithubProjects(featuredProjects)
      } catch (error) {
        console.error('Error fetching GitHub projects:', error)
        setGithubProjects(featuredProjects)
      } finally {
        setLoading(false)
      }
    }

    fetchGithubProjects()
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

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
  }

  const getLanguageColor = (language) => {
    const colors = {
      'C++': '#f34b7d',
      'Python': '#3572A5',
      'JavaScript': '#f1e05a',
      'MATLAB': '#e16737',
      'C': '#555555',
      'TypeScript': '#2b7489'
    }
    return colors[language] || '#8b5cf6'
  }

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
            A showcase of my engineering projects, from embedded systems and robotics 
            to control algorithms and IoT solutions. Each project represents a step forward 
            in my journey of innovation and technical excellence.
          </motion.p>
        </motion.div>

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
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {githubProjects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                className="bg-dark-surface border border-dark-border rounded-lg overflow-hidden card-hover group"
                whileHover={{ y: -5 }}
              >
                <div className="p-6">
                  {/* Project Header */}
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-bold text-white group-hover:text-electric-blue transition-colors">
                      {project.name}
                    </h3>
                    <div className="flex items-center gap-2">
                      {project.language && (
                        <div 
                          className="w-3 h-3 rounded-full"
                          style={{ backgroundColor: getLanguageColor(project.language) }}
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
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-dark-bg border border-electric-blue/30 rounded-full text-xs text-electric-blue font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-3 py-1 bg-dark-bg border border-gray-600 rounded-full text-xs text-gray-400 font-mono">
                        +{project.technologies.length - 4}
                      </span>
                    )}
                  </div>

                  {/* Stats */}
                  <div className="flex items-center gap-4 mb-6 text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <Star size={14} />
                      <span>{project.stars}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <GitFork size={14} />
                      <span>{project.forks}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar size={14} />
                      <span>{new Date(project.updated).toLocaleDateString()}</span>
                    </div>
                  </div>

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
                </div>
              </motion.div>
            ))}
          </motion.div>
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
    </section>
  )
}

export default Projects

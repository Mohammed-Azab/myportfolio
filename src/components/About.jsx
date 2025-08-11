import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Cpu, Cog, Code, Zap } from 'lucide-react'

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
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

  const features = [
    {
      icon: Cpu,
      title: "Embedded Systems",
      description: "Developing efficient firmware and hardware integration solutions"
    },
    {
      icon: Cog,
      title: "Control Systems",
      description: "Designing PID controllers and implementing advanced control algorithms"
    },
    {
      icon: Code,
      title: "Software Development", 
      description: "Building robust applications with C++, Python, and modern frameworks"
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "Creating cutting-edge solutions that push technological boundaries"
    }
  ]

  return (
    <section id="about" className="py-20 relative overflow-hidden">
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
            About <span className="text-gradient">Me</span>
          </motion.h2>
          
          <motion.div
            variants={itemVariants}
            className="w-24 h-1 bg-gradient-to-r from-electric-blue to-neon-green mx-auto mb-8"
          ></motion.div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-6"
          >
            <motion.div
              variants={itemVariants}
              className="bg-dark-surface border border-dark-border rounded-lg p-8 card-hover"
            >
              <h3 className="text-2xl font-bold text-electric-blue mb-4">Mission Statement</h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                I'm a <span className="text-neon-green font-semibold">Mechatronics Engineering student</span> at GIU Berlin and
                <span className="text-electric-blue font-semibold"> Working Student – Test & Measurement Engineer</span> at CARIAD SE.
                My passion lies in autonomous systems, robotics, and cutting-edge control technologies.
              </p>

              <p className="text-gray-300 text-lg leading-relaxed">
                From developing <span className="text-electric-blue font-semibold">F1TENTH autonomous racing cars</span> to
                working with advanced sensor validation at CARIAD, I specialize in bridging theoretical knowledge with
                real-world applications in autonomous driving and robotics.
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="bg-dark-surface border border-dark-border rounded-lg p-8 card-hover"
            >
              <h3 className="text-2xl font-bold text-neon-green mb-4">Current Focus</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-electric-blue rounded-full"></div>
                  ADAS/AD sensor validation and test automation at CARIAD
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-electric-blue rounded-full"></div>
                  F1TENTH autonomous racing and SLAM algorithms
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-electric-blue rounded-full"></div>
                  Embedded C/C++ development for STM32 and ESP32
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-electric-blue rounded-full"></div>
                  Multi-robot swarm systems and communication protocols
                </li>
              </ul>
            </motion.div>
          </motion.div>

          {/* Features Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                variants={itemVariants}
                className="bg-dark-surface border border-dark-border rounded-lg p-6 card-hover group"
                whileHover={{ scale: 1.05 }}
              >
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-electric-blue to-neon-green rounded-lg mb-4 group-hover:animate-glow">
                  <feature.icon size={24} className="text-dark-bg" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-electric-blue transition-colors">
                  {feature.title}
                </h3>
                
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16"
        >
          {[
            { number: "20+", label: "Projects Completed" },
            { number: "5+", label: "Programming Languages" },
            { number: "3+", label: "Years Experience" },
            { number: "∞", label: "Passion for Innovation" }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              variants={itemVariants}
              className="text-center"
            >
              <motion.div
                className="text-3xl md:text-4xl font-futuristic font-bold text-gradient mb-2"
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : { scale: 0 }}
                transition={{ delay: index * 0.1 + 0.5, duration: 0.5 }}
              >
                {stat.number}
              </motion.div>
              <div className="text-gray-400 text-sm md:text-base font-mono">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Section Divider */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-electric-blue to-transparent opacity-50"></div>
    </section>
  )
}

export default About

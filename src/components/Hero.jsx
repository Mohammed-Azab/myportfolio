import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown, Download, ExternalLink } from 'lucide-react'

const Hero = () => {
  const [displayText, setDisplayText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  
  const phrases = [
    "Mechatronics Engineer",
    "Robotics Enthusiast", 
    "Control Systems Developer",
    "Innovation Creator"
  ]

  useEffect(() => {
    const currentPhrase = phrases[currentIndex]
    const shouldDelete = displayText === currentPhrase && !isDeleting
    const shouldStop = displayText === '' && isDeleting

    if (shouldDelete) {
      setTimeout(() => setIsDeleting(true), 2000)
      return
    }

    if (shouldStop) {
      setIsDeleting(false)
      setCurrentIndex((prev) => (prev + 1) % phrases.length)
      return
    }

    const timeout = setTimeout(() => {
      setDisplayText((prev) => {
        if (isDeleting) {
          return currentPhrase.substring(0, prev.length - 1)
        }
        return currentPhrase.substring(0, prev.length + 1)
      })
    }, isDeleting ? 50 : 100)

    return () => clearTimeout(timeout)
  }, [displayText, currentIndex, isDeleting, phrases])

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

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-circuit-pattern opacity-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
        {/* Text Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center lg:text-left"
        >
          <motion.div variants={itemVariants} className="mb-6">
            <span className="text-electric-blue text-lg font-mono">Hey, I'm</span>
          </motion.div>
          
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl font-futuristic font-bold mb-6"
          >
            <span className="text-white">Mohammed</span>
            <br />
            <span className="text-gradient">Azab</span>
          </motion.h1>
          
          <motion.div
            variants={itemVariants}
            className="text-xl md:text-2xl text-gray-300 mb-8 h-16 flex items-center justify-center lg:justify-start"
          >
            <span className="font-mono">
              {displayText}
              <span className="animate-blink border-r-2 border-electric-blue ml-1"></span>
            </span>
          </motion.div>
          
          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-400 mb-8 max-w-lg mx-auto lg:mx-0"
          >
            Passionate about building robotic systems, developing control algorithms, 
            and creating innovative embedded software solutions that bridge the gap 
            between digital and physical worlds.
          </motion.p>
          
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
          >
            <motion.a
              href="#projects"
              className="btn-primary inline-flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ExternalLink size={20} />
              Explore My Work
            </motion.a>
            
            <motion.a
              href="/resume.pdf"
              download
              className="btn-secondary inline-flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Download size={20} />
              Download CV
            </motion.a>
          </motion.div>
        </motion.div>
        
        {/* 3D Robot Illustration */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="relative flex justify-center lg:justify-end"
        >
          <div className="relative">
            {/* Robot SVG Illustration */}
            <motion.div
              animate={{ 
                y: [0, -20, 0],
                rotateY: [0, 5, 0, -5, 0]
              }}
              transition={{ 
                duration: 4, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
              className="w-80 h-80 md:w-96 md:h-96"
            >
              <svg
                viewBox="0 0 400 400"
                className="w-full h-full"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Robot Body */}
                <motion.rect
                  x="150"
                  y="150"
                  width="100"
                  height="120"
                  rx="10"
                  fill="url(#gradient1)"
                  stroke="#00D4FF"
                  strokeWidth="2"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 2, delay: 1 }}
                />
                
                {/* Robot Head */}
                <motion.circle
                  cx="200"
                  cy="120"
                  r="40"
                  fill="url(#gradient2)"
                  stroke="#39FF14"
                  strokeWidth="2"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.8, delay: 1.2 }}
                />
                
                {/* Eyes */}
                <motion.circle
                  cx="185"
                  cy="115"
                  r="6"
                  fill="#00D4FF"
                  animate={{ opacity: [1, 0.3, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <motion.circle
                  cx="215"
                  cy="115"
                  r="6"
                  fill="#00D4FF"
                  animate={{ opacity: [1, 0.3, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.1 }}
                />
                
                {/* Arms */}
                <motion.rect
                  x="120"
                  y="170"
                  width="25"
                  height="60"
                  rx="12"
                  fill="url(#gradient1)"
                  stroke="#00D4FF"
                  strokeWidth="2"
                  initial={{ x: 100 }}
                  animate={{ x: 120 }}
                  transition={{ duration: 1, delay: 1.5 }}
                />
                <motion.rect
                  x="255"
                  y="170"
                  width="25"
                  height="60"
                  rx="12"
                  fill="url(#gradient1)"
                  stroke="#00D4FF"
                  strokeWidth="2"
                  initial={{ x: 275 }}
                  animate={{ x: 255 }}
                  transition={{ duration: 1, delay: 1.5 }}
                />
                
                {/* Legs */}
                <motion.rect
                  x="170"
                  y="275"
                  width="20"
                  height="70"
                  rx="10"
                  fill="url(#gradient1)"
                  stroke="#39FF14"
                  strokeWidth="2"
                  initial={{ y: 300 }}
                  animate={{ y: 275 }}
                  transition={{ duration: 1, delay: 1.8 }}
                />
                <motion.rect
                  x="210"
                  y="275"
                  width="20"
                  height="70"
                  rx="10"
                  fill="url(#gradient1)"
                  stroke="#39FF14"
                  strokeWidth="2"
                  initial={{ y: 300 }}
                  animate={{ y: 275 }}
                  transition={{ duration: 1, delay: 1.8 }}
                />
                
                {/* Circuit Lines */}
                <motion.path
                  d="M180 180 L220 180 M180 200 L220 200 M180 220 L220 220"
                  stroke="#00D4FF"
                  strokeWidth="2"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.5, delay: 2 }}
                />
                
                {/* Gradients */}
                <defs>
                  <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#1A1A1A" />
                    <stop offset="100%" stopColor="#2A2A2A" />
                  </linearGradient>
                  <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#00D4FF" stopOpacity="0.2" />
                    <stop offset="100%" stopColor="#39FF14" stopOpacity="0.2" />
                  </linearGradient>
                </defs>
              </svg>
            </motion.div>
            
            {/* Floating Particles */}
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-electric-blue rounded-full"
                style={{
                  top: `${20 + i * 15}%`,
                  left: `${10 + i * 20}%`,
                }}
                animate={{
                  y: [0, -30, 0],
                  opacity: [0.3, 1, 0.3],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: i * 0.5,
                }}
              />
            ))}
          </div>
        </motion.div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center text-gray-400"
        >
          <span className="text-sm mb-2 font-mono">Scroll to explore</span>
          <ChevronDown size={24} />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero

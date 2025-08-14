import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown, ExternalLink } from 'lucide-react'
import AnimatedLottie from './AnimatedLottie';
import whiteRobotAnim from './animations/WhiteRobot';
import CVDownload from './CVDownload';

const Hero = () => {
  const [displayText, setDisplayText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  
  const phrases = [
    "Mechatronics Engineering Student",
    "Working Student - Test & Measurement Engineer at CARIAD SE",
    "Autonomous Systems Developer",
    "Robotics & AI Researcher",
    "F1TENTH Racing Champion",
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
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-surface via-dark-bg to-dark-surface opacity-50"></div>
      
      {/* Floating background elements */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full opacity-10"
            style={{
              width: Math.random() * 4 + 2 + 'px',
              height: Math.random() * 4 + 2 + 'px',
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
              backgroundColor: i % 2 === 0 ? '#00D4FF' : '#39FF14'
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 items-center gap-12 relative z-10">
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
            <span className="text-gradient">Abdelazim</span>
          </motion.h1>
          
          <motion.div
            variants={itemVariants}
            className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 min-h-16 max-h-24 flex items-center justify-center lg:justify-start w-full"
          >
            <div className="font-mono w-full max-w-full text-center lg:text-left typewriter-text">
              <span className="inline-block">
                {displayText}
                <span className="animate-blink border-r-2 border-electric-blue ml-1"></span>
              </span>
            </div>
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
            
            <CVDownload />
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
            {/* Custom Robot Lottie Animation */}
            <AnimatedLottie
              animationData={whiteRobotAnim}
              className="w-80 h-80 md:w-96 md:h-96 mx-auto"
              style={{ background: 'transparent' }}
            />
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

      {/* Section Divider */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-electric-blue to-transparent opacity-50"></div>
    </section>
  )
}

export default Hero

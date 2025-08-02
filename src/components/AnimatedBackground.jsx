import React from 'react'
import { motion } from 'framer-motion'

const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark-bg via-dark-surface to-dark-bg"></div>
      
      {/* Circuit Pattern */}
      <div className="absolute inset-0 bg-circuit-pattern opacity-5"></div>
      
      {/* Floating Geometric Shapes */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -100, 0],
            x: [0, 50, 0],
            rotate: [0, 180, 360],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 20 + Math.random() * 10,
            repeat: Infinity,
            ease: "linear",
            delay: i * 2,
          }}
        >
          <div 
            className={`w-${4 + Math.floor(Math.random() * 8)} h-${4 + Math.floor(Math.random() * 8)} ${
              i % 3 === 0 ? 'bg-electric-blue/10' : 
              i % 3 === 1 ? 'bg-neon-green/10' : 'bg-purple-500/10'
            } ${
              i % 2 === 0 ? 'rounded-full' : 'rounded-lg rotate-45'
            }`}
          />
        </motion.div>
      ))}
      
      {/* Grid Lines */}
      <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="grid" width="100" height="100" patternUnits="userSpaceOnUse">
            <path d="M 100 0 L 0 0 0 100" fill="none" stroke="#00D4FF" strokeWidth="0.5" opacity="0.1"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
      
      {/* Animated Particles */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute w-1 h-1 bg-electric-blue rounded-full"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -window.innerHeight],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 15 + Math.random() * 10,
            repeat: Infinity,
            ease: "linear",
            delay: Math.random() * 10,
          }}
        />
      ))}
      
      {/* Glowing Orbs */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={`orb-${i}`}
          className={`absolute w-32 h-32 rounded-full ${
            i % 2 === 0 ? 'bg-electric-blue/5' : 'bg-neon-green/5'
          } blur-xl`}
          style={{
            top: `${20 + i * 20}%`,
            left: `${10 + i * 20}%`,
          }}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.6, 0.3],
            x: [0, 100, 0],
          }}
          transition={{
            duration: 10 + i * 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 1.5,
          }}
        />
      ))}
    </div>
  )
}

export default AnimatedBackground

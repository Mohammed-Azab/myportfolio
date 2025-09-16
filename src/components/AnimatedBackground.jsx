import React from "react";
import { motion } from "framer-motion";

const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark-bg via-dark-surface to-dark-bg"></div>

      {/* Circuit Pattern */}
      <div className="absolute inset-0 bg-circuit-pattern opacity-5"></div>

      {/* Floating Geometric Shapes - Reduced animations */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -50, 0],
            x: [0, 25, 0],
            rotate: [0, 180, 360],
            opacity: [0.05, 0.15, 0.05],
          }}
          transition={{
            duration: 8 + Math.random() * 4,
            repeat: Infinity,
            ease: "easeInOut", 
            delay: i * 1,
          }}
        >
          <div
            className={`w-${4 + Math.floor(Math.random() * 8)} h-${
              4 + Math.floor(Math.random() * 8)
            } ${
              i % 3 === 0
                ? "bg-electric-blue/10"
                : i % 3 === 1
                ? "bg-neon-green/10"
                : "bg-purple-500/10"
            } ${i % 2 === 0 ? "rounded-full" : "rounded-lg rotate-45"}`}
          />
        </motion.div>
      ))}

      {/* Grid Lines */}
      <svg
        className="absolute inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="grid"
            width="100"
            height="100"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 100 0 L 0 0 0 100"
              fill="none"
              stroke="#00D4FF"
              strokeWidth="0.5"
              opacity="0.1"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>

      {/* Animated Particles - Reduced count and duration */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute w-1 h-1 bg-electric-blue rounded-full"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -window.innerHeight / 2], // Reduced movement
            opacity: [0, 0.8, 0], // Increased max opacity slightly
          }}
          transition={{
            duration: 8 + Math.random() * 4, // Reduced from 15-25 to 8-12
            repeat: Infinity,
            ease: "easeOut", // Changed for smoother motion
            delay: Math.random() * 5,
          }}
        />
      ))}

      {/* Glowing Orbs - Reduced movement and duration */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={`orb-${i}`}
          className={`absolute w-24 h-24 rounded-full ${
            i % 2 === 0 ? "bg-electric-blue/3" : "bg-neon-green/3"
          } blur-xl`}
          style={{
            top: `${20 + i * 30}%`,
            left: `${10 + i * 30}%`,
          }}
          animate={{
            scale: [1, 1.2, 1], // Reduced from 1.5
            opacity: [0.2, 0.4, 0.2], // Reduced opacity
            x: [0, 50, 0], // Reduced movement from 100
          }}
          transition={{
            duration: 6 + i * 1, // Reduced from 10 + i * 2
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 1, // Reduced delay
          }}
        />
      ))}
    </div>
  );
};

export default AnimatedBackground;

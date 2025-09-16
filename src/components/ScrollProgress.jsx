import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const ScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    let ticking = false // Throttle scroll updates

    const updateScrollProgress = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const scrollPx = document.documentElement.scrollTop
          const winHeightPx = document.documentElement.scrollHeight - document.documentElement.clientHeight
          const scrolled = scrollPx / winHeightPx
          setScrollProgress(scrolled)
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', updateScrollProgress, { passive: true }) // Added passive for better performance
    return () => window.removeEventListener('scroll', updateScrollProgress)
  }, [])

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-electric-blue via-neon-green to-purple-500 z-50 origin-left"
      style={{ 
        scaleX: scrollProgress,
        transformOrigin: "0%" 
      }}
      initial={{ scaleX: 0 }}
      animate={{ scaleX: scrollProgress }}
      transition={{ duration: 0.3, ease: "easeOut" }} // Increased duration and added easing for smoother progress bar
    />
  )
}

export default ScrollProgress

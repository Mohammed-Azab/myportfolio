import React from 'react'
import { motion } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Timeline from './components/Timeline'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ScrollProgress from './components/ScrollProgress'
import AnimatedBackground from './components/AnimatedBackground'

function App() {
  return (
    <div className="relative min-h-screen bg-dark-bg text-white">
      {/* Animated Background */}
      <AnimatedBackground />
      
      {/* Scroll Progress Indicator */}
      <ScrollProgress />
      
      {/* Navigation */}
      <Navbar />
      
      {/* Main Content */}
      <main className="relative z-10">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Timeline />
        <Contact />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  )
}

export default App

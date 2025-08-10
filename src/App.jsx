import React from 'react'
import { motion } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Education from './components/Education'
import Volunteering from './components/Volunteering'
import Awards from './components/Awards'
import Courses from './components/Courses'
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
        <Timeline />
        <Education />
        <Projects />
        <Courses />
        <Skills />
        <Volunteering />
        <Awards />
        <Contact />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  )
}

export default App

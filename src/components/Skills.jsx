import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const Skills = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const skillCategories = [
    {
      title: "Programming Languages",
      icon: "💻",
      skills: [
        { name: "C/C++", level: 90, color: "from-blue-500 to-blue-600" },
        { name: "Python", level: 85, color: "from-green-500 to-green-600" },
        { name: "MATLAB", level: 80, color: "from-orange-500 to-orange-600" },
        { name: "JavaScript", level: 75, color: "from-yellow-500 to-yellow-600" },
        { name: "Assembly", level: 70, color: "from-red-500 to-red-600" },
        { name: "Verilog/VHDL", level: 65, color: "from-purple-500 to-purple-600" }
      ]
    },
    {
      title: "Tools & Frameworks",
      icon: "🛠️",
      skills: [
        { name: "ROS2", level: 85, color: "from-electric-blue to-blue-500" },
        { name: "Git/GitHub", level: 90, color: "from-gray-600 to-gray-700" },
        { name: "Simulink", level: 80, color: "from-orange-500 to-red-500" },
        { name: "STM32CubeIDE", level: 85, color: "from-blue-600 to-indigo-600" },
        { name: "Arduino IDE", level: 90, color: "from-teal-500 to-cyan-500" },
        { name: "React", level: 75, color: "from-cyan-400 to-blue-500" }
      ]
    },
    {
      title: "Robotics & Control",
      icon: "🤖",
      skills: [
        { name: "PID Control", level: 90, color: "from-neon-green to-green-500" },
        { name: "Kalman Filtering", level: 80, color: "from-electric-blue to-cyan-500" },
        { name: "Embedded Systems", level: 85, color: "from-purple-500 to-pink-500" },
        { name: "Sensor Integration", level: 88, color: "from-yellow-500 to-orange-500" },
        { name: "Motor Control", level: 85, color: "from-red-500 to-pink-500" },
        { name: "Computer Vision", level: 75, color: "from-indigo-500 to-purple-500" }
      ]
    },
    {
      title: "Hardware & Design",
      icon: "⚡",
      skills: [
        { name: "PCB Design", level: 80, color: "from-green-600 to-emerald-600" },
        { name: "CAD (SolidWorks)", level: 85, color: "from-blue-600 to-indigo-600" },
        { name: "Circuit Analysis", level: 88, color: "from-yellow-600 to-orange-600" },
        { name: "3D Printing", level: 75, color: "from-purple-600 to-pink-600" },
        { name: "Microcontrollers", level: 90, color: "from-electric-blue to-cyan-600" },
        { name: "FPGA Programming", level: 70, color: "from-red-600 to-pink-600" }
      ]
    }
  ]

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

  const skillVariants = {
    hidden: { width: 0 },
    visible: (level) => ({
      width: `${level}%`,
      transition: {
        duration: 1.5,
        ease: "easeOut",
        delay: 0.5,
      },
    }),
  }

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-bg via-dark-surface to-dark-bg opacity-50"></div>
      
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
            Technical <span className="text-gradient">Skills</span>
          </motion.h2>
          
          <motion.div
            variants={itemVariants}
            className="w-24 h-1 bg-gradient-to-r from-electric-blue to-neon-green mx-auto mb-8"
          ></motion.div>
          
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-400 max-w-3xl mx-auto"
          >
            A comprehensive toolkit of technologies, frameworks, and methodologies 
            that power my engineering solutions and drive innovation in every project.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              className="bg-dark-surface border border-dark-border rounded-lg p-8 card-hover"
            >
              {/* Category Header */}
              <div className="flex items-center gap-4 mb-8">
                <div className="text-3xl">{category.icon}</div>
                <div>
                  <h3 className="text-2xl font-bold text-white">{category.title}</h3>
                  <div className="w-16 h-1 bg-gradient-to-r from-electric-blue to-neon-green mt-2"></div>
                </div>
              </div>

              {/* Skills List */}
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ delay: categoryIndex * 0.3 + skillIndex * 0.1 }}
                    className="group"
                  >
                    {/* Skill Name and Level */}
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-300 font-medium group-hover:text-white transition-colors">
                        {skill.name}
                      </span>
                      <span className="text-sm text-gray-500 font-mono">
                        {skill.level}%
                      </span>
                    </div>

                    {/* Progress Bar */}
                    <div className="relative">
                      <div className="w-full h-2 bg-dark-bg rounded-full overflow-hidden">
                        <motion.div
                          custom={skill.level}
                          variants={skillVariants}
                          initial="hidden"
                          animate={isInView ? "visible" : "hidden"}
                          className={`h-full bg-gradient-to-r ${skill.color} rounded-full relative`}
                        >
                          {/* Glow Effect */}
                          <motion.div
                            animate={{
                              opacity: [0.5, 1, 0.5],
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              ease: "easeInOut",
                            }}
                            className={`absolute inset-0 bg-gradient-to-r ${skill.color} rounded-full blur-sm`}
                          ></motion.div>
                        </motion.div>
                      </div>

                      {/* Skill Level Indicator */}
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={isInView ? { scale: 1 } : { scale: 0 }}
                        transition={{ delay: categoryIndex * 0.3 + skillIndex * 0.1 + 1 }}
                        className={`absolute -top-8 bg-gradient-to-r ${skill.color} text-white text-xs px-2 py-1 rounded shadow-lg font-mono`}
                        style={{ left: `${Math.max(0, Math.min(90, skill.level - 5))}%` }}
                      >
                        {skill.level}%
                        <div className={`absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-2 border-r-2 border-t-2 border-transparent border-t-current`}></div>
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Skills Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mt-16"
        >
          <motion.div
            variants={itemVariants}
            className="bg-dark-surface border border-dark-border rounded-lg p-8"
          >
            <h3 className="text-2xl font-bold text-center mb-8">
              <span className="text-gradient">Additional Competencies</span>
            </h3>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {[
                "Machine Learning", "Data Analysis", "Signal Processing", "Real-time Systems",
                "Automation", "IoT Development", "Mobile Robotics", "Image Processing",
                "Digital Signal Processing", "Control Theory", "System Integration", "Prototyping"
              ].map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-dark-bg border border-electric-blue/30 rounded-lg p-4 text-center hover:border-electric-blue hover:bg-electric-blue/10 transition-all duration-300 group"
                >
                  <span className="text-gray-300 group-hover:text-electric-blue font-medium text-sm">
                    {skill}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Skills Summary */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mt-16"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-br from-electric-blue/20 to-neon-green/20 border border-electric-blue/30 rounded-lg p-6"
            >
              <div className="text-3xl font-futuristic font-bold text-gradient mb-2">5+</div>
              <div className="text-gray-300">Programming Languages</div>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-br from-neon-green/20 to-electric-blue/20 border border-neon-green/30 rounded-lg p-6"
            >
              <div className="text-3xl font-futuristic font-bold text-gradient mb-2">15+</div>
              <div className="text-gray-300">Technologies & Tools</div>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-lg p-6"
            >
              <div className="text-3xl font-futuristic font-bold text-gradient mb-2">20+</div>
              <div className="text-gray-300">Projects Completed</div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills

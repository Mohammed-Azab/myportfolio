import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Calendar, MapPin, Award, Briefcase, GraduationCap, Heart } from 'lucide-react'

const Timeline = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const timelineData = [
    {
      id: 1,
      type: "education",
      icon: GraduationCap,
      title: "Mechatronics Engineering",
      subtitle: "University Studies",
      location: "Germany",
      date: "2022 - Present",
      description: "Pursuing advanced studies in mechatronics engineering with focus on robotics, control systems, and embedded software development.",
      achievements: ["Advanced Control Systems", "Embedded Programming", "Robotics & Automation", "Signal Processing"],
      color: "from-electric-blue to-cyan-500"
    },
    {
      id: 2,
      type: "work",
      icon: Briefcase,
      title: "Working Student - Software Development",
      subtitle: "CARIAD (Volkswagen Group)",
      location: "Wolfsburg, Germany",
      date: "2023 - Present",
      description: "Contributing to cutting-edge automotive software development for next-generation vehicle systems and autonomous driving technologies.",
      achievements: ["Automotive Software", "C++ Development", "Real-time Systems", "Agile Development"],
      color: "from-neon-green to-green-500"
    },
    {
      id: 3,
      type: "project",
      icon: Award,
      title: "TriFlameX Rocket Project",
      subtitle: "Advanced Rocketry System",
      location: "Personal Project",
      date: "2023",
      description: "Developed an advanced rocket control system with real-time telemetry, autonomous flight capabilities, and custom PCB design.",
      achievements: ["Flight Control Software", "Telemetry System", "PCB Design", "Embedded C++"],
      color: "from-purple-500 to-pink-500"
    },
    {
      id: 4,
      type: "project",
      icon: Award,
      title: "SkyMindOS Development",
      subtitle: "Intelligent Drone Operating System",
      location: "Open Source Project",
      date: "2024",
      description: "Created an intelligent drone OS with autonomous navigation, obstacle avoidance, and mission planning using computer vision and ML.",
      achievements: ["Computer Vision", "Machine Learning", "ROS2 Integration", "Autonomous Systems"],
      color: "from-blue-500 to-indigo-500"
    },
    {
      id: 5,
      type: "volunteer",
      icon: Heart,
      title: "Volunteer - Biodiversity & Climate",
      subtitle: "ESC4Y Program",
      location: "Environmental Initiative",
      date: "2022 - 2023",
      description: "Participated in environmental conservation efforts focusing on biodiversity protection and climate change mitigation strategies.",
      achievements: ["Environmental Impact", "Community Engagement", "Sustainability Projects", "Research Support"],
      color: "from-green-600 to-emerald-600"
    },
    {
      id: 6,
      type: "project",
      icon: Award,
      title: "Mechatronics Toolkit",
      subtitle: "Engineering Toolkit Development",
      location: "Open Source Contribution",
      date: "2024",
      description: "Comprehensive toolkit for mechatronics engineers with simulation tools, control system design utilities, and embedded templates.",
      achievements: ["Python Development", "MATLAB Integration", "Tool Development", "Documentation"],
      color: "from-orange-500 to-red-500"
    }
  ]

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
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  }

  const getTypeIcon = (type) => {
    switch (type) {
      case 'education':
        return '🎓'
      case 'work':
        return '💼'
      case 'project':
        return '🚀'
      case 'volunteer':
        return '💚'
      default:
        return '📅'
    }
  }

  return (
    <section id="timeline" className="py-20 relative overflow-hidden">
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
            My <span className="text-gradient">Journey</span>
          </motion.h2>
          
          <motion.div
            variants={itemVariants}
            className="w-24 h-1 bg-gradient-to-r from-electric-blue to-neon-green mx-auto mb-8"
          ></motion.div>
          
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-400 max-w-3xl mx-auto"
          >
            A timeline of my educational journey, professional experiences, and key projects 
            that have shaped my expertise in mechatronics engineering and robotics.
          </motion.p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-electric-blue via-neon-green to-purple-500 md:left-1/2 md:transform md:-translate-x-1/2"></div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-12"
          >
            {timelineData.map((item, index) => (
              <motion.div
                key={item.id}
                variants={itemVariants}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } flex-col md:flex-row`}
              >
                {/* Timeline Node */}
                <div className="absolute left-8 transform -translate-x-1/2 md:left-1/2">
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    className={`w-16 h-16 bg-gradient-to-r ${item.color} rounded-full flex items-center justify-center border-4 border-dark-bg shadow-lg`}
                  >
                    <span className="text-2xl">{getTypeIcon(item.type)}</span>
                  </motion.div>
                </div>

                {/* Content Card */}
                <motion.div
                  whileHover={{ scale: 1.02, y: -5 }}
                  className={`w-full md:w-5/12 ${
                    index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                  } ml-16 md:ml-0`}
                >
                  <div className="bg-dark-surface border border-dark-border rounded-lg p-6 card-hover">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-white mb-1">
                          {item.title}
                        </h3>
                        <p className="text-electric-blue font-semibold mb-2">
                          {item.subtitle}
                        </p>
                      </div>
                      <item.icon size={24} className="text-neon-green flex-shrink-0 ml-4" />
                    </div>

                    {/* Meta Information */}
                    <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-400">
                      <div className="flex items-center gap-1">
                        <Calendar size={14} />
                        <span>{item.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin size={14} />
                        <span>{item.location}</span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {item.description}
                    </p>

                    {/* Achievements */}
                    <div className="space-y-3">
                      <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wide">
                        Key Highlights
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {item.achievements.map((achievement, achIndex) => (
                          <motion.div
                            key={achIndex}
                            initial={{ opacity: 0, x: -10 }}
                            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                            transition={{ delay: index * 0.2 + achIndex * 0.1 }}
                            className="flex items-center gap-2 text-sm"
                          >
                            <div className="w-2 h-2 bg-electric-blue rounded-full flex-shrink-0"></div>
                            <span className="text-gray-300">{achievement}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Timeline Stats */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { number: "3+", label: "Years of Study", color: "text-electric-blue" },
            { number: "1+", label: "Industry Experience", color: "text-neon-green" },
            { number: "6+", label: "Major Projects", color: "text-purple-400" },
            { number: "∞", label: "Passion for Innovation", color: "text-pink-400" }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              variants={itemVariants}
              className="text-center"
            >
              <motion.div
                className={`text-3xl md:text-4xl font-futuristic font-bold ${stat.color} mb-2`}
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : { scale: 0 }}
                transition={{ delay: index * 0.1 + 0.5, duration: 0.5 }}
              >
                {stat.number}
              </motion.div>
              <div className="text-gray-400 text-sm font-mono">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Timeline

import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Calendar, MapPin, Award, Briefcase, TrendingUp, ExternalLink } from 'lucide-react'
import { experienceData } from '../data/resume'

const Timeline = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  const getTypeIcon = (type) => {
    switch (type) {
      case 'Internship':
        return <TrendingUp className="w-6 h-6" />
      case 'Part-time':
        return <Briefcase className="w-6 h-6" />
      default:
        return <Briefcase className="w-6 h-6" />
    }
  }

  const getTypeColor = (type, index) => {
    switch (type) {
      case 'Internship':
        return "from-blue-500 to-cyan-500"
      case 'Part-time':
        return "from-green-500 to-emerald-500"
      default:
        return index % 2 === 0 ? "from-purple-500 to-pink-500" : "from-orange-500 to-red-500"
    }
  }

  return (
    <section id="experience" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-surface via-dark-bg to-dark-surface opacity-50"></div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              <span className="text-gradient bg-gradient-to-r from-electric-blue via-purple-500 to-neon-green bg-clip-text text-transparent">
                Work Experience
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Professional journey and hands-on experience in robotics, automation, and engineering
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-electric-blue via-purple-500 to-neon-green"></div>

            {/* Timeline Items */}
            <div className="space-y-12">
              {experienceData.map((experience, index) => (
                <motion.div
                  key={experience.id}
                  variants={itemVariants}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-16 h-16 z-10">
                    <div className={`w-full h-full rounded-full bg-gradient-to-r ${getTypeColor(experience.type, index)} flex items-center justify-center shadow-lg border-4 border-gray-950`}>
                      <div className="text-white">
                        {getTypeIcon(experience.type)}
                      </div>
                    </div>
                  </div>

                  {/* Content Card */}
                  <div className={`w-full md:w-5/12 ${
                    index % 2 === 0 ? 'md:mr-auto md:pr-16 ml-24 md:ml-0' : 'md:ml-auto md:pl-16 ml-24 md:ml-0'
                  }`}>
                    <motion.div
                      whileHover={{ scale: 1.02, y: -5 }}
                      transition={{ duration: 0.2 }}
                      className="bg-gray-800 rounded-2xl p-8 shadow-2xl border border-gray-700 hover:border-electric-blue transition-all duration-300"
                    >
                      {/* Header */}
                      <div className="mb-6">
                        <div className="flex items-center justify-between mb-3">
                          <span className={`px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r ${getTypeColor(experience.type, index)} text-white`}>
                            {experience.type}
                          </span>
                          <div className="flex items-center text-gray-400 text-sm">
                            <Calendar className="w-4 h-4 mr-2" />
                            {experience.period}
                          </div>
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-2">{experience.position}</h3>
                        <h4 className="text-xl text-electric-blue mb-2">{experience.company}</h4>
                        <div className="flex items-center text-gray-300 mb-4">
                          <MapPin className="w-4 h-4 mr-2" />
                          {experience.location}
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-gray-300 mb-6 leading-relaxed">
                        {experience.description}
                      </p>

                      {/* Responsibilities */}
                      {experience.responsibilities && (
                        <div className="mb-6">
                          <h5 className="text-lg font-semibold text-white mb-3 flex items-center">
                            <Award className="w-5 h-5 mr-2 text-neon-green" />
                            Key Responsibilities
                          </h5>
                          <ul className="space-y-2">
                            {experience.responsibilities.map((responsibility, idx) => (
                              <li key={idx} className="flex items-start text-gray-300">
                                <div className="w-2 h-2 bg-electric-blue rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                <span className="text-sm">{responsibility}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Technologies */}
                      <div className="mb-6">
                        <h5 className="text-lg font-semibold text-white mb-3">Technologies Used</h5>
                        <div className="flex flex-wrap gap-2">
                          {experience.technologies.map((tech, idx) => (
                            <span
                              key={idx}
                              className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm hover:bg-gray-600 transition-colors"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Achievements */}
                      {experience.achievements && (
                        <div>
                          <h5 className="text-lg font-semibold text-white mb-3 flex items-center">
                            <Award className="w-5 h-5 mr-2 text-orange-400" />
                            Key Achievements
                          </h5>
                          <ul className="space-y-2">
                            {experience.achievements.map((achievement, idx) => (
                              <li key={idx} className="flex items-start text-gray-300">
                                <div className="w-2 h-2 bg-neon-green rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                <span className="text-sm">{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <motion.div
            variants={itemVariants}
            className="text-center mt-16"
          >
            <p className="text-gray-300 mb-6">
              Interested in working together or learning more about my experience?
            </p>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-electric-blue to-purple-500 text-white font-semibold rounded-full hover:from-blue-600 hover:to-purple-600 transition-all duration-300 shadow-lg"
            >
              <span className="mr-2">Get In Touch</span>
              <ExternalLink className="w-5 h-5" />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Section Divider */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-electric-blue to-transparent opacity-50"></div>
    </section>
  )
}

export default Timeline

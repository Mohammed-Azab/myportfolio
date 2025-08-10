import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Calendar, MapPin, Users, ExternalLink, ChevronDown, ChevronUp, Clock, Target } from 'lucide-react';
import { volunteeringData, volunteeringStats, volunteeringCategories } from '../data/volunteering';

const Volunteering = () => {
  const [expandedVolunteering, setExpandedVolunteering] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const toggleVolunteering = (id) => {
    setExpandedVolunteering(expandedVolunteering === id ? null : id);
  };

  const filteredVolunteering = selectedCategory === 'All'
    ? volunteeringData
    : volunteeringData.filter(volunteer => volunteer.type === selectedCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="volunteering" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              <span className="text-gradient bg-gradient-to-r from-red-400 via-pink-500 to-orange-400 bg-clip-text text-transparent">
                Volunteering
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Community service and volunteer experiences that make a positive impact
            </p>
          </motion.div>

          {/* Volunteering Stats */}
          <motion.div variants={itemVariants} className="grid grid-cols-2 md:grid-cols-5 gap-6 mb-16">
            <div className="bg-gray-700 rounded-xl p-6 text-center border border-gray-600">
              <div className="text-3xl font-bold text-red-400 mb-2">{volunteeringStats.totalHours}+</div>
              <div className="text-gray-300">Hours Served</div>
            </div>
            <div className="bg-gray-700 rounded-xl p-6 text-center border border-gray-600">
              <div className="text-3xl font-bold text-pink-400 mb-2">{volunteeringStats.studentsHelped}+</div>
              <div className="text-gray-300">Students Helped</div>
            </div>
            <div className="bg-gray-700 rounded-xl p-6 text-center border border-gray-600">
              <div className="text-3xl font-bold text-orange-400 mb-2">{volunteeringStats.workshopsConducted}+</div>
              <div className="text-gray-300">Workshops</div>
            </div>
            <div className="bg-gray-700 rounded-xl p-6 text-center border border-gray-600">
              <div className="text-3xl font-bold text-yellow-400 mb-2">{volunteeringStats.organizationsServed}</div>
              <div className="text-gray-300">Organizations</div>
            </div>
            <div className="bg-gray-700 rounded-xl p-6 text-center border border-gray-600">
              <div className="text-3xl font-bold text-green-400 mb-2">{volunteeringStats.yearsActive}</div>
              <div className="text-gray-300">Years Active</div>
            </div>
          </motion.div>

          {/* Category Filter */}
          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-3 mb-12">
            {volunteeringCategories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-red-500 text-white shadow-lg shadow-red-500/25'
                    : 'bg-gray-700 text-gray-300 hover:bg-gray-600 hover:text-white'
                }`}
              >
                {category}
                <span className="ml-2 text-xs opacity-75">
                  ({category === 'All' ? volunteeringData.length : volunteeringData.filter(v => v.type === category).length})
                </span>
              </button>
            ))}
          </motion.div>

          {/* Volunteering Timeline */}
          <motion.div variants={itemVariants} className="space-y-8">
            {filteredVolunteering.map((volunteer, index) => (
              <div key={volunteer.id} className="relative">
                {/* Timeline Line */}
                {index !== filteredVolunteering.length - 1 && (
                  <div className="absolute left-8 top-20 w-0.5 h-32 bg-gradient-to-b from-red-400 to-pink-500"></div>
                )}
                
                <div className="bg-gray-700 rounded-2xl border border-gray-600 hover:border-red-400 transition-all duration-300 overflow-hidden">
                  {/* Main Volunteering Card */}
                  <div className="p-8">
                    <div className="flex items-start gap-6">
                      {/* Timeline Dot */}
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 bg-gradient-to-r from-red-400 to-pink-500 rounded-full flex items-center justify-center">
                          <Heart className="w-8 h-8 text-white" />
                        </div>
                      </div>

                      {/* Volunteering Content */}
                      <div className="flex-grow">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                          <div>
                            <h3 className="text-2xl font-bold text-white mb-2">{volunteer.role}</h3>
                            <div className="flex items-center gap-2 mb-2">
                              <h4 className="text-xl text-red-400">{volunteer.organization}</h4>
                              {volunteer.website && (
                                <a
                                  href={volunteer.website}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-red-400 hover:text-red-300 transition-colors"
                                  title="Visit organization website"
                                >
                                  <ExternalLink className="w-5 h-5" />
                                </a>
                              )}
                            </div>
                          </div>
                          <div className="flex flex-col md:items-end">
                            <div className="flex items-center text-gray-300 mb-1">
                              <Calendar className="w-4 h-4 mr-2" />
                              <span>{volunteer.duration}</span>
                            </div>
                            <div className="flex items-center text-gray-300 mb-1">
                              <MapPin className="w-4 h-4 mr-2" />
                              <span>{volunteer.location}</span>
                            </div>
                            <div className="flex items-center text-red-400">
                              <Users className="w-4 h-4 mr-2" />
                              <span>{volunteer.type}</span>
                            </div>
                          </div>
                        </div>

                        <p className="text-gray-300 mb-6">{volunteer.description}</p>

                        {/* Skills */}
                        <div className="flex flex-wrap gap-2 mb-6">
                          {volunteer.skills.map((skill, idx) => (
                            <span key={idx} className="px-3 py-1 bg-red-500/20 text-red-400 rounded-full text-sm border border-red-500/30">
                              {skill}
                            </span>
                          ))}
                        </div>

                        {/* Impact Highlight */}
                        <div className="bg-gray-600 rounded-lg p-4 mb-6">
                          <div className="flex items-center mb-2">
                            <Target className="w-5 h-5 text-green-400 mr-2" />
                            <h5 className="text-lg font-semibold text-white">Impact</h5>
                          </div>
                          <p className="text-green-400 font-medium">{volunteer.impact}</p>
                        </div>

                        {/* Expand/Collapse Button */}
                        <button
                          onClick={() => toggleVolunteering(volunteer.id)}
                          className="flex items-center text-red-400 hover:text-red-300 transition-colors"
                        >
                          <span className="mr-2">
                            {expandedVolunteering === volunteer.id ? 'Show Less' : 'Show More Details'}
                          </span>
                          {expandedVolunteering === volunteer.id ? (
                            <ChevronUp className="w-4 h-4" />
                          ) : (
                            <ChevronDown className="w-4 h-4" />
                          )}
                        </button>
                      </div>
                    </div>

                    {/* Expanded Content */}
                    <AnimatePresence>
                      {expandedVolunteering === volunteer.id && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="mt-8 pt-8 border-t border-gray-600"
                        >
                          {/* Responsibilities */}
                          <div>
                            <div className="flex items-center mb-4">
                              <Clock className="w-5 h-5 text-blue-400 mr-2" />
                              <h5 className="text-lg font-semibold text-white">Key Responsibilities</h5>
                            </div>
                            <div className="grid grid-cols-1 gap-2">
                              {volunteer.responsibilities.map((responsibility, idx) => (
                                <div key={idx} className="flex items-start bg-gray-600 rounded-lg p-3">
                                  <div className="w-2 h-2 bg-red-400 rounded-full mr-3 mt-2"></div>
                                  <span className="text-gray-300 text-sm">{responsibility}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Volunteering;

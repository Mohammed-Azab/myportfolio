import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Calendar, MapPin, Users, ExternalLink, ChevronDown, ChevronUp, Clock, Target, Camera, Image, Leaf, BookOpen, GraduationCap, Sparkles } from 'lucide-react';
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

  const getCategoryMeta = (type) => {
    const map = {
      'Environmental Conservation': { Icon: Leaf, color: 'text-green-400', chip: 'border-green-400 bg-green-500/20' },
      'Education & Community Service': { Icon: GraduationCap, color: 'text-blue-400', chip: 'border-blue-400 bg-blue-500/20' },
      'Education & Mentoring': { Icon: BookOpen, color: 'text-sky-400', chip: 'border-sky-400 bg-sky-500/20' },
      'Community Education': { Icon: Users, color: 'text-purple-400', chip: 'border-purple-400 bg-purple-500/20' },
      'Academic Support': { Icon: Target, color: 'text-yellow-400', chip: 'border-yellow-400 bg-yellow-500/20' },
      'Leadership & Organization': { Icon: Users, color: 'text-orange-400', chip: 'border-orange-400 bg-orange-500/20' },
    };
    return map[type] || { Icon: Heart, color: 'text-pink-400', chip: 'border-pink-400 bg-pink-500/20' };
  };

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
    <section id="volunteering" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-surface via-dark-bg to-dark-surface opacity-50"></div>

      <div className="container mx-auto px-6 relative z-10">
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
              <span className="text-gradient bg-gradient-to-r from-electric-blue via-purple-500 to-neon-green bg-clip-text text-transparent">
                Volunteering
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Community service and volunteer experiences that make a positive impact
            </p>
          </motion.div>

          {/* Volunteering Stats */}
          <motion.div variants={itemVariants} className="grid grid-cols-2 md:grid-cols-5 gap-6 mb-16">
            <div className="bg-gray-800 rounded-xl p-6 text-center border border-gray-700">
              <div className="text-3xl font-bold text-electric-blue mb-2">{volunteeringStats.totalHours}+</div>
              <div className="text-gray-300">Hours Served</div>
            </div>
            <div className="bg-gray-800 rounded-xl p-6 text-center border border-gray-700">
              <div className="text-3xl font-bold text-neon-green mb-2">{volunteeringStats.studentsHelped}+</div>
              <div className="text-gray-300">Students Helped</div>
            </div>
            <div className="bg-gray-800 rounded-xl p-6 text-center border border-gray-700">
              <div className="text-3xl font-bold text-purple-400 mb-2">{volunteeringStats.workshopsConducted}+</div>
              <div className="text-gray-300">Workshops</div>
            </div>
            <div className="bg-gray-800 rounded-xl p-6 text-center border border-gray-700">
              <div className="text-3xl font-bold text-yellow-400 mb-2">{volunteeringStats.organizationsServed}</div>
              <div className="text-gray-300">Organizations</div>
            </div>
            <div className="bg-gray-800 rounded-xl p-6 text-center border border-gray-700">
              <div className="text-3xl font-bold text-green-400 mb-2">{volunteeringStats.yearsActive}</div>
              <div className="text-gray-300">Years Active</div>
            </div>
          </motion.div>

          {/* Category Filter */}
          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-3 mb-12">
            {volunteeringCategories.map((category) => {
              const meta = category === 'All' ? { Icon: Sparkles } : getCategoryMeta(category);
              const IconComp = meta.Icon || Sparkles;
              return (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-gradient-to-r from-electric-blue to-neon-green text-dark-bg shadow-lg'
                      : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-electric-blue border border-gray-700'
                  }`}
                  aria-label={`Filter by ${category}`}
                >
                  <span className="inline-flex items-center gap-2">
                    <IconComp className="w-4 h-4" />
                    {category}
                  </span>
                  <span className="ml-2 text-xs opacity-75">
                    ({category === 'All' ? volunteeringData.length : volunteeringData.filter(v => v.type === category).length})
                  </span>
                </button>
              );
            })}
          </motion.div>

          {/* Volunteering Timeline */}
          <motion.div variants={itemVariants} className="space-y-8">
            {filteredVolunteering.map((volunteer, index) => (
              <div key={volunteer.id} className="relative">
                {/* Timeline Line */}
                {index !== filteredVolunteering.length - 1 && (
                  <div className="absolute left-8 top-20 w-0.5 h-32 bg-gradient-to-b from-red-400 to-pink-500"></div>
                )}
                
                <div className="bg-gray-800 rounded-2xl border border-gray-700 hover:border-electric-blue transition-all duration-300 overflow-hidden">
                  {/* Main Volunteering Card */}
                  <div className="p-8">
                    <div className="flex items-start gap-6">
                      {/* Timeline Dot */}
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 bg-gradient-to-r from-electric-blue to-neon-green rounded-full flex items-center justify-center">
                          {(() => { const { Icon, color } = getCategoryMeta(volunteer.type); const IconComp = Icon; return (<IconComp className={`w-8 h-8 ${color}`} />); })()}
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
                            <div className="flex items-center">
                              {(() => { const { Icon, color } = getCategoryMeta(volunteer.type); const IconComp = Icon; return (<IconComp className={`w-4 h-4 mr-2 ${color}`} />); })()}
                              <span className="text-gray-300">{volunteer.type}</span>
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

                          {/* Photos Section */}
                          {volunteer.photos && volunteer.photos.length > 0 && (
                            <div className="mt-8">
                              <div className="flex items-center mb-4">
                                <Camera className="w-5 h-5 text-electric-blue mr-2" />
                                <h5 className="text-lg font-semibold text-white">Photos</h5>
                              </div>
                              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                {volunteer.photos.map((photo, idx) => (
                                  <div key={idx} className="group relative overflow-hidden rounded-lg bg-gray-600">
                                    <img
                                      src={photo.url}
                                      alt={photo.caption || `${volunteer.role} photo ${idx + 1}`}
                                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                                      onError={(e) => {
                                        e.target.style.display = 'none';
                                        e.target.nextSibling.style.display = 'flex';
                                      }}
                                    />
                                    {/* Fallback placeholder */}
                                    <div className="hidden w-full h-48 bg-gray-600 items-center justify-center">
                                      <Image className="w-12 h-12 text-gray-400" />
                                    </div>
                                    {/* Photo overlay with caption */}
                                    {photo.caption && (
                                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3">
                                        <p className="text-white text-sm">{photo.caption}</p>
                                      </div>
                                    )}
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}
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

      {/* Section Divider */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-electric-blue to-transparent opacity-50"></div>
    </section>
  );
};

export default Volunteering;

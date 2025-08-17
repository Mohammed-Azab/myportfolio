import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Trophy, Calendar, Award, Star, Download, ExternalLink, ChevronDown, ChevronUp, Medal, Crown, FileText, User } from 'lucide-react';
import { awardsData, awardsStats, awardCategories, awardLevels } from '../data/awards';

const Awards = () => {
  const [expandedAward, setExpandedAward] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedLevel, setSelectedLevel] = useState('All');

  const toggleAward = (id) => {
    setExpandedAward(expandedAward === id ? null : id);
  };

  const filteredAwards = awardsData.filter(award => {
    const categoryMatch = selectedCategory === 'All' || award.category === selectedCategory;
    const levelMatch = selectedLevel === 'All' || award.level === selectedLevel;
    return categoryMatch && levelMatch;
  });

  const getLevelIcon = (level) => {
    switch (level) {
      case 'International': return <Crown className="w-5 h-5 text-purple-400" />;
      case 'National': return <Medal className="w-5 h-5 text-yellow-400" />;
      case 'Regional': return <Trophy className="w-5 h-5 text-orange-400" />;
      case 'University': return <Award className="w-5 h-5 text-blue-400" />;
      case 'Department': return <Star className="w-5 h-5 text-green-400" />;
      default: return <Trophy className="w-5 h-5 text-gray-400" />;
    }
  };

  const getLevelColor = (level) => {
    switch (level) {
      case 'International': return 'border-purple-400 bg-purple-500/20';
      case 'National': return 'border-yellow-400 bg-yellow-500/20';
      case 'Regional': return 'border-orange-400 bg-orange-500/20';
      case 'University': return 'border-blue-400 bg-blue-500/20';
      case 'Department': return 'border-green-400 bg-green-500/20';
      default: return 'border-gray-400 bg-gray-500/20';
    }
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
    <section id="awards" className="py-20 relative overflow-hidden">
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
                Honors & Awards
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Recognition for academic excellence, research innovation, and outstanding achievements
            </p>
          </motion.div>

          {/* Awards Stats */}
          <motion.div variants={itemVariants} className="grid grid-cols-2 md:grid-cols-6 gap-6 mb-16">
            <div className="bg-gray-800 rounded-xl p-6 text-center border border-gray-700">
              <div className="text-3xl font-bold text-electric-blue mb-2">{awardsStats.totalAwards}</div>
              <div className="text-gray-300">Total Awards</div>
            </div>
            <div className="bg-gray-800 rounded-xl p-6 text-center border border-gray-700">
              <div className="text-3xl font-bold text-blue-400 mb-2">{awardsStats.academicExcellence}</div>
              <div className="text-gray-300">Academic</div>
            </div>
            <div className="bg-gray-800 rounded-xl p-6 text-center border border-gray-700">
              <div className="text-3xl font-bold text-neon-green mb-2">{awardsStats.researchInnovation}</div>
              <div className="text-gray-300">Research</div>
            </div>
            <div className="bg-gray-800 rounded-xl p-6 text-center border border-gray-700">
              <div className="text-3xl font-bold text-purple-400 mb-2">{awardsStats.competitions}</div>
              <div className="text-gray-300">Competitions</div>
            </div>
            <div className="bg-gray-800 rounded-xl p-6 text-center border border-gray-700">
              <div className="text-3xl font-bold text-green-400 mb-2">{awardsStats.scholarships}</div>
              <div className="text-gray-300">Scholarships</div>
            </div>
            <div className="bg-gray-800 rounded-xl p-6 text-center border border-gray-700">
              <div className="text-3xl font-bold text-red-400 mb-2">{awardsStats.yearsSpan}</div>
              <div className="text-gray-300">Years Span</div>
            </div>
          </motion.div>

          {/* Filters */}
          <motion.div variants={itemVariants} className="mb-12">
            {/* Category Filter */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-white mb-3">Filter by Category:</h3>
              <div className="flex flex-wrap gap-3">
                {awardCategories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                      selectedCategory === category
                        ? 'bg-yellow-500 text-white shadow-lg shadow-yellow-500/25'
                        : 'bg-gray-700 text-gray-300 hover:bg-gray-600 hover:text-white'
                    }`}
                  >
                    {category}
                    <span className="ml-2 text-xs opacity-75">
                      ({category === 'All' ? awardsData.length : awardsData.filter(a => a.category === category).length})
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Level Filter */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-3">Filter by Level:</h3>
              <div className="flex flex-wrap gap-3">
                {awardLevels.map((level) => (
                  <button
                    key={level}
                    onClick={() => setSelectedLevel(level)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                      selectedLevel === level
                        ? 'bg-gradient-to-r from-electric-blue to-neon-green text-dark-bg shadow-lg'
                        : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-electric-blue border border-gray-700'
                    }`}
                  >
                    {level}
                    <span className="ml-2 text-xs opacity-75">
                      ({level === 'All' ? awardsData.length : awardsData.filter(a => a.level === level).length})
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Awards Timeline */}
          <motion.div variants={itemVariants} className="space-y-8">
            {filteredAwards.map((award, index) => (
              <div key={award.id} className="relative">


                <div className={`bg-gray-900 rounded-2xl border-2 border-gray-700 hover:border-electric-blue hover:shadow-lg hover:shadow-electric-blue/20 transition-all duration-300 overflow-hidden`}>
                {/* Award Card */}
                <div className="p-8">
                  <div className="flex items-start gap-6">
                    {/* Timeline Dot */}
                    <div className="flex-shrink-0">
                      <div className={`w-16 h-16 rounded-full flex items-center justify-center bg-gradient-to-r from-electric-blue to-neon-green shadow-lg`}>
                        {getLevelIcon(award.level)}
                      </div>
                    </div>

                    {/* Award Content */}
                    <div className="flex-grow">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                        <div>
                          <h3 className="text-2xl font-bold text-white mb-2">{award.title}</h3>
                          <div className="flex items-center gap-2 mb-1">
                            <p className="text-electric-blue text-lg font-medium">{award.organization}</p>
                            {award.website && (
                              <a
                                href={award.website}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-electric-blue hover:text-neon-green transition-colors"
                                title="Visit organization website"
                              >
                                <ExternalLink className="w-5 h-5" />
                              </a>
                            )}
                          </div>
                        </div>
                        <div className="flex flex-col md:items-end">
                          <div className="text-neon-green font-semibold text-lg">{award.date}</div>
                          <div className="text-gray-400 text-sm">{award.level}</div>
                        </div>
                      </div>

                      <div className="mb-4">
                        <span className="px-3 py-1 bg-electric-blue/20 text-electric-blue rounded-full text-sm border border-electric-blue/30">
                          {award.category}
                        </span>
                      </div>

                      <p className="text-gray-300 mb-6">{award.description}</p>

                      {/* Expand/Collapse Button */}
                      <button
                        onClick={() => toggleAward(award.id)}
                        className="flex items-center text-yellow-400 hover:text-yellow-300 transition-colors"
                      >
                        <span className="mr-2">
                          {expandedAward === award.id ? 'Show Less' : 'Show More Details'}
                        </span>
                        {expandedAward === award.id ? (
                          <ChevronUp className="w-4 h-4" />
                        ) : (
                          <ChevronDown className="w-4 h-4" />
                        )}
                      </button>
                    </div>
                  </div>

                  {/* Expanded Content */}
                  <AnimatePresence>
                    {expandedAward === award.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="mt-8 pt-8 border-t border-gray-700"
                      >
                        <div className="ml-22"> {/* Align with content, not timeline dot */}
                          <div className="space-y-4">
                          <div>
                            <h5 className="text-lg font-semibold text-white mb-2">Selection Criteria</h5>
                            <p className="text-gray-300 text-sm">{award.criteria}</p>
                          </div>
                          <div>
                            <h5 className="text-lg font-semibold text-white mb-2">Significance</h5>
                            <p className="text-gray-300 text-sm">{award.significance}</p>
                          </div>
                          {award.certificate && (
                            <div className="flex items-center gap-4 pt-4">
                              <a
                                href={award.certificate}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 px-4 py-2 bg-yellow-500/20 text-yellow-400 rounded-lg hover:bg-yellow-500/30 transition-colors"
                              >
                                <Download className="w-4 h-4" />
                                <span>View Certificate</span>
                              </a>
                            </div>
                          )}

                          {/* Recommendation Letters */}
                          {award.recommendationLetters && award.recommendationLetters.length > 0 && (
                            <div className="mt-6 pt-6 border-t border-gray-700">
                              <div className="flex items-center mb-4">
                                <FileText className="w-5 h-5 text-green-400 mr-2" />
                                <h5 className="text-lg font-semibold text-white">Recommendation Letters</h5>
                              </div>
                              <div className="space-y-4">
                                {award.recommendationLetters.map((letter, idx) => (
                                  <div key={idx} className="bg-gray-700 rounded-lg p-4 border-l-4 border-green-400">
                                    <div className="flex items-start justify-between mb-3">
                                      <div className="flex items-center gap-3">
                                        <User className="w-5 h-5 text-green-400" />
                                        <div>
                                          <h6 className="font-semibold text-white">{letter.author}</h6>
                                          <p className="text-green-400 text-sm">{letter.position}</p>
                                          <p className="text-gray-400 text-sm">{letter.organization}</p>
                                        </div>
                                      </div>
                                      <div className="text-right">
                                        <p className="text-gray-400 text-sm">{letter.date}</p>
                                      </div>
                                    </div>
                                    <blockquote className="text-gray-300 text-sm italic mb-3 border-l-2 border-green-400 pl-4">
                                      "{letter.excerpt}"
                                    </blockquote>
                                    {letter.url && (
                                      <a
                                        href={letter.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 px-3 py-2 bg-green-500/20 text-green-400 rounded-lg hover:bg-green-500/30 transition-colors text-sm"
                                      >
                                        <Download className="w-4 h-4" />
                                        <span>View Full Letter</span>
                                      </a>
                                    )}
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}
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

      {/* Section Divider */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-electric-blue to-transparent opacity-50"></div>
    </section>
  );
};

export default Awards;

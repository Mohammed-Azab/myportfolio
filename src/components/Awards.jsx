import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Trophy, Calendar, Award, Star, Download, ExternalLink, ChevronDown, ChevronUp, Medal, Crown } from 'lucide-react';
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
    <section id="awards" className="py-20 bg-gray-900">
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
              <span className="text-gradient bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
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
              <div className="text-3xl font-bold text-yellow-400 mb-2">{awardsStats.totalAwards}</div>
              <div className="text-gray-300">Total Awards</div>
            </div>
            <div className="bg-gray-800 rounded-xl p-6 text-center border border-gray-700">
              <div className="text-3xl font-bold text-blue-400 mb-2">{awardsStats.academicExcellence}</div>
              <div className="text-gray-300">Academic</div>
            </div>
            <div className="bg-gray-800 rounded-xl p-6 text-center border border-gray-700">
              <div className="text-3xl font-bold text-purple-400 mb-2">{awardsStats.researchInnovation}</div>
              <div className="text-gray-300">Research</div>
            </div>
            <div className="bg-gray-800 rounded-xl p-6 text-center border border-gray-700">
              <div className="text-3xl font-bold text-orange-400 mb-2">{awardsStats.competitions}</div>
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
                        ? 'bg-orange-500 text-white shadow-lg shadow-orange-500/25'
                        : 'bg-gray-700 text-gray-300 hover:bg-gray-600 hover:text-white'
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

          {/* Awards Grid */}
          <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredAwards.map((award) => (
              <div key={award.id} className={`bg-gray-800 rounded-2xl border-2 ${getLevelColor(award.level)} hover:shadow-lg transition-all duration-300 overflow-hidden`}>
                {/* Award Card */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      {getLevelIcon(award.level)}
                      <div>
                        <h3 className="text-xl font-bold text-white mb-1">{award.title}</h3>
                        <p className="text-gray-400 text-sm">{award.organization}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-yellow-400 font-semibold">{award.date}</div>
                      <div className="text-xs text-gray-400">{award.level}</div>
                    </div>
                  </div>

                  <div className="mb-4">
                    <span className="px-3 py-1 bg-yellow-500/20 text-yellow-400 rounded-full text-sm border border-yellow-500/30">
                      {award.category}
                    </span>
                  </div>

                  <p className="text-gray-300 mb-6">{award.description}</p>

                  {/* Expand/Collapse Button */}
                  <button
                    onClick={() => toggleAward(award.id)}
                    className="flex items-center text-yellow-400 hover:text-yellow-300 transition-colors w-full justify-center"
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

                  {/* Expanded Content */}
                  <AnimatePresence>
                    {expandedAward === award.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="mt-6 pt-6 border-t border-gray-700"
                      >
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
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Awards;

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Award, Clock, Calendar, ExternalLink, Filter, Star } from 'lucide-react';
import { coursesData, courseCategories, learningStats } from '../data/courses';

const Courses = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedLevel, setSelectedLevel] = useState('All');

  const levels = ['All', 'Beginner', 'Intermediate', 'Advanced', 'Professional'];

  const filteredCourses = coursesData.filter(course => {
    const categoryMatch = selectedCategory === 'All' || course.category === selectedCategory;
    const levelMatch = selectedLevel === 'All' || course.level === selectedLevel;
    return categoryMatch && levelMatch;
  });

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

  const getLevelColor = (level) => {
    switch (level) {
      case 'Beginner': return 'text-green-400 bg-green-500/20 border-green-500/30';
      case 'Intermediate': return 'text-yellow-400 bg-yellow-500/20 border-yellow-500/30';
      case 'Advanced': return 'text-orange-400 bg-orange-500/20 border-orange-500/30';
      case 'Professional': return 'text-purple-400 bg-purple-500/20 border-purple-500/30';
      default: return 'text-gray-400 bg-gray-500/20 border-gray-500/30';
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Completed': return 'text-green-400 bg-green-500/20';
      case 'In Progress': return 'text-blue-400 bg-blue-500/20';
      default: return 'text-gray-400 bg-gray-500/20';
    }
  };

  return (
    <section id="courses" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-surface via-dark-bg to-dark-surface opacity-50"></div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="max-w-7xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              <span className="text-gradient bg-gradient-to-r from-green-400 via-blue-500 to-purple-400 bg-clip-text text-transparent">
                Courses & Professional Development
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Continuous learning journey through specialized courses, certifications, and professional development programs
            </p>
          </motion.div>

          {/* Learning Statistics */}
          <motion.div variants={itemVariants} className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-12">
            <div className="bg-gray-800 rounded-xl p-4 text-center border border-gray-700">
              <div className="text-2xl font-bold text-blue-400 mb-1">{learningStats.totalCourses}</div>
              <div className="text-gray-300 text-sm">Total Courses</div>
            </div>
            <div className="bg-gray-800 rounded-xl p-4 text-center border border-gray-700">
              <div className="text-2xl font-bold text-green-400 mb-1">{learningStats.completedCourses}</div>
              <div className="text-gray-300 text-sm">Completed</div>
            </div>
            <div className="bg-gray-800 rounded-xl p-4 text-center border border-gray-700">
              <div className="text-2xl font-bold text-orange-400 mb-1">{learningStats.certificatesEarned}</div>
              <div className="text-gray-300 text-sm">Certificates</div>
            </div>
            <div className="bg-gray-800 rounded-xl p-4 text-center border border-gray-700">
              <div className="text-2xl font-bold text-purple-400 mb-1">{learningStats.totalLearningHours}</div>
              <div className="text-gray-300 text-sm">Learning Hours</div>
            </div>
            <div className="bg-gray-800 rounded-xl p-4 text-center border border-gray-700">
              <div className="text-2xl font-bold text-pink-400 mb-1">{learningStats.skillsAcquired}</div>
              <div className="text-gray-300 text-sm">Skills Acquired</div>
            </div>
            <div className="bg-gray-800 rounded-xl p-4 text-center border border-gray-700">
              <div className="text-2xl font-bold text-yellow-400 mb-1">{learningStats.averageGrade}</div>
              <div className="text-gray-300 text-sm">Avg. Grade</div>
            </div>
          </motion.div>

          {/* Course Categories */}
          <motion.div variants={itemVariants} className="mb-8">
            <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
              <Filter className="w-5 h-5 mr-2" />
              Course Categories
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-3 mb-6">
              {courseCategories.map((category) => (
                <div
                  key={category.name}
                  className="bg-gray-800 rounded-lg p-3 text-center border border-gray-700 hover:border-blue-400 transition-colors"
                >
                  <div className="text-2xl mb-1">{category.icon}</div>
                  <div className="text-sm font-medium text-white">{category.name}</div>
                  <div className="text-xs text-gray-400">{category.count} courses</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Filters */}
          <motion.div variants={itemVariants} className="flex flex-wrap gap-4 mb-8">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Category</label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="bg-gray-800 border border-gray-700 text-white rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400 focus:border-transparent"
              >
                <option value="All">All Categories</option>
                {courseCategories.map(category => (
                  <option key={category.name} value={category.name}>{category.name}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Level</label>
              <select
                value={selectedLevel}
                onChange={(e) => setSelectedLevel(e.target.value)}
                className="bg-gray-800 border border-gray-700 text-white rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400 focus:border-transparent"
              >
                {levels.map(level => (
                  <option key={level} value={level}>{level}</option>
                ))}
              </select>
            </div>
          </motion.div>

          {/* Courses Grid */}
          <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCourses.map((course) => (
              <motion.div
                key={course.id}
                variants={itemVariants}
                className="bg-gray-800 rounded-xl border border-gray-700 hover:border-blue-400 transition-all duration-300 overflow-hidden group"
              >
                <div className="p-6">
                  {/* Course Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                        {course.title}
                      </h3>
                      <p className="text-blue-400 font-medium mb-1">{course.provider}</p>
                      <p className="text-gray-400 text-sm">{course.category}</p>
                    </div>
                    <div className="flex flex-col gap-2">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getLevelColor(course.level)}`}>
                        {course.level}
                      </span>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(course.status)}`}>
                        {course.status}
                      </span>
                    </div>
                  </div>

                  {/* Course Details */}
                  <div className="space-y-3 mb-4">
                    <div className="flex items-center text-gray-300 text-sm">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>{course.period}</span>
                    </div>
                    <div className="flex items-center text-gray-300 text-sm">
                      <Clock className="w-4 h-4 mr-2" />
                      <span>{course.duration}</span>
                    </div>
                    {course.grade && (
                      <div className="flex items-center text-green-400 text-sm">
                        <Star className="w-4 h-4 mr-2" />
                        <span>Grade: {course.grade}</span>
                      </div>
                    )}
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                    {course.description}
                  </p>

                  {/* Skills */}
                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-white mb-2">Skills Learned</h4>
                    <div className="flex flex-wrap gap-1">
                      {course.skills.slice(0, 3).map((skill, idx) => (
                        <span key={idx} className="px-2 py-1 bg-gray-700 text-gray-300 rounded text-xs">
                          {skill}
                        </span>
                      ))}
                      {course.skills.length > 3 && (
                        <span className="px-2 py-1 bg-gray-700 text-gray-400 rounded text-xs">
                          +{course.skills.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Certificate */}
                  <div className="flex items-center justify-between">
                    {course.certificate.issued ? (
                      <div className="flex items-center text-green-400 text-sm">
                        <Award className="w-4 h-4 mr-2" />
                        <span>Certified</span>
                      </div>
                    ) : (
                      <div className="flex items-center text-gray-400 text-sm">
                        <Award className="w-4 h-4 mr-2" />
                        <span>In Progress</span>
                      </div>
                    )}
                    
                    {course.certificate.url && (
                      <a
                        href={course.certificate.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-blue-400 hover:text-blue-300 transition-colors text-sm"
                      >
                        <ExternalLink className="w-4 h-4 mr-1" />
                        <span>View Certificate</span>
                      </a>
                    )}
                  </div>

                  {/* Projects */}
                  {course.projects && course.projects.length > 0 && (
                    <div className="mt-4 pt-4 border-t border-gray-700">
                      <h4 className="text-sm font-medium text-white mb-2">Course Projects</h4>
                      <ul className="space-y-1">
                        {course.projects.slice(0, 2).map((project, idx) => (
                          <li key={idx} className="text-gray-300 text-xs flex items-center">
                            <div className="w-1 h-1 bg-blue-400 rounded-full mr-2"></div>
                            {project}
                          </li>
                        ))}
                        {course.projects.length > 2 && (
                          <li className="text-gray-400 text-xs">
                            +{course.projects.length - 2} more projects
                          </li>
                        )}
                      </ul>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {filteredCourses.length === 0 && (
            <div className="text-center py-12">
              <BookOpen className="w-16 h-16 text-gray-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-400 mb-2">No courses found</h3>
              <p className="text-gray-500">Try adjusting your filters to see more courses.</p>
            </div>
          )}
        </motion.div>
      </div>

      {/* Section Divider */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-electric-blue to-transparent opacity-50"></div>
    </section>
  );
};

export default Courses;

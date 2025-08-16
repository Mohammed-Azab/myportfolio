import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  GraduationCap,
  Calendar,
  MapPin,
  Award,
  BookOpen,
  Microscope,
  ChevronDown,
  ChevronUp,
  ExternalLink,
  Heart,
  Trophy,
} from "lucide-react";
import {
  educationData,
  educationStats,
  educationHighlights,
} from "../data/education";

const Education = () => {
  const [expandedEducation, setExpandedEducation] = useState(null);

  const toggleEducation = (id) => {
    setExpandedEducation(expandedEducation === id ? null : id);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="education" className="py-20 relative overflow-hidden">
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
              <span className="text-gradient bg-gradient-to-r from-blue-400 via-purple-500 to-green-400 bg-clip-text text-transparent">
                Education
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Academic journey and formal education background in Mechatronics
              Engineering and STEM
            </p>
          </motion.div>

          {/* Education Stats */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
          >
            <div className="bg-gray-800 rounded-xl p-6 text-center border border-gray-700">
              <div className="text-3xl font-bold text-blue-400 mb-2">
                {educationStats.totalYearsStudied}
              </div>
              <div className="text-gray-300">Years of Study</div>
            </div>
            <div className="bg-gray-800 rounded-xl p-6 text-center border border-gray-700">
              <div className="text-3xl font-bold text-green-400 mb-2">
                {educationStats.currentGPA}
              </div>
              <div className="text-gray-300">Current GPA</div>
            </div>
            <div className="bg-gray-800 rounded-xl p-6 text-center border border-gray-700">
              <div className="text-3xl font-bold text-purple-400 mb-2">
                {educationStats.researchProjects}
              </div>
              <div className="text-gray-300">Research Projects</div>
            </div>
            <div className="bg-gray-800 rounded-xl p-6 text-center border border-gray-700">
              <div className="text-3xl font-bold text-orange-400 mb-2">
                {educationStats.academicAwards}
              </div>
              <div className="text-gray-300">Academic Awards</div>
            </div>
          </motion.div>

          {/* Education Highlights */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          >
            {educationHighlights.map((highlight, index) => (
              <div
                key={index}
                className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-blue-400 transition-colors"
              >
                <div className="text-3xl mb-3">{highlight.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {highlight.title}
                </h3>
                <p className="text-gray-300 text-sm">{highlight.description}</p>
              </div>
            ))}
          </motion.div>

          {/* Education Timeline */}
          <motion.div variants={itemVariants} className="space-y-8">
            {educationData.map((education, index) => (
              <div key={education.id} className="relative">
                {/* Timeline Line */}
                {index !== educationData.length - 1 && (
                  <div className="absolute left-8 top-20 w-0.5 h-32 bg-gradient-to-b from-blue-400 to-purple-500"></div>
                )}

                <div className="bg-gray-800 rounded-2xl border border-gray-700 hover:border-blue-400 transition-all duration-300 overflow-hidden">
                  {/* Main Education Card */}
                  <div className="p-8">
                    <div className="flex items-start gap-6">
                      {/* Timeline Dot / Logo */}
                      <div className="flex-shrink-0">
                        {education.logo ? (
                          <div
                            className={`flex items-center justify-center border-2 border-gray-300 rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl hover:border-blue-400 bg-white ${
                              education.institution.includes("Berlin")
                                ? "w-28 h-16 p-2"
                                : "w-24 h-14 p-2"
                            }`}
                          >
                            <img
                              src={education.logo}
                              alt={`${education.institution} logo`}
                              className="max-w-full max-h-full object-contain"
                              onError={(e) => {
                                e.target.style.display = "none";
                                e.target.nextSibling.style.display = "block";
                              }}
                            />
                            <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center hidden">
                              <GraduationCap className="w-8 h-8 text-white" />
                            </div>
                          </div>
                        ) : (
                          <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center">
                            <GraduationCap className="w-8 h-8 text-white" />
                          </div>
                        )}
                      </div>

                      {/* Education Content */}
                      <div className="flex-grow">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                          <div>
                            <h3 className="text-2xl font-bold text-white mb-2">
                              {education.degree}
                            </h3>
                            <div className="flex items-center gap-2 mb-2">
                              <h4 className="text-xl text-blue-400">
                                {education.institution}
                              </h4>
                              {education.website && (
                                <a
                                  href={education.website}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-blue-400 hover:text-blue-300 transition-colors"
                                  title="Visit university website"
                                >
                                  <ExternalLink className="w-5 h-5" />
                                </a>
                              )}
                            </div>
                          </div>
                          <div className="flex flex-col md:items-end">
                            <div className="flex items-center text-gray-300 mb-1">
                              <Calendar className="w-4 h-4 mr-2" />
                              <span>{education.period}</span>
                            </div>
                            <div className="flex items-center text-gray-300 mb-1">
                              <MapPin className="w-4 h-4 mr-2" />
                              <span>{education.location}</span>
                            </div>
                            <div className="flex items-center text-green-400">
                              <Award className="w-4 h-4 mr-2" />
                              <span>{education.gpa}</span>
                            </div>
                          </div>
                        </div>

                        <p className="text-gray-300 mb-6">
                          {education.description}
                        </p>

                        {/* Specializations */}
                        <div className="flex flex-wrap gap-2 mb-6">
                          {education.specializations.map(
                            (specialization, idx) => (
                              <span
                                key={idx}
                                className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm border border-blue-500/30"
                              >
                                {specialization}
                              </span>
                            )
                          )}
                        </div>

                        {/* Expand/Collapse Button */}
                        <button
                          onClick={() => toggleEducation(education.id)}
                          className="flex items-center text-blue-400 hover:text-blue-300 transition-colors"
                        >
                          <span className="mr-2">
                            {expandedEducation === education.id
                              ? "Show Less"
                              : "Show More Details"}
                          </span>
                          {expandedEducation === education.id ? (
                            <ChevronUp className="w-4 h-4" />
                          ) : (
                            <ChevronDown className="w-4 h-4" />
                          )}
                        </button>
                      </div>
                    </div>

                    {/* Expanded Content */}
                    <AnimatePresence>
                      {expandedEducation === education.id && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="mt-8 pt-8 border-t border-gray-700"
                        >
                          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            {/* Core Courses */}
                            <div>
                              <div className="flex items-center mb-4">
                                <BookOpen className="w-5 h-5 text-green-400 mr-2" />
                                <h5 className="text-lg font-semibold text-white">
                                  Core Courses
                                </h5>
                              </div>
                              <div className="grid grid-cols-1 gap-2">
                                {education.coreCourses.map((course, idx) => (
                                  <div
                                    key={idx}
                                    className="bg-gray-700 rounded-lg p-3 text-gray-300 text-sm"
                                  >
                                    {course}
                                  </div>
                                ))}
                              </div>
                            </div>

                            {/* Research Projects */}
                            {education.researchProjects && (
                              <div>
                                <div className="flex items-center mb-4">
                                  <Microscope className="w-5 h-5 text-purple-400 mr-2" />
                                  <h5 className="text-lg font-semibold text-white">
                                    Research Projects
                                  </h5>
                                </div>
                                <div className="space-y-4">
                                  {education.researchProjects.map(
                                    (project, idx) => (
                                      <div
                                        key={idx}
                                        className="bg-gray-700 rounded-lg p-4"
                                      >
                                        <h6 className="font-semibold text-white mb-1">
                                          {project.title}
                                        </h6>
                                        <p className="text-gray-400 text-sm mb-2">
                                          Supervisor: {project.supervisor}
                                        </p>
                                        <p className="text-gray-400 text-sm mb-2">
                                          {project.duration}
                                        </p>
                                        <p className="text-gray-300 text-sm">
                                          {project.description}
                                        </p>
                                      </div>
                                    )
                                  )}
                                </div>
                              </div>
                            )}
                          </div>

                          {/* Coursework by Semester */}
                          {education.courseworkBySemester && (
                            <div className="mt-8">
                              <div className="flex items-center mb-4">
                                <GraduationCap className="w-5 h-5 text-blue-400 mr-2" />
                                <h5 className="text-lg font-semibold text-white">
                                  Coursework by Semester
                                </h5>
                              </div>
                              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                                {Object.entries(
                                  education.courseworkBySemester
                                ).map(([semester, courses]) => (
                                  <div
                                    key={semester}
                                    className="bg-gray-700 rounded-lg p-4"
                                  >
                                    <h6 className="font-semibold text-blue-400 mb-3 text-center">
                                      {semester}
                                    </h6>
                                    <div className="space-y-2">
                                      {courses.map((course, idx) => (
                                        <div
                                          key={idx}
                                          className="text-gray-300 text-sm bg-gray-600 rounded px-2 py-1"
                                        >
                                          {course}
                                        </div>
                                      ))}
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}

                          {/* Achievements */}
                          <div className="mt-8">
                            <div className="flex items-center mb-4">
                              <Award className="w-5 h-5 text-orange-400 mr-2" />
                              <h5 className="text-lg font-semibold text-white">
                                Achievements
                              </h5>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                              {education.achievements.map(
                                (achievement, idx) => (
                                  <div
                                    key={idx}
                                    className="flex items-center bg-gray-700 rounded-lg p-3"
                                  >
                                    <div className="w-2 h-2 bg-orange-400 rounded-full mr-3"></div>
                                    <span className="text-gray-300 text-sm">
                                      {achievement}
                                    </span>
                                  </div>
                                )
                              )}
                            </div>
                          </div>

                          {/* Honors and Awards */}
                          {education.honorsAndAwards && (
                            <div className="mt-8">
                              <div className="flex items-center mb-4">
                                <Trophy className="w-5 h-5 text-yellow-400 mr-2" />
                                <h5 className="text-lg font-semibold text-white">
                                  Honors & Awards
                                </h5>
                              </div>
                              <div className="space-y-4">
                                {education.honorsAndAwards.map((award, idx) => (
                                  <div
                                    key={idx}
                                    className="bg-gray-700 rounded-lg p-4 border-l-4 border-yellow-400"
                                  >
                                    <div className="flex justify-between items-start mb-2">
                                      <h6 className="font-semibold text-white">
                                        {award.title}
                                      </h6>
                                      <span className="text-yellow-400 text-sm font-medium">
                                        {award.date}
                                      </span>
                                    </div>
                                    <p className="text-blue-400 text-sm mb-2">
                                      {award.organization}
                                    </p>
                                    <p className="text-gray-300 text-sm">
                                      {award.description}
                                    </p>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}

                          {/* Volunteering Experience */}
                          {education.volunteering && (
                            <div className="mt-8">
                              <div className="flex items-center mb-4">
                                <Heart className="w-5 h-5 text-red-400 mr-2" />
                                <h5 className="text-lg font-semibold text-white">
                                  Volunteering Experience
                                </h5>
                              </div>
                              <div className="space-y-4">
                                {education.volunteering.map(
                                  (volunteer, idx) => (
                                    <div
                                      key={idx}
                                      className="bg-gray-700 rounded-lg p-4 border-l-4 border-red-400"
                                    >
                                      <div className="flex justify-between items-start mb-2">
                                        <h6 className="font-semibold text-white">
                                          {volunteer.role}
                                        </h6>
                                        <span className="text-red-400 text-sm font-medium">
                                          {volunteer.duration}
                                        </span>
                                      </div>
                                      <p className="text-blue-400 text-sm mb-2">
                                        {volunteer.organization}
                                      </p>
                                      <p className="text-gray-300 text-sm mb-2">
                                        {volunteer.description}
                                      </p>
                                      {volunteer.impact && (
                                        <div className="bg-gray-600 rounded px-3 py-2 mt-2">
                                          <p className="text-green-400 text-sm font-medium">
                                            Impact: {volunteer.impact}
                                          </p>
                                        </div>
                                      )}
                                    </div>
                                  )
                                )}
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

export default Education;

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  BookOpen,
  Award,
  Calendar,
  ExternalLink,
  BadgeCheck,
} from "lucide-react";
import { coursesData, courseCategories, learningStats } from "../data/courses";

const Courses = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredCourses = coursesData.filter((course) => {
    return selectedCategory === "All" || course.category === selectedCategory;
  });

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
              Continuous learning journey through specialized courses,
              certifications, and professional development programs
            </p>
          </motion.div>

          {/* Key Stats */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-12"
          >
            <div className="bg-gray-800 rounded-xl p-6 text-center border border-gray-700 hover:border-blue-400 transition-colors">
              <div className="text-3xl font-bold text-blue-400 mb-2">
                {learningStats.completedCourses}
              </div>
              <div className="text-gray-300 font-medium">Completed Courses</div>
            </div>
            <div className="bg-gray-800 rounded-xl p-6 text-center border border-gray-700 hover:border-green-400 transition-colors">
              <div className="text-3xl font-bold text-green-400 mb-2">
                {learningStats.certificatesEarned}
              </div>
              <div className="text-gray-300 font-medium">
                Certificates Earned
              </div>
            </div>
            <div className="bg-gray-800 rounded-xl p-6 text-center border border-gray-700 hover:border-purple-400 transition-colors">
              <div className="text-3xl font-bold text-purple-400 mb-2">
                {learningStats.skillsAcquired}
              </div>
              <div className="text-gray-300 font-medium">Skills Acquired</div>
            </div>
          </motion.div>

          {/* Course Categories Filter */}
          <motion.div variants={itemVariants} className="mb-8">
            <div className="flex flex-wrap gap-3 justify-center">
              <button
                onClick={() => setSelectedCategory("All")}
                className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === "All"
                    ? "bg-blue-500 text-white shadow-lg scale-105"
                    : "bg-gray-800 text-gray-300 border border-gray-700 hover:border-blue-400 hover:text-blue-300"
                }`}
              >
                All Courses
              </button>
              {courseCategories.map((category) => (
                <button
                  key={category.name}
                  onClick={() => setSelectedCategory(category.name)}
                  className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                    selectedCategory === category.name
                      ? "bg-blue-500 text-white shadow-lg scale-105"
                      : "bg-gray-800 text-gray-300 border border-gray-700 hover:border-blue-400 hover:text-blue-300"
                  }`}
                >
                  {category.icon} {category.name}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Courses Grid */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {filteredCourses.map((course) => (
              <motion.div
                key={course.id}
                variants={itemVariants}
                className="bg-gray-800 rounded-xl border border-gray-700 hover:border-blue-400 transition-all duration-300 overflow-hidden group hover:shadow-xl"
              >
                <div className="p-8">
                  {/* Course Header */}
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                      {course.title}
                    </h3>
                    <div className="flex items-center gap-4 mb-2">
                      <p className="text-blue-400 font-semibold">
                        {course.provider}
                      </p>
                      <div className="flex items-center text-gray-300 text-sm">
                        <Calendar className="w-4 h-4 mr-1" />
                        <span>{course.period}</span>
                      </div>
                    </div>
                    <p className="text-gray-400">{course.category}</p>
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {course.description}
                  </p>

                  {/* Key Skills */}
                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-3">
                      Key Skills
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {course.skills.map((skill, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm border border-blue-500/30"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Certificate */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-700">
                    {course.certificate.issued ? (
                      <div className="flex items-center text-green-400 font-medium">
                        <BadgeCheck className="w-5 h-5 mr-2" />
                        <span>Certified</span>
                      </div>
                    ) : (
                      <div className="flex items-center text-gray-400">
                        <Award className="w-5 h-5 mr-2" />
                        <span>In Progress</span>
                      </div>
                    )}

                    {course.certificate.url && (
                      <a
                        href={course.certificate.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-blue-400 hover:text-blue-300 transition-colors font-medium"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        <span>View Certificate</span>
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {filteredCourses.length === 0 && (
            <div className="text-center py-12">
              <BookOpen className="w-16 h-16 text-gray-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-400 mb-2">
                No courses found
              </h3>
              <p className="text-gray-500">
                Try adjusting your filters to see more courses.
              </p>
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

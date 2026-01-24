import React from "react";
import { motion } from "framer-motion";
import {
  BookOpen,
  ExternalLink,
  FileText,
  Github,
  Play,
  Award,
} from "lucide-react";
import { publicationsData, publicationStats } from "../data/publications";

const Publications = () => {
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
    <section id="publications" className="py-20 relative overflow-hidden">
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
              <span className="text-gradient bg-gradient-to-r from-purple-400 via-pink-500 to-red-400 bg-clip-text text-transparent">
                Publications
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Research contributions and published work
            </p>
          </motion.div>

          {/* Publication Stats */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
          >
            <div className="bg-gradient-to-br from-purple-900/50 to-purple-800/30 rounded-xl p-6 border border-purple-700/50">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-purple-400" />
                </div>
                <h3 className="text-lg font-semibold text-white">
                  Total Publications
                </h3>
              </div>
              <p className="text-3xl font-bold text-purple-200">
                {publicationStats.totalPublications}
              </p>
            </div>

            <div className="bg-gradient-to-br from-pink-900/50 to-pink-800/30 rounded-xl p-6 border border-pink-700/50">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-pink-500/20 rounded-lg flex items-center justify-center">
                  <Award className="w-6 h-6 text-pink-400" />
                </div>
                <h3 className="text-lg font-semibold text-white">
                  Conference Papers
                </h3>
              </div>
              <p className="text-3xl font-bold text-pink-200">
                {publicationStats.conferencePublications}
              </p>
            </div>

            <div className="bg-gradient-to-br from-red-900/50 to-red-800/30 rounded-xl p-6 border border-red-700/50">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-red-500/20 rounded-lg flex items-center justify-center">
                  <FileText className="w-6 h-6 text-red-400" />
                </div>
                <h3 className="text-lg font-semibold text-white">
                  Journal Articles
                </h3>
              </div>
              <p className="text-3xl font-bold text-red-200">
                {publicationStats.journalPublications}
              </p>
            </div>
          </motion.div>

          {/* Publications List */}
          <motion.div variants={itemVariants} className="space-y-8">
            {publicationsData.map((publication) => (
              <div
                key={publication.id}
                className="bg-gray-800 rounded-2xl border border-gray-700 hover:border-purple-400 transition-all duration-300 overflow-hidden"
              >
                <div className="p-8">
                  {/* Publication Header */}
                  <div className="mb-4">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-2xl font-bold text-white flex-grow pr-4">
                        {publication.title}
                      </h3>
                      <span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-sm border border-purple-500/30 whitespace-nowrap">
                        {publication.type}
                      </span>
                    </div>
                    <p className="text-gray-400 mb-2">
                      {publication.authors && publication.authors.join(", ")}
                    </p>
                    <div className="flex flex-wrap items-center gap-2 text-gray-300">
                      <span className="text-blue-400 font-medium">
                        {publication.conference}
                      </span>

                      {publication.conferenceWebsite && (
                        <a
                          href={publication.conferenceWebsite}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-400 hover:text-blue-300 transition-colors"
                          title="Visit conference website"
                        >
                          <ExternalLink className="w-5 h-5" />
                        </a>
                      )}
                      <span className="text-gray-500">•</span>
                      <span>{publication.location}</span>
                      <span className="text-gray-500">•</span>
                      <span>{publication.year}</span>
                    </div>
                  </div>

                  {/* Abstract */}
                  <div className="mb-6">
                    <p className="text-gray-300 leading-relaxed">
                      {publication.abstract}
                    </p>
                  </div>

                  {/* Highlights */}
                  {publication.highlights &&
                    publication.highlights.length > 0 && (
                      <div className="mb-6">
                        <h4 className="text-lg font-semibold text-white mb-3">
                          Key Contributions
                        </h4>
                        <ul className="space-y-2">
                          {publication.highlights.map((highlight, idx) => (
                            <li
                              key={idx}
                              className="flex items-start text-gray-300"
                            >
                              <div className="w-2 h-2 bg-purple-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                              <span>{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                  {/* Keywords */}
                  {publication.keywords && publication.keywords.length > 0 && (
                    <div className="mb-6">
                      <div className="flex flex-wrap gap-2">
                        {publication.keywords.map((keyword, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm"
                          >
                            {keyword}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Links */}
                  <div className="flex flex-wrap gap-3">
                    {publication.pdf && (
                      <a
                        href={publication.pdf}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-blue-500/20 text-blue-400 rounded-lg border border-blue-500/30 hover:bg-blue-500/30 transition-colors"
                      >
                        <FileText className="w-4 h-4" />
                        <span>PDF</span>
                      </a>
                    )}
                    {publication.doi && (
                      <a
                        href={`https://doi.org/${publication.doi}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-green-500/20 text-green-400 rounded-lg border border-green-500/30 hover:bg-green-500/30 transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span>DOI</span>
                      </a>
                    )}
                    {publication.arxiv && (
                      <a
                        href={publication.arxiv}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-orange-500/20 text-orange-400 rounded-lg border border-orange-500/30 hover:bg-orange-500/30 transition-colors"
                      >
                        <FileText className="w-4 h-4" />
                        <span>arXiv</span>
                      </a>
                    )}
                    {publication.code && (
                      <a
                        href={publication.code}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-purple-500/20 text-purple-400 rounded-lg border border-purple-500/30 hover:bg-purple-500/30 transition-colors"
                      >
                        <Github className="w-4 h-4" />
                        <span>Code</span>
                      </a>
                    )}
                    {publication.video && (
                      <a
                        href={publication.video}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-red-500/20 text-red-400 rounded-lg border border-red-500/30 hover:bg-red-500/30 transition-colors"
                      >
                        <Play className="w-4 h-4" />
                        <span>Video</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Section Divider */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent opacity-50"></div>
    </section>
  );
};

export default Publications;

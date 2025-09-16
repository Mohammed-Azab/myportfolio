import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Trophy,
  Calendar,
  Award,
  Star,
  ExternalLink,
  Medal,
  Crown,
  FileText,
  X,
  ZoomIn,
  ZoomOut,
} from "lucide-react";
import { awardsData } from "../data/awards";
import ImageGallery from "./ImageGallery";

const Awards = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [gallery, setGallery] = useState({
    open: false,
    images: [],
    initialIndex: 0,
  });

  // Dynamically generate categories from award data
  const generateCategories = () => {
    const categories = ["All"];
    const uniqueCategories = [
      ...new Set(awardsData.map((award) => award.category)),
    ];
    categories.push(...uniqueCategories.sort());
    return categories;
  };

  const awardCategories = generateCategories();

  const filteredAwards = awardsData.filter((award) => {
    const categoryMatch =
      selectedCategory === "All" || award.category === selectedCategory;
    return categoryMatch;
  });

  const getLevelIcon = (level) => {
    switch (level) {
      case "International":
        return <Crown className="w-5 h-5 text-purple-400" />;
      case "National":
        return <Medal className="w-5 h-5 text-yellow-400" />;
      case "Regional":
        return <Trophy className="w-5 h-5 text-orange-400" />;
      case "University":
        return <Award className="w-5 h-5 text-blue-400" />;
      case "Department":
        return <Star className="w-5 h-5 text-green-400" />;
      default:
        return <Trophy className="w-5 h-5 text-gray-400" />;
    }
  };

  const getLevelColor = (level) => {
    switch (level) {
      case "International":
        return "border-purple-400 bg-purple-500/20";
      case "National":
        return "border-yellow-400 bg-yellow-500/20";
      case "Regional":
        return "border-orange-400 bg-orange-500/20";
      case "University":
        return "border-blue-400 bg-blue-500/20";
      case "Department":
        return "border-green-400 bg-green-500/20";
      default:
        return "border-gray-400 bg-gray-500/20";
    }
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
              Recognition for academic excellence, research innovation, and
              outstanding achievements
            </p>
          </motion.div>

          {/* Awards Stats (removed) */}

          {/* Filters */}
          <motion.div variants={itemVariants} className="mb-12">
            {/* Category Filter (styled like previous Level filter) */}
            <div className="mb-6">
              <div className="flex flex-wrap gap-3 justify-center">
                {awardCategories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${
                      selectedCategory === category
                        ? "bg-gradient-to-r from-electric-blue to-neon-green text-dark-bg shadow-lg border-transparent"
                        : "bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-electric-blue border-gray-700"
                    }`}
                  >
                    <span className="inline-flex items-center gap-2 align-middle">
                      <span className="leading-none">{category}</span>
                      <span className="text-sm opacity-75 leading-none">
                        (
                        {category === "All"
                          ? awardsData.length
                          : awardsData.filter((a) => a.category === category)
                              .length}
                        )
                      </span>
                    </span>
                  </button>
                ))}
              </div>
            </div>
            {/* Level Filter (removed) */}
          </motion.div>

          {/* Awards Timeline */}
          <motion.div variants={itemVariants} className="space-y-8">
            {filteredAwards.map((award, index) => (
              <div key={award.id} className="relative">
                <div
                  className={`bg-gray-900 rounded-2xl border-2 border-gray-700 hover:border-electric-blue hover:shadow-lg hover:shadow-electric-blue/20 transition-all duration-300 overflow-hidden`}
                >
                  {/* Award Card */}
                  <div className="p-8">
                    <div className="flex items-start gap-6">
                      {/* Timeline Dot */}
                      <div className="flex-shrink-0">
                        <div
                          className={`w-16 h-16 rounded-full flex items-center justify-center bg-gradient-to-r from-electric-blue to-neon-green shadow-lg`}
                        >
                          {getLevelIcon(award.level)}
                        </div>
                      </div>

                      {/* Award Content */}
                      <div className="flex-grow">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                          <div>
                            <h3 className="text-2xl font-bold text-white mb-2">
                              {award.title}
                            </h3>
                            <div className="flex items-center gap-2 mb-1">
                              <p className="text-electric-blue text-lg font-medium">
                                {award.organization}
                              </p>
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
                            <div className="text-neon-green font-semibold text-lg">
                              {award.date}
                            </div>
                            <div className="text-gray-400 text-sm">
                              {award.level}
                            </div>
                          </div>
                        </div>

                        <div className="mb-4">
                          <span className="px-3 py-1 bg-electric-blue/20 text-electric-blue rounded-full text-sm border border-electric-blue/30">
                            {award.category}
                          </span>
                        </div>

                        <p className="text-gray-300 mb-6">
                          {award.description}
                        </p>

                        {award.photos && award.photos.length > 0 && (
                          <div className="mb-6">
                            <div className="flex items-center mb-3">
                              <Trophy className="w-5 h-5 text-electric-blue mr-2" />
                              <h5 className="text-white font-semibold">
                                Photos
                              </h5>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              {award.photos.map((photo, idx) => (
                                <button
                                  key={idx}
                                  type="button"
                                  onClick={() => {
                                    const images = award.photos.map(
                                      (photo, photoIdx) => ({
                                        url: photo.url,
                                        caption: photo.caption,
                                        alt:
                                          photo.caption ||
                                          `${award.title} photo ${
                                            photoIdx + 1
                                          }`,
                                      })
                                    );

                                    setGallery({
                                      open: true,
                                      images,
                                      initialIndex: idx,
                                    });
                                  }}
                                  className="group relative overflow-hidden rounded-lg bg-gray-700/60 border border-gray-700 cursor-zoom-in"
                                  aria-label="Open photo"
                                >
                                  <img
                                    src={photo.url}
                                    alt={
                                      photo.caption ||
                                      `${award.title} photo ${idx + 1}`
                                    }
                                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                                    loading="lazy"
                                  />
                                  {photo.caption && (
                                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3">
                                      <p className="text-white text-sm">
                                        {photo.caption}
                                      </p>
                                    </div>
                                  )}
                                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                    <div className="bg-white/90 rounded-full p-2">
                                      <ZoomIn className="w-6 h-6 text-gray-800" />
                                    </div>
                                  </div>
                                </button>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* View Certificate Button */}
                        {award.certificate && (
                          <motion.a
                            href={award.certificate}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center px-4 py-2 bg-yellow-500/10 border border-yellow-400/30 text-yellow-400 rounded-lg hover:bg-yellow-500/20 hover:border-yellow-400/50 hover:text-yellow-300 transition-all duration-300 hover:shadow-lg hover:shadow-yellow-400/20"
                            whileHover={{
                              scale: 1.05,
                              boxShadow: "0 10px 25px rgba(250, 204, 21, 0.15)",
                            }}
                            whileTap={{ scale: 0.95 }}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                              duration: 0.3,
                              ease: "easeOut",
                            }}
                          >
                            <motion.div
                              whileHover={{ rotate: 5 }}
                              transition={{ duration: 0.2 }}
                            >
                              <FileText className="w-4 h-4 mr-2" />
                            </motion.div>
                            <span className="font-medium">
                              View Certificate
                            </span>
                          </motion.a>
                        )}
                      </div>
                    </div>

                    {/* Expanded Content */}
                    <AnimatePresence></AnimatePresence>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Image Gallery */}
      <ImageGallery
        images={gallery.images}
        open={gallery.open}
        onClose={() => setGallery({ open: false, images: [], initialIndex: 0 })}
        initialIndex={gallery.initialIndex}
        hideDescriptions={true} 
      />

      {/* Section Divider */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-electric-blue to-transparent opacity-50"></div>
    </section>
  );
};

export default Awards;

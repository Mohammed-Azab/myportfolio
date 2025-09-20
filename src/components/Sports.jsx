import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Trophy,
  Calendar,
  MapPin,
  Users,
  Target,
  ExternalLink,
  Activity,
  Award,
  TrendingUp,
  X,
  ZoomIn,
  Camera,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { sportsData, sportsCategories } from "../data/sports";
import ImageGallery from "./ImageGallery";

const Sports = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const [gallery, setGallery] = useState({
    open: false,
    images: [],
    initialIndex: 0,
  });

  const filteredActivities = sportsData.filter((activity) => {
    const categoryMatch =
      selectedCategory === "All" || activity.category === selectedCategory;
    return categoryMatch;
  });

  // Keyboard navigation listener
  useEffect(() => {
    const handleKeyDown = (event) => {
      // Only handle keyboard navigation if we're in the sports section
      const sportsSection = document.getElementById("sports");
      if (!sportsSection) return;

      // Check if the sports section is in viewport
      const rect = sportsSection.getBoundingClientRect();
      const isInViewport = rect.top < window.innerHeight && rect.bottom > 0;

      if (!isInViewport) return;

      // Get the current activity (assuming first one for now, could be enhanced)
      const currentActivity = filteredActivities[0];
      if (
        !currentActivity ||
        !currentActivity.photos ||
        currentActivity.photos.length <= 1
      )
        return;

      if (event.key === "ArrowLeft") {
        event.preventDefault();
        navigatePhoto(currentActivity.id, "prev");
      } else if (event.key === "ArrowRight") {
        event.preventDefault();
        navigatePhoto(currentActivity.id, "next");
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [filteredActivities, currentPhotoIndex]);

  const openGallery = (photos, initialIndex = 0) => {
    const galleryImages = photos.map((photo) => ({
      src: photo.url,
      caption: photo.caption || "",
    }));

    setGallery({
      open: true,
      images: galleryImages,
      initialIndex: initialIndex,
    });
  };

  const closeGallery = () => {
    setGallery({
      open: false,
      images: [],
      initialIndex: 0,
    });
  };

  const navigatePhoto = (activityId, direction) => {
    const activity = filteredActivities.find((a) => a.id === activityId);
    if (!activity || !activity.photos || activity.photos.length === 0) return;

    const currentIndex = currentPhotoIndex;
    let newIndex;

    if (direction === "next") {
      newIndex = (currentIndex + 1) % activity.photos.length;
    } else {
      newIndex =
        currentIndex === 0 ? activity.photos.length - 1 : currentIndex - 1;
    }

    setCurrentPhotoIndex(newIndex);
  };

  const getCurrentPhoto = (activity) => {
    if (!activity.photos || activity.photos.length === 0) {
      return activity.image;
    }
    return activity.photos[currentPhotoIndex]?.url || activity.image;
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 1.0,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 10, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="sports" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-surface via-dark-bg to-dark-surface opacity-50"></div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              <span className="text-gradient bg-gradient-to-r from-electric-blue via-purple-500 to-neon-green bg-clip-text text-transparent">
                Sports & Activities
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Promoting fitness, teamwork, and community engagement through
              sports participation and wellness activities.
            </p>
          </motion.div>

          {/* Category Filter */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {sportsCategories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-lg font-medium text-sm transition-all duration-300 flex items-center gap-2 ${
                  selectedCategory === category
                    ? "bg-electric-blue text-black shadow-lg shadow-electric-blue/30"
                    : "bg-dark-surface text-gray-300 hover:bg-electric-blue hover:text-black border border-gray-700 hover:border-electric-blue"
                }`}
              >
                <Activity className="w-4 h-4" />
                {category}
              </button>
            ))}
          </motion.div>

          {/* Activities Grid */}
          <motion.div variants={itemVariants} className="space-y-8">
            <AnimatePresence mode="wait">
              {filteredActivities.map((activity, index) => (
                <motion.div
                  key={activity.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="bg-dark-surface rounded-xl border border-gray-800 overflow-hidden hover:border-electric-blue/50 transition-all duration-300"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                    {/* Gallery Area with Navigation */}
                    <div className="relative group aspect-video lg:aspect-square overflow-hidden">
                      <img
                        src={getCurrentPhoto(activity)}
                        alt={activity.activity}
                        className="w-full h-full object-cover transition-all duration-300 group-hover:scale-105"
                      />

                      {/* Navigation Arrows */}
                      {activity.photos && activity.photos.length > 1 && (
                        <>
                          {/* Left Arrow */}
                          <button
                            onClick={() => navigatePhoto(activity.id, "prev")}
                            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/70 backdrop-blur-sm text-white p-2 rounded-full hover:bg-black/90 transition-all duration-200 z-10 opacity-0 group-hover:opacity-100"
                          >
                            <ChevronLeft className="w-5 h-5" />
                          </button>

                          {/* Right Arrow */}
                          <button
                            onClick={() => navigatePhoto(activity.id, "next")}
                            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/70 backdrop-blur-sm text-white p-2 rounded-full hover:bg-black/90 transition-all duration-200 z-10 opacity-0 group-hover:opacity-100"
                          >
                            <ChevronRight className="w-5 h-5" />
                          </button>

                          {/* Photo Indicator */}
                          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/70 backdrop-blur-sm text-white px-3 py-1 rounded-lg text-sm z-10">
                            {currentPhotoIndex + 1} / {activity.photos.length}
                          </div>
                        </>
                      )}

                      {/* Photo Caption */}
                      {activity.photos &&
                        activity.photos[currentPhotoIndex]?.caption && (
                          <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-sm text-white px-3 py-1 rounded-lg text-sm max-w-xs">
                            {activity.photos[currentPhotoIndex].caption}
                          </div>
                        )}
                    </div>

                    {/* Activity Details */}
                    <div className="p-8">
                      {/* Logo Section - Small logo displayed separately */}
                      {activity.logo && (
                        <div className="flex items-center gap-4 mb-6 pb-4 border-b border-gray-700">
                          <div className="w-16 h-16 rounded-lg overflow-hidden border-2 border-gray-600 bg-white/10 flex-shrink-0">
                            <img
                              src={activity.logo}
                              alt={`${activity.activity} logo`}
                              className="w-full h-full object-contain p-1"
                            />
                          </div>
                          <div>
                            <span className="text-xs text-gray-400 uppercase tracking-wide">
                              B2Run
                            </span>
                            <p className="text-sm text-gray-300">
                              {activity.type || "Official Event"}
                            </p>
                          </div>
                        </div>
                      )}
                      <div className="flex flex-wrap items-center gap-2 mb-4">
                        <span className="px-3 py-1 bg-electric-blue/20 text-electric-blue rounded-full text-sm font-medium">
                          {activity.category}
                        </span>
                        {activity.featured && (
                          <span className="px-3 py-1 bg-yellow-500/20 text-yellow-400 rounded-full text-sm font-medium flex items-center gap-1">
                            <Trophy className="w-3 h-3" />
                            Featured
                          </span>
                        )}
                      </div>

                      <h3 className="text-2xl font-bold text-white mb-2">
                        {activity.activity}
                      </h3>

                      <div className="flex flex-wrap gap-4 text-gray-400 text-sm mb-4">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {activity.date}
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {activity.location}
                        </div>
                        {activity.stats && (
                          <div className="flex items-center gap-1">
                            <Users className="w-4 h-4" />
                            {activity.stats.participants} participants
                          </div>
                        )}
                      </div>

                      <p className="text-gray-300 mb-6 leading-relaxed">
                        {activity.description}
                      </p>

                      {/* Stats */}
                      {activity.stats && (
                        <div className="grid grid-cols-2 gap-4 mb-6">
                          <div className="bg-dark-bg rounded-lg p-4">
                            <div className="text-electric-blue text-2xl font-bold">
                              {activity.stats.participants}
                            </div>
                            <div className="text-gray-400 text-sm">
                              Participants
                            </div>
                          </div>
                          <div className="bg-dark-bg rounded-lg p-4">
                            <div className="text-neon-green text-2xl font-bold">
                              {activity.stats.companies}
                            </div>
                            <div className="text-gray-400 text-sm">
                              Companies
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Achievements */}
                      {activity.achievements && (
                        <div className="mb-6">
                          <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                            <Target className="w-4 h-4 text-electric-blue" />
                            Key Achievements
                          </h4>
                          <ul className="space-y-2">
                            {activity.achievements
                              .slice(0, 3)
                              .map((achievement, i) => (
                                <li
                                  key={i}
                                  className="text-gray-300 text-sm flex items-start gap-2"
                                >
                                  <div className="w-1.5 h-1.5 bg-electric-blue rounded-full mt-2 flex-shrink-0"></div>
                                  {achievement}
                                </li>
                              ))}
                          </ul>
                        </div>
                      )}

                      {/* External Link */}
                      {activity.website && (
                        <a
                          href={activity.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-electric-blue hover:text-blue-400 transition-colors duration-200 font-medium"
                        >
                          <ExternalLink className="w-4 h-4" />
                          Learn More
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </div>

      {/* Image Gallery Modal */}
      <ImageGallery
        images={gallery.images}
        isOpen={gallery.open}
        onClose={closeGallery}
        initialIndex={gallery.initialIndex}
        hideDescriptions={false}
      />

      {/* Section Divider */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-electric-blue to-transparent opacity-50"></div>
    </section>
  );
};

export default Sports;

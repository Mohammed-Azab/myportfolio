import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  BookOpen,
  Award,
  Calendar,
  ExternalLink,
  BadgeCheck,
  Brain,
  Cpu,
  Zap,
  Eye,
  BarChart3,
  Wrench,
  Bot,
  Settings,
  Battery,
  X,
  ZoomIn,
  ZoomOut,
  ChevronLeft,
  ChevronRight,
  Camera,
  Image,
} from "lucide-react";
import { coursesData, learningStats } from "../data/courses";

const Courses = () => {
  const [selectedCategoryKey, setSelectedCategoryKey] = useState("all");
  const [lightbox, setLightbox] = useState({
    open: false,
    src: null,
    alt: null,
    scale: 1,
  });

  const normalizeCategory = (value) =>
    (value ?? "").toString().trim().toLowerCase();

  const filteredCourses = coursesData.filter((course) => {
    if (selectedCategoryKey === "all") return true;
    return normalizeCategory(course.category) === selectedCategoryKey;
  });

  // Professional category icon mapping
  const getCategoryIcon = (categoryName) => {
    const iconMap = {
      Robotics: Bot,
      "AI/ML": Brain,
      Automation: Settings,
      Electronics: Cpu,
      "Computer Vision": Eye,
      "Signal Processing": BarChart3,
      Manufacturing: Wrench,
      Energy: Battery,
      Engineering: Cpu,
      Design: Zap,
      Language: BookOpen,
    };
    return iconMap[categoryName] || BookOpen;
  };

  // Derive categories automatically from courses data (case-insensitive unique)
  const categoryOptions = (() => {
    const map = new Map();
    for (const course of coursesData) {
      const label = course.category ?? "Other";
      const key = normalizeCategory(label);
      if (!map.has(key)) map.set(key, { key, label });
    }
    return Array.from(map.values());
  })();

  // Preload course photos to make lightbox open instantly
  React.useEffect(() => {
    try {
      const allPhotos = coursesData
        .flatMap((c) => (Array.isArray(c.photos) ? c.photos : []))
        .map((p) => p.url)
        .filter(Boolean);
      allPhotos.forEach((src) => {
        const img = new Image();
        img.src = src;
        img.decoding = "async";
      });
    } catch (_) {}
  }, []);

  const openLightbox = (src, alt = "Course Photo") => {
    setLightbox({ open: true, src, alt, scale: 1 });
  };

  const closeLightbox = () => setLightbox((prev) => ({ ...prev, open: false }));
  const zoomInHandler = () =>
    setLightbox((prev) => ({ ...prev, scale: Math.min(prev.scale + 0.2, 4) }));
  const zoomOutHandler = () =>
    setLightbox((prev) => ({ ...prev, scale: Math.max(prev.scale - 0.2, 1) }));
  const resetZoom = () => setLightbox((prev) => ({ ...prev, scale: 1 }));
  // No prev/next navigation in courses lightbox (single-image like Projects)

  React.useEffect(() => {
    if (!lightbox.open) return;
    const onKey = (e) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "+" || e.key === "=") zoomInHandler();
      if (e.key === "-" || e.key === "_") zoomOutHandler();
      if (e.key === "0") resetZoom();
      // No arrow navigation for courses lightbox
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightbox.open]);
  // Tech badge function from Projects component
  const getTechBadge = (tech) => {
    const techBadges = {
      // Languages
      Python:
        "https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54",
      Java: "https://img.shields.io/badge/java-%23ED8B00.svg?style=for-the-badge&logo=openjdk&logoColor=white",
      JavaScript:
        "https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E",
      CSS: "https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white",
      "C++":
        "https://img.shields.io/badge/c++-%2300599C.svg?style=for-the-badge&logo=c%2B%2B&logoColor=white",
      C: "https://img.shields.io/badge/c-%2300599C.svg?style=for-the-badge&logo=c&logoColor=white",

      // Frameworks & Tools
      ROS2: "https://img.shields.io/badge/ros2-%230A0FF9.svg?style=for-the-badge&logo=ros&logoColor=white",
      MATLAB: "https://img.shields.io/badge/MATLAB-0076A8?style=for-the-badge",
      Simulink:
        "https://img.shields.io/badge/Simulink-0076A8?style=for-the-badge",
      Git: "https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white",
      GitHub:
        "https://img.shields.io/badge/GitHub-%23121011.svg?style=for-the-badge&logo=github&logoColor=white",

      // Hardware
      Arduino:
        "https://img.shields.io/badge/-Arduino-00979D?style=for-the-badge&logo=Arduino&logoColor=white",
      ESP32:
        "https://img.shields.io/badge/ESP32-%23000000.svg?style=for-the-badge&logo=espressif&logoColor=white",

      // AI/ML
      "Machine Learning":
        "https://img.shields.io/badge/Machine_Learning-%23FF6F00.svg?style=for-the-badge&logo=tensorflow&logoColor=white",
      "Supervised Learning":
        "https://img.shields.io/badge/Supervised_Learning-blue?style=for-the-badge",
      "Unsupervised Learning":
        "https://img.shields.io/badge/Unsupervised_Learning-purple?style=for-the-badge",
      "Reinforcement Learning":
        "https://img.shields.io/badge/Reinforcement_Learning-green?style=for-the-badge",
      OpenCV:
        "https://img.shields.io/badge/opencv-%23white.svg?style=for-the-badge&logo=opencv&logoColor=white",

      // Control Systems
      PID: "https://img.shields.io/badge/PID-orange?style=for-the-badge",
      "Lead-Lag":
        "https://img.shields.io/badge/Lead--Lag-green?style=for-the-badge",
      Navigation:
        "https://img.shields.io/badge/Navigation-blue?style=for-the-badge",
      SLAM: "https://img.shields.io/badge/SLAM-blue?style=for-the-badge",
      Gazebo:
        "https://img.shields.io/badge/Gazebo-%23FF6600.svg?style=for-the-badge&logo=gazebo&logoColor=white",
      "Robot Control":
        "https://img.shields.io/badge/Robot_Control-darkblue?style=for-the-badge",

      // Engineering
      "Digital Manufacturing":
        "https://img.shields.io/badge/Digital_Manufacturing-darkgreen?style=for-the-badge",
      "Industry 4.0":
        "https://img.shields.io/badge/Industry_4.0-orange?style=for-the-badge",
      "Aerospace Engineering":
        "https://img.shields.io/badge/Aerospace_Engineering-navy?style=for-the-badge",
      "Digital Transformation":
        "https://img.shields.io/badge/Digital_Transformation-purple?style=for-the-badge",

      // Design & CAD
      "Siemens NX":
        "https://img.shields.io/badge/Siemens_NX-darkblue?style=for-the-badge",
      "Fusion 360":
        "https://img.shields.io/badge/Fusion_360-orange?style=for-the-badge",
      SolidWorks:
        "https://img.shields.io/badge/SolidWorks-red?style=for-the-badge",
      AutoCAD: "https://img.shields.io/badge/AutoCAD-blue?style=for-the-badge",
      "Mechanical Design":
        "https://img.shields.io/badge/Mechanical_Design-gray?style=for-the-badge",

      // Manufacturing
      "CNC Programming":
        "https://img.shields.io/badge/CNC_Programming-darkgray?style=for-the-badge",
      "5-Axis Machining":
        "https://img.shields.io/badge/5--Axis_Machining-brown?style=for-the-badge",
      Manufacturing:
        "https://img.shields.io/badge/Manufacturing-green?style=for-the-badge",
      "G-Code":
        "https://img.shields.io/badge/G--Code-yellow?style=for-the-badge",
      CAM: "https://img.shields.io/badge/CAM-lightblue?style=for-the-badge",

      // Electronics & Embedded
      "Real-time Systems":
        "https://img.shields.io/badge/Real--time_Systems-red?style=for-the-badge",
      IoT: "https://img.shields.io/badge/IoT-lightgreen?style=for-the-badge",
      Sensors: "https://img.shields.io/badge/Sensors-blue?style=for-the-badge",

      // Signal Processing
      "Signal Processing":
        "https://img.shields.io/badge/Signal_Processing-darkgreen?style=for-the-badge",
      FFT: "https://img.shields.io/badge/FFT-purple?style=for-the-badge",
      "Digital Filters":
        "https://img.shields.io/badge/Digital_Filters-orange?style=for-the-badge",

      // Communication & PLC
      "Siemens PLC":
        "https://img.shields.io/badge/Siemens_PLC-darkblue?style=for-the-badge",
      SCADA: "https://img.shields.io/badge/SCADA-green?style=for-the-badge",
      "HMI Design":
        "https://img.shields.io/badge/HMI_Design-lightblue?style=for-the-badge",
      "Industrial Networks":
        "https://img.shields.io/badge/Industrial_Networks-orange?style=for-the-badge",
      "Ladder Logic":
        "https://img.shields.io/badge/Ladder_Logic-yellow?style=for-the-badge",

      // Languages
      "German Language":
        "https://img.shields.io/badge/German-black?style=for-the-badge&logo=germany&logoColor=white",
      Communication:
        "https://img.shields.io/badge/Communication-blue?style=for-the-badge",
      "Technical German":
        "https://img.shields.io/badge/Technical_German-red?style=for-the-badge",
      "Business German":
        "https://img.shields.io/badge/Business_German-darkgreen?style=for-the-badge",
    };

    return techBadges[tech] || null;
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
                onClick={() => setSelectedCategoryKey("all")}
                className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                  selectedCategoryKey === "all"
                    ? "bg-blue-500 text-white shadow-lg scale-105"
                    : "bg-gray-800 text-gray-300 border border-gray-700 hover:border-blue-400 hover:text-blue-300"
                }`}
              >
                <BookOpen className="inline-block w-5 h-5 mr-2" /> All
              </button>
              {categoryOptions.map(({ key, label }) => {
                const Icon = getCategoryIcon(label);
                return (
                  <button
                    key={key}
                    onClick={() => setSelectedCategoryKey(key)}
                    className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                      selectedCategoryKey === key
                        ? "bg-blue-500 text-white shadow-lg scale-105"
                        : "bg-gray-800 text-gray-300 border border-gray-700 hover:border-blue-400 hover:text-blue-300"
                    }`}
                  >
                    <Icon className="inline-block w-5 h-5 mr-2" /> {label}
                  </button>
                );
              })}
            </div>
          </motion.div>

          {/* Courses Grid */}
          <motion.div
            key={selectedCategoryKey}
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {filteredCourses.map((course) => (
              <motion.div
                key={course.id}
                variants={itemVariants}
                initial="hidden"
                animate="visible"
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
                    <div className="flex flex-wrap gap-3">
                      {course.skills.map((skill, idx) => {
                        const badgeUrl = getTechBadge(skill);
                        return (
                          <div
                            key={idx}
                            className="hover:scale-105 transition-transform duration-200"
                          >
                            {badgeUrl ? (
                              <img
                                src={badgeUrl}
                                alt={skill}
                                className="h-6 object-contain hover:shadow-lg transition-shadow duration-200"
                                loading="lazy"
                              />
                            ) : (
                              <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm border border-blue-500/30">
                                {skill}
                              </span>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Photos (Volunteering-style) */}
                  {Array.isArray(course.photos) && course.photos.length > 0 && (
                    <div className="mb-6">
                      <div className="flex items-center mb-3">
                        <Camera className="w-5 h-5 text-electric-blue mr-2" />
                        <h4 className="text-white font-semibold">Photos</h4>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {course.photos.map((photo, idx) => (
                          <div
                            key={idx}
                            onClick={() =>
                              openLightbox(
                                photo.url,
                                photo.caption || `Course Photo ${idx + 1}`
                              )
                            }
                            className="group relative overflow-hidden rounded-lg bg-gray-600 cursor-pointer hover:ring-2 hover:ring-electric-blue transition-all duration-300"
                          >
                            <img
                              src={photo.url}
                              alt={photo.caption || `Course Photo ${idx + 1}`}
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
                            {/* Hover overlay with zoom indicator */}
                            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                              <div className="bg-white/90 rounded-full p-2">
                                <ZoomIn className="w-6 h-6 text-gray-800" />
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Lightbox (Projects style) */}
                  <AnimatePresence>
                    {lightbox.open && (
                      <motion.div
                        className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={(e) => {
                          if (e.target === e.currentTarget)
                            setLightbox({
                              open: false,
                              src: null,
                              alt: null,
                              scale: 1,
                            });
                        }}
                      >
                        {/* Controls */}
                        <div className="absolute top-4 right-4 flex gap-2 z-10">
                          <button
                            onClick={() =>
                              setLightbox((s) => ({
                                ...s,
                                scale: Math.min(4, s.scale + 0.2),
                              }))
                            }
                            className="p-2 bg-gray-700/80 hover:bg-gray-600/80 text-white rounded-lg transition-colors"
                            aria-label="Zoom in"
                          >
                            <ZoomIn className="w-5 h-5" />
                          </button>
                          <button
                            onClick={() =>
                              setLightbox((s) => ({
                                ...s,
                                scale: Math.max(1, s.scale - 0.2),
                              }))
                            }
                            className="p-2 bg-gray-700/80 hover:bg-gray-600/80 text-white rounded-lg transition-colors"
                            aria-label="Zoom out"
                          >
                            <ZoomOut className="w-5 h-5" />
                          </button>
                          <button
                            onClick={() =>
                              setLightbox({
                                open: false,
                                src: null,
                                alt: null,
                                scale: 1,
                              })
                            }
                            className="p-2 bg-gray-700/80 hover:bg-gray-600/80 text-white rounded-lg transition-colors"
                            aria-label="Close"
                          >
                            <X className="w-5 h-5" />
                          </button>
                        </div>

                        {/* Image */}
                        <img
                          src={lightbox.src}
                          alt={lightbox.alt || "Course photo"}
                          style={{ transform: `scale(${lightbox.scale})` }}
                          className="max-h-[85vh] max-w-[90vw] object-contain rounded bg-transparent"
                          onWheel={(e) => {
                            setLightbox((s) => ({
                              ...s,
                              scale: Math.max(
                                1,
                                Math.min(
                                  4,
                                  s.scale + (e.deltaY < 0 ? 0.1 : -0.1)
                                )
                              ),
                            }));
                          }}
                        />
                      </motion.div>
                    )}
                  </AnimatePresence>

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

          {/* Lightbox overlay at section level (match Projects) */}
          <AnimatePresence>
            {lightbox.open && (
              <motion.div
                className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={(e) => {
                  if (e.target === e.currentTarget)
                    setLightbox({
                      open: false,
                      src: null,
                      alt: null,
                      scale: 1,
                    });
                }}
              >
                <div className="absolute top-4 right-4 flex gap-2 z-10">
                  <button
                    onClick={() =>
                      setLightbox((s) => ({
                        ...s,
                        scale: Math.min(4, s.scale + 0.2),
                      }))
                    }
                    className="p-2 bg-gray-700/80 hover:bg-gray-600/80 text-white rounded-lg transition-colors"
                  >
                    <ZoomIn className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() =>
                      setLightbox((s) => ({
                        ...s,
                        scale: Math.max(1, s.scale - 0.2),
                      }))
                    }
                    className="p-2 bg-gray-700/80 hover:bg-gray-600/80 text-white rounded-lg transition-colors"
                  >
                    <ZoomOut className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() =>
                      setLightbox({
                        open: false,
                        src: null,
                        alt: null,
                        scale: 1,
                      })
                    }
                    className="p-2 bg-gray-700/80 hover:bg-gray-600/80 text-white rounded-lg transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <motion.img
                  key={lightbox.src}
                  src={lightbox.src}
                  alt={lightbox.alt || "Course photo"}
                  style={{ transform: `scale(${lightbox.scale})` }}
                  className="max-h-[85vh] max-w-[90vw] object-contain rounded bg-transparent"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: lightbox.scale, opacity: 1 }}
                  exit={{ scale: 0.8, opacity: 0 }}
                  onWheel={(e) => {
                    setLightbox((s) => ({
                      ...s,
                      scale: Math.max(
                        1,
                        Math.min(4, s.scale + (e.deltaY < 0 ? 0.1 : -0.1))
                      ),
                    }));
                  }}
                />
              </motion.div>
            )}
          </AnimatePresence>

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

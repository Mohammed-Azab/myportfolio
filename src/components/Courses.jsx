import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  BookOpen,
  Award,
  Calendar,
  ExternalLink,
  BadgeCheck,
  X,
  ZoomIn,
  Camera,
  Image,
  Bot,
  Brain,
  Cpu,
  Eye,
  BarChart3,
  Wrench,
  Zap,
} from "lucide-react";
import { coursesData, learningStats } from "../data/courses";
import ImageGallery from "./ImageGallery";

const Courses = () => {
  const [selectedCategoryKey, setSelectedCategoryKey] = useState("all");
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [gallery, setGallery] = useState({
    open: false,
    images: [],
    initialIndex: 0,
  });

  // Handle category change with smooth transition
  const handleCategoryChange = (newCategoryKey) => {
    if (isTransitioning || newCategoryKey === selectedCategoryKey) return;
    
    setIsTransitioning(true);
    setSelectedCategoryKey(newCategoryKey);
    
    // Reset transition state after animation completes
    setTimeout(() => setIsTransitioning(false), 200);
  };

  // Normalize category to a canonical key
  const toCategoryKey = (value) =>
    (value ?? "")
      .toString()
      .trim()
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "");

  // Build category options and counts
  const categoryMap = new Map();
  for (const course of coursesData) {
    const label = course.category ?? "Other";
    const key = toCategoryKey(label);
    if (!categoryMap.has(key)) categoryMap.set(key, { key, label, count: 0 });
    categoryMap.get(key).count += 1;
  }
  const desiredOrder = [
    "Robotics",
    "AI/ML",
    "Aerospace Engineering",
    "Engineering Design",
    "Manufacturing",
    "Electronics",
    "Computer Vision",
    "Signal Processing",
    "Language",
  ];
  const orderIndex = (label) => {
    const i = desiredOrder.findIndex(
      (n) => toCategoryKey(n) === toCategoryKey(label)
    );
    return i === -1 ? 999 : i;
  };
  const categoryOptions = Array.from(categoryMap.values()).sort((a, b) => {
    const ai = orderIndex(a.label);
    const bi = orderIndex(b.label);
    if (ai !== bi) return ai - bi;
    return a.label.localeCompare(b.label);
  });

  const getCategoryIcon = (label) => {
    const iconMap = {
      Robotics: Bot,
      "AI/ML": Brain,
      Electronics: Cpu,
      "Computer Vision": Eye,
      "Signal Processing": BarChart3,
      Manufacturing: Wrench,
      "Aerospace Engineering": Cpu,
      "Engineering Design": Zap,
      Language: BookOpen,
    };
    return iconMap[label] || BookOpen;
  };

  const filteredCourses =
    selectedCategoryKey === "all"
      ? coursesData
      : coursesData.filter(
          (c) => toCategoryKey(c.category) === selectedCategoryKey
        );

  // Preload course photos to make gallery open instantly
  React.useEffect(() => {
    try {
      const allPhotos = coursesData
        .flatMap((c) => (Array.isArray(c.photos) ? c.photos : []))
        .map((p) => p.url)
        .filter(Boolean);
      allPhotos.forEach((src) => {
        const img = new window.Image();
        img.src = src;
        img.decoding = "async";
      });
    } catch (_) {}
  }, []);

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

          {/* Category Filter */}
          <motion.div variants={itemVariants} className="mb-8">
            <div className="flex flex-wrap gap-3 justify-center">
              <button
                onClick={() => handleCategoryChange("all")}
                disabled={isTransitioning}
                className={`px-4 py-2 rounded-full font-medium transition-all duration-300 inline-flex items-center gap-2 ${
                  selectedCategoryKey === "all"
                    ? "bg-blue-500 text-white shadow-lg transform scale-[1.02]"
                    : "bg-gray-800 text-gray-300 border border-gray-700 hover:border-blue-400 hover:text-blue-300"
                } ${isTransitioning ? "opacity-70 cursor-not-allowed" : ""}`}
              >
                <BookOpen className="w-5 h-5" />
                <span>All</span>
                <span className="ml-1 px-2 py-0.5 text-xs rounded-full bg-white/10 border border-white/20">
                  {coursesData.length}
                </span>
              </button>
              {categoryOptions.map(({ key, label, count }) => {
                const Icon = getCategoryIcon(label);
                const isActive = selectedCategoryKey === key;
                return (
                  <button
                    key={key}
                    onClick={() => handleCategoryChange(key)}
                    disabled={isTransitioning}
                    className={`px-4 py-2 rounded-full font-medium transition-all duration-300 inline-flex items-center gap-2 ${
                      isActive
                        ? "bg-blue-500 text-white shadow-lg transform scale-[1.02]"
                        : "bg-gray-800 text-gray-300 border border-gray-700 hover:border-blue-400 hover:text-blue-300"
                    } ${isTransitioning ? "opacity-70 cursor-not-allowed" : ""}`}
                  >
                    <Icon className="w-5 h-5" />
                    <span>{label}</span>
                    <span className="ml-1 px-2 py-0.5 text-xs rounded-full bg-white/10 border border-white/20">
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>
          </motion.div>

          {/* Filter removed per request */}

          {/* Courses Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            <AnimatePresence>
              {filteredCourses.map((course) => (
                <motion.div
                  key={course.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
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
                            onClick={() => {
                              const images = course.photos.map((coursePhoto, photoIdx) => ({
                                url: coursePhoto.url,
                                caption: coursePhoto.caption,
                                alt: coursePhoto.caption || `Course Photo ${photoIdx + 1}`,
                              }));
                              
                              setGallery({
                                open: true,
                                images,
                                initialIndex: idx,
                              });
                            }}
                            onMouseEnter={() => {
                              try {
                                const img = new window.Image();
                                img.decoding = "async";
                                img.src = photo.url;
                              } catch (_) {}
                            }}
                            className="group relative overflow-hidden rounded-lg bg-gray-600 cursor-pointer hover:ring-2 hover:ring-electric-blue transition-all duration-300"
                          >
                            <img
                              src={photo.url}
                              alt={photo.caption || `Course Photo ${idx + 1}`}
                              className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                              onError={(e) => {
                                e.target.style.display = "none";
                                e.target.nextSibling.style.display = "flex";
                              }}
                            />
                            {/* Fallback placeholder */}
                            <div className="hidden w-full h-48 bg-gray-600 items-center justify-center">
                              <Image className="w-12 h-12 text-gray-400" />
                            </div>
                            {/* Photo overlay with caption */}
                            {photo.caption && (
                              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3">
                                <p className="text-white text-sm">
                                  {photo.caption}
                                </p>
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

                  {/* Inline lightbox removed; section-level modal handles display */}

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
            </AnimatePresence>
          </motion.div>

          {/* Image Gallery */}
          <ImageGallery
            images={gallery.images}
            open={gallery.open}
            onClose={() => setGallery({ open: false, images: [], initialIndex: 0 })}
            initialIndex={gallery.initialIndex}
          />

          {filteredCourses.length === 0 && (
            <div className="text-center py-12">
              <BookOpen className="w-16 h-16 text-gray-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-400 mb-2">
                No courses found
              </h3>
              <p className="text-gray-500">
                {selectedCategoryKey === "all" 
                  ? "No courses available at the moment." 
                  : "No courses found in this category. Try selecting a different category."}
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

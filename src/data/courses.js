// Courses and Professional Development Data
// This file contains information about courses, certifications, and continuous learning

export const coursesData = [
  {
    id: 1,
    title: "Robotics & Automation: ROS 2 Humble",
    provider: "Udemy",
    category: "Robotics",
    level: "Advanced",
    duration: "12 weeks",
    period: "2024",
    status: "Completed",
    grade: "Certified",
    description:
      "ROS 2 Humble framework for robotics development including navigation, SLAM, and robot control.",
    skills: ["ROS2", "Navigation", "SLAM", "Robot Control", "Gazebo"],
    certificate: {
      issued: true,
      url: null,
      credentialId: "ROS2-HUMBLE-2024",
    },
    projects: [
      "Mobile Robot Navigation",
      "SLAM Implementation",
      "Robot Simulation in Gazebo",
    ],
  },
  {
    id: 2,
    title: "Machine Learning Specialization",
    provider: "DeepLearning.AI",
    category: "AI/ML",
    level: "Intermediate",
    duration: "12 weeks",
    period: "2024",
    status: "Completed",
    grade: "Certified",
    description:
      "Supervised & unsupervised learning, recommenders, reinforcement learning, and advanced algorithms.",
    skills: [
      "Python",
      "Machine Learning",
      "Supervised Learning",
      "Unsupervised Learning",
      "Reinforcement Learning",
    ],
    certificate: {
      issued: true,
      url: "https://coursera.org/verify/...",
      credentialId: "DEEPLEARNING-ML-2024",
    },
    projects: [
      "Supervised Learning Models",
      "Recommender Systems",
      "Reinforcement Learning Algorithms",
    ],
  },
  {
    id: 3,
    title: "Digitalization in the Aerospace Industry",
    provider: "Technische Universität München",
    category: "Aerospace Engineering",
    level: "Advanced",
    duration: "6 weeks",
    period: "2024",
    status: "Completed",
    grade: "Certified",
    description:
      "Digital transformation in aerospace industry including Industry 4.0 concepts and digital manufacturing.",
    skills: [
      "Digital Manufacturing",
      "Industry 4.0",
      "Aerospace Engineering",
      "Digital Transformation",
    ],
    certificate: {
      issued: true,
      url: "https://tum.de/certificates/...",
      credentialId: "TUM-AERO-2024",
    },
    projects: [
      "Digital Manufacturing Case Study",
      "Industry 4.0 Implementation",
      "Aerospace Digital Transformation",
    ],
  },
  {
    id: 4,
    title: "Computer-Aided Design (CAD)",
    provider: "Multiple Providers",
    category: "Engineering Design",
    level: "Advanced",
    duration: "Ongoing",
    period: "2023-2024",
    status: "Completed",
    grade: "Certified",
    description:
      "Mechanical design training covering multiple CAD platforms and design methodologies.",
    skills: ["Siemens NX", "Fusion 360", "SolidWorks", "AutoCAD"],
    certificate: {
      issued: true,
      url: null,
      credentialId: "MECH-DESIGN-2024",
    },
    projects: [
      "3D Mechanical Assemblies",
      "Product Design Projects",
      "Engineering Drawings",
    ],
  },
  {
    id: 5,
    title: "Programming & Operation of 5-Axis CNC Machines",
    provider: "DMG Mori",
    category: "Manufacturing",
    level: "Advanced",
    duration: "4 weeks",
    period: "2024",
    status: "Completed",
    grade: "Certified",
    description:
      "Hands-on training in programming and operating 5-axis CNC machines for complex manufacturing operations.",
    skills: [
      "CNC Programming",
      "5-Axis Machining",
      "Manufacturing",
      "G-Code",
      "CAM",
    ],
    certificate: {
      issued: true,
      url: null,
      credentialId: "CNC-5AXIS-2024",
    },
    projects: [
      "Complex Part Machining",
      "5-Axis Programming",
      "Manufacturing Optimization",
    ],
    photos: [
      {
        url: "/images/courses/dmg3.jpeg",
      },
    ],
  },
  {
    id: 6,
    title: "CNC Turning & Milling Programming",
    provider: "AOI Training Academy",
    category: "Manufacturing",
    level: "Intermediate",
    duration: "4 weeks",
    period: "Aug 2023",
    status: "Completed",
    grade: "Certified",
    description:
      "Practical training on CNC turning and milling programming, toolpaths, and process planning using industry-standard workflows.",
    skills: ["CNC Programming", "G-Code", "CAM", "Manufacturing"],
    photos: [
      {
        url: "/images/courses/dmg1.jpeg",
      },
      {
        url: "/images/courses/dmg2.jpeg",
      },
    ],
    certificate: {
      issued: true,
      url: "",
      credentialId: "AOI-CNC-2023",
    },
    projects: [
      "Turning and milling toolpath programming exercises",
      "Setup sheets and machining strategies",
    ],
  },
  {
    id: 7,
    title: "Goethe-Zertifikat B2 (German)",
    provider: "Goethe Institut Alexandria",
    category: "Language",
    level: "Intermediate",
    duration: "6 months",
    period: "2024",
    status: "Completed",
    grade: "B2 Certified",
    description: "Official Goethe-Zertifikat B2 German language certification",
    skills: ["German Language", "Communication"],
    certificate: {
      issued: true,
      url: null,
      credentialId: "GOETHE-B2-2024",
    },
    projects: [
      "Technical Documentation in German",
      "Business Communication",
      "Academic Writing",
    ],
  },
];
// Learning Statistics
export const learningStats = {
  totalCourses: coursesData.length,
  completedCourses: coursesData.filter(
    (course) => course.status === "Completed"
  ).length,
  inProgressCourses: coursesData.filter(
    (course) => course.status === "In Progress"
  ).length,
  certificatesEarned: coursesData.filter((course) => course.certificate.issued)
    .length,
  totalLearningHours: coursesData.reduce((total, course) => {
    const weeks = parseInt(course.duration.split(" ")[0]);
    return total + weeks * 10; // Assuming 10 hours per week
  }, 0),
  averageGrade: "A", // Calculate based on actual grades
  skillsAcquired: [...new Set(coursesData.flatMap((course) => course.skills))]
    .length,
};

export default {
  courses: coursesData,
  stats: learningStats,
};

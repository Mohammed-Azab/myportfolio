// Courses and Professional Development Data
// This file contains information about courses, certifications, and continuous learning

export const coursesData = [
  {
    id: 1,
    title: "Advanced Robotics and Control Systems",
    provider: "MIT OpenCourseWare",
    category: "Robotics",
    level: "Advanced",
    duration: "12 weeks",
    period: "Jan 2024 - Mar 2024",
    status: "Completed",
    grade: "A+",
    description: "Comprehensive course covering advanced topics in robotics including kinematics, dynamics, path planning, and control theory.",
    skills: ["ROS2", "Path Planning", "Control Theory", "SLAM", "Kinematics"],
    certificate: {
      issued: true,
      url: "https://certificates.mit.edu/...",
      credentialId: "MIT-ARC-2024-001"
    },
    projects: [
      "Autonomous Mobile Robot Navigation",
      "Robotic Arm Trajectory Planning",
      "SLAM Implementation"
    ]
  },
  {
    id: 2,
    title: "Machine Learning for Engineers",
    provider: "Stanford Online",
    category: "AI/ML",
    level: "Intermediate",
    duration: "10 weeks",
    period: "Sep 2023 - Nov 2023",
    status: "Completed",
    grade: "A",
    description: "Applied machine learning course focused on engineering applications including supervised learning, neural networks, and computer vision.",
    skills: ["Python", "TensorFlow", "Neural Networks", "Computer Vision", "Data Analysis"],
    certificate: {
      issued: true,
      url: "https://stanford.edu/certificates/...",
      credentialId: "STAN-ML4E-2023-456"
    },
    projects: [
      "Image Classification for Quality Control",
      "Predictive Maintenance Model",
      "Sensor Data Analysis"
    ]
  },
  {
    id: 3,
    title: "Industrial Automation with PLCs",
    provider: "Siemens Digital Academy",
    category: "Automation",
    level: "Professional",
    duration: "8 weeks",
    period: "Jun 2023 - Aug 2023",
    status: "Completed",
    grade: "Excellent",
    description: "Professional certification course covering PLC programming, SCADA systems, and industrial communication protocols.",
    skills: ["Siemens PLC", "SCADA", "HMI Design", "Industrial Networks", "Ladder Logic"],
    certificate: {
      issued: true,
      url: "https://siemens.com/certificates/...",
      credentialId: "SIEM-AUTO-2023-789"
    },
    projects: [
      "Conveyor Belt Control System",
      "Temperature Monitoring SCADA",
      "Motor Control Interface"
    ]
  },
  {
    id: 4,
    title: "Embedded Systems Design",
    provider: "Coursera - University of California",
    category: "Electronics",
    level: "Advanced",
    duration: "14 weeks",
    period: "Mar 2023 - Jun 2023",
    status: "Completed",
    grade: "A+",
    description: "Comprehensive course on embedded systems including microcontroller programming, real-time systems, and IoT applications.",
    skills: ["C/C++", "Arduino", "ESP32", "Real-time Systems", "IoT", "Sensors"],
    certificate: {
      issued: true,
      url: "https://coursera.org/verify/...",
      credentialId: "UC-EMB-2023-123"
    },
    projects: [
      "IoT Environmental Monitoring System",
      "Real-time Data Acquisition",
      "Wireless Sensor Network"
    ]
  },
  {
    id: 5,
    title: "Computer Vision and Image Processing",
    provider: "edX - Harvard University",
    category: "Computer Vision",
    level: "Advanced",
    duration: "12 weeks",
    period: "Jan 2023 - Apr 2023",
    status: "Completed",
    grade: "A",
    description: "Advanced course covering image processing algorithms, feature detection, object recognition, and deep learning for vision.",
    skills: ["OpenCV", "Python", "Deep Learning", "Feature Detection", "Object Recognition"],
    certificate: {
      issued: true,
      url: "https://edx.org/certificates/...",
      credentialId: "HARV-CV-2023-987"
    },
    projects: [
      "Object Detection System",
      "Facial Recognition Application",
      "Autonomous Vehicle Vision"
    ]
  },
  {
    id: 6,
    title: "Digital Signal Processing",
    provider: "Udacity",
    category: "Signal Processing",
    level: "Intermediate",
    duration: "6 weeks",
    period: "Oct 2022 - Dec 2022",
    status: "Completed",
    grade: "A+",
    description: "Practical course on digital signal processing including filtering, FFT, and real-time signal analysis.",
    skills: ["MATLAB", "Python", "Signal Processing", "FFT", "Digital Filters"],
    certificate: {
      issued: true,
      url: "https://udacity.com/certificates/...",
      credentialId: "UDA-DSP-2022-654"
    },
    projects: [
      "Audio Signal Filter",
      "Vibration Analysis System",
      "Real-time Spectrum Analyzer"
    ]
  },
  {
    id: 7,
    title: "3D Printing and Additive Manufacturing",
    provider: "FutureLearn - University of Sheffield",
    category: "Manufacturing",
    level: "Beginner",
    duration: "4 weeks",
    period: "Aug 2022 - Sep 2022",
    status: "Completed",
    grade: "Distinction",
    description: "Introduction to 3D printing technologies, materials, and design for additive manufacturing.",
    skills: ["3D Printing", "CAD Design", "Materials Science", "Rapid Prototyping"],
    certificate: {
      issued: true,
      url: "https://futurelearn.com/certificates/...",
      credentialId: "FL-3DP-2022-321"
    },
    projects: [
      "Custom Robot Chassis Design",
      "Functional Prototype Parts",
      "Multi-material Printing"
    ]
  },
  {
    id: 8,
    title: "Renewable Energy Systems",
    provider: "Online Learning Platform",
    category: "Energy",
    level: "Intermediate",
    duration: "8 weeks",
    period: "May 2024 - Jul 2024",
    status: "In Progress",
    grade: null,
    description: "Comprehensive study of renewable energy technologies including solar, wind, and energy storage systems.",
    skills: ["Solar Energy", "Wind Power", "Energy Storage", "Power Electronics", "Grid Integration"],
    certificate: {
      issued: false,
      url: null,
      credentialId: null
    },
    projects: [
      "Solar Panel Efficiency Analysis",
      "Wind Turbine Control System",
      "Battery Management System"
    ]
  }
];

// Course Categories
export const courseCategories = [
  {
    name: "Robotics",
    count: coursesData.filter(course => course.category === "Robotics").length,
    color: "#00D4FF",
    icon: "🤖"
  },
  {
    name: "AI/ML",
    count: coursesData.filter(course => course.category === "AI/ML").length,
    color: "#39FF14",
    icon: "🧠"
  },
  {
    name: "Automation",
    count: coursesData.filter(course => course.category === "Automation").length,
    color: "#FF6B35",
    icon: "⚙️"
  },
  {
    name: "Electronics",
    count: coursesData.filter(course => course.category === "Electronics").length,
    color: "#FFD700",
    icon: "⚡"
  },
  {
    name: "Computer Vision",
    count: coursesData.filter(course => course.category === "Computer Vision").length,
    color: "#FF69B4",
    icon: "👁️"
  },
  {
    name: "Signal Processing",
    count: coursesData.filter(course => course.category === "Signal Processing").length,
    color: "#8A2BE2",
    icon: "📊"
  },
  {
    name: "Manufacturing",
    count: coursesData.filter(course => course.category === "Manufacturing").length,
    color: "#32CD32",
    icon: "🔧"
  },
  {
    name: "Energy",
    count: coursesData.filter(course => course.category === "Energy").length,
    color: "#FFA500",
    icon: "⚡"
  }
];

// Learning Statistics
export const learningStats = {
  totalCourses: coursesData.length,
  completedCourses: coursesData.filter(course => course.status === "Completed").length,
  inProgressCourses: coursesData.filter(course => course.status === "In Progress").length,
  certificatesEarned: coursesData.filter(course => course.certificate.issued).length,
  totalLearningHours: coursesData.reduce((total, course) => {
    const weeks = parseInt(course.duration.split(' ')[0]);
    return total + (weeks * 10); // Assuming 10 hours per week
  }, 0),
  averageGrade: "A", // Calculate based on actual grades
  skillsAcquired: [
    ...new Set(coursesData.flatMap(course => course.skills))
  ].length
};

export default {
  courses: coursesData,
  categories: courseCategories,
  stats: learningStats
};

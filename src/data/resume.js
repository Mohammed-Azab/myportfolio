// Skills and Experience Data
// This file contains all skills, education, and experience information

export const skillsData = {
  // Technical Skills
  technical: [
    {
      category: "Programming Languages",
      skills: [
        { name: "Embedded C", level: 92, icon: "⚡" },
        { name: "C++", level: 88, icon: "⚡" },
        { name: "Python", level: 85, icon: "🐍" },
        { name: "Java", level: 80, icon: "☕" },
        { name: "VHDL", level: 75, icon: "🔧" },
        { name: "Assembly", level: 70, icon: "🔧" },
        { name: "CSS", level: 65, icon: "🎨" },
      ],
    },
    {
      category: "Robotics & Control",
      skills: [
        { name: "ROS/ROS2", level: 88, icon: "🤖" },
        { name: "PID Control", level: 85, icon: "🎛️" },
        { name: "Kinematics", level: 90, icon: "🔄" },
        { name: "Path Planning", level: 80, icon: "🗺️" },
        { name: "SLAM", level: 75, icon: "📍" },
        { name: "Computer Vision", level: 82, icon: "👁️" },
      ],
    },
    {
      category: "Hardware Platforms",
      skills: [
        { name: "STM32", level: 90, icon: "🔌" },
        { name: "ESP32", level: 88, icon: "🔌" },
        { name: "NVIDIA Jetson", level: 85, icon: "🤖" },
        { name: "Raspberry Pi", level: 85, icon: "🥧" },
        { name: "Arduino", level: 82, icon: "🔌" },
        { name: "FPGA", level: 75, icon: "🔲" },
      ],
    },
    {
      category: "Software & Tools",
      skills: [
        { name: "ROS2", level: 90, icon: "🤖" },
        { name: "MATLAB/Simulink", level: 88, icon: "📊" },
        { name: "Git", level: 85, icon: "📚" },
        { name: "Gazebo", level: 80, icon: "🌐" },
        { name: "Quartus", level: 75, icon: "🔧" },
        { name: "Bash", level: 82, icon: "💻" },
        { name: "PowerShell", level: 70, icon: "💻" },
      ],
    },
    {
      category: "Operating Systems",
      skills: [
        { name: "Ubuntu", level: 90, icon: "🐧" },
        { name: "Arch Linux", level: 85, icon: "🐧" },
        { name: "Windows", level: 80, icon: "🪟" },
        { name: "FreeRTOS", level: 75, icon: "⚡" },
      ],
    },
  ],

  // Soft Skills
  soft: [
    { name: "Problem Solving", level: 95 },
    { name: "Team Leadership", level: 88 },
    { name: "Project Management", level: 85 },
    { name: "Communication", level: 90 },
    { name: "Critical Thinking", level: 92 },
    { name: "Adaptability", level: 87 },
    { name: "Time Management", level: 89 },
    { name: "Creativity", level: 91 },
  ],
};

// Work Experience Timeline
export const experienceData = [
  {
    id: 1,
    company: "CARIAD SE – A Volkswagen Group Company",
    position: "Working Student – Software Engineer (ADAS/AD)",
    period: "May 2025 - Present",
    location: "Berlin, Germany",
    type: "Working Student",
    description:
      "Operating advanced test bench environments to measure and validate sensor data for Automated Driving Systems, developing test tools, and working with CI pipelines.",
    responsibilities: [
      "Operate advanced test bench environments to measure and validate sensor data (LiDAR, radar, camera)",
      "Develop, debug, and optimize test and measurement tools using C++ and Python on Ubuntu",
      "Work with CI pipelines, CMake, and Conan for scalable build automation and dependency management",
      "Author comprehensive technical documentation, ensuring clarity and traceability of test procedures",
    ],
    technologies: [
      "C++",
      "Python",
      "Ubuntu",
      "LiDAR",
      "Radar",
      "Camera",
      "CI/CD",
      "CMake",
      "Conan",
    ],
    achievements: null,
  },
  {
    id: 2,
    company: "Multi-Robot Systems (MRS) Research Group",
    position: "Research Intern",
    period: "Aug 2024 - Oct 2024",
    location: "New Cairo, Egypt",
    type: "Internship",
    description:
      "Developed a quadrant drone using Embedded C, focusing on control algorithms and flight stability with PID controller implementation.",
    responsibilities: [
      "Developed a quadrant drone using Embedded C, focusing on control algorithms and flight stability",
      "Designed and implemented a PID controller in MATLAB/Simulink for precise stabilization",
      "Reduced drone weight by 23% using SolidWorks, increasing flight time by 15%",
      "Conducted flight tests and performance optimization",
    ],
    technologies: [
      "Embedded C",
      "MATLAB/Simulink",
      "SolidWorks",
      "PID Control",
      "Drone Systems",
    ],
    achievements: null,
  },
  {
    id: 3,
    company: "The German University in Cairo",
    position: "Junior Teaching Assistant",
    period: "Oct 2023 - Jan 2024",
    location: "New Cairo, Egypt",
    type: "Part-time",
    description:
      "Worked as Junior TA with MET-Eng. Department for CSEN 102 / CSIS 102 courses. Assisted students in grasping programming concepts and essential Python language principles, and provided constructive feedback with optimized solutions.",
    responsibilities: [
      "Assist in CSEN 102 / CSIS 102 labs and tutorial sessions",
      "Explain Python fundamentals and core programming concepts",
      "Support students with debugging and problem-solving during exercises",
      "Review assignments and provide feedback",
    ],
    technologies: ["Python", "Algorithms", "Data Structures"],
    achievements: null,
  },
];

// Certifications
export const certificationsData = [
  {
    name: "ROS Developer Certification",
    issuer: "The Construct",
    date: "March 2024",
    credentialId: "ROSDevCert2024-MA",
    url: "https://certificates.theconstructsim.com/...",
  },
  {
    name: "Machine Learning Engineering",
    issuer: "Coursera - DeepLearning.AI",
    date: "January 2024",
    credentialId: "MLEng2024-001",
    url: "https://coursera.org/verify/...",
  },
  {
    name: "Siemens PLC Programming",
    issuer: "Siemens Digital Industries",
    date: "September 2023",
    credentialId: "SPPL2023-456",
    url: "https://siemens.com/certificates/...",
  },
  {
    name: "Arduino IoT Cloud Specialist",
    issuer: "Arduino",
    date: "June 2023",
    credentialId: "AIOT2023-789",
    url: "https://arduino.cc/certificates/...",
  },
];

// Awards and Achievements
export const achievementsData = [
  {
    title: "Best Engineering Project Award",
    organization: "University of Technology",
    date: "May 2024",
    description:
      "Awarded for the Autonomous Robotic Arm project demonstrating exceptional innovation and technical execution.",
  },
  {
    title: "National Robotics Competition - 1st Place",
    organization: "National Engineering Society",
    date: "March 2024",
    description:
      "Led team to victory in national university-level robotics competition with autonomous navigation challenge.",
  },
  {
    title: "Innovation Challenge Winner",
    organization: "Tech Startup Incubator",
    date: "November 2023",
    description:
      "Won startup pitch competition for IoT-based smart home automation solution.",
  },
  {
    title: "Research Excellence Award",
    organization: "University Research Department",
    date: "December 2023",
    description:
      "Recognized for outstanding contribution to prosthetic device research and publication record.",
  },
];

export default {
  skills: skillsData,
  experience: experienceData,
  certifications: certificationsData,
  achievements: achievementsData,
};

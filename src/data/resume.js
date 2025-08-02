// Skills and Experience Data
// This file contains all skills, education, and experience information

export const skillsData = {
  // Technical Skills
  technical: [
    {
      category: "Programming Languages",
      skills: [
        { name: "Python", level: 90, icon: "🐍" },
        { name: "C/C++", level: 85, icon: "⚡" },
        { name: "MATLAB", level: 80, icon: "📊" },
        { name: "JavaScript", level: 75, icon: "🌐" },
        { name: "Java", level: 70, icon: "☕" },
        { name: "Assembly", level: 65, icon: "🔧" }
      ]
    },
    {
      category: "Robotics & Control",
      skills: [
        { name: "ROS/ROS2", level: 88, icon: "🤖" },
        { name: "PID Control", level: 85, icon: "🎛️" },
        { name: "Kinematics", level: 90, icon: "🔄" },
        { name: "Path Planning", level: 80, icon: "🗺️" },
        { name: "SLAM", level: 75, icon: "📍" },
        { name: "Computer Vision", level: 82, icon: "👁️" }
      ]
    },
    {
      category: "Hardware & Electronics",
      skills: [
        { name: "Arduino/ESP32", level: 92, icon: "🔌" },
        { name: "Raspberry Pi", level: 88, icon: "🥧" },
        { name: "PCB Design", level: 75, icon: "🔲" },
        { name: "3D Printing", level: 85, icon: "🖨️" },
        { name: "Sensors & Actuators", level: 90, icon: "📡" },
        { name: "Power Electronics", level: 70, icon: "⚡" }
      ]
    },
    {
      category: "Software & Tools",
      skills: [
        { name: "SolidWorks", level: 88, icon: "🔧" },
        { name: "AutoCAD", level: 80, icon: "📐" },
        { name: "Simulink", level: 85, icon: "📊" },
        { name: "Git/GitHub", level: 90, icon: "📚" },
        { name: "Docker", level: 75, icon: "🐳" },
        { name: "Linux", level: 82, icon: "🐧" }
      ]
    },
    {
      category: "AI & Machine Learning",
      skills: [
        { name: "TensorFlow", level: 78, icon: "🧠" },
        { name: "OpenCV", level: 85, icon: "👁️" },
        { name: "PyTorch", level: 72, icon: "🔥" },
        { name: "Scikit-learn", level: 80, icon: "📈" },
        { name: "Deep Learning", level: 75, icon: "🤖" },
        { name: "Computer Vision", level: 82, icon: "📷" }
      ]
    }
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
    { name: "Creativity", level: 91 }
  ]
};

// Work Experience Timeline
export const experienceData = [
  {
    id: 1,
    company: "TechRobotics Inc.",
    position: "Robotics Engineering Intern",
    period: "Jun 2024 - Aug 2024",
    location: "Tech City, Country",
    type: "Internship",
    description: "Worked on developing autonomous navigation systems for industrial robots and contributed to computer vision algorithms for quality inspection.",
    responsibilities: [
      "Developed ROS-based navigation stack for mobile robots",
      "Implemented computer vision algorithms for defect detection",
      "Collaborated with senior engineers on system integration",
      "Participated in agile development processes"
    ],
    technologies: ["ROS", "Python", "OpenCV", "Linux", "Git"],
    achievements: [
      "Improved navigation accuracy by 15%",
      "Reduced false positive rate in inspection by 20%",
      "Received 'Outstanding Intern' recognition"
    ]
  },
  {
    id: 2,
    company: "Innovation Lab - University",
    position: "Research Assistant",
    period: "Jan 2024 - Present",
    location: "University Campus",
    type: "Part-time",
    description: "Conducting research on AI-powered prosthetic devices under Dr. Smith's supervision, focusing on EMG signal processing and machine learning.",
    responsibilities: [
      "Design and conduct experiments with EMG sensors",
      "Develop machine learning models for gesture recognition",
      "Analyze signal processing algorithms",
      "Present research findings at conferences"
    ],
    technologies: ["Python", "TensorFlow", "Signal Processing", "EMG Sensors"],
    achievements: [
      "Published 2 research papers",
      "Presented at International Robotics Conference",
      "Awarded Research Excellence Grant"
    ]
  },
  {
    id: 3,
    company: "Local Automation Solutions",
    position: "Junior Automation Engineer",
    period: "Jul 2023 - Dec 2023",
    location: "Your City, Country",
    type: "Part-time",
    description: "Assisted in designing and implementing automation solutions for small to medium manufacturing companies.",
    responsibilities: [
      "Programmed PLCs for conveyor systems",
      "Designed HMI interfaces for operators",
      "Troubleshot existing automation systems",
      "Created technical documentation"
    ],
    technologies: ["Siemens PLC", "HMI Design", "SCADA", "Industrial Networks"],
    achievements: [
      "Successfully completed 5 automation projects",
      "Reduced system downtime by 30%",
      "Received positive client feedback"
    ]
  }
];

// Certifications
export const certificationsData = [
  {
    name: "ROS Developer Certification",
    issuer: "The Construct",
    date: "March 2024",
    credentialId: "ROSDevCert2024-MA",
    url: "https://certificates.theconstructsim.com/..."
  },
  {
    name: "Machine Learning Engineering",
    issuer: "Coursera - DeepLearning.AI",
    date: "January 2024",
    credentialId: "MLEng2024-001",
    url: "https://coursera.org/verify/..."
  },
  {
    name: "Siemens PLC Programming",
    issuer: "Siemens Digital Industries",
    date: "September 2023",
    credentialId: "SPPL2023-456",
    url: "https://siemens.com/certificates/..."
  },
  {
    name: "Arduino IoT Cloud Specialist",
    issuer: "Arduino",
    date: "June 2023",
    credentialId: "AIOT2023-789",
    url: "https://arduino.cc/certificates/..."
  }
];

// Awards and Achievements
export const achievementsData = [
  {
    title: "Best Engineering Project Award",
    organization: "University of Technology",
    date: "May 2024",
    description: "Awarded for the Autonomous Robotic Arm project demonstrating exceptional innovation and technical execution."
  },
  {
    title: "National Robotics Competition - 1st Place",
    organization: "National Engineering Society",
    date: "March 2024",
    description: "Led team to victory in national university-level robotics competition with autonomous navigation challenge."
  },
  {
    title: "Innovation Challenge Winner",
    organization: "Tech Startup Incubator",
    date: "November 2023",
    description: "Won startup pitch competition for IoT-based smart home automation solution."
  },
  {
    title: "Research Excellence Award",
    organization: "University Research Department",
    date: "December 2023",
    description: "Recognized for outstanding contribution to prosthetic device research and publication record."
  }
];

export default {
  skills: skillsData,
  experience: experienceData,
  certifications: certificationsData,
  achievements: achievementsData
};

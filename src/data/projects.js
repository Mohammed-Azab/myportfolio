// Projects Data
// This file contains all project information for the portfolio

export const projectsData = [
  {
    id: 1,
    title: "Autonomous Robotic Arm",
    description: "Design and implementation of a 6-DOF robotic arm with computer vision for autonomous object manipulation and sorting.",
    longDescription: "Developed a comprehensive robotic system integrating mechanical design, control algorithms, and computer vision. The system can identify, pick, and sort objects with 95% accuracy using deep learning models.",
    image: "/src/assets/images/projects/robotic-arm.jpg",
    technologies: ["ROS", "Python", "OpenCV", "TensorFlow", "Arduino", "SolidWorks"],
    category: "Robotics",
    status: "Completed",
    github: "https://github.com/Mohammed-Azab/autonomous-robotic-arm",
    demo: "https://youtube.com/watch?v=demo-link",
    features: [
      "6-DOF mechanical design",
      "Real-time object detection",
      "Path planning algorithms",
      "Safety monitoring system"
    ],
    timeline: "Jan 2024 - Jun 2024",
    teamSize: "Solo Project"
  },
  {
    id: 2,
    title: "Smart IoT Home Automation",
    description: "IoT-based home automation system with voice control, mobile app interface, and energy monitoring capabilities.",
    longDescription: "Comprehensive smart home solution featuring sensor networks, actuator control, and intelligent energy management with machine learning optimization.",
    image: "/src/assets/images/projects/iot-home.jpg",
    technologies: ["ESP32", "React Native", "Firebase", "MQTT", "TensorFlow Lite", "Node.js"],
    category: "IoT",
    status: "Completed",
    github: "https://github.com/Mohammed-Azab/smart-home-iot",
    demo: "https://smart-home-demo.netlify.app",
    features: [
      "Voice-controlled devices",
      "Energy consumption optimization",
      "Mobile app integration",
      "Predictive maintenance alerts"
    ],
    timeline: "Aug 2023 - Dec 2023",
    teamSize: "Team of 3"
  },
  {
    id: 3,
    title: "Quadcopter Drone Control System",
    description: "Custom flight control system for quadcopter with autonomous navigation and obstacle avoidance using sensor fusion.",
    longDescription: "Designed and implemented a complete flight control system from ground up, including hardware design, firmware development, and autonomous navigation algorithms.",
    image: "/src/assets/images/projects/drone-control.jpg",
    technologies: ["C++", "MATLAB/Simulink", "PID Control", "Kalman Filter", "STM32", "ROS"],
    category: "Control Systems",
    status: "In Progress",
    github: "https://github.com/Mohammed-Azab/drone-control-system",
    demo: null,
    features: [
      "Custom flight controller",
      "Sensor fusion algorithms",
      "Autonomous waypoint navigation",
      "Real-time telemetry"
    ],
    timeline: "Jan 2025 - Present",
    teamSize: "Solo Project"
  },
  {
    id: 4,
    title: "Industrial Conveyor Belt Automation",
    description: "PLC-based automation system for industrial conveyor belt with quality inspection and sorting mechanisms.",
    longDescription: "Complete automation solution for manufacturing environment including PLC programming, HMI development, and integration with existing factory systems.",
    image: "/src/assets/images/projects/conveyor-automation.jpg",
    technologies: ["Siemens PLC", "HMI", "SCADA", "Industrial Sensors", "Pneumatics", "VFD"],
    category: "Industrial Automation",
    status: "Completed",
    github: "https://github.com/Mohammed-Azab/conveyor-automation",
    demo: "https://youtube.com/watch?v=conveyor-demo",
    features: [
      "Real-time quality inspection",
      "Automated sorting system",
      "SCADA monitoring",
      "Predictive maintenance"
    ],
    timeline: "Mar 2024 - Aug 2024",
    teamSize: "Team of 4"
  },
  {
    id: 5,
    title: "AI-Powered Prosthetic Hand",
    description: "EMG-controlled prosthetic hand with machine learning for gesture recognition and adaptive grip control.",
    longDescription: "Revolutionary prosthetic device using EMG signals and machine learning to provide intuitive control and adaptive functionality for amputees.",
    image: "/src/assets/images/projects/prosthetic-hand.jpg",
    technologies: ["EMG Sensors", "Machine Learning", "3D Printing", "Arduino", "TensorFlow", "Signal Processing"],
    category: "Biomedical Engineering",
    status: "Research Phase",
    github: "https://github.com/Mohammed-Azab/ai-prosthetic-hand",
    demo: null,
    features: [
      "EMG signal processing",
      "Gesture recognition AI",
      "Adaptive grip strength",
      "Haptic feedback system"
    ],
    timeline: "Sep 2024 - Present",
    teamSize: "Research Team of 6"
  },
  {
    id: 6,
    title: "Autonomous Agricultural Robot",
    description: "Solar-powered autonomous robot for precision agriculture with crop monitoring and selective harvesting capabilities.",
    longDescription: "Sustainable agricultural solution combining robotics, computer vision, and precision farming techniques to optimize crop yields and reduce environmental impact.",
    image: "/src/assets/images/projects/agri-robot.jpg",
    technologies: ["Computer Vision", "GPS Navigation", "Solar Power", "ROS", "Machine Learning", "Sensors"],
    category: "Agricultural Technology",
    status: "Prototype",
    github: "https://github.com/Mohammed-Azab/agri-robot",
    demo: "https://youtube.com/watch?v=agri-robot-demo",
    features: [
      "Autonomous navigation",
      "Crop health monitoring",
      "Selective harvesting",
      "Solar power management"
    ],
    timeline: "May 2024 - Present",
    teamSize: "Collaborative Project"
  }
];

// Project categories for filtering
export const projectCategories = [
  "All",
  "Robotics",
  "IoT",
  "Control Systems",
  "Industrial Automation",
  "Biomedical Engineering",
  "Agricultural Technology"
];

// Featured projects (subset for homepage)
export const featuredProjects = projectsData.filter(project => 
  [1, 2, 3, 4].includes(project.id)
);

export default projectsData;

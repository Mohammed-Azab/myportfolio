// Projects Data
// This file contains all project information for the portfolio

export const projectsData = [
  {
    id: 1,
    title: "F1TENTH Autonomous Racing Car",
    description: "Built a 1/10th scale autonomous race car on the F1TENTH platform, running ROS2 on NVIDIA Jetson with advanced SLAM and path planning.",
    longDescription: "Developed a comprehensive autonomous racing system with real-time mapping, localization, and trajectory planning. Achieved 3rd place in the 25th RoboRacer Autonomous Racing Competition in Romania.",
    image: "/src/assets/images/projects/f1tenth-car.jpg",
    technologies: ["ROS2", "NVIDIA Jetson", "SLAM", "Python", "C++", "Extended Kalman Filter"],
    category: "Autonomous Systems",
    status: "Completed",
    github: "https://github.com/Mohammed-Azab/f1tenth-racing",
    demo: "https://youtube.com/watch?v=f1tenth-demo",
    features: [
      "Real-time SLAM mapping and localization",
      "Bezier spline-based path optimizer",
      "Hybrid MPC–LQR controller for trajectory planning",
      "Dual Extended Kalman Filter for state estimation",
      "IMU and odometry data fusion"
    ],
    timeline: "Jan 2024 - Jun 2024",
    teamSize: "Team Project",
    achievement: "3rd place in 25th RoboRacer Autonomous Racing Competition, Romania"
  },
  {
    id: 2,
    title: "TriFlameX: Swarm of Fire-Fighting Robots",
    description: "Developed 3 autonomous robots with multi-layer architecture for coordinated detection and suppression of fires using custom communication protocols.",
    longDescription: "Advanced swarm robotics system with custom thermal LiDAR, interrupt-driven communication protocol, and multi-layer architecture for coordinated fire detection and suppression.",
    image: "/src/assets/images/projects/triflamex.jpg",
    technologies: ["ESP32", "STM32", "FreeRTOS", "ROS2", "MQTT", "UART", "Thermal LiDAR"],
    category: "Robotics",
    status: "Completed",
    github: "https://github.com/Mohammed-Azab/TriFlameX",
    demo: "https://youtube.com/watch?v=triflamex-demo",
    features: [
      "Multi-layer architecture (Laptop–ESP32–STM32)",
      "Interrupt-driven Azab Protocol for binary communication",
      "Custom thermal LiDAR system for fire localization",
      "ROS2, MQTT, and UART integration",
      "Coordinated swarm behavior"
    ],
    timeline: "Sep 2023 - Feb 2024",
    teamSize: "Team of 3"
  },
  {
    id: 3,
    title: "Dice Realms: Quest for the Elemental Crests",
    description: "Developed a 2D board game in Java with object-oriented programming architecture and AI players using Monte Carlo methods.",
    longDescription: "Comprehensive 2D board game with finite state machine for game flow, AI players with multiple difficulty levels, and modern UI design using JavaFX.",
    image: "/src/assets/images/projects/dice-realms.jpg",
    technologies: ["Java", "JavaFX", "CSS", "Git", "GitHub", "Monte Carlo Methods"],
    category: "Software Development",
    status: "Completed",
    github: "https://github.com/Mohammed-Azab/dice-realms",
    demo: "https://youtube.com/watch?v=dice-realms-demo",
    features: [
      "Object-oriented programming (OOP) architecture",
      "Finite state machine (FSM) for game flow",
      "AI players using Monte Carlo decision-making",
      "Multiple difficulty levels",
      "Human vs AI and AI vs AI gameplay",
      "Modern UI in JavaFX and CSS"
    ],
    timeline: "Mar 2023 - Jul 2023",
    teamSize: "Solo Project"
  },
  {
    id: 4,
    title: "FPGA Edge Detection",
    description: "Designed a real-time edge detection algorithm using VHDL on FPGA with Prewitt filter method and adaptive thresholds.",
    longDescription: "High-performance real-time edge detection system implemented on FPGA using advanced matrix theory for adaptive thresholds and validated with comprehensive testbenches.",
    image: "/src/assets/images/projects/fpga-edge.jpg",
    technologies: ["VHDL", "FPGA", "Altera Quartus", "Matrix Theory", "Digital Signal Processing"],
    category: "Digital Systems",
    status: "Completed",
    github: "https://github.com/Mohammed-Azab/fpga-edge-detection",
    demo: null,
    features: [
      "Real-time edge detection using Prewitt filter",
      "Adaptive threshold algorithms",
      "Matrix theory implementation",
      "Custom testbench validation",
      "Optimized FPGA resource utilization"
    ],
    timeline: "Oct 2023 - Dec 2023",
    teamSize: "Solo Project"
  },

];

// Project categories for filtering
export const projectCategories = [
  "All",
  "Autonomous Systems",
  "Robotics",
  "Software Development",
  "Digital Systems"
];

// Featured projects (subset for homepage)
export const featuredProjects = projectsData.filter(project =>
  [1, 2, 3, 4].includes(project.id)
);

export default projectsData;

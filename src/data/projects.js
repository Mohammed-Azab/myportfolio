// Projects Data
// This file contains all project information for the portfolio

export const projectsData = [
  {
    id: 1,
    title: "F1TENTH Autonomous Racing Car",
    description: "Built a 1/10th scale autonomous race car on the F1TENTH platform, running ROS2 on NVIDIA Jetson with advanced SLAM and path planning.",
    longDescription: "Developed a comprehensive autonomous racing system with real-time mapping, localization, and trajectory planning. Achieved 3rd place in the 25th RoboRacer Autonomous Racing Competition in Romania.",
    image: "/images/projects/project-placeholder.svg",
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
    image: "/images/projects/project-placeholder.svg",
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
    description: "Strategic two‑player board game built from scratch in Java with OOP architecture and AI opponents.",
    longDescription: "Dice Realms is a competitive strategy game set in Eldoria where players cast spell dice to defeat elemental creatures and collect Crests. The design uses clean OOP, a finite‑state machine to manage phases, and a JavaFX UI. We implemented an AI module (ACE) to support multiple difficulty levels using a Monte‑Carlo style decision policy. Collaboration and version control were handled via Git/GitHub; styles were done with CSS.",
    image: "/images/projects/project-placeholder.svg",
    technologies: ["Java", "JavaFX", "CSS", "Git", "GitHub", "AI"],
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
    image: "/images/projects/project-placeholder.svg",
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
  {
    id: 5,
    title: "Precision Motion Control: Ball and Motor System",
    description: "PID and Lead–Lag control for a ball‑stabilizer system with MATLAB/Simulink design and Arduino hardware validation.",
    longDescription: "Designed and tuned a PID controller to meet transient/steady‑state specs, analyzed stability with Root‑Locus and Bode plots, then developed a Lead–Lag compensator in Simulink to match/compare performance. Built a hardware prototype using Arduino, an ultrasonic sensor, and a servo to validate the model against reality.",
    image: "/images/projects/project-placeholder.svg",
    technologies: ["PID", "Lead–Lag", "MATLAB", "Simulink", "Arduino", "Servo", "Ultrasonic"],
    category: "Control Systems",
    status: "Completed",
    github: "https://github.com/Mohammed-Azab/DynamiControl",
    demo: null,
    features: [
      "Controller tuning via Root‑Locus and frequency response",
      "Comparative analysis: PID vs Lead–Lag",
      "Hardware‑in‑the‑loop validation"
    ],
    timeline: "Oct 2024 - Jan 2025",
    teamSize: "Solo Project"
  },
  {
    id: 6,
    title: "Intel 8086 AES Implementation",
    description: "AES‑128 encryption implemented in 8086 assembly with Python tooling for build integration.",
    longDescription: "Implemented AES‑128 on an Intel 8086 microprocessor: SubBytes, ShiftRows, MixColumns, AddRoundKey, and full key schedule across 10 rounds. The program reads 128‑bit input and key, outputs the encrypted block; Python scripts assist with assembling/including macro files.",
    image: "/images/projects/project-placeholder.svg",
    technologies: ["x86 Assembly", "AES‑128", "Python"],
    category: "Digital Systems",
    status: "Completed",
    github: "https://github.com/FamALouiz/AFA86x",
    demo: null,
    features: [
      "Macro‑based core AES transformations",
      "Key schedule generation",
      "Interactive I/O via interrupts"
    ],
    timeline: "May 2024",
    teamSize: "Team Project"
  },

];

// Project categories for filtering
export const projectCategories = [
  "All",
  "Autonomous Systems",
  "Robotics",
  "Software Development",
  "Digital Systems",
  "Control Systems"
];

// Featured projects (subset for homepage)
export const featuredProjects = projectsData.filter(project =>
  [1, 2, 3, 4].includes(project.id)
);

export default projectsData;

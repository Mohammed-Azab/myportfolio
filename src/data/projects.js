// Projects Data
// This file contains all project information for the portfolio

export const projectsData = [
  {
    id: 1,
    title: "F1TENTH Autonomous Racing Car",
    description:
      "Built a 1/10th scale autonomous race car on the F1TENTH platform, running ROS2 on NVIDIA Jetson with advanced SLAM and path planning.",
    longDescription:
      "Developed a comprehensive autonomous racing system with real-time mapping, localization, and trajectory planning. Achieved 3rd place in the 25th RoboRacer Autonomous Racing Competition in Romania.",
    image: "/images/projects/project-placeholder.svg",
    technologies: [
      "ROS2",
      "NVIDIA Jetson",
      "SLAM",
      "Python",
      "C++",
      "Extended Kalman Filter",
    ],
    category: "Autonomous Systems",
    status: "Completed",
    github: "https://github.com/Mohammed-Azab/f1tenth-racing",
    demo: "https://youtube.com/watch?v=f1tenth-demo",
    features: [
      "Real-time SLAM mapping and localization",
      "Bezier spline-based path optimizer",
      "Hybrid MPC–LQR controller for trajectory planning",
      "Dual Extended Kalman Filter for state estimation",
      "IMU and odometry data fusion",
    ],
    timeline: "June 2025",
    teamSize: "Team Project",
    images: [
      "/images/projects/f1t1.jpeg",
      "/images/projects/f1t2.jpeg",
      "/images/projects/f1t3.jpeg",
      "/images/projects/f1t33.jpeg",
      "/images/projects/f1t4.jpeg",
      "/images/projects/f1t5.jpeg",
      "/images/projects/f1t6.jpeg",
    ],
    achievement:
      "3rd place in 25th RoboRacer Autonomous Racing Competition, Romania",
  },
  {
    id: 2,
    title: "TriFlameX: Autonomous Cooperative Fire-Fighting Robots",
    description:
      "Swarm of three autonomous robots that cooperatively detect, localize, and suppress small fires.",
    longDescription:
      "TriFlameX is a swarm of three robots that work together to find and suppress small fires in indoor or controlled outdoor spaces. Each robot combines mobility, real‑time sensing, wireless communication, and on‑board decision making.\n\nCommunication\n- UART for intra‑car data transfer\n- MQTT over Wi‑Fi for inter‑device messaging\n\nSystem architecture (three layers)\n1) Laptop (central controller): runs Python algorithms, talks to ESP32 via MQTT/Wi‑Fi, integrates ROS2 for manual control using the /joy topic.\n2) ESP32 (communication hub): reads ToF sensor data over UART1, uses MQTT (C++), forwards commands to STM32 over UART2 using a custom 6‑byte binary protocol.\n3) STM32 (low‑level controller): validates and executes commands; controls motors and servos using PWM and PD control with safety checks (Embedded C, bare metal).",
    image: "/images/projects/project-placeholder.svg",
    technologies: [
      "ESP32",
      "STM32",
      "FreeRTOS",
      "ROS2",
      "MQTT",
      "UART",
      "Thermal LiDAR",
    ],
    category: "Robotics",
    status: "Completed",
    github: "https://github.com/Mohammed-Azab/TriFlameX",
    demo: "https://youtube.com/watch?v=triflamex-demo",
    features: [
      "Three‑layer architecture (laptop, ESP32, STM32)",
      "Custom 6‑byte binary protocol (Azab Protocol) with interrupts + FreeRTOS at 500k baud",
      "Thermal LiDAR built from ToF sensor + stepper motor + flame sensor",
      "Real‑time GUI for data visualization",
      "ROS2 manual control via /joy, MQTT messaging, UART links",
      "Coordinated detection and suppression behavior",
      "Safety checks and PD control on STM32 low‑level layer",
    ],
    timeline: "Sep 2023 - Feb 2024",
    teamSize: "Team of 3",
    images: [
      "/images/projects/trif1.jpeg",
      "/images/projects/trif2.jpeg",
      "/images/projects/trif3.jpeg",
      "/images/projects/trif4.jpeg",
      "/images/projects/trif5.jpeg",
      "/images/projects/trif6.jpeg",
    ],
  },
  {
    id: 3,
    title: "Dice Realms: Quest for the Elemental Crests",
    description:
      "Two player strategy board game built in Java with OOP architecture, AI opponents, and a JavaFX UI.",
    longDescription:
      "Overview\nDice Realms is a competitive board game where two players act as wizards battling across the realms of Eldoria. Players roll and allocate magical dice to cast spells and defeat elemental creatures to earn points. The goal is to collect Elemental Crests and outsmart the opponent.\n\nCore mechanics\n- Forgotten Realm: unchosen dice become opportunities for the opponent on the next turn\n- Special abilities: Time Warp and Arcane Boost shift the course of battle\n- Scoring: defeat elemental creatures and secure Crests to win\n\nArchitecture and technology\n- Java OOP for the core game model (boards, realms, creatures, spells)\n- Finite‑state machine to manage phases, turns, actions, and validations\n- JavaFX UI with CSS styling for a responsive desktop experience\n- AI module (ACE) that supports multiple difficulty levels using a Monte Carlo style decision policy\n- Team workflow with Git and GitHub to coordinate development and reviews",
    image: "/images/projects/project-placeholder.svg",
    technologies: ["Java", "JavaFX", "CSS", "Git", "GitHub", "AI"],
    category: "Software Development",
    status: "Completed",
    github: "https://github.com/Mohammed-Azab/dice-realms",
    demo: "https://youtube.com/watch?v=dice-realms-demo",
    features: [
      "OOP domain model for realms, spells, and creatures",
      "Finite‑state machine for phases, turns, and actions",
      "AI module (ACE) with Monte Carlo style decision policy",
      "Multiple difficulty levels; Human vs AI and AI vs AI modes",
      "JavaFX desktop UI styled with CSS",
      "Collaborative development with Git and GitHub",
    ],
    timeline: "Mar 2024 - Aug 2024",
    teamSize: "Team Project",
    images: [
      "/images/projects/ACE1.jpeg",
      "/images/projects/ACE2.jpeg",
      "/images/projects/ACE3.jpeg",
      "/images/projects/ACE4.jpeg",
      "/images/projects/ACE5.jpeg",
      "/images/projects/ACE6.jpeg",
    ],
  },
  {
    id: 4,
    title: "FPGA-Based Edge Detection",
    description:
      "Designed a real-time edge detection algorithm using VHDL on FPGA with Prewitt filter method and adaptive thresholds.",
    longDescription:
      "High-performance real-time edge detection system implemented on FPGA using advanced matrix theory for adaptive thresholds and validated with comprehensive testbenches.",
    image: "/images/projects/project-placeholder.svg",
    technologies: [
      "VHDL",
      "FPGA",
      "Altera Quartus",
      "Matrix Theory",
      "Digital Signal Processing",
    ],
    category: "Digital Systems",
    status: "Completed",
    github: "https://github.com/Mohammed-Azab/fpga-edge-detection",
    demo: null,
    features: [
      "Real-time edge detection using Prewitt filter",
      "Adaptive threshold algorithms",
      "Matrix theory implementation",
      "Custom testbench validation",
      "Optimized FPGA resource utilization",
    ],
    timeline: "Oct 2023 - Dec 2023",
    teamSize: "Solo Project",
    images: [
      "/images/projects/fpga1.jpeg",
      "/images/projects/fpga2.jpeg",
      "/images/projects/fpga3.jpeg",
    ],
  },
  {
    id: 5,
    title: "Precision Motion Control: Ball and Motor System",
    description:
      "PID and Lead–Lag control for a ball‑stabilizer system with MATLAB/Simulink design and Arduino hardware validation.",
    longDescription:
      "Designed and tuned a PID controller to meet transient/steady‑state specs, analyzed stability with Root‑Locus and Bode plots, then developed a Lead–Lag compensator in Simulink to match/compare performance. Built a hardware prototype using Arduino, an ultrasonic sensor, and a servo to validate the model against reality.",
    image: "/images/projects/project-placeholder.svg",
    technologies: [
      "PID",
      "Lead–Lag",
      "MATLAB",
      "Simulink",
      "Arduino",
      "Servo",
      "Ultrasonic",
    ],
    category: "Control Systems",
    status: "Completed",
    github: "https://github.com/Mohammed-Azab/DynamiControl",
    demo: null,
    features: [
      "Controller tuning via Root‑Locus and frequency response",
      "Comparative analysis: PID vs Lead–Lag",
      "Hardware‑in‑the‑loop validation",
    ],
    timeline: "Oct 2024 - Jan 2025",
    teamSize: "Solo Project",
    images: [
      "/images/projects/pid1.jpeg",
      "/images/projects/pid2.jpeg",
    ],
  },
  {
    id: 6,
    title: "Intel 8086 AES-128 Cryptographic Engine",
    description:
      "Low-level AES-128 encryption engine implemented in pure 8086 assembly language with sophisticated modular architecture.",
    longDescription:
      "Developed a complete AES-128 encryption implementation on Intel 8086 microprocessor architecture, featuring all four core transformations (SubBytes, ShiftRows, MixColumns, AddRoundKey) and full 10-round key expansion. The system handles 128-bit plaintext input and encryption keys through DOS interrupts, processes data through authentic AES algorithm rounds, and outputs ciphertext.",
    image: "/images/projects/project-placeholder.svg",
    technologies: [
      "x86 Assembly",
      "AES Algorithm",
      "Encryption",
      "Decryption",
      "DOS Interrupts",
      "8086 Architecture",
      "Low-Level Programming",
    ],
    category: "Digital Systems",
    status: "Completed",
    github: "https://github.com/FamALouiz/AFA86x",
    demo: null,
    achievement: null,
    features: [
      "Complete AES-128 algorithm implementation in pure assembly",
      "Optimized S-Box and inverse S-Box lookup tables",
      "Round-based encryption with proper key scheduling",
      "DOS interrupt-driven I/O for user interaction",
      "Modular macro-based architecture for maintainability",
    ],
    timeline: "May 2024",
    teamSize: "Team Project (3 members)",
    images: [
      "/images/projects/assm1.jpeg",
      "/images/projects/assm2.jpeg",
      "/images/projects/assm3.jpeg",
    ],
  },
];

// Project categories for filtering
export const projectCategories = [
  "All",
  "Autonomous Systems",
  "Robotics",
  "Software Development",
  "Digital Systems",
  "Control Systems",
];

// Featured projects (subset for homepage)
export const featuredProjects = projectsData.filter((project) =>
  [1, 2, 3, 4].includes(project.id)
);

export default projectsData;

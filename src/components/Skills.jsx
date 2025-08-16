import React from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Cpu, Wrench, Monitor, Globe2, Users } from "lucide-react";

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skillCategories = [
    // Core Programming
    {
      title: "Programming Languages",
      skills: [
        {
          name: "C",
          badge:
            "https://img.shields.io/badge/embedded_c-%2300599C.svg?style=for-the-badge&logo=c&logoColor=white",
        },
        {
          name: "C++",
          badge:
            "https://img.shields.io/badge/c++-%2300599C.svg?style=for-the-badge&logo=c%2B%2B&logoColor=white",
        },
        {
          name: "Python",
          badge:
            "https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54",
        },
        {
          name: "Java",
          badge:
            "https://img.shields.io/badge/java-%23ED8B00.svg?style=for-the-badge&logo=openjdk&logoColor=white",
        },
        {
          name: "VHDL",
          badge:
            "https://img.shields.io/badge/VHDL-%23A5915F.svg?style=for-the-badge&logo=verilog&logoColor=white",
        },
        {
          name: "Assembly",
          badge:
            "https://img.shields.io/badge/assembly%20script-%23000000.svg?style=for-the-badge&logo=assemblyscript&logoColor=white",
        },
        {
          name: "JavaScript",
          badge:
            "https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E",
        },
        {
          name: "CSS3",
          badge:
            "https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white",
        },
      ],
    },
    
    // Robotics & Automation (Core Expertise)
    {
      title: "Robotics & Automation",
      skills: [
        {
          name: "ROS2",
          badge:
            "https://img.shields.io/badge/ros2-%230A0FF9.svg?style=for-the-badge&logo=ros&logoColor=white",
        },
        {
          name: "RViz",
          badge:
            "https://img.shields.io/badge/RViz-%230A0FF9.svg?style=for-the-badge&logo=ros&logoColor=white",
        },
        {
          name: "Gazebo",
          badge:
            "https://img.shields.io/badge/Gazebo-%23FF6600.svg?style=for-the-badge&logo=gazebo&logoColor=white",
        },
        {
          name: "MATLAB",
          badge:
            "https://img.shields.io/badge/MATLAB-0076A8?style=for-the-badge&logo=mathworks&logoColor=white",
        },
        {
          name: "Simulink",
          badge:
            "https://img.shields.io/badge/Simulink-0076A8?style=for-the-badge&logo=mathworks&logoColor=white",
        },
      ],
    },
    {
      title: "Hardware Platforms",
      skills: [
        {
          name: "STM32",
          badge:
            "https://img.shields.io/badge/STM32-%230073C7.svg?style=for-the-badge&logo=stmicroelectronics&logoColor=white",
        },
        {
          name: "Arduino",
          badge:
            "https://img.shields.io/badge/-Arduino-00979D?style=for-the-badge&logo=Arduino&logoColor=white",
        },
        {
          name: "Raspberry Pi",
          badge:
            "https://img.shields.io/badge/-Raspberry_Pi-C51A4A?style=for-the-badge&logo=Raspberry-Pi",
        },
        {
          name: "NVIDIA Jetson",
          badge:
            "https://img.shields.io/badge/nVIDIA_Jetson-%2376B900.svg?style=for-the-badge&logo=nVIDIA&logoColor=white",
        },
        {
          name: "FPGA",
          badge:
            "https://img.shields.io/badge/FPGA-%230071C5.svg?style=for-the-badge&logo=intel&logoColor=white",
        },
        {
          name: "ESP32",
          badge:
            "https://img.shields.io/badge/ESP32-%23000000.svg?style=for-the-badge&logo=espressif&logoColor=white",
        },
      ],
    },
    {
      title: "AI/ML",
      skills: [
        {
          name: "OpenCV",
          badge:
            "https://img.shields.io/badge/opencv-%23white.svg?style=for-the-badge&logo=opencv&logoColor=white",
        },
        {
          name: "NumPy",
          badge:
            "https://img.shields.io/badge/numpy-%23013243.svg?style=for-the-badge&logo=numpy&logoColor=white",
        },
        {
          name: "Pandas",
          badge:
            "https://img.shields.io/badge/pandas-%23150458.svg?style=for-the-badge&logo=pandas&logoColor=white",
        },
      ],
    },
    {
      title: "Development Tools",
      skills: [
        {
          name: "CMake",
          badge:
            "https://img.shields.io/badge/CMake-%23008FBA.svg?style=for-the-badge&logo=cmake&logoColor=white",
        },
        {
          name: "Conan",
          badge:
            "https://img.shields.io/badge/Conan-blue?style=for-the-badge&logo=conan&logoColor=white",
        },
        {
          name: "Quartus",
          badge:
            "https://img.shields.io/badge/Quartus-%230071C5.svg?style=for-the-badge&logo=intel&logoColor=white",
        },
        {
          name: "Bash",
          badge:
            "https://img.shields.io/badge/bash-%23121011.svg?style=for-the-badge&logo=gnu-bash&logoColor=white",
        },
        {
          name: "PowerShell",
          badge:
            "https://img.shields.io/badge/PowerShell-%235391FE.svg?style=for-the-badge&logo=powershell&logoColor=white",
        },
      ],
    },
    {
      title: "Operating Systems",
      skills: [
        {
          name: "Ubuntu",
          badge:
            "https://img.shields.io/badge/Ubuntu-E95420?style=for-the-badge&logo=ubuntu&logoColor=white",
        },
        {
          name: "Arch Linux",
          badge:
            "https://img.shields.io/badge/Arch_Linux-1793D1?style=for-the-badge&logo=arch-linux&logoColor=white",
        },
        {
          name: "Windows",
          badge:
            "https://img.shields.io/badge/Windows-0078D6?style=for-the-badge&logo=windows&logoColor=white",
        },
      ],
    },
    {
      title: "Control Systems & Algorithms",
      skills: [
        {
          name: "MPC",
          badge: "https://img.shields.io/badge/MPC-blueviolet?style=for-the-badge&logo=chartdotjs&logoColor=white",
        },
        {
          name: "PID",
          badge: "https://img.shields.io/badge/PID-orange?style=for-the-badge&logo=controliq&logoColor=white",
        },
        {
          name: "LQR",
          badge: "https://img.shields.io/badge/LQR-darkblue?style=for-the-badge&logo=matrix&logoColor=white",
        },
        {
          name: "LQG",
          badge: "https://img.shields.io/badge/LQG-navy?style=for-the-badge&logo=matrix&logoColor=white",
        },
        {
          name: "Lead-Lag",
          badge: "https://img.shields.io/badge/Lead--Lag-forestgreen?style=for-the-badge&logo=circuitverse&logoColor=white",
        },
        {
          name: "Pure Pursuit",
          badge: "https://img.shields.io/badge/Pure_Pursuit-crimson?style=for-the-badge&logo=route&logoColor=white",
        },
        {
          name: "Stanley",
          badge: "https://img.shields.io/badge/Stanley-darkred?style=for-the-badge&logo=steeringandsuspension&logoColor=white",
        },
        {
          name: "MATLAB",
          badge: "https://img.shields.io/badge/MATLAB-0076A8?style=for-the-badge&logo=mathworks&logoColor=white",
        },
        {
          name: "Simulink",
          badge: "https://img.shields.io/badge/Simulink-0076A8?style=for-the-badge&logo=mathworks&logoColor=white",
        },
      ],
    },
    {
      title: "Version Control",
      skills: [
        {
          name: "Git",
          badge:
            "https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white",
        },
        {
          name: "GitHub",
          badge:
            "https://img.shields.io/badge/GitHub-%23121011.svg?style=for-the-badge&logo=github&logoColor=white",
        },
      ],
    },
    {
      title: "Technical",
      skills: [
        {
          name: "System Optimization",
          badge:
            "https://img.shields.io/badge/System_Optimization-purple?style=for-the-badge&logo=speedtest&logoColor=white",
        },
        {
          name: "Hardware-Software Integration",
          badge:
            "https://img.shields.io/badge/HW--SW_Integration-orange?style=for-the-badge&logo=microchip&logoColor=white",
        },
        {
          name: "API Documentation",
          badge:
            "https://img.shields.io/badge/API_Documentation-darkblue?style=for-the-badge&logo=swagger&logoColor=white",
        },
      ],
    },
    {
      title: "DevOps",
      skills: [
        {
          name: "Docker",
          badge:
            "https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white",
        },
        {
          name: "Jenkins",
          badge:
            "https://img.shields.io/badge/jenkins-%232C5263.svg?style=for-the-badge&logo=jenkins&logoColor=white",
        },
        {
          name: "AWS",
          badge:
            "https://img.shields.io/badge/AWS-%23FF9900.svg?style=for-the-badge&logo=amazon-aws&logoColor=white",
        },
        {
          name: "GitHub Actions",
          badge:
            "https://img.shields.io/badge/GitHub_Actions-%23121011.svg?style=for-the-badge&logo=github&logoColor=white",
        },
      ],
    },
    {
      title: "Languages",
      skills: [
        {
          name: "English (C1)",
          badge:
            "https://img.shields.io/badge/English-C1-blue?style=for-the-badge&logo=googletranslate&logoColor=white",
        },
        {
          name: "German (B2)",
          badge:
            "https://img.shields.io/badge/German-B2-red?style=for-the-badge&logo=googletranslate&logoColor=white",
        },
        {
          name: "Arabic (Native)",
          badge:
            "https://img.shields.io/badge/Arabic-Native-green?style=for-the-badge&logo=googletranslate&logoColor=white",
        },
      ],
    },
    {
      title: "Design & Video",
      skills: [
        {
          name: "Figma",
          badge:
            "https://img.shields.io/badge/figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white",
        },
        {
          name: "Adobe Photoshop",
          badge:
            "https://img.shields.io/badge/adobe%20photoshop-%2331A8FF.svg?style=for-the-badge&logo=adobe%20photoshop&logoColor=white",
        },
      ],
    },
    {
      title: "Interpersonal",
      skills: [
        {
          name: "Leadership",
          badge:
            "https://img.shields.io/badge/Leadership-gold?style=for-the-badge&logo=crown&logoColor=white",
        },
        {
          name: "Communication",
          badge:
            "https://img.shields.io/badge/Communication-lightblue?style=for-the-badge&logo=telegram&logoColor=white",
        },
        {
          name: "Public Speaking",
          badge:
            "https://img.shields.io/badge/Public_Speaking-indigo?style=for-the-badge&logo=microphone&logoColor=white",
        },
        {
          name: "Time Management",
          badge:
            "https://img.shields.io/badge/Time_Management-darkgreen?style=for-the-badge&logo=clockify&logoColor=white",
        },
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  // No progress bars; render concise tags with level badges

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-surface via-dark-bg to-dark-surface opacity-50"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-futuristic font-bold mb-6"
          >
            Technical <span className="text-gradient">Skills</span>
          </motion.h2>

          <motion.div
            variants={itemVariants}
            className="w-24 h-1 bg-gradient-to-r from-electric-blue to-neon-green mx-auto mb-8"
          ></motion.div>

          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-400 max-w-3xl mx-auto"
          >
            A comprehensive toolkit of technologies, frameworks, and
            methodologies that power my engineering solutions and drive
            innovation in every project.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8"
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              className="bg-dark-surface border border-dark-border rounded-lg p-6 card-hover"
            >
              {/* Category Header */}
              <div className="mb-6">
                <h3 className="text-xl font-bold text-white mb-2">
                  {category.title}
                </h3>
                <div className="w-12 h-1 bg-gradient-to-r from-electric-blue to-neon-green"></div>
              </div>

              {/* Skills List */}
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, idx) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={
                      isInView
                        ? { opacity: 1, scale: 1 }
                        : { opacity: 0, scale: 0.8 }
                    }
                    transition={{ delay: categoryIndex * 0.1 + idx * 0.05 }}
                    className="hover:scale-105 transition-transform duration-200"
                  >
                    <img
                      src={skill.badge}
                      alt={skill.name}
                      className="h-7 object-contain hover:shadow-lg transition-shadow duration-200"
                      loading="lazy"
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Section Divider */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-electric-blue to-transparent opacity-50"></div>
    </section>
  );
};

export default Skills;

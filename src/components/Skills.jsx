import React from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Cpu, Wrench, Bot, CircuitBoard } from "lucide-react";

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skillCategories = [
    {
      title: "Programming",
      Icon: Code2,
      skills: [
        { name: "C/C++", level: "Advanced" },
        { name: "Python", level: "Advanced" },
        { name: "JavaScript", level: "Intermediate" },
        { name: "MATLAB", level: "Advanced" },
        { name: "Assembly", level: "Intermediate" },
      ],
    },
    {
      title: "Robotics & Embedded",
      Icon: Bot,
      skills: [
        { name: "ROS2", level: "Advanced" },
        { name: "Embedded C/C++", level: "Advanced" },
        { name: "STM32 / ESP32", level: "Advanced" },
        { name: "FreeRTOS", level: "Intermediate" },
        { name: "Sensor Integration", level: "Advanced" },
        { name: "Motor Control", level: "Advanced" },
        { name: "Kalman Filtering", level: "Intermediate" },
      ],
    },
    {
      title: "Tools & Platforms",
      Icon: Wrench,
      skills: [
        { name: "Git / GitHub", level: "Advanced" },
        { name: "Linux", level: "Advanced" },
        { name: "Docker", level: "Intermediate" },
        { name: "CMake / Conan", level: "Intermediate" },
        { name: "MATLAB / Simulink", level: "Advanced" },
        { name: "React", level: "Intermediate" },
      ],
    },
    {
      title: "Hardware & Design",
      Icon: CircuitBoard,
      skills: [
        { name: "PCB Design", level: "Intermediate" },
        { name: "FPGA (VHDL/Verilog)", level: "Intermediate" },
        { name: "SolidWorks (CAD)", level: "Advanced" },
        { name: "Circuit Analysis", level: "Advanced" },
        { name: "3D Printing", level: "Intermediate" },
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
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              className="bg-dark-surface border border-dark-border rounded-lg p-8 card-hover"
            >
              {/* Category Header */}
              <div className="flex items-center gap-4 mb-8">
                <div className="text-3xl text-electric-blue">
                  {category.Icon ? <category.Icon className="w-7 h-7" /> : null}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">
                    {category.title}
                  </h3>
                  <div className="w-16 h-1 bg-gradient-to-r from-electric-blue to-neon-green mt-2"></div>
                </div>
              </div>

              {/* Skills List */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, idx) => (
                  <motion.span
                    key={skill.name}
                    initial={{ opacity: 0, y: 6 }}
                    animate={
                      isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 6 }
                    }
                    transition={{ delay: categoryIndex * 0.1 + idx * 0.03 }}
                    className="inline-flex items-center gap-2 bg-gray-800 border border-gray-700 rounded-full px-3 py-1"
                  >
                    <span className="text-gray-200 text-sm">{skill.name}</span>
                    <span className="text-xs px-2 py-0.5 rounded-full bg-electric-blue/15 text-electric-blue border border-electric-blue/30">
                      {skill.level}
                    </span>
                  </motion.span>
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

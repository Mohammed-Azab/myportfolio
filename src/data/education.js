// Education Data
// This file contains all educational background information

export const educationData = [
  {
    id: 1,
    institution: "Technical University of Berlin",
    degree: "Bachelor of Engineering in Mechatronics",
    field: "Mechatronics Engineering",
    period: "2021 - 2025 (Expected)",
    startDate: "2021-09",
    endDate: "2025-07",
    gpa: "3.8/4.0",
    location: "Berlin, Germany",
    status: "In Progress",
    description: "Comprehensive program covering mechanical engineering, electronics, control systems, and robotics with hands-on laboratory experience and research opportunities.",
    logo: "/src/assets/images/education/tu-berlin-logo.png",
    
    // Core Curriculum
    coreCourses: [
      "Advanced Control Systems",
      "Robotics and Automation", 
      "Digital Signal Processing",
      "Machine Learning for Engineers",
      "Industrial Automation",
      "Embedded Systems Design",
      "Mechanical Design",
      "Power Electronics",
      "Sensor Technology",
      "Manufacturing Processes"
    ],
    
    // Specializations
    specializations: [
      "Autonomous Systems",
      "Industrial Robotics",
      "AI Integration in Engineering"
    ],
    
    // Academic Achievements
    achievements: [
      "Dean's List (6 consecutive semesters)",
      "Outstanding Student in Robotics Department",
      "Research Assistant in AI Lab",
      "Academic Excellence Scholarship Recipient",
      "Best Final Year Project Award (2024)"
    ],
    
    // Research & Projects
    researchProjects: [
      {
        title: "AI-Powered Prosthetic Device Development",
        supervisor: "Prof. Dr. Schmidt",
        duration: "Jan 2024 - Present",
        description: "Research on EMG signal processing and machine learning for gesture recognition in prosthetic devices."
      },
      {
        title: "Autonomous Mobile Robot Navigation",
        supervisor: "Dr. Weber",
        duration: "Sep 2023 - Dec 2023",
        description: "Development of SLAM algorithms for indoor robot navigation using ROS2."
      }
    ],
    
    // Relevant Coursework by Semester
    courseworkBySemester: {
      "Semester 1": ["Mathematics I", "Physics I", "Engineering Mechanics", "Programming Fundamentals"],
      "Semester 2": ["Mathematics II", "Physics II", "Materials Science", "Circuit Analysis"],
      "Semester 3": ["Control Systems I", "Digital Electronics", "Thermodynamics", "CAD Design"],
      "Semester 4": ["Control Systems II", "Microprocessors", "Fluid Mechanics", "Signal Processing"],
      "Semester 5": ["Robotics I", "Power Electronics", "Manufacturing", "Machine Learning"],
      "Semester 6": ["Robotics II", "Automation Systems", "Computer Vision", "Industrial IoT"],
      "Semester 7": ["Advanced Robotics", "AI Applications", "Project Management", "Research Methods"],
      "Semester 8": ["Final Year Project", "Professional Ethics", "Entrepreneurship", "Thesis Writing"]
    }
  },
  {
    id: 2,
    institution: "Max Planck Technical High School",
    degree: "Abitur - STEM Track",
    field: "Science, Technology, Engineering & Mathematics",
    period: "2017 - 2021",
    startDate: "2017-08",
    endDate: "2021-06",
    gpa: "1.2 (German Scale) / 96%",
    location: "Berlin, Germany",
    status: "Completed",
    description: "Specialized secondary education with intensive focus on STEM subjects, advanced mathematics, physics, and engineering fundamentals.",
    logo: "/src/assets/images/education/high-school-logo.png",
    
    // Advanced Courses
    coreCourses: [
      "Advanced Mathematics (Leistungskurs)",
      "Physics (Leistungskurs)",
      "Chemistry",
      "Computer Science",
      "Engineering Fundamentals",
      "Technical Drawing",
      "Electronics Basics",
      "German Literature",
      "English",
      "History"
    ],
    
    // Specializations
    specializations: [
      "Advanced Mathematics",
      "Experimental Physics",
      "Computer Programming"
    ],
    
    // Academic Achievements
    achievements: [
      "Valedictorian (Jahrgangsbester)",
      "National Science Olympiad Winner",
      "First Place in Regional Robotics Competition",
      "Mathematics Excellence Award",
      "Physics Department Recognition",
      "Perfect Attendance Award"
    ],
    
    // Special Projects
    researchProjects: [
      {
        title: "Automated Plant Watering System",
        supervisor: "Dr. Mueller",
        duration: "Sep 2020 - Jun 2021",
        description: "Final year project developing an IoT-based automated plant care system using Arduino and sensors."
      },
      {
        title: "Solar Panel Efficiency Analysis",
        supervisor: "Prof. Fischer",
        duration: "Jan 2020 - Jun 2020",
        description: "Research project analyzing factors affecting solar panel performance in different weather conditions."
      }
    ],
    
    // Extracurricular Activities
    extracurricular: [
      "Robotics Club President (2019-2021)",
      "Science Fair Organizer",
      "Peer Tutoring Program - Mathematics",
      "Student Council Technology Committee",
      "STEM Outreach Volunteer"
    ]
  }
];

// Education Statistics
export const educationStats = {
  totalYearsStudied: 8,
  currentGPA: "3.8/4.0",
  totalCourses: 45,
  researchProjects: 4,
  academicAwards: 11,
  institutions: 2
};

// Education Highlights
export const educationHighlights = [
  {
    title: "Academic Excellence",
    description: "Consistent high performance with Dean's List recognition for 6 consecutive semesters",
    icon: "🏆"
  },
  {
    title: "Research Experience",
    description: "Active participation in AI and robotics research with published findings",
    icon: "🔬"
  },
  {
    title: "Practical Application",
    description: "Hands-on laboratory experience and real-world project implementations",
    icon: "⚡"
  },
  {
    title: "Leadership",
    description: "Leadership roles in academic clubs and peer mentoring programs",
    icon: "👥"
  }
];

export default {
  education: educationData,
  stats: educationStats,
  highlights: educationHighlights
};

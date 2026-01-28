// Education Data
// This file contains all educational background information

export const educationData = [
  {
    id: 1,
    institution: "Technische Universität Berlin",
    degree: "External Bachelor Thesis Student",
    field: "Elektrotechnik und Informatik",
    period: "Mar 2026 - Aug 2026",
    startDate: "2026-03",
    endDate: "2026-08",
    gpa: null,
    location: "Berlin, Germany",
    status: "In Progress",
    description:
      "Visiting student at the Institute of Elektrotechnik und Informatik, conducting research in autonomous systems and embedded computing.",
    website: "https://www.tu.berlin",
    logo: "/images/education/tub_logo.jpg",

    // Core Curriculum
    coreCourses: null,

    // Specializations
    specializations: [],

    // Academic Achievements
    achievements: null,

    // Research & Projects
    researchProjects: null,

    // Relevant Coursework by Semester
    courseworkBySemester: null,

    // Honors and Awards
    honorsAndAwards: null,

    // Volunteering Experience
    volunteering: null,
  },
  {
    id: 2,
    institution: "German International University of Berlin",
    degree: "B.Sc. in Mechatronics Engineering",
    field: "Mechatronics Engineering",
    period: "Oct 2023 - Present",
    startDate: "2023-10",
    endDate: "Present",
    gpa: "0.92 (A+)",
    location: "Berlin, Germany",
    status: "In Progress",
    description:
      "Comprehensive program covering autonomous systems, control systems engineering, power electronics, embedded systems, and robotics with hands-on laboratory experience and research opportunities.",
    website: "https://www.giu-berlin.de",
    logo: "/images/education/giu_logo.png",

    // Core Curriculum
    coreCourses: null,

    // Specializations
    specializations: [
      "Autonomous Systems",
      "Control Engineering",
      "Robotics",
      "Software Engineering",
    ],

    // Academic Achievements
    achievements: [
      "Dean's List (5 consecutive semesters)",
      "Best Embedded System's Project Award (2024)",
    ],

    // Research & Projects
    researchProjects: null,

    // Relevant Coursework by Semester
    courseworkBySemester: {
      "Semester 1": [
        "Mathematics I",
        "Physics II",
        "Engineering Drawing and Design",
        "Introduction to Computer Programming",
        "Critical Thinking and Scientific Methodology",
      ],
      "Semester 2": [
        "Mathematics II",
        "Mechanics I",
        "Data Structures and Algorithms",
        "Electrical Circuits I",
        "Communication & Presentation Skills",
      ],
      "Semester 3": [
        "Computer Programming Lab",
        "Computer Organization & System Programming",
        "Electrical Circuits II",
        "Strength of Materials I",
        "Introduction to Materials Engineering",
        "Mechanics II",
        "Research Paper Writing",
      ],
      "Semester 4": [
        "Control Systems Engineering",
        "Digital System Design",
        "Thermodynamics",
        "Fluid Mechanics",
        "Engineering Design I",
        "Computer-Aided Design (CAD)",
      ],
      "Semester 5": [
        "Mechatronics Engineering",
        "Numerical Analysis",
        "Electronic Circuits",
        "Engineering Design II",
        "Materials Manufacturing Technology",
        "Introduction to Management",
      ],
      "Semester 6": [
        "Robotics and Mechatronics Lab",
        "Pneumatic and hydraulic control",
        "Modern Control Engineering",
        "Power Electronics",
        "Machine Design",
        "Electric Machines",
        "Industrial Automation",
      ],
      "Semester 7": ["Engineering Bachelor Thesis Writing"],
    },

    // Honors and Awards
    honorsAndAwards: [
      {
        title: "Dean's List Excellence Award",
        organization: "German International University of Berlin",
        date: "2024",
        description:
          "Recognized for outstanding academic performance with GPA above 3.8 for 5 consecutive semesters",
      },
    ],

    // Volunteering Experience
    volunteering: null,
  },
  {
    id: 3,
    institution: "The German University in Cairo",
    degree: "B.Sc. in General Engineering",
    field: "General Engineering",
    period: "Sep 2022 - Aug 2023",
    startDate: "2022-09",
    endDate: "2023-08",
    gpa: "0.79 (A+)",
    location: "New Cairo, Egypt",
    status: "Completed",
    description:
      "Studied for one year as a scholarship recipient, equivalent to Germany’s Studienkolleg, with coursework in advanced mathematics, computer science, digital logic design, and physics, satisfying the academic prerequisites for university admission in Germany.",
    logo: "/images/education/guc_Logo.jpg",
    website: "https://www.guc.edu.eg",

    coreCourses: null,

    courseworkBySemester: {
      "Semester 1": [
        "Introduction to Computer Science",
        "Mathematics I",
        "Physics I",
        "Engineering Drawing and Design",
        "Academic English",
        "German Language I",
      ],
      "Semester 2": [
        "Introduction to Computer Programming",
        "Mathematics II",
        "Physics II",
        "Digital Logic Design",
        "Production Technology",
        "Academic Study Skills",
        "German Language II",
      ],
    },

    // Specializations
    specializations: [],

    // Academic Achievements
    achievements: null,

    // Special Projects
    researchProjects: null,

    // Extracurricular Activities
    extracurricular: null,

    // Honors and Awards
    honorsAndAwards: [
      {
        title: "GUC Scholarship for Studying Abroad",
        organization: "German University in Cairo",
        date: "2023",
        description:
          "Awarded the GUC Scholarship for studying mechatronics in Germany, a recognition given to the top 5 students out of a competitive pool of 981 candidates.",
      },
      {
        title: "GUC Scholarship for Outstanding Thanaweya Amma Achievement",
        organization: "German University in Cairo",
        date: "2022",
        description:
          "Merit-based scholarship awarded for outstanding performance in Egyptian high school final examinations (Thanaweya Amma).",
      },
    ],

    // Volunteering Experience
    volunteering: [
      {
        id: 3, // References volunteering.js entry
        role: "Event Team Lead (Ushering)",
        organization: "The German University in Cairo",
        duration: "Mar 2023 - Feb 2024",
        description:
          "Led the ushering and logistics team for high‑traffic university events, coordinating schedules, entry flow, seating, and venue readiness.",
      },
    ],
  },
];

// Education Statistics
export const educationStats = {
  totalYearsStudied: 3,
  currentGPA: "3.8/4.0",
  totalCourses: 32,
  researchProjects: 2,
  academicAwards: 6,
  institutions: 2,
};

// Education Highlights
export const educationHighlights = [
  {
    title: "Academic Excellence",
    description:
      "Consistent high performance with Dean's List recognition for 3 consecutive semesters",
    icon: "🏆",
  },
  {
    title: "Research Experience",
    description:
      "Active participation in AI and robotics research with ongoing projects",
    icon: "🔬",
  },
  {
    title: "Leadership",
    description:
      "Leadership roles in academic clubs and peer mentoring programs",
    icon: "👥",
  },
];

export default {
  education: educationData,
  stats: educationStats,
  highlights: educationHighlights,
};

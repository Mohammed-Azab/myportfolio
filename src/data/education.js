// Education Data
// This file contains all educational background information

export const educationData = [
  {
    id: 1,
    institution: "German International University of Berlin",
    degree: "B.Sc. in Mechatronics Engineering",
    field: "Mechatronics Engineering",
    period: "Oct 2023 - Present",
    startDate: "2023-10",
    endDate: "Present",
    gpa: "0.81 (A+)",
    location: "Berlin, Germany",
    status: "In Progress",
    description:
      "Comprehensive program covering autonomous systems, control systems engineering, power electronics, embedded systems, and robotics with hands-on laboratory experience and research opportunities.",
    website: "https://www.giu-berlin.de",
    logo: "/images/education/giu_logo.png",

    // Core Curriculum
    coreCourses: [
      "Autonomous Systems",
      "Control Systems Engineering",
      "Power Electronics",
      "Embedded Systems",
      "Numerical Analysis",
      "Thermodynamics",
      "Fluid Mechanics",
      "Software Engineering",
      "Robotics and Automation",
      "Digital Signal Processing",
    ],

    // Specializations
    specializations: [
      "Autonomous Systems",
      "Control Engineering",
      "Robotics",
      "Software Engineering",
    ],

    // Academic Achievements
    achievements: [
      "Dean's List (3 consecutive semesters)",
      "Outstanding Student in Robotics Department",
      "Research Assistant in AI Lab",
      "Academic Excellence Scholarship Recipient",
      "Best Final Year Project Award (2024)",
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
      "Semester 7": [
        "Engineering Bachelor Thesis Writing",
      ],
    },

    // Honors and Awards
    honorsAndAwards: [
      {
        title: "Dean's List Excellence Award",
        organization: "German International University of Berlin",
        date: "2024",
        description:
          "Recognized for outstanding academic performance with GPA above 3.8 for 3 consecutive semesters",
      },
      {
        title: "Best Final Year Project Award",
        organization: "Mechatronics Department",
        date: "2024",
        description:
          "Awarded for innovative AI-powered prosthetic device development project",
      },
      {
        title: "Academic Excellence Scholarship",
        organization: "German International University",
        date: "2023-2025",
        description:
          "Merit-based scholarship covering 50% tuition fees for outstanding academic performance",
      },
      {
        title: "Outstanding Student in Robotics",
        organization: "Robotics Department",
        date: "2023",
        description:
          "Recognition for exceptional performance in robotics coursework and laboratory projects",
      },
      {
        title: "Research Assistant Excellence Award",
        organization: "AI Research Lab",
        date: "2024",
        description:
          "Acknowledged for significant contributions to prosthetic device research project",
      },
    ],

    // Volunteering Experience
    volunteering: [
      {
        role: "Robotics Club President",
        organization: "GIU Robotics Society",
        duration: "Sep 2022 - Jun 2023",
        description:
          "Led university robotics club, organized competitions, managed budget, and coordinated with industry partners",
        impact:
          "Increased club membership by 120% and secured €3,000 in sponsorships",
      },
    ],
  },
  {
    id: 2,
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
      "Comprehensive engineering foundation program covering advanced mathematics, computer science, digital logic design, and physics with focus on engineering fundamentals.",
    logo: "/images/education/guc_Logo.jpg",
    website: "https://www.guc.edu.eg",

    // Advanced Courses
    coreCourses: [
      "Introduction to Computer Science",
      "Advanced Calculus",
      "Digital Logic Design",
      "Linear Algebra",
      "Physics II",
      "Engineering Chemistry",
      "Production Technology",
      "Engineering Drawing",
      "Academic English",
      "Academic Study Skills",
    ],

    // Specializations
    specializations: [],

    // Academic Achievements
    achievements: [
      "Valedictorian (Jahrgangsbester)",
    ],

    // Special Projects
    researchProjects: null,

    // Extracurricular Activities
    extracurricular: [
      "Robotics Club President (2019-2021)",
      "Science Fair Organizer",
      "Peer Tutoring Program - Mathematics",
      "Student Council Technology Committee",
      "STEM Outreach Volunteer",
    ],

    // Honors and Awards
    honorsAndAwards: [
      {
        title: "Valedictorian Award",
        organization: "German University in Cairo",
        date: "2021",
        description:
          "Graduated as top student with highest GPA in the engineering preparatory program",
      },
      {
        title: "Mathematics Excellence Award",
        organization: "GUC Mathematics Department",
        date: "2020",
        description: "Outstanding performance in advanced mathematics courses",
      },
      {
        title: "Science Fair First Place",
        organization: "Cairo Regional Science Fair",
        date: "2020",
        description: "Won first place for innovative renewable energy project",
      },
    ],

    // Volunteering Experience
    volunteering: [
      {
        role: "Math Tutor",
        organization: "Community Learning Center",
        duration: "Jan 2020 - Jun 2021",
        description:
          "Tutored underprivileged students in mathematics and physics preparation for university entrance exams",
        impact:
          "Helped 20+ students achieve 90%+ scores in entrance examinations",
      },
      {
        role: "Science Club Vice President",
        organization: "GUC Science Society",
        duration: "Sep 2019 - Jun 2021",
        description:
          "Organized science exhibitions, coordinated guest lectures, and managed club activities",
        impact:
          "Increased club participation by 200% and organized 5 major science events",
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

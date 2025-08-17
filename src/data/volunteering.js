// Volunteering Data
// This file contains all volunteering experience information

export const volunteeringData = [
  {
    id: 1,
    role: "Biodiversity and Climate Action Volunteer",
    organization: "European Solidarity Corps for Youth (ESC4Y)",
    location: "Deuselbach, Germany",
    duration: "Sep 2024 - Oct 2024",
    startDate: "2024-09",
    endDate: "2024-10",
    type: "Environmental Conservation",
    description:
      "Collaborated with IBG and the Foundation for Nature and Environment to support biodiversity (UN SDG 15) and climate action (UN SDG 13).",
    responsibilities: [
      "Assisted park rangers in restoring peatlands in Hunsrück-Hochwald National Park",
      "Supported biodiversity conservation efforts aligned with UN SDG 15",
      "Contributed to climate action initiatives aligned with UN SDG 13",
      "Collaborated with international volunteers on environmental projects",
      "Participated in hands-on conservation work and ecosystem restoration",
    ],
    impact:
      "Contributed to peatland restoration efforts supporting both biodiversity and climate action goals",
    skills: [
      "Environmental Conservation",
      "Teamwork",
      "Ecosystem Restoration",
      "International Collaboration",
      "Sustainability",
    ],
    website: "https://youth.europa.eu/solidarity_en",
    image: "/images/volunteering/eucs.png",
    photos: [
      {
        url: "/images/volunteering/placeholder-photo.svg",
        caption: "Peatland restoration work in Hunsrück-Hochwald National Park",
      },
      {
        url: "/images/volunteering/placeholder-photo.svg",
        caption:
          "International volunteer team working on biodiversity conservation",
      },
      {
        url: "/images/volunteering/placeholder-photo.svg",
        caption: "Ecosystem restoration activities supporting UN SDG 15",
      },
      {
        url: "/images/volunteering/placeholder-photo.svg",
        caption: "Conservation tools and equipment used in restoration work",
      },
    ],
  },
  {
    id: 2,
    role: "Junior Teaching Assistant",
    organization: "German University in Cairo",
    location: "New Cairo, Egypt",
    duration: "Jan 2020 - Jun 2021",
    startDate: "2020-01",
    endDate: "2021-06",
    type: "Education & Community Service",
    description:
      "Tutored underprivileged students in mathematics and physics preparation for university entrance examinations.",
    responsibilities: [
      "Provide individual and group tutoring sessions",
      "Develop customized study plans for each student",
      "Create practice tests and study materials",
      "Track student progress and communicate with parents",
      "Organize study groups and peer learning sessions",
    ],
    impact:
      "Helped 20+ students achieve 90%+ scores in entrance examinations, 85% university acceptance rate",
    skills: [
      "Mathematics",
      "Physics",
      "Tutoring",
      "Curriculum Development",
      "Cross-cultural Communication",
    ],
    website: null,
    image: "/images/education/guc_Logo.jpg",
    photos: null,
  },
  {
    id: 3,
    role: "Competitive Programmer",
    organization: "ICPC - International Collegiate Programming Contest",
    location: "Global",
    duration: "Mar 2024 - Present",
    startDate: "2024-03",
    endDate: "present",
    type: "Academic Support",
    description:
      "Active participant in the International Collegiate Programming Contest, developing algorithmic problem-solving skills and competitive programming expertise.",
    responsibilities: [
      "Participate in ICPC regional and international competitions",
      "Develop efficient algorithms for complex computational problems",
      "Practice advanced data structures and algorithm optimization",
      "Collaborate with team members in programming contests",
      "Mentor junior programmers in competitive programming techniques",
    ],
    impact:
      "Enhanced algorithmic thinking and problem-solving skills through competitive programming challenges",
    skills: [
      "Competitive Programming",
      "Algorithm Design",
      "Data Structures",
      "Problem Solving",
      "C++",
      "Time Complexity Analysis",
    ],
    website: "https://icpc.global/",
    image:
      "/images/volunteering/acm_international_collegiate_programming_contest_logo.jpeg",
    photos: [
      {
        url: "/images/volunteering/placeholder-photo.svg",
        caption: "ICPC programming contest participation",
      },
      {
        url: "/images/volunteering/placeholder-photo.svg",
        caption: "Algorithmic problem-solving session",
      },
    ],
  },
  {
    id: 4,
    role: "Team Leader",
    organization: "The German University in Cairo",
    location: "New Cairo, Egypt",
    duration: "Mar 2023 - Feb 2024",
    startDate: "2023-03",
    endDate: "2024-02",
    type: "Leadership & Organization",
    description:
      "Served as team leader for Berlin Exchange Program and Design Connects initiatives, facilitating student connections and educational opportunities.",
    responsibilities: [
      "Lead team coordination for Berlin Exchange Program",
      "Organize and manage Design Connects events and activities",
      "Facilitate student connections and networking opportunities",
      "Coordinate with university administration and program stakeholders",
      "Mentor and guide team members in program execution",
      "Ensure successful delivery of educational and cultural programs",
    ],
    impact:
      "Successfully led programs connecting students with international opportunities and design education initiatives",
    skills: [
      "Team Leadership",
      "Program Management", 
      "Student Mentoring",
      "Event Organization",
      "Cross-cultural Communication",
      "Project Coordination",
    ],
    website: "https://www.guc.edu.eg/",
    image: "/images/volunteering/GUCUshering.jpeg",
    photos: [
      {
        url: "/images/volunteering/placeholder-photo.svg",
        caption: "Team leadership activities at GUC",
      },
      {
        url: "/images/volunteering/placeholder-photo.svg",
        caption: "Berlin Exchange Program coordination",
      },
      {
        url: "/images/volunteering/placeholder-photo.svg",
        caption: "Design Connects event organization",
      },
    ],
  },
];

// Volunteering Statistics
export const volunteeringStats = {
  totalHours: 850,
  studentsHelped: 120,
  workshopsConducted: 35,
  organizationsServed: 3,
  yearsActive: 5,
};

// Volunteering Categories
export const volunteeringCategories = [
  "All",
  "Education & Mentoring",
  "Community Education",
  "Academic Support",
  "Leadership & Organization",
  "Education & Community Service",
  "Environmental Conservation",
];

export default volunteeringData;

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
        url: "/images/volunteering/certificatede.jpeg",
        caption: "Peatland restoration work in Hunsrück-Hochwald National Park",
      },
      {
        url: "/images/volunteering/vol2.jpeg",
        caption:
          "International volunteer team",
      },
      {
        url: "/images/volunteering/vol2.jpeg",
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
    ],
    impact: null,
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
    photos: null,
  },
  {
    id: 3,
    role: "Event Team Lead (Ushering)",
    organization: "The German University in Cairo",
    location: "New Cairo, Egypt",
    duration: "Mar 2023 - Feb 2024",
    startDate: "2023-03",
    endDate: "2024-02",
    type: "Leadership & Organization",
    description:
      "Led the ushering and logistics team for high‑traffic university events, coordinating schedules, entry flow, seating, and venue readiness. Worked closely with Student Affairs and security to ensure smooth attendee experience and on‑time program delivery.",
    responsibilities: [
      "Assign shifts and zones for 20+ ushers; brief teams on roles and contingency plans",
      "Manage guest flow at entrances, ticket/ID checks, and seating guidance",
      "Coordinate with Student Affairs, AV, and security for incident handling",
      "Prepare venue maps, signage, and run‑of‑show checklists",
    ],
    impact: null,
    skills: [
      "Team Leadership",
      "Operations Management",
      "Communication",
      "Event Organization",
      "Cross-functional Coordination",
    ],
    website: "https://www.guc.edu.eg/",
    image: "/images/education/guc_Logo.jpg",
    photos: [
      {
        url: "/images/volunteering/GUCUshering.jpeg",
        caption: "Certificate presentation at German University in Cairo",
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
  organizationsServed: 3,
  yearsActive: 5,
};

// Volunteering Categories
export const volunteeringCategories = [
  "All",
  "Academic Support",
  "Leadership & Organization",
  "Environmental Conservation",
];

export default volunteeringData;

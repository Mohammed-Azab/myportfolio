// Honors and Awards Data
// This file contains all honors, awards, and recognitions

export const awardsData = [
  {
    id: 1,
    title: "F1TENTH Racing Competition - 3rd Place",
    organization: "25th RoboRacer Autonomous Racing Competition",
    category: "Competition",
    date: "2024",
    level: "International",
    description:
      "Achieved 3rd place in the 25th RoboRacer Autonomous Racing Competition in Romania with F1TENTH autonomous racing car.",
    criteria: null,
    significance: null,
    image: "/images/awards/IEEE-IV-2025.png",
    //certificate: "/documents/f1tenth-2025.pdf",
    certificate: null,
    website: "https://ieee-iv.org/2025/roboracer/",
    recommendationLetters: null,
    photos: [
      {
        url: "/images/awards/f1t1.jpeg",
      },
      {
        url: "/images/awards/f1t11.jpeg",
      },
    ],
  },
  {
    id: 2,
    title: "GUC Scholarship for Studying Abroad",
    organization: "German University in Cairo",
    category: "Scholarship",
    date: "2023",
    level: "University",
    description:
      "Awarded the prestigious GUC Scholarship for studying mechatronics in Germany, a recognition given to the top 5 students out of a competitive pool of 981 candidates. This scholarship has enabled me to pursue a three-year mechatronics program in Germany.",

    image: "/images/education/guc_Logo.jpg",
    //certificate: "/documents/guc-international-scholarship-2023.pdf",
    certificate: null,
    website: "https://www.guc.edu.eg/",
    recommendationLetters: null,
  },
  {
    id: 3,
    title: "GUC Scholarship for Outstanding Thanaweya Amma Achievement",
    organization: "German University in Cairo",
    category: "Scholarship",
    date: "2022",
    level: "University",
    description:
      "Merit-based scholarship awarded for outstanding performance in Egyptian high school final examinations (Thanaweya Amma).",
    criteria: "Top performance in national examinations",
    significance: "Academic excellence recognition and financial support",
    image: "/images/education/guc_Logo.jpg",
    //certificate: "/documents/guc-scholarship-2022.pdf",
    certificate: null,
    website: "https://www.guc.edu.eg/",
    recommendationLetters: null,
  },
];

// Awards Statistics
export const awardsStats = {
  totalAwards: 3,
  academicExcellence: 0,
  researchInnovation: 0,
  competitions: 1,
  scholarships: 2,
  yearsSpan: 3,
};

// Award Categories
export const awardCategories = [
  "All",
  "Academic Excellence",
  "Research & Innovation",
  "Competition",
  "Scholarship",
];

// Award Levels
export const awardLevels = [
  "All",
  "International",
  "National",
  "Regional",
  "University",
  "Department",
  "Research Lab",
];

export default awardsData;

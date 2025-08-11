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
    description: "Achieved 3rd place in the 25th RoboRacer Autonomous Racing Competition in Romania with F1TENTH autonomous racing car.",
    criteria: "Best performing autonomous racing system",
    significance: "International recognition for autonomous systems excellence",
    image: "/images/awards/f1tenth-racing.jpg",
    certificate: "/documents/f1tenth-2024.pdf"
  },
  {
    id: 2,
    title: "GUC Scholarship for Outstanding Thanaweya Amma Achievement",
    organization: "German University in Cairo",
    category: "Scholarship",
    date: "2022",
    level: "University",
    description: "Merit-based scholarship awarded for outstanding performance in Egyptian high school final examinations (Thanaweya Amma).",
    criteria: "Top performance in national examinations",
    significance: "Academic excellence recognition and financial support",
    image: "/images/awards/guc-scholarship.jpg",
    certificate: "/documents/guc-scholarship-2022.pdf"
  },

];

// Awards Statistics
export const awardsStats = {
  totalAwards: 2,
  academicExcellence: 0,
  researchInnovation: 0,
  competitions: 1,
  scholarships: 1,
  yearsSpan: 2
};

// Award Categories
export const awardCategories = [
  "All",
  "Academic Excellence",
  "Research & Innovation", 
  "Competition",
  "Scholarship"
];

// Award Levels
export const awardLevels = [
  "All",
  "International",
  "National", 
  "Regional",
  "University",
  "Department",
  "Research Lab"
];

export default awardsData;

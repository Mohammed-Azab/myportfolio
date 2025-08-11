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
    certificate: "/documents/f1tenth-2024.pdf",
    recommendationLetters: [
      {
        author: "Dr. Adrian Ionescu",
        position: "Competition Director",
        organization: "25th RoboRacer Autonomous Racing Competition",
        date: "June 2024",
        excerpt: "Mohammed's team demonstrated exceptional technical prowess and innovative approach to autonomous racing. Their implementation of advanced SLAM algorithms and trajectory planning was particularly impressive, earning them a well-deserved 3rd place finish.",
        url: "/documents/recommendations/placeholder-letter.pdf"
      },
      {
        author: "Prof. Dr. Michael Schmidt",
        position: "Supervisor, Autonomous Systems Lab",
        organization: "German International University Berlin",
        date: "July 2024",
        excerpt: "Mohammed's work on the F1TENTH project showcased his deep understanding of autonomous systems and control theory. His ability to integrate complex algorithms with real-time performance requirements is remarkable for a student at his level.",
        url: "/documents/recommendations/placeholder-letter.pdf"
      }
    ]
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
    certificate: "/documents/guc-scholarship-2022.pdf",
    recommendationLetters: [
      {
        author: "Dr. Ahmed Hassan",
        position: "Dean of Engineering",
        organization: "German University in Cairo",
        date: "September 2022",
        excerpt: "Mohammed's outstanding performance in the Thanaweya Amma examinations and his demonstrated commitment to engineering excellence make him an ideal candidate for our scholarship program. His academic record reflects both intellectual capability and dedication.",
        url: "/documents/recommendations/placeholder-letter.pdf"
      },
      {
        author: "Prof. Sarah El-Masry",
        position: "Head of Admissions",
        organization: "German University in Cairo",
        date: "August 2022",
        excerpt: "Among the top 1% of applicants, Mohammed demonstrated exceptional mathematical and analytical skills. His passion for engineering and commitment to academic excellence are evident in both his examination results and personal statement.",
        url: "/documents/recommendations/placeholder-letter.pdf"
      }
    ]
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

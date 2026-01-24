// Publications Data
// This file contains all research publications and papers

export const publicationsData = [
  {
    id: 1,
    title: "AROLA: A Modular Layered Architecture for Scaled Autonomous Racing",
    authors: null,
    conference: "IEEE Intelligent Vehicles Symposium (IV26)",
    location: "Detroit, Michigan, USA",
    year: 2026,
    date: "2026",
    status: "Published",
    type: "Conference Paper",
    abstract: null,
    highlights: [
      "Developed a modular, layered autonomous-driving architecture using ROS 2 to support scalable, reusable racing systems.",
      "Designed a full-stack driving pipeline integrating sensing, perception, localization, planning, behavior, control, and actuation layers.",
      "Developed Race Monitor, a real-time evaluation framework, to benchmark controllers in simulation and real-world experiments.",
      "The system facilitated rapid controller comparison, efficient parameter tuning, and reproducible experiments across diverse platforms.",
      "The approach was validated by achieving a 3rd place finish at RoboRacer IV25 in Cluj, Romania",
    ],
    keywords: [
      "Autonomous Racing",
      "ROS 2",
      "Control Systems",
      "Robotics",
      "Model Predictive Control",
    ],
    doi: null,
    arxiv: null,
    pdf: null,
    code: null,
    video: null,
    conferenceWebsite: "https://ieee-iv.org/2026/",
  },
];

// Publication Statistics
export const publicationStats = {
  totalPublications: 1,
  conferencePublications: 1,
  journalPublications: 0,
  workshopPublications: 0,
};

export default {
  publications: publicationsData,
  stats: publicationStats,
};

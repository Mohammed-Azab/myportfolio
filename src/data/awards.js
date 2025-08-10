// Honors and Awards Data
// This file contains all honors, awards, and recognitions

export const awardsData = [
  {
    id: 1,
    title: "Dean's List Excellence Award",
    organization: "German International University of Berlin",
    category: "Academic Excellence",
    date: "2024",
    level: "University",
    description: "Recognized for outstanding academic performance with GPA above 3.8 for 6 consecutive semesters in Mechatronics Engineering program.",
    criteria: "Top 5% of students in the engineering faculty",
    significance: "Highest academic honor for sustained excellence",
    image: "/images/awards/deans-list.jpg",
    certificate: "/documents/deans-list-2024.pdf"
  },
  {
    id: 2,
    title: "Best Final Year Project Award",
    organization: "Mechatronics Department, GIU Berlin",
    category: "Research & Innovation",
    date: "2024",
    level: "Department",
    description: "Awarded for innovative AI-powered prosthetic device development project that demonstrated exceptional technical merit and real-world impact.",
    criteria: "Most innovative and technically sound final year project",
    significance: "Recognition for outstanding research and development skills",
    image: "/images/awards/best-project.jpg",
    certificate: "/documents/best-project-2024.pdf"
  },
  {
    id: 3,
    title: "Academic Excellence Scholarship",
    organization: "German International University",
    category: "Scholarship",
    date: "2022-2025",
    level: "University",
    description: "Merit-based scholarship covering 50% tuition fees for outstanding academic performance and leadership potential.",
    criteria: "GPA above 3.7 and demonstrated leadership skills",
    significance: "Financial recognition for academic merit and potential",
    image: "/images/awards/scholarship.jpg",
    certificate: "/documents/scholarship-2022.pdf"
  },
  {
    id: 4,
    title: "Outstanding Student in Robotics",
    organization: "Robotics Department, GIU Berlin",
    category: "Academic Excellence",
    date: "2023",
    level: "Department",
    description: "Recognition for exceptional performance in robotics coursework, laboratory projects, and contribution to department research.",
    criteria: "Top performance in robotics courses and research contribution",
    significance: "Department recognition for robotics excellence",
    image: "/images/awards/robotics-outstanding.jpg",
    certificate: "/documents/robotics-award-2023.pdf"
  },
  {
    id: 5,
    title: "Research Assistant Excellence Award",
    organization: "AI Research Lab, GIU Berlin",
    category: "Research & Innovation",
    date: "2024",
    level: "Research Lab",
    description: "Acknowledged for significant contributions to prosthetic device research project and exceptional research methodology.",
    criteria: "Outstanding research contribution and methodology",
    significance: "Recognition for research excellence and innovation",
    image: "/images/awards/research-excellence.jpg",
    certificate: "/documents/research-award-2024.pdf"
  },
  {
    id: 6,
    title: "Valedictorian Award",
    organization: "German University in Cairo",
    category: "Academic Excellence",
    date: "2021",
    level: "University",
    description: "Graduated as top student with highest GPA in the engineering preparatory program, demonstrating exceptional academic achievement.",
    criteria: "Highest GPA in graduating class",
    significance: "Highest academic honor for graduating class",
    image: "/images/awards/valedictorian.jpg",
    certificate: "/documents/valedictorian-2021.pdf"
  },
  {
    id: 7,
    title: "Mathematics Excellence Award",
    organization: "GUC Mathematics Department",
    category: "Academic Excellence",
    date: "2020",
    level: "Department",
    description: "Outstanding performance in advanced mathematics courses including calculus, linear algebra, and differential equations.",
    criteria: "Top 3% performance in mathematics courses",
    significance: "Department recognition for mathematical excellence",
    image: "/images/awards/math-excellence.jpg",
    certificate: "/documents/math-award-2020.pdf"
  },
  {
    id: 8,
    title: "Science Fair First Place",
    organization: "Cairo Regional Science Fair",
    category: "Competition",
    date: "2020",
    level: "Regional",
    description: "Won first place for innovative renewable energy project demonstrating solar panel efficiency optimization techniques.",
    criteria: "Most innovative and impactful science project",
    significance: "Regional recognition for scientific innovation",
    image: "/images/awards/science-fair.jpg",
    certificate: "/documents/science-fair-2020.pdf"
  },
  {
    id: 9,
    title: "National Science Olympiad Winner",
    organization: "Egyptian Ministry of Education",
    category: "Competition",
    date: "2020",
    level: "National",
    description: "National winner in Physics Olympiad, representing Egypt in international competitions.",
    criteria: "Top performance in national physics competition",
    significance: "National recognition and international representation",
    image: "/images/awards/olympiad.jpg",
    certificate: "/documents/olympiad-2020.pdf"
  },
  {
    id: 10,
    title: "Robotics Competition First Place",
    organization: "Regional Robotics Championship",
    category: "Competition",
    date: "2019",
    level: "Regional",
    description: "Led team to first place in regional robotics competition with autonomous navigation and object manipulation robot.",
    criteria: "Best performing robot in regional competition",
    significance: "Team leadership and technical excellence recognition",
    image: "/images/awards/robotics-competition.jpg",
    certificate: "/documents/robotics-comp-2019.pdf"
  }
];

// Awards Statistics
export const awardsStats = {
  totalAwards: 10,
  academicExcellence: 5,
  researchInnovation: 2,
  competitions: 3,
  scholarships: 1,
  yearsSpan: 6
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

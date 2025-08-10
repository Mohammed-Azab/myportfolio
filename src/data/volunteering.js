// Volunteering Data
// This file contains all volunteering experience information

export const volunteeringData = [
  {
    id: 1,
    role: "STEM Mentor",
    organization: "Berlin Youth Engineering Program",
    location: "Berlin, Germany",
    duration: "Sep 2023 - Present",
    startDate: "2023-09",
    endDate: "Present",
    type: "Education & Mentoring",
    description: "Mentor high school students in robotics and programming, organizing weekly workshops and competition preparation sessions.",
    responsibilities: [
      "Conduct weekly robotics workshops for 25+ students",
      "Prepare students for regional and national competitions",
      "Develop curriculum for Arduino and Python programming",
      "Organize field trips to tech companies and universities",
      "Provide career guidance and university application support"
    ],
    impact: "Mentored 25+ students with 80% advancing to regional robotics competitions and 60% pursuing STEM degrees",
    skills: ["Mentoring", "Curriculum Development", "Robotics", "Programming", "Leadership"],
    website: "https://berlin-youth-engineering.org",
    image: "/images/volunteering/stem-mentor.jpg"
  },
  {
    id: 2,
    role: "Technical Workshop Leader",
    organization: "Maker Space Berlin",
    location: "Berlin, Germany", 
    duration: "Jan 2023 - Aug 2023",
    startDate: "2023-01",
    endDate: "2023-08",
    type: "Community Education",
    description: "Led hands-on workshops on Arduino programming, 3D printing, and basic electronics for community members of all ages.",
    responsibilities: [
      "Design and deliver technical workshops",
      "Maintain and troubleshoot workshop equipment",
      "Create instructional materials and guides",
      "Assist community members with personal projects",
      "Coordinate with other workshop leaders"
    ],
    impact: "Conducted 15+ workshops with 200+ participants from diverse backgrounds, 90% completion rate",
    skills: ["Workshop Design", "3D Printing", "Electronics", "Arduino", "Public Speaking"],
    website: "https://makerspaceberlin.de",
    image: "/images/volunteering/workshop-leader.jpg"
  },
  {
    id: 3,
    role: "Peer Tutor",
    organization: "University Academic Support Center",
    location: "Berlin, Germany",
    duration: "Oct 2022 - Dec 2022",
    startDate: "2022-10", 
    endDate: "2022-12",
    type: "Academic Support",
    description: "Provided one-on-one and group tutoring in mathematics, physics, and programming fundamentals to first-year engineering students.",
    responsibilities: [
      "Conduct individual tutoring sessions",
      "Lead group study sessions",
      "Develop practice problems and study materials",
      "Track student progress and provide feedback",
      "Collaborate with professors on curriculum support"
    ],
    impact: "Helped 30+ students improve their grades by an average of 15%, 95% pass rate in supported courses",
    skills: ["Tutoring", "Mathematics", "Physics", "Programming", "Communication"],
    website: null,
    image: "/images/volunteering/peer-tutor.jpg"
  },
  {
    id: 4,
    role: "Robotics Club President",
    organization: "GIU Robotics Society",
    location: "Berlin, Germany",
    duration: "Sep 2022 - Jun 2023",
    startDate: "2022-09",
    endDate: "2023-06", 
    type: "Leadership & Organization",
    description: "Led university robotics club, organized competitions, managed budget, and coordinated with industry partners for sponsorships and events.",
    responsibilities: [
      "Lead weekly club meetings and activities",
      "Organize internal and external robotics competitions",
      "Manage club budget and financial planning",
      "Coordinate with industry partners for sponsorships",
      "Recruit new members and plan orientation events"
    ],
    impact: "Increased club membership by 150% and secured €5,000 in sponsorships, organized 3 major competitions",
    skills: ["Leadership", "Event Management", "Budget Management", "Partnership Development", "Team Building"],
    website: "https://giu-robotics.org",
    image: "/images/volunteering/robotics-president.jpg"
  },
  {
    id: 5,
    role: "Math Tutor",
    organization: "Community Learning Center",
    location: "Cairo, Egypt",
    duration: "Jan 2020 - Jun 2021",
    startDate: "2020-01",
    endDate: "2021-06",
    type: "Education & Community Service",
    description: "Tutored underprivileged students in mathematics and physics preparation for university entrance examinations.",
    responsibilities: [
      "Provide individual and group tutoring sessions",
      "Develop customized study plans for each student",
      "Create practice tests and study materials",
      "Track student progress and communicate with parents",
      "Organize study groups and peer learning sessions"
    ],
    impact: "Helped 20+ students achieve 90%+ scores in entrance examinations, 85% university acceptance rate",
    skills: ["Mathematics", "Physics", "Tutoring", "Curriculum Development", "Cross-cultural Communication"],
    website: null,
    image: "/images/volunteering/math-tutor.jpg"
  }
];

// Volunteering Statistics
export const volunteeringStats = {
  totalHours: 500,
  studentsHelped: 75,
  workshopsConducted: 20,
  organizationsServed: 5,
  yearsActive: 4
};

// Volunteering Categories
export const volunteeringCategories = [
  "All",
  "Education & Mentoring", 
  "Community Education",
  "Academic Support",
  "Leadership & Organization",
  "Education & Community Service"
];

export default volunteeringData;

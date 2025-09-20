// Sports & Activities Data
// This file contains all sports and physical activities information

export const sportsData = [
  {
    id: 1,
    activity: "B2RUN Berlin 2025",
    type: "Corporate Running Event",
    location: "Berlin Olympiastadion, Germany",
    date: "September 18, 2025",
    duration: "Sep 2025",
    startDate: "2025-09",
    endDate: "2025-09",
    category: "Corporate Running",
    description:
      "Participated in Germany's largest corporate running event with 18,000 runners from 896 companies at the iconic Berlin Olympiastadion, promoting team building, health awareness, and corporate social responsibility.",
    achievements: null,
    impact:
      "Contributed to Germany's largest corporate wellness initiative, promoting health awareness and team building across 896 participating companies",
    skills: [],
    website: "https://www.b2run.de/berlin",
    venue: "Berlin Olympiastadion (Olympic Stadium)",
    participants: "18,000 runners from 896 companies",
    logo: "/images/sports/b2run.png",
    image: "/images/sports/me.jpg",
    photos: [
      {
        url: "/images/sports/me.jpg",
        caption: "Me at B2RUN Berlin 2025",
      },
      {
        url: "/images/sports/team.jpeg",
        caption: "Team photo after the run",
      },
      {
        url: "/images/sports/stadium.jpeg",
        caption: "Berlin Olympiastadion venue",
      },
    ],
    featured: true,
    stats: {
      participants: "18,000",
      companies: "896",
      venue: "Berlin Olympiastadion",
      distance: "5.6km",
    },
  },
];

export const sportsCategories = ["All", "Corporate Running"];

export default sportsData;

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
    image: null,
    photos: null,
  },
];

// Volunteering Statistics
export const volunteeringStats = {
  totalHours: 600,
  studentsHelped: 75,
  workshopsConducted: 20,
  organizationsServed: 6,
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

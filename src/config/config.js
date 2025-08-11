// Portfolio Configuration
// This file contains all the main configuration settings for the portfolio

export const portfolioConfig = {
  // Personal Information
  personal: {
    name: "Mohammed Abdelazim",
    title: "Mechatronics Engineering Student",
    subtitle: "Robotics & Control systems",
    email: "Mohammed@azab.io",
    phone: "+49 1523 8600805",
    location: "Berlin, Germany",
    
    // Bio/Description
    bio: "Passionate Mechatronics Engineering Student with expertise in robotics, automation, and control systems. Currently pursuing advanced studies in autonomous systems and AI integration in mechanical engineering.",

    // Profile Image
    profileImage: "/src/assets/images/profile.jpg", // Add your profile image here
    
    // Resume
    resumeUrl: "/CV.pdf"
  },

  // Social Media Links
  social: {
    github: "https://github.com/Mohammed-Azab",
    linkedin: "https://linkedin.com/in/mohammed-azab",
    twitter: "https://twitter.com/mohammed_azab",
    instagram: "https://instagram.com/mohammed_azab",
    youtube: "https://youtube.com/@mohammed_azab",
    portfolio: "https://mohammedazab.com/myportfolio"
  },

  // Theme Configuration
  theme: {
    primaryColor: "#00D4FF", // Electric Blue
    secondaryColor: "#39FF14", // Neon Green
    accentColor: "#FF6B35", // Orange accent
    backgroundColor: "#0A0A0A", // Dark background
    textColor: "#FFFFFF",
    gradients: {
      primary: "from-blue-400 via-purple-500 to-green-400",
      secondary: "from-green-400 to-blue-500",
      accent: "from-purple-400 to-pink-400"
    }
  },

  // Animation Settings
  animations: {
    duration: {
      fast: 0.2,
      normal: 0.5,
      slow: 1.0
    },
    easing: "easeInOut",
    stagger: 0.1
  },

  // SEO Configuration
  seo: {
    title: "Mohammed Abdelazim - Mechatronics Engineering Student",
    description: "Portfolio of Mohammed Abdelazim, a Mechatronics Engineering Student specializing in robotics, automation, Robotics and control systems.",
    keywords: ["Mechatronics", "Engineer", "Robotics", "Automation", "Control Systems", "AI", "IoT"],
    author: "Mohammed Abdelazim",
    image: "/src/assets/images/og-image.jpg", // Open Graph image
    url: "https://mohammedazab.com/myportfolio"
  },

  // Contact Form Configuration
  contact: {
    emailJsServiceId: "Mohammed@azab.io",
    emailJsTemplateId: "Mohammed@azab.io",
    emailJsUserId: "Mohammed@azab.io"
  },

  // Google Analytics (optional)
  analytics: {
    googleAnalyticsId: "GA_MEASUREMENT_ID", // Replace with your GA ID
    enabled: false // Set to true when you want to enable analytics
  },

  // Features Toggle
  features: {
    darkMode: true,
    particleBackground: true,
    scrollProgress: true,
    preloader: true,
    contactForm: true,
    blogSection: false, // Enable if you want to add a blog
    testimonials: false, // Enable if you want to add testimonials
    educationSection: true, // Dedicated education section
    coursesSection: true, // Professional development courses
    experienceTimeline: true // Work experience timeline
  }
};

export default portfolioConfig;

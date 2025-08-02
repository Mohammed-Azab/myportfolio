// Portfolio Configuration
// This file contains all the main configuration settings for the portfolio

export const portfolioConfig = {
  // Personal Information
  personal: {
    name: "Mohammed Azab",
    title: "Mechatronics Engineer",
    subtitle: "Robotics & Control Systems Specialist",
    email: "mohammed.azab@example.com",
    phone: "+1 (555) 123-4567",
    location: "Your City, Country",
    
    // Bio/Description
    bio: "Passionate Mechatronics Engineer with expertise in robotics, automation, and control systems. Currently pursuing advanced studies in autonomous systems and AI integration in mechanical engineering.",
    
    // Profile Image
    profileImage: "/src/assets/images/profile.jpg", // Add your profile image here
    
    // Resume
    resumeUrl: "/src/assets/documents/Mohammed_Azab_Resume.pdf"
  },

  // Social Media Links
  social: {
    github: "https://github.com/Mohammed-Azab",
    linkedin: "https://linkedin.com/in/mohammed-azab",
    twitter: "https://twitter.com/mohammed_azab",
    instagram: "https://instagram.com/mohammed_azab",
    youtube: "https://youtube.com/@mohammed_azab",
    portfolio: "https://mohammed-azab.github.io/myportfolio"
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
    title: "Mohammed Azab - Mechatronics Engineer",
    description: "Portfolio of Mohammed Azab, a Mechatronics Engineer specializing in robotics, automation, and control systems.",
    keywords: ["Mechatronics", "Engineer", "Robotics", "Automation", "Control Systems", "AI", "IoT"],
    author: "Mohammed Azab",
    image: "/src/assets/images/og-image.jpg", // Open Graph image
    url: "https://mohammed-azab.github.io/myportfolio"
  },

  // Contact Form Configuration
  contact: {
    emailJsServiceId: "your_emailjs_service_id",
    emailJsTemplateId: "your_emailjs_template_id",
    emailJsUserId: "your_emailjs_user_id"
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
    testimonials: false // Enable if you want to add testimonials
  }
};

export default portfolioConfig;

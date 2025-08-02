// Animation Utilities
// This file contains reusable animation configurations for Framer Motion

export const fadeInUp = {
  initial: { 
    opacity: 0, 
    y: 30 
  },
  animate: { 
    opacity: 1, 
    y: 0 
  },
  transition: { 
    duration: 0.6,
    ease: "easeOut"
  }
};

export const fadeInLeft = {
  initial: { 
    opacity: 0, 
    x: -50 
  },
  animate: { 
    opacity: 1, 
    x: 0 
  },
  transition: { 
    duration: 0.6,
    ease: "easeOut"
  }
};

export const fadeInRight = {
  initial: { 
    opacity: 0, 
    x: 50 
  },
  animate: { 
    opacity: 1, 
    x: 0 
  },
  transition: { 
    duration: 0.6,
    ease: "easeOut"
  }
};

export const scaleIn = {
  initial: { 
    opacity: 0, 
    scale: 0.8 
  },
  animate: { 
    opacity: 1, 
    scale: 1 
  },
  transition: { 
    duration: 0.5,
    ease: "easeOut"
  }
};

export const slideInFromBottom = {
  initial: { 
    opacity: 0, 
    y: 100 
  },
  animate: { 
    opacity: 1, 
    y: 0 
  },
  transition: { 
    duration: 0.8,
    ease: "easeOut"
  }
};

export const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export const staggerItem = {
  initial: { 
    opacity: 0, 
    y: 20 
  },
  animate: { 
    opacity: 1, 
    y: 0 
  }
};

// Hover animations
export const hoverScale = {
  whileHover: { 
    scale: 1.05,
    transition: { duration: 0.2 }
  },
  whileTap: { 
    scale: 0.95 
  }
};

export const hoverFloat = {
  whileHover: { 
    y: -5,
    transition: { duration: 0.3 }
  }
};

export const hoverGlow = {
  whileHover: { 
    boxShadow: "0 0 20px rgba(0, 212, 255, 0.5)",
    transition: { duration: 0.3 }
  }
};

// Complex animations
export const typewriterContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.03,
      delayChildren: 0.5
    }
  }
};

export const typewriterChild = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 }
};

export const rotateIn = {
  initial: { 
    opacity: 0, 
    rotate: -180,
    scale: 0.5
  },
  animate: { 
    opacity: 1, 
    rotate: 0,
    scale: 1
  },
  transition: { 
    duration: 0.8,
    ease: "easeOut"
  }
};

export const bounceIn = {
  initial: { 
    opacity: 0, 
    scale: 0.3 
  },
  animate: { 
    opacity: 1, 
    scale: 1 
  },
  transition: { 
    duration: 0.6,
    ease: "easeOut",
    type: "spring",
    bounce: 0.4
  }
};

// Page transition animations
export const pageTransition = {
  initial: { 
    opacity: 0,
    x: -100
  },
  animate: { 
    opacity: 1,
    x: 0
  },
  exit: { 
    opacity: 0,
    x: 100
  },
  transition: { 
    duration: 0.5,
    ease: "easeInOut"
  }
};

// Loading animations
export const pulseAnimation = {
  animate: {
    scale: [1, 1.1, 1],
    opacity: [0.7, 1, 0.7],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

export const spinAnimation = {
  animate: {
    rotate: 360,
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "linear"
    }
  }
};

// Scroll-triggered animations with different viewports
export const scrollFadeIn = {
  initial: { opacity: 0, y: 50 },
  whileInView: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  },
  viewport: { once: true, amount: 0.3 }
};

export const scrollSlideIn = {
  initial: { opacity: 0, x: -100 },
  whileInView: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  },
  viewport: { once: true, amount: 0.3 }
};

export const scrollStagger = {
  initial: { opacity: 0 },
  whileInView: { 
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  },
  viewport: { once: true, amount: 0.2 }
};

export default {
  fadeInUp,
  fadeInLeft,
  fadeInRight,
  scaleIn,
  slideInFromBottom,
  staggerContainer,
  staggerItem,
  hoverScale,
  hoverFloat,
  hoverGlow,
  typewriterContainer,
  typewriterChild,
  rotateIn,
  bounceIn,
  pageTransition,
  pulseAnimation,
  spinAnimation,
  scrollFadeIn,
  scrollSlideIn,
  scrollStagger
};

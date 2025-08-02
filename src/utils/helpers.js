// General Utility Functions
// This file contains helper functions used throughout the application

// Date and Time Utilities
export const formatDate = (date, options = {}) => {
  const defaultOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  };
  
  return new Date(date).toLocaleDateString('en-US', {
    ...defaultOptions,
    ...options
  });
};

export const getTimeAgo = (date) => {
  const now = new Date();
  const past = new Date(date);
  const diffInSeconds = Math.floor((now - past) / 1000);
  
  const intervals = [
    { label: 'year', seconds: 31536000 },
    { label: 'month', seconds: 2592000 },
    { label: 'day', seconds: 86400 },
    { label: 'hour', seconds: 3600 },
    { label: 'minute', seconds: 60 }
  ];
  
  for (const interval of intervals) {
    const count = Math.floor(diffInSeconds / interval.seconds);
    if (count > 0) {
      return `${count} ${interval.label}${count > 1 ? 's' : ''} ago`;
    }
  }
  
  return 'Just now';
};

// String Utilities
export const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export const slugify = (text) => {
  return text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w\-]+/g, '')
    .replace(/\-\-+/g, '-')
    .replace(/^-+/, '')
    .replace(/-+$/, '');
};

export const truncateText = (text, maxLength = 100) => {
  if (text.length <= maxLength) return text;
  return text.substr(0, maxLength) + '...';
};

// Array Utilities
export const shuffleArray = (array) => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

export const groupBy = (array, key) => {
  return array.reduce((groups, item) => {
    const group = item[key];
    groups[group] = groups[group] || [];
    groups[group].push(item);
    return groups;
  }, {});
};

export const sortBy = (array, key, order = 'asc') => {
  return array.sort((a, b) => {
    const aVal = a[key];
    const bVal = b[key];
    
    if (order === 'desc') {
      return aVal < bVal ? 1 : -1;
    }
    return aVal > bVal ? 1 : -1;
  });
};

// URL and Navigation Utilities
export const isExternalLink = (url) => {
  return /^https?:\/\//.test(url);
};

export const openInNewTab = (url) => {
  window.open(url, '_blank', 'noopener noreferrer');
};

export const scrollToSection = (sectionId, offset = 80) => {
  const element = document.getElementById(sectionId);
  if (element) {
    const elementPosition = element.offsetTop - offset;
    window.scrollTo({
      top: elementPosition,
      behavior: 'smooth'
    });
  }
};

export const getScrollPercentage = () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  return (scrollTop / scrollHeight) * 100;
};

// Form Validation Utilities
export const validateEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
};

export const validatePhone = (phone) => {
  const re = /^[\+]?[1-9][\d]{0,15}$/;
  return re.test(phone.replace(/\s/g, ''));
};

export const validateRequired = (value) => {
  return value && value.toString().trim().length > 0;
};

export const validateMinLength = (value, minLength) => {
  return value && value.toString().length >= minLength;
};

// Local Storage Utilities
export const saveToLocalStorage = (key, value) => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
    return true;
  } catch (error) {
    console.error('Error saving to localStorage:', error);
    return false;
  }
};

export const getFromLocalStorage = (key, defaultValue = null) => {
  try {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : defaultValue;
  } catch (error) {
    console.error('Error reading from localStorage:', error);
    return defaultValue;
  }
};

export const removeFromLocalStorage = (key) => {
  try {
    localStorage.removeItem(key);
    return true;
  } catch (error) {
    console.error('Error removing from localStorage:', error);
    return false;
  }
};

// Performance Utilities
export const debounce = (func, wait) => {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

export const throttle = (func, limit) => {
  let inThrottle;
  return function() {
    const args = arguments;
    const context = this;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
};

// Device Detection
export const isMobile = () => {
  return window.innerWidth <= 768;
};

export const isTablet = () => {
  return window.innerWidth > 768 && window.innerWidth <= 1024;
};

export const isDesktop = () => {
  return window.innerWidth > 1024;
};

export const getDeviceType = () => {
  if (isMobile()) return 'mobile';
  if (isTablet()) return 'tablet';
  return 'desktop';
};

// Theme Utilities
export const getPreferredColorScheme = () => {
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    return 'dark';
  }
  return 'light';
};

export const toggleDarkMode = () => {
  const currentTheme = document.documentElement.getAttribute('data-theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', newTheme);
  saveToLocalStorage('theme', newTheme);
  return newTheme;
};

// Mathematical Utilities
export const clamp = (value, min, max) => {
  return Math.min(Math.max(value, min), max);
};

export const lerp = (start, end, factor) => {
  return start + (end - start) * factor;
};

export const map = (value, inMin, inMax, outMin, outMax) => {
  return ((value - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
};

export const randomBetween = (min, max) => {
  return Math.random() * (max - min) + min;
};

// DOM Utilities
export const waitForElement = (selector, timeout = 5000) => {
  return new Promise((resolve, reject) => {
    const element = document.querySelector(selector);
    if (element) {
      resolve(element);
      return;
    }

    const observer = new MutationObserver(() => {
      const element = document.querySelector(selector);
      if (element) {
        observer.disconnect();
        resolve(element);
      }
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true
    });

    setTimeout(() => {
      observer.disconnect();
      reject(new Error(`Element ${selector} not found within ${timeout}ms`));
    }, timeout);
  });
};

export const copyToClipboard = async (text) => {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch (error) {
    console.error('Failed to copy to clipboard:', error);
    return false;
  }
};

// File and Image Utilities
export const getFileExtension = (filename) => {
  return filename.slice((filename.lastIndexOf('.') - 1 >>> 0) + 2);
};

export const formatFileSize = (bytes) => {
  if (bytes === 0) return '0 Bytes';
  
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
};

export const loadImage = (src) => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = src;
  });
};

export default {
  formatDate,
  getTimeAgo,
  capitalizeFirstLetter,
  slugify,
  truncateText,
  shuffleArray,
  groupBy,
  sortBy,
  isExternalLink,
  openInNewTab,
  scrollToSection,
  getScrollPercentage,
  validateEmail,
  validatePhone,
  validateRequired,
  validateMinLength,
  saveToLocalStorage,
  getFromLocalStorage,
  removeFromLocalStorage,
  debounce,
  throttle,
  isMobile,
  isTablet,
  isDesktop,
  getDeviceType,
  getPreferredColorScheme,
  toggleDarkMode,
  clamp,
  lerp,
  map,
  randomBetween,
  waitForElement,
  copyToClipboard,
  getFileExtension,
  formatFileSize,
  loadImage
};

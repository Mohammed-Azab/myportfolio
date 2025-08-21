// Security Configuration for Portfolio Application
export const SECURITY_CONFIG = {
  // Content Security Policy
  CSP: {
    'default-src': ["'self'"],
    'script-src': ["'self'", "'unsafe-inline'", "'unsafe-eval'"],
    'style-src': ["'self'", "'unsafe-inline'"],
    'img-src': ["'self'", "data:", "https:"],
    'font-src': ["'self'", "data:"],
    'connect-src': ["'self'"],
    'frame-ancestors': ["'none'"],
    'object-src': ["'none'"],
    'base-uri': ["'self'"],
    'form-action': ["'self'"]
  },

  // Security Headers
  HEADERS: {
    'X-Content-Type-Options': 'nosniff',
    'X-Frame-Options': 'DENY',
    'X-XSS-Protection': '1; mode=block',
    'Referrer-Policy': 'strict-origin-when-cross-origin',
    'Permissions-Policy': 'geolocation=(), microphone=(), camera=(), payment=(), usb=(), magnetometer=(), gyroscope=(), accelerometer=()'
  },

  // Rate Limiting
  RATE_LIMIT: {
    MAX_REQUESTS: 100,
    WINDOW_MS: 15 * 60 * 1000, // 15 minutes
    SKIP_SUCCESSFUL_REQUESTS: true
  },

  // Input Validation
  VALIDATION: {
    MAX_EMAIL_LENGTH: 254,
    MAX_NAME_LENGTH: 100,
    MAX_MESSAGE_LENGTH: 1000,
    ALLOWED_EMAIL_DOMAINS: ['gmail.com', 'yahoo.com', 'outlook.com', 'hotmail.com', 'protonmail.com'],
    SANITIZE_HTML: true
  },

  // File Upload Security
  FILE_UPLOAD: {
    MAX_SIZE: 5 * 1024 * 1024, // 5MB
    ALLOWED_TYPES: ['image/jpeg', 'image/png', 'image/gif', 'image/webp', 'image/svg+xml'],
    ALLOWED_EXTENSIONS: ['.jpg', '.jpeg', '.png', '.gif', '.webp', '.svg'],
    SCAN_VIRUSES: false // Set to true if you have virus scanning capability
  },

  // Session Security
  SESSION: {
    SECURE_COOKIES: true,
    HTTP_ONLY_COOKIES: true,
    SAME_SITE: 'Strict',
    MAX_AGE: 24 * 60 * 60 * 1000 // 24 hours
  },

  // API Security
  API: {
    RATE_LIMIT_ENABLED: true,
    CORS_ORIGIN: ['https://mohammedazab.com', 'https://www.mohammedazab.com'],
    ALLOWED_METHODS: ['GET', 'POST'],
    MAX_PAYLOAD_SIZE: '1mb'
  }
};

// Security utility functions
export const SecurityUtils = {
  // Sanitize HTML input
  sanitizeHTML: (input) => {
    if (typeof input !== 'string') return '';
    
    // Remove potentially dangerous HTML tags and attributes
    return input
      .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
      .replace(/<iframe\b[^<]*(?:(?!<\/iframe>)<[^<]*)*<\/iframe>/gi, '')
      .replace(/<object\b[^<]*(?:(?!<\/object>)<[^<]*)*<\/object>/gi, '')
      .replace(/<embed\b[^<]*(?:(?!<\/embed>)<[^<]*)*<\/embed>/gi, '')
      .replace(/javascript:/gi, '')
      .replace(/on\w+\s*=/gi, '')
      .replace(/<[^>]*>/g, '');
  },

  // Validate email format and domain
  validateEmail: (email) => {
    if (!email || typeof email !== 'string') return false;
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) return false;
    
    const domain = email.split('@')[1];
    return SECURITY_CONFIG.VALIDATION.ALLOWED_EMAIL_DOMAINS.includes(domain);
  },

  // Validate input length
  validateLength: (input, maxLength) => {
    if (!input || typeof input !== 'string') return false;
    return input.length <= maxLength;
  },

  // Generate secure random string
  generateSecureToken: (length = 32) => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    const array = new Uint8Array(length);
    crypto.getRandomValues(array);
    
    for (let i = 0; i < length; i++) {
      result += chars.charAt(array[i] % chars.length);
    }
    return result;
  },

  // Check if running in production
  isProduction: () => {
    return process.env.NODE_ENV === 'production';
  },

  // Log security events
  logSecurityEvent: (event, details) => {
    if (SecurityUtils.isProduction()) {
      console.warn(`Security Event: ${event}`, details);
      // In production, you might want to send this to a security monitoring service
    }
  }
};

// Export default configuration
export default SECURITY_CONFIG;

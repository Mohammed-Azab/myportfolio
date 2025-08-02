// Custom React Hooks
// This file contains reusable custom hooks for the portfolio

import { useState, useEffect, useRef, useCallback } from 'react';

// Hook for handling scroll position and direction
export const useScroll = () => {
  const [scrollY, setScrollY] = useState(0);
  const [scrollDirection, setScrollDirection] = useState('up');
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    let lastScrollY = window.pageYOffset;
    let scrollTimeout;

    const updateScrollDirection = () => {
      const scrollY = window.pageYOffset;
      const direction = scrollY > lastScrollY ? 'down' : 'up';
      
      if (direction !== scrollDirection && (scrollY - lastScrollY > 10 || scrollY - lastScrollY < -10)) {
        setScrollDirection(direction);
      }
      
      setScrollY(scrollY);
      setIsScrolling(true);
      
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        setIsScrolling(false);
      }, 150);
      
      lastScrollY = scrollY > 0 ? scrollY : 0;
    };

    window.addEventListener('scroll', updateScrollDirection);
    return () => {
      window.removeEventListener('scroll', updateScrollDirection);
      clearTimeout(scrollTimeout);
    };
  }, [scrollDirection]);

  return { scrollY, scrollDirection, isScrolling };
};

// Hook for detecting when an element is in view
export const useInView = (options = {}) => {
  const [isInView, setIsInView] = useState(false);
  const [hasBeenInView, setHasBeenInView] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        const inView = entry.isIntersecting;
        setIsInView(inView);
        
        if (inView && !hasBeenInView) {
          setHasBeenInView(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px',
        ...options
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [hasBeenInView, options]);

  return [ref, isInView, hasBeenInView];
};

// Hook for handling window resize
export const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
    height: typeof window !== 'undefined' ? window.innerHeight : 0
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowSize;
};

// Hook for typewriter effect
export const useTypewriter = (text, speed = 50) => {
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    setDisplayText('');
    setIsComplete(false);
    setIsTyping(true);

    let index = 0;
    const timer = setInterval(() => {
      if (index < text.length) {
        setDisplayText(text.slice(0, index + 1));
        index++;
      } else {
        setIsTyping(false);
        setIsComplete(true);
        clearInterval(timer);
      }
    }, speed);

    return () => clearInterval(timer);
  }, [text, speed]);

  return { displayText, isTyping, isComplete };
};

// Hook for handling local storage
export const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(`Error reading localStorage key "${key}":`, error);
      return initialValue;
    }
  });

  const setValue = useCallback((value) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.error(`Error setting localStorage key "${key}":`, error);
    }
  }, [key, storedValue]);

  return [storedValue, setValue];
};

// Hook for debouncing values
export const useDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
};

// Hook for handling click outside
export const useClickOutside = (callback) => {
  const ref = useRef();

  useEffect(() => {
    const handleClick = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        callback();
      }
    };

    document.addEventListener('mousedown', handleClick);
    return () => {
      document.removeEventListener('mousedown', handleClick);
    };
  }, [callback]);

  return ref;
};

// Hook for handling keyboard shortcuts
export const useKeyboard = (keyMap) => {
  useEffect(() => {
    const handleKeyDown = (event) => {
      const key = event.key.toLowerCase();
      const combo = [
        event.ctrlKey && 'ctrl',
        event.shiftKey && 'shift',
        event.altKey && 'alt',
        event.metaKey && 'meta',
        key
      ].filter(Boolean).join('+');

      if (keyMap[key]) {
        event.preventDefault();
        keyMap[key]();
      } else if (keyMap[combo]) {
        event.preventDefault();
        keyMap[combo]();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [keyMap]);
};

// Hook for handling mouse position
export const useMousePosition = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePosition({
        x: event.clientX,
        y: event.clientY
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return mousePosition;
};

// Hook for handling dark mode
export const useDarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useLocalStorage('darkMode', false);

  useEffect(() => {
    const root = document.documentElement;
    if (isDarkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleDarkMode = useCallback(() => {
    setIsDarkMode(prev => !prev);
  }, [setIsDarkMode]);

  return [isDarkMode, toggleDarkMode];
};

// Hook for handling async operations
export const useAsync = (asyncFunction, immediate = true) => {
  const [status, setStatus] = useState('idle');
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const execute = useCallback(async (...args) => {
    setStatus('pending');
    setData(null);
    setError(null);

    try {
      const response = await asyncFunction(...args);
      setData(response);
      setStatus('success');
      return response;
    } catch (error) {
      setError(error);
      setStatus('error');
      throw error;
    }
  }, [asyncFunction]);

  useEffect(() => {
    if (immediate) {
      execute();
    }
  }, [execute, immediate]);

  return {
    execute,
    status,
    data,
    error,
    isLoading: status === 'pending',
    isError: status === 'error',
    isSuccess: status === 'success'
  };
};

// Hook for handling form validation
export const useForm = (initialValues, validationSchema) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = useCallback((name, value) => {
    setValues(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: null }));
    }
  }, [errors]);

  const handleBlur = useCallback((name) => {
    setTouched(prev => ({ ...prev, [name]: true }));
    
    // Validate field on blur
    if (validationSchema && validationSchema[name]) {
      const error = validationSchema[name](values[name]);
      setErrors(prev => ({ ...prev, [name]: error }));
    }
  }, [values, validationSchema]);

  const validate = useCallback(() => {
    if (!validationSchema) return true;
    
    const newErrors = {};
    let isValid = true;

    Object.keys(validationSchema).forEach(key => {
      const error = validationSchema[key](values[key]);
      if (error) {
        newErrors[key] = error;
        isValid = false;
      }
    });

    setErrors(newErrors);
    return isValid;
  }, [values, validationSchema]);

  const handleSubmit = useCallback(async (onSubmit) => {
    setIsSubmitting(true);
    
    const isValid = validate();
    if (isValid) {
      try {
        await onSubmit(values);
      } catch (error) {
        console.error('Form submission error:', error);
      }
    }
    
    setIsSubmitting(false);
  }, [values, validate]);

  const reset = useCallback(() => {
    setValues(initialValues);
    setErrors({});
    setTouched({});
    setIsSubmitting(false);
  }, [initialValues]);

  return {
    values,
    errors,
    touched,
    isSubmitting,
    handleChange,
    handleBlur,
    handleSubmit,
    reset,
    isValid: Object.keys(errors).length === 0
  };
};

export default {
  useScroll,
  useInView,
  useWindowSize,
  useTypewriter,
  useLocalStorage,
  useDebounce,
  useClickOutside,
  useKeyboard,
  useMousePosition,
  useDarkMode,
  useAsync,
  useForm
};

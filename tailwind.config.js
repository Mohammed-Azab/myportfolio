/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'electric-blue': '#00D4FF',
        'neon-green': '#39FF14',
        'dark-bg': '#0A0A0A',
        'dark-surface': '#1A1A1A',
        'dark-border': '#2A2A2A',
      },
      fontFamily: {
        'mono': ['JetBrains Mono', 'Monaco', 'Cascadia Code', 'Roboto Mono', 'monospace'],
        'futuristic': ['Orbitron', 'sans-serif'],
      },
      animation: {
        'typewriter': 'typewriter 3s steps(40) infinite',
        'blink': 'blink 1s infinite',
        'float': 'float 3s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'slide-up': 'slideUp 0.6s ease-out',
        'fade-in': 'fadeIn 0.8s ease-out',
      },
      keyframes: {
        typewriter: {
          '0%': { width: '0' },
          '50%': { width: '100%' },
          '100%': { width: '0' }
        },
        blink: {
          '0%, 50%': { 'border-color': 'transparent' },
          '51%, 100%': { 'border-color': '#00D4FF' }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' }
        },
        glow: {
          '0%': { 'box-shadow': '0 0 5px #00D4FF, 0 0 10px #00D4FF, 0 0 15px #00D4FF' },
          '100%': { 'box-shadow': '0 0 10px #00D4FF, 0 0 20px #00D4FF, 0 0 30px #00D4FF' }
        },
        slideUp: {
          '0%': { transform: 'translateY(100px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        }
      },
      backgroundImage: {
        'circuit-pattern': "url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%2300D4FF\" fill-opacity=\"0.1\"%3E%3Cpath d=\"M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')",
      }
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // Enable dark mode
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Keyframes for gradient animation and particle float
      keyframes: {
        'gradient-xy': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        'particle-float': {
          '0%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
          '100%': { transform: 'translateY(0px)' },
        },
      },
      // Animation rules
      animation: {
        'gradient-xy': 'gradient-xy 10s ease infinite',
        'particle-float': 'particle-float 15s linear infinite',
      },
      colors: {
        // Define custom colors for dark mode
        'dark-bg': '#121212', // Dark background
        'dark-primary': '#1e293b', // Darker shade for primary elements
        'dark-secondary': '#0f172a', // Darker shade for secondary elements
        'dark-text': '#e5e7eb', // Light text color for dark mode
      },
    },
  },
  plugins: [],
};

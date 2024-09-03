/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        // Add custom max-width breakpoints
        'extra-sm': { 'max': '378px' },  // below 378px
        'max-sm': { 'max': '639px' },  // below 640px
        'max-md': { 'max': '767px' },  // below 768px
        'max-lg': { 'max': '1160px' }, // below 1024px
        'max-xl': { 'max': '1279px' }, // below 1280px
        'max-2xl': { 'max': '1535px' },// below 1536px
      },
    },
  },
  plugins: [],
}


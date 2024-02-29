/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    screens: {
      'extra-large': '1200px',
      'large': '992px',
      'small': '576px',
    },
    extend: {
      fontFamily:{
        'primary': ['Raleway']
      },
      colors: {
        'blue': 'rgba(21,93,164,1)',
        'black': 'rgba(41,41,41,1)',
        'mode-white': 'rgba(245,245,245,1)'
      },
    },
  },
  plugins: [],
}


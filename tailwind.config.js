/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx}', 'index.html'],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '24px',
      },
    },
    extend: {
      fontFamily: {
        karla: ['Karla', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      screens: {
        ml: '425px',
      },
      backgroundImage: {
        dmsyn: 'url("../images/dmsyn.png")',
      },
      colors: {
        dmorange: '#fd5e39',
        dmdark1: '#0e0c0e',
        dmdark2: '#1c171c',
      },
    },
  },
  plugins: [],
};

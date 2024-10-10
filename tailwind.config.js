/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'], 
      },
      colors:{
        'dark-blue': '#002640',
        'gradient': 'linear-gradient(90deg, #002640 100%, #9CCBEA 100%)',
        'black-custom': '#212425',
      },
      fontSize:{
        'h1': '50px',
        'h2': '38px',
      },
    },
  },
  plugins: [],
}


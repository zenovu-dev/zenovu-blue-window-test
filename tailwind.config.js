/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    
    extend: {
      fontFamily: {
        'montserrat': 'Montserrat, sans-serif',
        'inter': 'Inter, sans-serif'
      },
      boxShadow: {
        'card-shadow': '0px 0px 20px 0px #0000001A'
      },
      screens: {
        'md': '744px',
        'xl': '1200px',
        '2xl': '1440px'
      },
    },
  },
  plugins: [],
}


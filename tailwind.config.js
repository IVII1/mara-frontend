/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'header': '#f8f8ff',
        'background': '#f8f8ff',
        'text': '#17191b',
        'footer': '#f0f0ff'

      },
      screens: {
      'sm': '640px',
      'md': '900px',
      'lg': '1024px',
      'xl': '1280px'
    }
    },
    fontFamily: {
      sans: ['Work Sans', 'sans-serif']
    },
    size:{
      '128': '32rem',
      '168': '42rem'
    },
    
   
  },
  plugins: [],
}

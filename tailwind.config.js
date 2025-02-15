/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'header': '#ffffff',
        'background': '#ffffff',
        'text': '#000000',
        'footer': '#ebebeb'

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

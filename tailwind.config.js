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
        'footer': '#1B1917'

      }
    },
    fontFamily: {
      sans: ['Work Sans', 'sans-serif']
    },
    size:{
      '128': '32rem'
    }
    
    
  },
  plugins: [],
}

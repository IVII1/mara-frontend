/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    
    extend: {
      colors: {
        'header': '#efc7b2',
        'background': '#EDE6DC',
        'text': '#2F2520',
        'footer': '#1B1917'

      }
    },
    fontFamily: {
      sans: ['Work Sans', 'sans-serif']
    }
  },
  plugins: [],
}

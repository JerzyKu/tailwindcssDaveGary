/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./build/*.html'],
  theme: {
    extend: {
      screens: {
        'widescreen': { 'rav': '(min-aspect-ratio: 3/2)'},
        'tallscreen': { 'rav': '(min-aspect-ratio: 13/20)'},
      }
    },
  },
  plugins: [],
}


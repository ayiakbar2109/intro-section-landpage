/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    screens: {
      'sm' : '300px',
      'lg' : '1000px',
      'xl' : '1280px'
    },
    colors: {
      'almost-white' : 'hsl(0, 0%, 98%)',
      'medium-gray': 'hsl(0, 0%, 41%)',
      'almost-black': 'hsl(0, 0%, 8%)'
    },
    extend: {},
  },
  plugins: [],
}
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        avenirHeavy: ['AvenirHeavy'],
        avenirLight: ['AvenirLight'],
        helvetica: ['Helvetica']
      },
      colors: {
        'first' : '#62bf5f',
        'second' : '#45bf41',
        'third' : '#4b8c48',
        'fourth' : '#29592d',
        'fifth' : '102613',
      }
    },
  },
  plugins: [],
}

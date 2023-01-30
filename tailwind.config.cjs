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
      },
      backgroundImage: {
        'arbeit': "url('https://images.unsplash.com/photo-1510133768164-a8f7e4d4e3dc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1742&q=80')",
        'kosten': "url('https://images.unsplash.com/photo-1516159754081-f01c990481dd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80')",
        'motivation': "url('https://images.unsplash.com/photo-1491609154219-ffd3ffafd992?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80')",
        'rechtliches': "url('https://images.unsplash.com/photo-1589216532372-1c2a367900d9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1742&q=80')",
        'verfahren': "url('https://images.unsplash.com/photo-1508175688576-0c076b47b5b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80')",
        'kontakt' : "url('https://images.unsplash.com/photo-1523966211575-eb4a01e7dd51?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=820&q=80')",
        "verein" : "url('https://images.unsplash.com/photo-1562577308-c8b2614b9b9a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80')",
        "technik": "url('https://images.unsplash.com/photo-1506519056028-d18449e82c6f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1325&q=80')",
        "galerie": "url('https://images.unsplash.com/photo-1565041054083-45a0d4b25229?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2942&q=80')"
      }
    },
  },
  plugins: [],
}

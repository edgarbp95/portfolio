/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    colors:{
      customIndigo:"#302b63",
      customIndigoLight:"#393468"
    },
    extend: {
      screens: {
        '2xl': {'max': '1535px'},
        // => @media (max-width: 1535px) { ... }
  
        'xl': {'max': '1279px'},
        // => @media (max-width: 1279px) { ... }
  
        'lg': {'max': '1023px'},
        // => @media (max-width: 1023px) { ... }
  
        'md': {'min': '901px','max': '1400px'},
        // => @media (max-width: 767px) { ... }
  
        'sm': {'max': '900px'},
        // => @media (max-width: 639px) { ... }
      },
      fontFamily: {
        Nunito:['Nunito','sans-serif'],
        Eduvic: ['Edu VIC WA NT Beginner','cursive']
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

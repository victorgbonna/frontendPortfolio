/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'tablet': {'max': '900px'},
      'phone':{'max':'540px'}
    },
    extend: {
      keyframes:{
        appear:{
          '0%':{opacity:'0'},
          '100%':{opacity:'1'}
        },
        drop:{
          '0%':{top:'-100px'},
          '100%':{top:'0px'}
        },
        twirl: {
          '0%':{transform: 'translateY(100%)'}
        }
      },animation: {
        drop: 'drop 1.2s ease-in',
        appear:'appear 1.2s ease-in',
        twirlf:'twirl 0.2s ease-in forwards',
        twirlb:'twirl 0.2s 0.2s ease-out forwards reverse'
        // twirl:'twirl 0.2s',
        // twirlb:'twirl 0.2s 0.2s ease-out forwards reverse'
      }
    },
  },
  variants: {
    extend: {
      backgroundColor: ['active'],
      animation: ['hover', 'focus'],
      transform: ['hover']
    },
  },
  plugins: [],
}
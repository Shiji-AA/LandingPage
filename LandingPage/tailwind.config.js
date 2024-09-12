/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-green': '#01F19B',
        'custom-blue': '#090913',
        'custom-red': '#FF5733',
        'custom-gray':'#DDDDDD5C',
       
             
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(226deg, #090913 59%, #7366cf 100%)',
        'custom-gradient1': 'linear-gradient(135deg, #090913 80%, #7366cf 100%)',
        'custom-gradient2': 'linear-gradient(180deg, #090913 98%, #7366cf 100%)',
       
      },
    },
  },
  plugins: [],
}


/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [ 'sans-serif'],
        serif: ['Merriweather', 'serif'], 
      },
      borderRadius: {
        'custom-top': '20px 150px 0 0', // Adjust the values as needed
      },
      
    },
  },
  plugins: [
    require('flowbite/plugin')
]

}


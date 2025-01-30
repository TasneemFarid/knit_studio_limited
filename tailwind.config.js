/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        'primary-seaGreen': '#035E9E',
        'primary-red': '#243c5a',
      },
    },
  },
  plugins: [
    require('flowbite/plugin') 
  ],
}
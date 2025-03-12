/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      colors: {
        primaryGreen: "#03081C",
        // 'primaryGreen': '#035E9E',
        primaryRed: "#EF2327",
        primaryBlue: "#03081C",
      },
      spacing: {
        maxContainer: "1280px",
      },
      backgroundImage: {
        contactBanner: "url('/assets/images/contact-one.jpg')",
        achievementsBg: "url('/assets/images/achievements.jpg')",
        contactFormBg: "url('/assets/images/contactFormBg.jpg')",
        homeBg: "url('/assets/images/homeBg.jpg')",
        homeContactBg: "url('/assets/images/homeContactBg.jpg')",
      },
      fontFamily: {
        poppins: ["Poppins", "serif"],
      },
      screens: {
        mobile: "320px",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};

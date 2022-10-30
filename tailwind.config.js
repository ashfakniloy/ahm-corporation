/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        NunitoSans: ["Nunito Sans", "sans-serif"],
      },
      container: {
        center: true,
        padding: "15px",
        screens: {
          lg: "1100px",
          xl: "1100px",
          "2xl": "1100px",
        },
      },
      colors: {
        "custom-gray": "#515151",
        "custom-blue": "#0071bb",
        "custom-blue2": "#0165a7",
      },
      boxShadow: {
        around: "0 0 15px 0 rgba(0, 0, 0, .1)",
        "around-sm": "0 0 5px 0 rgba(0, 0, 0, .1)",
      },
    },
  },
  plugins: [],
};

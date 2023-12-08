/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    colors: {
      bgColor: "#FFFFFF", // White background color
      primary: "#3366FF", // Primary color (blue)
      secondary: "#FF9933", // Secondary color (orange)
      blue: "#0000FF", // Blue color
      white: "#FFFFFF", // White color
      slate: "#e3e3e3", // Slate color
      lightGray: "#807f7f",
      yellowish:"#ddf198",
      green:"#64bc6e",
      ascent: {
        1: "#00FF00", // Ascent color 1 (green)
        2: "#FF00FF" // Ascent color 2 (magenta)
      },
    },
    
    screens: {
      sm: "640px",

      md: "768px",

      lg: "1024px",

      xl: "1280px",

      "2xl": "1536px",
    },
    extend: {},
  },
  plugins: [],
};
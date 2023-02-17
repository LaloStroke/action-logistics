/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px"
    },
    extend: {
      colors: {
        orange: "#e57c3a",
        yellow: "#fac055",
        lightOrange: "#f8df82",
        mint: "#f1ffcf",
        mintgum: "#9cd6c8"
      }
    }
  },
  plugins: []
};

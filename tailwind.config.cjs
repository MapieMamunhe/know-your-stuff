/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    screens: {
      sm: "400px",
      // => @media (min-width: 400px) { ... }

      md: "650px",
      // => @media (min-width: 650px) { ... }

      l: "1280px",
      // => @media (min-width: 1280px) { ... }
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        lime: {
          50: "#f9fbe7",
          100: "#f0f4c3",
          200: "#d9e6a4",
          300: "#aed581",
          400: "#8bc34a",
          500: "#cddc39",
          600: "#7cb342",
          700: "#689f38",
          800: "#558b2f",
          900: "#33691e",
        },
      },
    },
  },
  plugins: [require("daisyui")],
};

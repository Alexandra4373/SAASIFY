/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "480px",
        sm: "768px",
        md: "1024px",
      },

      container: {
        padding: "2rem",
        center: true,
      },
    },
  },
  plugins: [],
};

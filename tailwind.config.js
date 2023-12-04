/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      padding: "2rem",
      center: true,
    },
    extend: {
      screens: {
        xs: "480px",
        sm: "768px",
        md: "1024px",
      },
    },
  },
  plugins: [],
};

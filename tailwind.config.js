/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#F59E0B",
        secondary: "#1976D2 ",
        b: "#0284C7",
        y: "#FACC15",
        d: "#292524",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          md: "2.5rem",
        },
      }
    },
  },
  plugins: [],
}
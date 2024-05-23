/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        secondary: "#5356FF",
        background: "#FBFFF4",
      },
      backgroundImage: {
        bg: "url('/bg.jpeg')",
      },
      backgroundColor: {
        bgClr: "#FBFFF4",
        primary: "#DFF5FF",
        secondary: "#5356FF",
        neutral: "#D9D9D9",
        error: "#FC0000",
        primary2: "#202161",
      },
      colors: {
        bgClr: "#FBFFF4",
        primary: "#DFF5FF",
        secondary: "#5356FF",
        neutral: "#D9D9D9",
        error: "#FC0000",
        primary2: "#202161",
      },
    },
  },
  plugins: ["prettier-plugin-tailwindcss"],
};

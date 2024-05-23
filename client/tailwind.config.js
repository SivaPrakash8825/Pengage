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
    },
  },
  plugins: ["prettier-plugin-tailwindcss"],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        body: ["Inter"],
      },
      colors: {
        primary: "#35B8BE",
        secondary: "#F6FBFC",
        white: "#fff",
        dark: "#08090A",
        nav_link: "#28224B",
        para: "#7C86A1",
        icon: "#808DA6",
      },
    },
  },
  plugins: [],
};

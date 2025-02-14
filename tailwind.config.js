/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Urbanist", "sans-serif"],
        sour: ["Sour Gummy", "sans-serif"],
      },
      colors: {
        theme1: {
          light: "#EDEEF6",
          medium: "#9297C6",
          dark: "#242F8C",
        },
        theme2: {
          light: "#F8FCED",
          medium: "#D2EB90",
          dark: "#A5D621",
        },
        theme3: {
          light: "#FFF2ED",
          medium: "#FFAB91",
          dark: "#F8422F",
        },
        black: {
          light: "#EDEDED",
          medium: "#7A7A7A",
          dark: "#202020",
        },
        white: "#FFFFFF",
        overlay: "#000000",
        border: "#F3F3F3",
        background: "#F5F6FF",
      },
      borderRadius: {
        xl: "12px",
      },
    },
  },
  plugins: [],
};

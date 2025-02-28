/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      screens: {
        xs: "320px", // Extra small screens
        sm: "375px", // Small screens
        md: "768px", // Medium screens
        lg: "1024px", // Large screens
        xl: "1440px", // Extra large screens
        "2xl": "1536px", // 2x large screens
      },
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
      // Custom container widths
      container: {
        center: true, // Center the container by default
        padding: {
          DEFAULT: "2px", // Default padding for all screens
          sm: "2rem", // Padding for small screens
          lg: "4rem", // Padding for large screens
          xl: "4rem", // Padding for extra large screens
        },
        screens: {
          xs: "100%", // Full width on extra small screens
          sm: "640px", // Fixed width for small screens
          md: "768px", // Fixed width for medium screens
          lg: "1024px", // Fixed width for large screens
          xl: "1440px", // Fixed width for extra large screens
          "2xl": "1536px", // Fixed width for 2x large screens
        },
      },
    },
  },
  plugins: [],
};

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./app/views/**/*.{html,erb}",
    "./app/helpers/**/*.rb",
    "./app/assets/stylesheets/**/*.css",
    "./app/javascript/**/*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["ui-sans-serif", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        // Warm neutrals (your base)
        // Strawberries & crème swirls (backgrounds)
        sand: {
          50:  "#fff8fc",
          100: "#feeef6",
          200: "#fcd8ea",
          300: "#f9bad7",
          400: "#f38cc0",
          500: "#ea6ba7",
          600: "#cf4f8c",
          700: "#a83b6f",
          800: "#7e2a50",
          900: "#521632",
        },

        // Candy stripe accent
        rosewood: {
          50:  "#fff0f2",
          100: "#ffd8e0",
          200: "#ffadc0",
          300: "#ff7a96",
          400: "#ff4c6e",
          500: "#f5244c",
          600: "#d0113b",
          700: "#a40b30",
          800: "#760824",
          900: "#480417",
        },

        // Deep berry lettering / borders
        ink: {
          50:  "#fdeff7",
          100: "#ffd7f2",
          200: "#ffade5",
          300: "#ff80d4",
          400: "#f959bc",
          500: "#d8389c",
          600: "#b42781",
          700: "#8b1c63",
          800: "#5f1043",
          900: "#3b0828",
        },
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.25rem",
      },
      boxShadow: {
        soft: "0 10px 30px rgba(0,0,0,0.08)",
      },
    },
  },
  plugins: [
  require("@tailwindcss/typography"),
],
};

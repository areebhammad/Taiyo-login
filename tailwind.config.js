/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      boxShadow: {
        "navbar-shadow":
          "rgba(170, 255, 0, 0.04) 0px 24px 48px -4px, rgba(255, 255, 255, 0.04) 0px 12px 24px -4px, rgba(255, 255, 255, 0.04) 0px 8px 16px -4px, rgba(170, 255, 0, 0.04) 0px 4px 8px -2px, rgba(170, 255, 0, 0.64) 0px 0px 1px 0px, rgba(170, 255, 0, 0.04) 0px 48px 96px -4px;",
      },
      borderColor: {
        "green-border": "rgba(141, 213, 0, 0.34)",
      },
      textColor: {
        darkGreen: "rgb(141, 213, 0)",
        lightGreen: "#B1FC03",
      },
      backgroundColor: {
        darkGreen: "rgb(141, 213, 0)",
        lightGreen: "#B1FC03",
        darkLightGreen: "rgb(141, 213, 0)",
      },
    },
  },
  plugins: [],
};

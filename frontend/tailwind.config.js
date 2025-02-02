module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        fluoGreen: "#00C49A",
        ghost: "#F8F8FF",
        fluoRed: "#E63946",
        darkBlue: "#344B63",
        neutralGreen: "#00C49A",
      },
    },
  },
  plugins: [
    require("@tailwindcss/line-clamp"),
    require("tailwind-scrollbar-hide"),
    //require("prettier-plugin-tailwindcss"),
  ],
};

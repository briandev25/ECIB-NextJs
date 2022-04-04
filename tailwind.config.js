module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      nunito: ["Montserrat", "Nunito Sans", "Poppins", "Tangerine"],
    },
  },
  plugins: [
    require("tailwind-scrollbar-hide"),
    require("@tailwindcss/line-clamp"),
  ],
};

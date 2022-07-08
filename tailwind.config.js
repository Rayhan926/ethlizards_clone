/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#8dfccc",
        secondary: "#ffc54d",
        dark: "#040C12",
      },
      fontFamily: {
        "dm-sans": ["DM Sans", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        "space-mono": ["Space Mono", "monospace"],
        "bakbak-one": ["Bakbak One", "cursive"],
      },
    },
  },
  plugins: [],
};

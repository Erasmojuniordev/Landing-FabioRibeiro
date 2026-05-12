/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1e3a5f",    // azul escuro
        secondary: "#c9a84c",  // dourado
        light: "#f5f5f0",      // fundo off-white
      },
    },
  },
  plugins: [],
}
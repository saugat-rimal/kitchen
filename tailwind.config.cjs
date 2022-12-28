/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      background: {
        blackGradient: "linear-gradient(90deg, #494949 0%, #313131 100%)",
        blackGradientHover: "linear-gradient(90deg, #ff008c 0%, #493240 100%)",
        blackOverlay: "rgba(0, 0 ,0 ,0.7)",
      },  
      display: ["group-hover"],    
    },
    fontFamily: {
      'Lobster': ['Lobster Two', 'cursive', 'sans-serif'],
  },

  },
  plugins: [],
}
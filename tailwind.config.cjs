/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        "fade": "fade 1200ms ease"
      },
      keyframes: {
        fade: {
          "0%": {
            transform: "translateY(5rem)",
            opacity: "10%"
          }
        }
      }
    },
  },
  plugins: [],
}

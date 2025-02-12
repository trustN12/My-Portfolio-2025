/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0f0a1f",
        secondary: "#ff00ff", // Changed from green to magenta
        tertiary: "#1a1033",
        textPrimary: "#ffffff",
        textSecondary: "#b8b8d1",
      },
      backgroundImage: {
        'hero-pattern': 'radial-gradient(circle at 50% 50%, rgba(255, 0, 255, 0.15) 0%, rgba(15, 10, 31, 0) 50%)',
      },
    },
  },
  plugins: [],
}
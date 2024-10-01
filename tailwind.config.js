/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: '#AE8445',
        brown: '#6b4f4f', // Custom brown color
      },
    },
  },
  plugins: [],
}

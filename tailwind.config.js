/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        teal: {
          100: '#e6fffa',
          200: '#b2f5ea',
          700: '#0694a2',
        },
      },
    },
  },
  plugins: [],
}

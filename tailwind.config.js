/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [   "./pages/**/*.{js,ts,jsx,tsx}",
  "./components/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors: {
        'primary-color': '#0891b2',
        'secondary-color': '#d05252'
      },
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'top-left-bottom': '2px -2px 5px rgba(0, 0, 0, 0.3), -2px 2px 5px rgba(0, 0, 0, 0.3), 0 2px 5px rgba(0, 0, 0, 0.3)',
      },
    },
  },
  plugins: [],
}


/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [require("nativewind/preset")], // 👈 esta línea es esencial
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./features/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}



/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
      'applehomemade' : ['Silkscreen','cursive'],
      'HaloHandletter': ['HaloHandletter'],
      'SegoeUIBold' : ["Segoe UI Bold"],
      'SFPRODISPLAYREGULAR' : ["SFPRODISPLAYREGULAR"]
      }
    },
  },
  plugins: [
  [require("tailwindcss-brand-colors")],
  ],
}
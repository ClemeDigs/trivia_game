/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,html}",
  ],
  theme: {
    colors: {
      'black': '#191A18',
      'grey': '#5E615D',
      'gree n': '#B7D08E',
      'blue': '#98DAEA',
      'salmon': '#F2BD95',
      'purple': '#D2CEFF',
      'offWhite': '#FDFCFA',
      'transWhite': '#FDFCFA[.5]'
    },
    fontFamily: {
      'sans': ['Roboto', 'sans-serif']
    },
    extend: {},
  },
  plugins: [],
}
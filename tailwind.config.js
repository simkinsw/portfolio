/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')

module.exports = {
  content: ["./src/**/*.{html,js,ts,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      'sans': 'Unica One',
      'serif': 'Inconsolata'
    }
  },
  plugins: [
    plugin(function({ addVariant }) {
      addVariant('not-last', '&:not(:last-child)')
    })
  ],
}

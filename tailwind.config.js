/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
import animated from 'tailwindcss-animated'
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'ui-monospace'],
      },
    },
  },
  plugins: [animated],
}

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      invert: {
        25: '.25',
        50: '.5',
        75: '.75',
      }
  },
  },
  plugins: [],
}


/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,jsx,ts,tsx,svelte}'],
  theme: {
    extend: {
      flex: {
        '2': '2 2 0%',
        '3': '3 3 0%',
        '4': '4 4 0%',
        '5': '5 5 0%',
        '6': '6 6 0%',
        '7': '7 7 0%',
        '8': '8 8 0%',
        '9': '9 9 0%',
      },
      boxShadow: {
        'blurred': '0 0 50px -20px rgba(0, 0, 0, 0.1)',
      }
    },
  },
  plugins: [],
  darkMode: 'class'
}


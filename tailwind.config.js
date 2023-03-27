/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        darkblue: '#1D3557', // dark blue
        lightblue: '#457B9D', // light blue
        lightteal: '#A8DADC', // light sky blue
        primary: '#F1FAEE', // White/cream
        darkred: '#E63946' // red
      }
    }
  },
  plugins: []
}

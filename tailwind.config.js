/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        champagne: '#C6A56B',
        ivory: '#F8F4ED',
        espresso: '#211711',
        obsidian: '#101010',
        sand: '#E6D8C5',
        antique: '#A8874F'
      },
      fontFamily: {
        editorial: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"DM Sans"', 'Arial', 'sans-serif']
      }
    }
  },
  plugins: []
}
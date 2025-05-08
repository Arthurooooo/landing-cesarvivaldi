/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'brown-dark': '#5D4037',
        'brown-light': '#D7CCC8',
        'cream': '#F5F5DC',
        'success': '#4CAF50',
        'warning': '#FF9800',
        'error': '#F44336'
      },
      fontFamily: {
        'sans': ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        'script': ['Pinyon Script', 'cursive']
      },
      backgroundImage: {
        'leather-texture': "url('https://images.pexels.com/photos/3648850/pexels-photo-3648850.jpeg')"
      }
    },
  },
  plugins: [],
};
/* eslint-disable global-require */
module.exports = {
  /* very important otherwise PurgeCSS won't work */

  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  content: [
    './src/**/*.html', './src/**/*.js', './src/**/*.jsx'],
    // classes
    safelist: [
      'bg-red-200', 
      'bg-green-200',
    ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        bg: '#F9F4EF',
        'dark-bg': 'hsl(0, 0%, 11%)',
        text: '#2F2F2F',
        'dark-text': '#E1E1E1',
        'heading-text': '#AD4E3C',
        'dark-heading-text': '#5BD18D',
        'british-racing-green': '#214E34',
        mint: '#dafdd8',
        parchment: '#f9e8b1',
        darkNavy: '#222232',
        darkPurple: '#1A0481',
      },
      fontFamily: {
        lora: ['Lora', 'serif'],
        worksans: ['Work Sans', 'sans-serif'],
      },
    },
  },
  variants: {
    extend: {
      display: ['dark'],
    },
  },
  plugins: [require('@tailwindcss/forms')],
};

/* eslint-disable global-require */
module.exports = {
  /* very important otherwise PurgeCSS won't work */

  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  content: ['./src/**/*.html', './src/**/*.js', './src/**/*.jsx'],
  // classes
  safelist: ['bg-red-200', 'bg-green-200'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        // bg: '#F9F4EF',
        bg: '#fff',
        'dark-bg': 'hsl(0, 0%, 11%)',
        // text: '#2F2F2F',
        text: '#010203',
        'dark-text': '#E1E1E1',
        'heading-text': '#1A0481',
        // 'dark-heading-text': '#5BD18D',
        'dark-heading-text': '#93BCDC',
        'british-racing-green': '#214E34',
        mint: '#dafdd8',
        parchment: '#f9e8b1',
        darkNavy: '#222232',
        darkPurple: '#1A0481',
        accent: '#2f6690',
      },
      fontFamily: {
        // lora: ['Lora', 'serif'],
        // worksans: ['Work Sans', 'sans-serif'],
        defaultSans: ['Default Sans', 'sans-serif'],
        sourceSerifPro: ['Source Serif Pro', 'serif'],
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

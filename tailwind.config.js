module.exports = {
  purge: [],
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

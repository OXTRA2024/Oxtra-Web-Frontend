/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'gordita-regular': ['Gordita Regular'],
        'gordita-thin': ['Gordita Thin'],
        'gordita-light': ['Gordita Light'],
        'gordita-medium': ['Gordita Medium'],
        'gordita-bold': ['Gordita Bold'],
        'gordita-black': ['Gordita Black'],
        'gordita-ultra': ['Gordita Ultra'],
      },
      fontSize: {
        xs: ['12px', { lineHeight: '18px' }],
        sm: ['14px', { lineHeight: '14px' }],
        base: ['16px', { lineHeight: '16px' }],
        lg: ['20px', { lineHeight: '20px' }],
        xl: ['24px', { lineHeight: '33px' }],
        // Headings H6 - H1
        '2xl': ['32px', { lineHeight: '32px' }],
        '3xl': ['40px', { lineHeight: '48px' }],
        '4xl': ['56px', { lineHeight: '76.11px' }],
      },

      colors: {
        brandGreen: {
          100: '#8ce99a',
          300: '#42864F',
        },
        brandGray: {
          100: '#646668',
          200: '#F4F6F8',
          300: '#444648',
          400: '#444444',
          500: '#242628',
        },
      },
    },
  },
};

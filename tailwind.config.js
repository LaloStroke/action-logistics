/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        primary: '#9cc4e4',
        secondary: '#3a89c9',
        terciary: '#e9f2f9',
        error: '#f26c4f',
        text: '#1b325f',
      },
    },
  },
  plugins: [],
};

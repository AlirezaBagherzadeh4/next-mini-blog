/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{ts,tsx,js,jsx}', './components/**/*.{ts,tsx,js,jsx}'],
  theme: {
    screens: {
      sm: '320px',
      m: '641px',
      md: '768px',
      t: '960px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        black: '#000000',
        white: '#FFFFFF',
      },
      maxWidth: {
        layer: '1024px',
      },
    },
  },
  plugins: [],
};

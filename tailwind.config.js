/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true,
      padding: '15px',
    },
    fontFamily: {
      normal: ['pretendard-regular'],
      extralight: ['pretendard-extralight'],
      light: ['pretendard-light'],
      medium: ['pretendard-medium'],
      semibold: ['pretendard-semibold'],
      thin: ['pretendard-thin'],
      extrabold: ['pretendard-extrabold'],
      bold: ['pretendard-bold'],
      black: ['pretendard-black'],
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '960px',
      xl: '1200px',
    },

    extend: {},
  },
  plugins: [],
};


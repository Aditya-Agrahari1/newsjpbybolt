/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        blue: {
          600: '#2563EB',
          700: '#1D4ED8',
        },
        gray: {
          900: '#1F2937',
        },
      },
    },
  },
  plugins: [],
};

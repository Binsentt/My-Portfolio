/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          950: '#0f1117',
          900: '#141821',
          850: '#191e29',
          800: '#202634',
          700: '#303849'
        },
        accent: {
          100: '#d8eaff',
          300: '#96c8ff',
          400: '#65aefa',
          500: '#3f8fe5'
        }
      },
      boxShadow: {
        soft: '0 18px 60px rgba(0, 0, 0, 0.24)',
        card: '0 14px 40px rgba(0, 0, 0, 0.20)'
      }
    }
  },
  plugins: []
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ["./**/*.{html,js}","./index.html"],
  theme: {
    extend: {
      colors: {
        primary: '#f8740b',
        primaryDark: '#bf4b00',
        primaryLight: '#fcf7f0',
      },
      fontFamily: {
        sans: ['Poppins', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
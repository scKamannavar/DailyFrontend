/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily : {
        Garamond : ['EB Garamond', 'serif'],
        Montser: ["Montserrat", "sans-serif"],
        Outfit : ["Outfit", "sans-serif"],
        Poppins : ["Poppins", "sans-serif"],
        Cabin : ["Cabin", "sans-serif"],
        DidactGothic : ["Didact Gothic", "sans-serif"],
        futura: ['Futura', 'sans-serif'],
      },
    },
  },
  plugins: [],
}


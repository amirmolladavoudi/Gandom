/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.{html,js}"],
  theme: {
    extend: {      
      container: {
        center: true,
      },  
      strokeWidth: {
        '20': '20px',
      }   
    },
  },
  plugins: [],
}

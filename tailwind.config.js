module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        float: 'float 4s ease-in infinite',
        spoonDrop: 'spoonDrop 1.5s ease-out forwards',
      },
      keyframes: {
        float: {
          '0%': { transform: 'translateY(0)', opacity: '0' },
          '10%': { opacity: '1' },
          '90%': { opacity: '1' },
          '100%': { transform: 'translateY(-100px)', opacity: '0' },
        },
        spoonDrop: {
          '0%': { transform: 'translateY(-100px) rotate(-30deg)', opacity: '0' },
          '80%': { transform: 'translateY(10px) rotate(10deg)', opacity: '1' },
          '100%': { transform: 'translateY(0) rotate(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
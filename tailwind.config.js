module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        back: '#020303'
      },
      backgroundImage: {
        'pic1': "url('./assets/slidingCards/pic1.png')",
        'pic2': "url('./assets/slidingCards/pic2.png')",
        'pic3': "url('./assets/slidingCards/pic3.png')",
      }
    },
  },
  plugins: [],
}

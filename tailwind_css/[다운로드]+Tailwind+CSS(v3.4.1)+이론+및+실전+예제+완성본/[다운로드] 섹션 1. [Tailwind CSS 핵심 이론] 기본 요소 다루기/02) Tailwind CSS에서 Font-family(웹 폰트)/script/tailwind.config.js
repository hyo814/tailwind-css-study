// tailwind.config.js
module.exports = {
  content: ['./*.{html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Noto Sans KR', 'Arial', 'sans-serif'],
        'single': ['Single Day', 'cursive'],
        'blackhan': ['Black Han Sans', 'sans-serif'],
        'montserrat': ['Montserrat', 'sans-serif'],
        'yclover': ['YClover-Bold'],
      },
    },
  },
  plugins: [],
}
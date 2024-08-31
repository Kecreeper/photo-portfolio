/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/*.jsx",
  ],
  theme: {
    extend: {
      fontFamily: {
        play: ['Play']
      },
      colors: {
        'cyberRed': '#ff625d',
        'cyberCoolRed': '#7d2628',
        'cyberDim': '#451619',
        'cyberGray': '#0e0c14',
        'cyberShadow': '#3c1418',
        'cyberBlue': '#19fffe',
        'cyberGreen': '#20ffb3',
        'cyberYellow': '#f0b549',
        'cyberBorder': '#480b0e',
      },
      boxShadow: {
        'cyberGlowXS': '0px 0px 25px 15px #481013',
        'cyberGlow': '0px 0px 50px 15px #481013',
        'cyberGlowLG': '0px 0px 200px 100px #481013',
      }
    },
  },
  plugins: [],
}


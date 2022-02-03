module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html', "./node_modules/flowbite/**/*.js"],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        mainBg: '#000000', //darkBlue
        primary: '#19D5F9', //blue
        secondary: '#0F0E22', //navyBlue
        textColor: '#D0D0D', //paragraph
        mainBlack: "#0F0F0F", //black
        primaryBorderT: "#2723EB",
        primaryBorder: "#17D3F7",
        circleColor:"#E5E5E5",
        inputColor:"#F1F1F1",
        buttonColor:"#476EF8"
      },
      fontFamily: {
        'sarabun': ['"Sarabun"']
      },
      backgroundImage: ()=> ({
        "blogBg": "url('./assets/images/blogBg.png')",
      }),
      fontSize: {
        '50px': '50px',
        '45px': '25px',
        '32px': '32px',
        '16px': '16px',
        '18px': '18px'
      },
      width: {
        5: "5%",
        10: "10%",
        15: "15%",
        20: "20%",
        30: "30%",
        35: "35%",
        40: "40%",
        45: "45%",
        50: "50%",
        55: "55%",
        60: "60%",
        65: "65%",
        70: "70%",
        75: "75%",
        80: "80%",
        85: "85%",
        90: "90%",
        95: "95%",
        100: "100%",
      },
      height: {
        5: "5%",
        10: "10%",
        15: "15%",
        20: "20%",
        30: "30%",
        35: "35%",
        40: "40%",
        45: "45%",
        50: "50%",
        55: "55%",
        60: "60%",
        65: "65%",
        70: "70%",
        75: "75%",
        80: "80%",
        85: "85%",
        90: "90%",
        95: "95%",
        100: "100%",
        437: "437px"
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
]
 
}

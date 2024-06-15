/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {

    fontFamily:{
      poppins: ["Poppins" , "sans-serif"],
      myfont:["daytimes" , "Timur type"],
      ubernist:["ubernist" , "sans-serif"],
      anti:["antipasto" , "antipasto"],
      antibold:["antibold" , "antipasto"],
    },


    extend: {

      colors:{
        socialbutton:'rgb(81, 111, 144)',
        mycol:'#04121f',
        bluee:'#1C2226',
        colour:'#0080FF',
        clay:'#f7f6e6',
        blue: '#04032b',
        lightBlue: "#2b84ea",
        lightBlue300: "#4b94ed",
        lightBlue500: "#0b72e7",
        greenLight: "#61cea6",
        grayText: "#818597",
        lightGray: "#e2e2e2",
        grayBlue: "#344a6c",
        deepBlueHead: "#162f56",
        gray2: "#525a76",
        whitee:'#ffffff'
      },

      backgroundImage: {
        'hero-pattern': "url('p.svg')",
        
      }

    },
  },
  plugins: [],
}


/** @type {import('tailwindcss').Config} */
export default {
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "gray-20": "#F4EBF7", 
        "gray-50": "#EEE6F0",
        "gray-100": "#DACADE",
        "gray-500": "#3A005E",
        "primary-100": "#A796BB",
        "primary-300": "#997DBB",
        "primary-500": "#8355BB",
        "secondary-400": "#232323",
        "secondary-500": "#0D0D0D",
      },
      backgroundImage: (theme) => ({
        "gradient-purple-gray": "linear-gradient(135deg, #8355BB, 20%, #F4EBF7, 100%)",
        "mobile-home": "url('./assets/homepagegraphic.png')",
      }),
      fontFamily: {
        Lato: [ "Lato", "sans-serif"],
        montserrat: [ "Montserrat", "sans-serif" ]
      },
      content: {
        evolevtext: "url('./assets/Evolevtext.png')",
        evolevtext: "url('./assets/Evolevtext.png')",
        evolevtext: "url('./assets/Evolevtext.png')",
        evolevtext: "url('./assets/Evolevtext.png')",
    },
  },
  screens:{
    xs: "480px",
    sm: "768px",
    md: "1060px"
  }
},
  plugins: [],
}


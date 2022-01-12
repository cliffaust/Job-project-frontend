module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        muli: ["Mulish", "sans-serif"],
        lobster: ["Lobster", "sans-serif"],
        openSans: ["Open Sans", "sans-serif"],
        standardTT: ["Old Standard TT", "sans-serif"],
      },

      height: {
        325: "325px",
        500: "500px",
        600: "600px",
        800: "800px",
        "10p": "10%",
        40: "40%",
        60: "60%",
        30: "30%",
        70: "70%",
        80: "80%",
        "90p": "90%",
      },

      minHeight: {
        325: "325px",
        500: "500px",
        600: "600px",
        800: "800px",
      },

      maxHeight: {
        600: "600px",
      },

      zIndex: {
        "-1": "-1",
        "-2": "-2",
      },

      width: {
        325: "325px",
        500: "500px",
        600: "600px",
        800: "800px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

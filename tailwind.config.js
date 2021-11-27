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
      },

      height: {
        325: "325px",
        500: "500px",
        700: "700px",
      },

      width: {
        325: "325px",
        500: "500px",
        700: "700px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

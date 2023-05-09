/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {},
    container: {
      center: true,
      // padding: "16px",
    },

    fontSize: {
      "2xl": "1.563rem",
      "3xl": "1.953rem",
      "4xl": "2.441rem",
      "5xl": "3.052rem",
    },
    // screens: {
    //   "2xl": "1320px",
    // },
  },
  plugins: [],
};

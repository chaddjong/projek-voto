/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      spacing: {
        13: "3.25rem",
        99: "26rem",
        100: "30rem",
        105: "34rem",
        110: "35rem",
        115: "36rem",
        120: "42rem",
        130: "45rem",
      },
      fontFamily: {
        josefinsans: ["Josefin Sans"],
        dmsans: ["DM Sans"],
      },
      colors: {
        first: "#39374D",
        second: "#575A89",
      },
      backgroundImage: (theme) => ({
        "login-img": "url('../src/images/bg-login.svg')",
      }),
    },
  },
  plugins: [],
};

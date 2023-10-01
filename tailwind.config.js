/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        black: "var(--black)",
        green: "var(--green)",
        paleYellow: "var(--paleYellow)",
        lightyellow: "var(--lightyellow)",
        pink: "var(--pink)",
        white: "var(--white)",
        lightgreen: "var(--lightgreen)",
      },
    },
  },
  plugins: [],
};

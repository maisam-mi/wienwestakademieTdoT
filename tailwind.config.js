const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./index.html", "./src/**/*.{index.html,vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      emerald: colors.emerald,
      black: "#333333",
      white: "#eeeeee",
      gray: "#767676",
    },
  },
  plugins: [require("tailwind-scrollbar")({ nocompatible: true })],
  variants: {
    scrollbar: ["rounded"],
  },
};

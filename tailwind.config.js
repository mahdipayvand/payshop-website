const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
const tailwindConfig = {
  content: ["./pages/**/*.jsx", "./components/**/*.jsx", "./layouts/**/*.jsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["vazirmatn", ...defaultTheme.fontFamily["sans"]],
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp"), require("@tailwindcss/typography")],
};

module.exports = tailwindConfig;

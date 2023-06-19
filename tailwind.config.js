/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        semantic: {
          red: "#FF002A",
          orange: "#FF8000",
          yellow: "#FFC700",
          green: "#00BF80",
          gray: "#BDBDBD",
        },
        green: {
          50: "#EBF5F4",
          100: "#C2DAD7",
          200: "#91BAB5",
          300: "#59958E",
          400: "#297269",
          500: "#03594F",
          600: "#034A41",
          700: "#024139",
          800: "#02312C",
          900: "#012923",
          A100: "#C5F7EE",
          A200: "#98F0E0",
          A400: "#6CEAD3",
          A700: "#3FE4C5",
        },
        gray: {
          50: "#FAFAFA",
          100: "#F5F5F5",
          200: "#EEEEEE",
          300: "#E0E0E0",
          400: "#BDBDBD",
          500: "#9E9E9E",
          600: "#757575",
          700: "#616161",
          800: "#424242",
          900: "#212121",
        },
        yellow: {
          A100: "#FFFDCC",
          A200: "#FFFC99",
          A400: "#FFFA66",
          A700: "#FFF500",
        },
      },
    },
  },
  plugins: [],
};

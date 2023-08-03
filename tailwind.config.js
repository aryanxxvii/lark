const { colors } = require("tailwindcss/colors");
const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: {
        "2xl": "1360px",
      },
    },
    extend: {
      animation: {
        text: "text 5s ease infinite",
      },
      keyframes: {
        text: {
          "0%, 100%": {
            "background-size": "200% 200%",
            "background-position": "left center",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "right center",
          },
        },
      },

      backgroundImage: {
        "stacked-waves": "url('/stacked-waves-haikei.svg')",
        "light-layered-waves": "url('/layered-waves-haikei.svg')",
        "dark-layered-waves": "url('/dark-layered-waves-haikei.svg')",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
      fontFamily: {
        sans: ["var(--font-inter)", ...fontFamily.sans],
        "roboto-mono": ["Roboto Mono"],
      },
      backgroundPosition: {
        "pos-0": "0% 0%",
        "pos-100": "100% 100%",
      },
      colors: {
        ...colors,
        "light-gold": "#f5bc51",
        "dark-gold": "#533519",
        perfume: {
          DEFAULT: "#F7AEF8",
          50: "#FDE6FD",
          100: "#FBD4FB",
          200: "#F7AEF8",
          300: "#F27AF4",
          400: "#ED47EF",
          500: "#E714EA",
          600: "#B410B6",
          700: "#810B82",
          800: "#4E074F",
          900: "#1B021B",
          950: "#010001",
        },
        minsk: {
          DEFAULT: "#363D7D",
          50: "#D1D4EB",
          100: "#C3C6E5",
          200: "#A6ABD9",
          300: "#8A90CC",
          400: "#6D75C0",
          500: "#515BB4",
          600: "#424B99",
          700: "#363D7D",
          800: "#252A56",
          900: "#14172F",
          950: "#0C0D1B",
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
};

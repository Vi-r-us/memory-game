/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      // that is animation class
      animation: {
        fade: "fadeOut 750ms ease-in-out",
      },
      transitionProperty: {
        height: "height",
        triangle: "fill, height",
      },
      screens: {
        xs: "475px",
        "2xl": "1440px",
      },
      colors: {
        primary: {
          300: "hsl(37, 100%, 65%)",
          400: "hsl(37, 98%, 54%)",
        },
        neutral: {
          200: "hsl(203, 25%, 90%)",
          300: "hsl(203, 28%, 79%)",
          400: "hsl(205, 37%, 55%)",
          500: "hsl(203, 22%, 55%)",
          700: "hsl(205, 30%, 27%)",
          800: "hsl(206, 45%, 15%)",
        },
        gray: {
          300: "hsl(0, 0%, 95%)",
        },
        white: "hsl(0, 0%, 99%)",
      },
      duration: {
        0: "0ms",
      },
      width: {
        content: "327px",
        "content-xs": "420px",
        "content-sm": "524px",
        "content-md": "689px",
        "content-lg": "800px",
        "content-2xl": "1110px",

        grid: "327px",
        "grid-sm": "524px",
        "grid-md": "689px",

        dialog: "327px",
        "dialog-sm": "524px",
        "dialog-md": "654px",
      },
      minWidth: {
        dialog: "327px",
      },
      // that is actual animation
      keyframes: () => ({
        fadeOut: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      }),
    },
  },
  plugins: [],
};

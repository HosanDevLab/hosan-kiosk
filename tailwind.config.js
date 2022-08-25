/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        floatup: {
          "0%": {
            transform: "translateY(10%)",
            opacity: 0,
          },
          "100%": {
            transform: "translateY(0)",
            opacity: 1,
          },
        },
        fadein: {
          "0%": {
            opacity: 0,
          },
          "100%": {
            opacity: 1,
          },
        },
      },
      animation: {
        floatup: "floatup 1s ease-in-out",
        fadein: "fadein 1s ease-in-out",
      },
    },
  },
  plugins: [],
};

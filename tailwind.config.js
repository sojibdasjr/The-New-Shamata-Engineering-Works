/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        textColorSky500: "rgb(14 165 233)",
        barandBgSky400: "rgb(56 189 248)",
      },
    },
  },
  plugins: [require("daisyui")],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#e8ebff",
          100: "#b5c1ff",
          400: "#2851ff",
          500: "#242f9c",
          900: "#0e103e",
        },
      },
      transitionDuration: {
        900: "900ms",
      },
    },
  },
  plugins: [],
};

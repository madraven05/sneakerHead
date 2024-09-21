/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        neon: "0 0 10px #FFFFFF, 0 0 20px #FFFFFF, 0 0 30px #FFFFFF",
      },
      fontFamily: {
        archivoBlack: ["Archivo Black", "sans-serif"],
      },
    },
  },

  plugins: [],
};

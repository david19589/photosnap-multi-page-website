/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    screens: {
      tablet: "768px",
      neededSize: "800px",
      desktop: "1440px",
    },
  },
  plugins: [],
};

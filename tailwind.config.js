/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        "sm-plus": "500px",
        "md-plus": "800px",
        "lg-plus": "1024px",
        "xl-plus": "1280px",
        "2xl-plus": "1536px",
      },
    },
  },
  plugins: [],
};

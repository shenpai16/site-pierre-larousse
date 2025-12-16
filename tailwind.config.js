// tailwind.config.js
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        majorelle: {
          blue: "#6050DC",
          yellow: "#FFD700",
        },
      },
    },
  },
  plugins: [],
};
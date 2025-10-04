// tailwind.config.js
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        periwinkle: "#024555",
        lavander: "#c0c9fa",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

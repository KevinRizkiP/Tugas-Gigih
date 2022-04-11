module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [
    require("tailwind-scrollbar-hide"),
    "@tailwindcss/forms",
    require("@tailwindcss/forms"),
  ],
};

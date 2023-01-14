/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        light: "rgb(var(--color-light) / <alpha-value>)",
        secondary: "rgb(var(--color-secondary) / <alpha-value>)",
        dark: "rgb(var(--color-dark) / <alpha-value>)",
        accent: "rgb(var(--color-accent))",
        cta: "rgb(var(--color-cta) / <alpha-value>)",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};

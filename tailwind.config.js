/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "selector",
  theme: {
    extend: {
      colors: {
        border: "#e4e7e7",
        background: {
          DEFAULT: "#f6f7f7",
          dark: "#0f172a",
        },
        foreground: {
          DEFAULT: "#1c1c1c",
          dark: "#ffffff",
        },
        muted: {
          DEFAULT: "#ebecec",
          dark: "#1e293b",
          foreground: "#c1c2c2",
        },
      },
    },
  },
  plugins: [],
};

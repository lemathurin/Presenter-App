/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        lightMode: {
          darker: "#F1F5F9",
          lighter: "#F8FAFC",
          border: "#E5E7EB",
          text: "#0F172A",
        },
        darkMode: {
          darker: "#18181A",
          lighter: "#27272A",
          border: "#404040",
          text: "#EDEEF0",
        },
      },
    },
  },
  plugins: [],
};

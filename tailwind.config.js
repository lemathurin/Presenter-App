/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        lightMode: {
          darker: "#F1F5F9", // bg-slate-100
          lighter: "#F8FAFC", // bg-slate-50
          border: "#E5E7EB", // border-gray-200
          text: "#0F172A",
        },
        darkMode: {
          darker: "#18181A", // bg-zinc-900
          lighter: "#27272A", // bg-zinc-800
          border: "#404040", // border-neutral-700
          text: "#EDEEF0",
        },
      },
    },
  },
  plugins: [],
};

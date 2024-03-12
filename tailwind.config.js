import { nextui } from "@nextui-org/theme";

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      mono: ["Axiforma", "monospace"],
    },
    extend: {},
  },
  darkMode: "class", // or 'media' or 'class'
  plugins: [nextui()],
};

export default config;

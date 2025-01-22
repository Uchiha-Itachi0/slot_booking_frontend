import type { Config } from "tailwindcss";

export default {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#804dee",
        secondary: "#4b42a7",
        tertiary: "#9b4dee",
        quaternary: "#4d9aee",
        five: "#cbb8f5",

        ctnPrimaryLight: "#2e384d",
        ctnSecondaryLight: "#4b42a7",

        // bgPrimaryDark: "#181826",
        // bgSecondaryDark: "#212134",
        ctnPrimaryDark: "#e5e6e9",
        ctnSecondaryDark: "#7e8c9f"
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35"
      },
    },
  },
  plugins: [],
} satisfies Config;

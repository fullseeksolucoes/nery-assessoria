import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#4718AD",
        secondary: "#2B1B4D",
        background: "#ffffff",
        foreground: "#0f0f0f",
        muted: "#f5f5f7",
      },
      fontFamily: {
        heading: ["var(--font-manrope)"],
        body: ["var(--font-inter)"],
      },
    },
  },
  plugins: [],
};

export default config;

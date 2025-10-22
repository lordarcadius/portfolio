// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class", // This is crucial for next-themes
  theme: {
    extend: {
      fontFamily: {
        // Registers your font variables from layout.tsx as
        // the default sans and mono fonts for Tailwind.
        sans: ["var(--font-geist-sans)"],
        mono: ["var(--font-geist-mono)"],
      },
      // You can add custom blur/animation values here later
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};
export default config;
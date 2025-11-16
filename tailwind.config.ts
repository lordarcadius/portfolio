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
      keyframes: {
        float: {
          "0%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
          "100%": { transform: "translateY(0)" },
        },
      },
      animation: {
        float: "float 3s ease-in-out infinite",
        "spin-slow": "spin 8s linear infinite",
      },
      colors: {
        // reference CSS variable so color can be toggled by theme classes
        primary: "var(--color-primary)",
      },
    },
  },
  plugins: [],
};
export default config;

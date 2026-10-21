import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", ...defaultTheme.fontFamily.sans],
        heading: ["var(--font-lexend)", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        // Paleta z infopacka: krem, piasek, grafit + akcent krakowskiej cegły
        background: "#FAF7F3",
        sand: {
          DEFAULT: "#E3DDD6",
          light: "#EEEAE5",
          dark: "#CFC7BE",
        },
        ink: {
          DEFAULT: "#1F1D1B",
          soft: "#4A4541",
          muted: "#7A736C",
        },
        primary: {
          DEFAULT: "#B4532A",
          dark: "#93401E",
          light: "#F3E2D8",
          foreground: "#FFFFFF",
        },
        foreground: "#1F1D1B",
      },
      letterSpacing: {
        eyebrow: "0.25em",
      },
    },
  },
  plugins: [],
};

export default config;

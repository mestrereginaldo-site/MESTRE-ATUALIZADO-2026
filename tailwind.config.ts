import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        mocha: {
          800: '#4a372f', // Cor Pantone 2026
          900: '#2d1f1a',
        },
        gold: {
          light: '#F9E4B7',
          DEFAULT: '#D4AF37',
          dark: '#B8860B',
        },
      },
      fontFamily: {
        serif: ['var(--font-playfair)', 'serif'],
        sans: ['var(--font-inter)', 'sans-serif'],
      },
    },
  },
  plugins:,
};
export default config;

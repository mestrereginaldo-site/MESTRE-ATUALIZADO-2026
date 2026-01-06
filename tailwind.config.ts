import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        mocha: {
          800: '#4a372f', // Mocha Mousse 2026 
          900: '#2d1f1a',
        },
        gold: {
          light: '#F9E4B7',
          DEFAULT: '#D4AF37',
          dark: '#B8860B',
        },
      },
      animation: { 'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite' },
    },
  },
  plugins:,
};
export default config;

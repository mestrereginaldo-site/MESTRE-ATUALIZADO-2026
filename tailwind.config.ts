import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        mocha: {
          800: '#4a372f', // Cor de 2026: Mocha Mousse 
          900: '#2d1f1a',
        },
        gold: {
          light: '#F9E4B7',
          DEFAULT: '#D4AF37',
          dark: '#B8860B',
        },
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
    },
  },
  plugins:,
};
export default config;

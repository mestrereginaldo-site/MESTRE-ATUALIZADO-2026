import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        mocha: {
          50: '#fdf8f6',
          100: '#f2e8e5',
          200: '#e1d0ca',
          300: '#c5ada3',
          400: '#a68b81',
          500: '#8c6d62',
          600: '#75584f',
          700: '#5e463f',
          800: '#4a372f', // Mocha Mousse Oficial [1]
          900: '#2d1f1a',
        },
        gold: {
          light: '#F9E4B7',
          DEFAULT: '#D4AF37',
          dark: '#B8860B',
        },
      },
      animation: {
        'shimmer': 'shimmer 2s linear infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        shimmer: {
          from: { backgroundPosition: '0 0' },
          to: { backgroundPosition: '-200% 0' },
        },
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

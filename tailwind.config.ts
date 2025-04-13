import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'paper-wall': "url('/paperwall.jpg')", // 壁紙背景
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        retro: {
          100: '#fdf6e3',
          200: '#eee8d5',
          300: '#93a1a1',
          400: '#586e75',
        },
        retroYellow: '#f4e7c5', // 柔和的黃色背景
        retroBrown: '#6b4f4f', // 深棕色文字
        primary: '#992211',
        secondary: '#771100',
        hover: '#cc4411',
        light: '#f5f5f5',
        dark: '#333333',
      },
      typography: {
        DEFAULT: {
          css: {
            a: {
              color: '#0645ad',
              '&:hover': {
                textDecoration: 'underline',
              },
            },
          },
        },
      },
      fontFamily:{
        'Noto': ['Noto+Serif+TC', 'serif'],
        'retro': ['"Old Standard TT"', 'serif'],
      },
    },
  },
  plugins: [],
} satisfies Config;

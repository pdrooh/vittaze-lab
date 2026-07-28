import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'vit-bege':  '#DCD8CF',
        'vit-cinza': '#655C55',
        'vit-taupe': '#A0958C',
        'vit-preto': '#232323',
        'vit-white': '#F8F6F3',
      },
      fontFamily: {
        heading: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        body:    ['"DM Sans"', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-up':    'fadeUp 0.7s ease forwards',
        'fade-in':    'fadeIn 0.6s ease forwards',
        'dna-rotate': 'dnaRotate 20s linear infinite',
        'float':      'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        dnaRotate: {
          '0%':   { transform: 'rotateY(0deg)' },
          '100%': { transform: 'rotateY(360deg)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-20px)' },
        },
      },
      backgroundImage: {
        'gradient-vit': 'linear-gradient(135deg, #232323 0%, #2e2826 50%, #1a1a1a 100%)',
        'gradient-bege': 'linear-gradient(135deg, #F8F6F3 0%, #EDE9E2 100%)',
        'gradient-taupe': 'linear-gradient(135deg, #A0958C 0%, #655C55 100%)',
      },
      boxShadow: {
        'premium': '0 25px 60px -12px rgba(35, 35, 35, 0.25)',
        'card':    '0 4px 30px rgba(35, 35, 35, 0.08)',
        'glass':   '0 8px 32px 0 rgba(35, 35, 35, 0.12)',
      },
      transitionDuration: {
        '400': '400ms',
      },
    },
  },
  plugins: [],
}

export default config

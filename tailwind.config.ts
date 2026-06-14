import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'brand-red': '#E63946',
        'brand-yellow': '#FFD166',
        'brand-blue': '#118AB2',
        'brand-green': '#06D6A0',
        'brand-purple': '#7B2D8B',
        'brand-bg': '#FAFAFA',
        'brand-text': '#0A0A0A',
      },
      fontFamily: {
        heading: ['var(--font-space-grotesk)', 'sans-serif'],
        body: ['var(--font-inter)', 'sans-serif'],
      },
      boxShadow: {
        'neo': '4px 4px 0px #0A0A0A',
        'neo-sm': '2px 2px 0px #0A0A0A',
        'neo-lg': '6px 6px 0px #0A0A0A',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        marquee: 'marquee 20s linear infinite',
      },
    },
  },
  plugins: [],
}

export default config

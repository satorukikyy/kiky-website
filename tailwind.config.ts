import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'brand-bg':           '#F7FAF7',
        'brand-soft':         '#F0F7F1',
        'brand-green':        '#00A845',
        'brand-green-dark':   '#007A32',
        'brand-green-light':  '#EBF7EE',
        'brand-green-border': '#C3E6CC',
        'brand-text':         '#0A0A0A',
        'brand-muted':        '#6B7280',
        'brand-subtle':       '#9CA3AF',
        'brand-border':       '#E4EDE5',
        'brand-border-soft':  '#DDE9DE',
      },
      fontFamily: {
        heading: ['var(--font-space-grotesk)', 'sans-serif'],
        body:    ['var(--font-inter)', 'sans-serif'],
      },
      keyframes: {
        marquee: {
          '0%':   { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        marquee: 'marquee 25s linear infinite',
      },
    },
  },
  plugins: [],
}

export default config

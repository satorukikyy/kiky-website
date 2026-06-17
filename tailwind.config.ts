import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'c-bg':           '#FFFFFF',
        'c-text':         '#111111',
        'c-muted':        '#6B7280',
        'c-subtle':       '#9CA3AF',
        'c-border':       '#E5E7EB',
        'c-purple':       '#7C3AED',
        'c-purple-hover': '#8B5CF6',
        'c-purple-light': '#EDE9FE',
      },
      fontFamily: {
        body: ['var(--font-inter)', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
    },
  },
  plugins: [],
}

export default config

import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        bg:      '#07090f',
        surface: '#0d1117',
        card:    '#0f1420',
        'card-hover': '#141929',
        blue:    '#4f9eff',
        purple:  '#9b7fff',
        cyan:    '#00e5cc',
        orange:  '#ff6b35',
        'text-primary':   '#e8edf5',
        'text-secondary': '#8b96a8',
        'text-muted':     '#5a6478',
      },
      fontFamily: {
        display: ['var(--font-syne)', 'sans-serif'],
        body:    ['var(--font-inter)', 'sans-serif'],
        mono:    ['var(--font-mono)', 'monospace'],
        pixel:   ['var(--font-pixel)', 'monospace'],
      },
      animation: {
        marquee:  'marquee 28s linear infinite',
        marquee2: 'marquee2 28s linear infinite',
        float:    'float 6s ease-in-out infinite',
        pulse2:   'pulse2 2s ease-in-out infinite',
        blink:    'blink 1s step-end infinite',
      },
      keyframes: {
        marquee:  { '0%': { transform: 'translateX(0%)' }, '100%': { transform: 'translateX(-50%)' } },
        marquee2: { '0%': { transform: 'translateX(-50%)' }, '100%': { transform: 'translateX(0%)' } },
        float:    { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-18px)' } },
        pulse2:   { '0%,100%': { opacity: '1' }, '50%': { opacity: '0.4' } },
        blink:    { '0%,100%': { opacity: '1' }, '50%': { opacity: '0' } },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}

export default config

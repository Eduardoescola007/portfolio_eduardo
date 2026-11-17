import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/app/**/*.{ts,tsx}',
    './src/components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          deep: '#0a0a1a',
          base: '#1a1a2e',
          soft: '#252544',
        },
        neon: {
          green: '#00ff41',
          cyan: '#00ffff',
          pink: '#ff006e',
          purple: '#9d4edd',
          yellow: '#ffd700',
          red: '#ff0040',
        },
      },
      fontFamily: {
        pixel: ['var(--font-press-start)', 'monospace'],
        terminal: ['var(--font-vt323)', 'monospace'],
      },
      boxShadow: {
        'pixel-sm': '4px 4px 0 0 rgba(0, 0, 0, 0.8)',
        'pixel': '6px 6px 0 0 rgba(0, 0, 0, 0.8)',
        'pixel-lg': '8px 8px 0 0 rgba(0, 0, 0, 0.8)',
      },
      animation: {
        blink: 'blink 1s step-end infinite',
        float: 'float 3s ease-in-out infinite',
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
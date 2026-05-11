/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        void: 'var(--color-void)',
        night: 'var(--color-night)',
        dusk: 'var(--color-dusk)',
        gold: 'var(--color-gold)',
        'gold-dim': 'var(--color-gold-dim)',
        ivory: 'var(--color-ivory)',
        muted: 'var(--color-muted)',
        'glow-amber': 'var(--color-glow-amber)',
        'glow-blue': 'var(--color-glow-blue)',
        'glow-teal': 'var(--color-glow-teal)',
      },
      fontFamily: {
        amiri: ['Amiri', 'serif'],
        display: ['Cormorant Garamond', 'serif'],
        sans: ['Source Sans 3', 'sans-serif'],
      },
      animation: {
        'shimmer': 'shimmer 3s infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        shimmer: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.5 },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}

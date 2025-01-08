/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        instrument: ['Instrument Sans', 'sans-serif'],
        jakarta: ['Plus Jakarta Sans', 'sans-serif'],
      },
      colors: {
        background: '#030712',
        surface: {
          DEFAULT: '#111827',
          secondary: '#1F2937',
          tertiary: '#374151'
        },
        accent: {
          DEFAULT: '#10B981',
          hover: '#059669',
          muted: '#065F46',
          glow: '#34D399'
        },
        border: {
          DEFAULT: 'rgba(255,255,255,0.08)',
          hover: 'rgba(16,185,129,0.2)'
        }
      },
      boxShadow: {
        'glow-sm': '0 2px 8px -2px rgba(16,185,129,0.3)',
        'glow-md': '0 0 24px -4px rgba(16,185,129,0.2)',
        'glow-lg': '0 0 48px -12px rgba(16,185,129,0.25)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(circle at top, var(--tw-gradient-from), var(--tw-gradient-to))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
} 
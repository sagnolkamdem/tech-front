const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  important: true,
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      animation: {
        'fade-in': 'fade-in 0.5s linear forwards',
        'pulse': 'pulse 1s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        marquee: 'marquee var(--marquee-duration) linear infinite',
        'spin-slow': 'spin 4s linear infinite',
        'spin-slower': 'spin 6s linear infinite',
        'spin-reverse': 'spin-reverse 1s linear infinite',
        'spin-reverse-slow': 'spin-reverse 4s linear infinite',
        'spin-reverse-slower': 'spin-reverse 6s linear infinite',
        'scroll-slow': 'scroll 50s linear infinite',
      },
      keyframes: {
        'fade-in': {
          from: {
            opacity: 0,
          },
          to: {
            opacity: 1,
          },
        },
        pulse: {
          '0%, 100%': {
            opacity: 1
          },
          "50%": {
            opacity: .5
          }
        },
        marquee: {
          '100%': {
            transform: 'translateY(-50%)',
          },
        },
        'spin-reverse': {
          to: {
            transform: 'rotate(-360deg)',
          },
        },
        scroll: {
          from: {
            transform: 'translateY(0)',
          },
          to: {
            transform: 'translateY(-100%)',
          }
        }
      },
      colors: {
        primary: colors.green,
        secondary: colors.yellow,
        danger: colors.red
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

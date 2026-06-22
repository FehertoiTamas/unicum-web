/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: '#C8962A',
          light: '#E8B84B',
          pale: '#F5E6C0',
        },
        unicum: {
          black: '#0E0B07',
          dark: '#1A1509',
          charcoal: '#2C2416',
          cream: '#F0E8D6',
          warm: '#FAF6EE',
          muted: '#7A6A52',
        },
        product: {
          original: '#6B2020',
          szilva: '#4A1942',
          barista: '#3D2010',
          orange: '#8B3A10',
        }
      },
      fontFamily: {
        display: ['Playfair Display', 'Georgia', 'serif'],
        body: ['Crimson Text', 'Georgia', 'serif'],
        ui: ['DM Sans', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-up': 'fadeUp 0.7s ease forwards',
        'fade-in': 'fadeIn 0.5s ease forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}

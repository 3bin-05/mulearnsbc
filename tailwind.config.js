/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: '#FFFFFF',
        'off-white': '#FAFAFA',
        black: '#0B0B0D',
        ink: '#17171B',
        purple: '#7C3AED',
        'purple-dark': '#5B21B6',
        'purple-tint': '#F3EEFF',
        hairline: '#E9E9EC',
      },
      fontFamily: {
        sans: ['Gilroy', 'Inter', 'sans-serif'],
        display: ['Gilroy', 'sans-serif'],
        body: ['Gilroy', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
    },
  },
  plugins: [],
}


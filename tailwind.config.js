/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'short': { 'raw': '(max-height: 850px)' },
        'xshort': { 'raw': '(max-height: 700px)' },
      },
      fontFamily: {
        orbitron: ['Orbitron', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        premiumText: '#F6F6F4',
        exploreText: '#F3F3F3',
      },
      letterSpacing: {
        nav: '0.12em',
        explore: '0.08em',
        subtitle: '0.25em',
        statLabel: '0.08em',
      },
      lineHeight: {
        hero: '0.86',
      },
    },
  },
  plugins: [],
}

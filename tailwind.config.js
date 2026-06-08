/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: '#F4F7FB',
        'warm-white': '#F9FBFF',
        sage: '#7A9B28',
        'sage-dark': '#1A3A6C',
        'sage-light': '#D8EAA0',
        terracotta: '#00A8B8',
        'terracotta-light': '#B8F0F5',
        bark: '#2E4E8C',
        'bark-light': '#8098C4',
        gold: '#00C5D5',
        'text-main': '#0F1E3C',
        'text-mid': '#2E4060',
        'text-muted': '#6278A0',
        'border-warm': '#D0DAF0',
      },
      fontFamily: {
        display: ['Cormorant Garamond', 'serif'],
        body: ['DM Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

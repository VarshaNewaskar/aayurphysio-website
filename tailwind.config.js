/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: '#FDF6EE',
        'warm-white': '#FFFBF7',
        sage: '#7A9B28',
        'sage-dark': '#1A3A6C',
        'sage-light': '#E8F5D0',
        terracotta: '#00A8B8',
        'terracotta-light': '#D6F5F8',
        bark: '#2E4E8C',
        'bark-light': '#8098C4',
        gold: '#F5A623',
        'text-main': '#0D1F3C',
        'text-mid': '#2C3E6B',
        'text-muted': '#7080A8',
        'border-warm': '#E2D9F3',
      },
      fontFamily: {
        display: ['Cormorant Garamond', 'serif'],
        body: ['DM Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

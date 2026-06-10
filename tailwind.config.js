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
        'warm-white': '#FFFCF8',
        sage: '#5C8A1E',
        'sage-dark': '#0F2D5E',
        'sage-light': '#D6EAA0',
        terracotta: '#007A8A',
        'terracotta-light': '#B8EEF4',
        bark: '#1A4480',
        'bark-light': '#6B9AD4',
        gold: '#E8960A',
        olive: '#6B8F1A',
        cyan: '#00B4C8',
        'section-blue': '#EEF3FF',
        'section-navy': '#0F2D5E',
        'section-olive': '#F2F8E8',
        'text-main': '#080F1E',
        'text-mid': '#1A2A4A',
        'text-muted': '#4A5E80',
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

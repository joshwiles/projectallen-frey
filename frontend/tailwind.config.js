/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'af-dark': '#1a1a2e',
        'af-navy': '#16213e',
        'af-accent': '#c9a84c',
        'af-accent-light': '#d4b85c',
        'af-light': '#f8f9fa',
        'af-warm': '#faf8f5',
        'af-gray': '#6b7280',
        'af-text': '#1f2937',
        'af-border': '#e5e7eb',
      },
      fontFamily: {
        'heading': ['"Playfair Display"', 'Georgia', 'serif'],
        'body': ['"Inter"', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'widest-plus': '0.2em',
      },
    },
  },
  plugins: [],
}

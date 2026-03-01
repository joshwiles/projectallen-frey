/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'af-dark': '#0f1f3d',
        'af-accent': '#c9a84c',
        'af-accent-light': '#d4b95e',
        'af-light': '#f4f2ee',
        'af-warm': '#ece9e0',
        'af-gray': '#6b7280',
        'af-text': '#1a2436',
        'af-border': '#e2ddd4',
      },
      fontFamily: {
        'heading': ['"Outfit"', 'system-ui', 'sans-serif'],
        'body': ['"Inter"', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'widest-plus': '0.2em',
      },
    },
  },
  plugins: [],
}

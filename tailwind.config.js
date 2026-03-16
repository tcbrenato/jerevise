/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['Sora', 'sans-serif'],
        body: ['DM Sans', 'sans-serif'],
      },
      colors: {
        primary: '#4F46E5',
        secondary: '#06B6D4',
        accent: '#F59E0B',
        dark: '#0F172A',
        card: '#1E293B',
      }
    },
  },
  plugins: [],
}
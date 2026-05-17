/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          pink: '#ff2c7f', // Exquisite high-fashion rose-pink
          light: '#ffeaf2', // Ultra-premium soft pink highlight
          dark: '#0f0f11', // High-end dark charcoal
          deep: '#d91b5c', // Deeper shade for gradients/hovers
          fuchsia: '#d946ef', // Fuchsia glow accent
          rose: '#e11d48', // High-contrast warning/rose highlight
        }
      },
      fontFamily: {
        sans: ['Outfit', 'sans-serif'],
        heading: ['"Plus Jakarta Sans"', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

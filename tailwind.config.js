/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        primary: '#2563eb',
        'primary-dark': '#1d4ed8',
        secondary: '#f59e0b',
        accent: '#10b981',
        dark: '#0f172a',
        gray: '#64748b',
        'light-bg': '#f8fafc',
      },
    },
  },
  plugins: [],
};

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // "Синка" – ultramarine laundry bluing, the brand's one strong colour
        bluing: { DEFAULT: '#1E3FAE', deep: '#16308A' },
        ink: { DEFAULT: '#0D1B3E', muted: '#4A5878' },
        paper: '#F3F5FA',
        sky: '#9DB9EC',
        line: '#D5DCEA',
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Commissioner Variable"', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        page: '72rem',
      },
    },
  },
  plugins: [],
}

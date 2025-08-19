/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            'h1, h2, h3, h4': {
              fontFamily: 'var(--font-playfair)',
              color: '#1a1a1a',
              fontWeight: '700',
            },
            a: {
              color: '#14b8a6',
              '&:hover': {
                color: '#0d9488',
              },
            },
            blockquote: {
              borderLeftColor: '#14b8a6',
              color: '#4a5568',
            },
            hr: {
              borderColor: '#e2e8f0',
            },
            table: {
              borderCollapse: 'collapse',
              width: '100%',
            },
            'thead th': {
              backgroundColor: '#f7fafc',
            },
            'tbody tr': {
              borderBottom: '1px solid #e2e8f0',
            },
            'ul > li::before': {
              backgroundColor: '#14b8a6',
            },
          },
        },
      },
      colors: {
        primary: {
          50: '#f0fdfa',
          100: '#ccfbf1',
          200: '#99f6e4',
          300: '#5eead4',
          400: '#2dd4bf',
          500: '#14b8a6',
          600: '#0d9488',
          700: '#0f766e',
          800: '#115e59',
          900: '#134e4a',
        },
        secondary: {
          50: '#fdfcf8',
          100: '#faf7e8',
          200: '#f5efd1',
          300: '#ede0a8',
          400: '#e4cd74',
          500: '#d9b94b',
          600: '#cca43d',
          700: '#a97f2d',
          800: '#8c6529',
          900: '#755425',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)'],
        display: ['var(--font-playfair)'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

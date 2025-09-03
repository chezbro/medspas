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
      // Performance optimizations
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
      // Optimize spacing for better performance
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      // Optimize screens for better responsive performance
      screens: {
        'xs': '475px',
        '3xl': '1600px',
      },
      // Custom shadows for enhanced design
      boxShadow: {
        '3xl': '0 35px 60px -12px rgba(0, 0, 0, 0.25)',
        '4xl': '0 50px 80px -12px rgba(0, 0, 0, 0.3)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    // Custom plugin for performance optimizations
    function({ addUtilities, theme }) {
      const newUtilities = {
        '.text-balance': {
          'text-wrap': 'balance',
        },
        '.will-change-auto': {
          'will-change': 'auto',
        },
        '.will-change-scroll': {
          'will-change': 'scroll-position',
        },
        '.will-change-transform': {
          'will-change': 'transform',
        },
        '.contain-layout': {
          'contain': 'layout',
        },
        '.contain-paint': {
          'contain': 'paint',
        },
        '.contain-strict': {
          'contain': 'strict',
        },
      }
      addUtilities(newUtilities)
    },
  ],
  // Performance optimizations
  future: {
    hoverOnlyWhenSupported: true,
  },

}

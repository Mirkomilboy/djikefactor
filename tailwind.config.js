module.exports = {
  mode: 'jit',
  purge: [
    './public/**/*.{html,js}'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        brand: {
          'blue': '#05173c',
          'teal': '#65C9AE',
          'dark': '#1B1B1B',
        }
      },
      spacing: {
        '26rem': '26rem',
        '30rem': '30rem',
        '60rem': '60rem',
      }
    },
    fontFamily: {
      'poppins': ['Poppins', 'sans-serif'],
    },
    keyframes: {
      wiggle: {
        '0%, 100%': { transform: 'rotate(-3deg)' },
        '50%': { transform: 'rotate(3deg)' },
      },
      spin: {
        '0%': {transform: 'rotate(0deg)'},
        '100%': {transform: 'rotate(360deg)'},
      },
      ping: {
        '75%': {transform: 'scale(1.4)'},
      },
      pulse: {
        '0%, 100%': { opacity: 1},
        '50%': { opacity: .5 },
      },
      bounce: {
        '0%, 100%': {
          transform: 'translateY(-25%)'
        },
        '50%': {
          transform: 'translateY(0)'
        }
      }
     },
     animation: {
      wiggle: 'wiggle 1s ease-in-out infinite',
      spin: 'spin 2s linear infinite',
      ping: 'ping 2s cubic-bezier(0, 0, 0.2, 1) infinite',
      pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;',
      bounce: 'bounce 2s linear infinite',
     },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

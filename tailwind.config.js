
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'serif': ['Playfair Display', 'Crimson Text', 'serif'],
        'sans': ['Inter', 'Geist Sans', 'sans-serif'],
        'display': ['Playfair Display', 'serif'],
      },
      animation: {
        'fade-in-up': 'fade-in-up 0.8s ease-out forwards',
        'fade-in-down': 'fade-in-down 0.6s ease-out forwards',
        'slide-in-left': 'slide-in-left 0.7s ease-out forwards',
        'slide-in-right': 'slide-in-right 0.7s ease-out forwards',
        'scale-in': 'scale-in 0.5s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in-down': {
          '0%': { opacity: '0', transform: 'translateY(-30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'slide-in-left': {
          '0%': { opacity: '0', transform: 'translateX(-50px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        'slide-in-right': {
          '0%': { opacity: '0', transform: 'translateX(50px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        'scale-in': {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'glow': {
          '0%': { boxShadow: '0 0 20px rgba(136, 115, 76, 0.3)' },
          '100%': { boxShadow: '0 0 30px rgba(136, 115, 76, 0.6)' },
        },
      },
      colors: {
        ashram: {
          gold: '#88734C',
          'gold-light': '#CBAA6F',
          'gold-dark': '#5A4A32',
          cream: '#F8F6F0',
          warm: '#F2F0E8',
          earth: '#6B5B47',
          forest: '#4A5D3A',
        },
        amber: {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
        }
      },
      backgroundImage: {
        'parchment-texture': "url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cmVjdCB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgZmlsbD0iI2ZlZmFmMCI+PC9yZWN0PgogIDxwYXRoIGQ9Ik0wIDUwSDEwME0xMDAgMEwwIDEwME0wIDBMMTAwIDEwME0wIDEwMEwxMDAgMCIgc3Ryb2tlPSIjZmZlYmNjIiBzdHJva2Utd2lkdGg9IjAuNSIgb3BhY2l0eT0iMC4xIi8+Cjwvc3ZnPg==')",
        'gradient-gold': 'linear-gradient(135deg, #88734C 0%, #CBAA6F 100%)',
        'gradient-warm': 'linear-gradient(135deg, #F8F6F0 0%, #F2F0E8 100%)',
        'gradient-earth': 'linear-gradient(135deg, #6B5B47 0%, #4A5D3A 100%)',
      },
      boxShadow: {
        'ashram': '0 10px 40px rgba(136, 115, 76, 0.15)',
        'ashram-lg': '0 20px 60px rgba(136, 115, 76, 0.2)',
        'ashram-glow': '0 0 30px rgba(136, 115, 76, 0.3)',
      },
      borderRadius: {
        'ashram': '1rem',
        'ashram-lg': '1.5rem',
        'ashram-xl': '2rem',
      }
    },
  },
  plugins: [],
}
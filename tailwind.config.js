
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'serif': ['Playfair Display', 'Crimson Text', 'serif'],
      },
      animation: {
        'fade-in-up': 'fade-in-up 0.8s ease-out forwards',
      },
      colors: {
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
      }
    },
  },
  plugins: [],
}
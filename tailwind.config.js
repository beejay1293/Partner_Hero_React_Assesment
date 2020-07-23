module.exports = {
    purge: [
      './src/components/**/*.js',
      './src/screens/**/*.js',
      './src/hooks/**/*.js',
      './public/index.html',
    ],
    theme: {
      extend: {
        colors: {
          'nc-blue': '#001C55',
          'nc-orange': '#F87060',
        },
        spacing: {
          '48%': '48%',
          '31%': '31%',
          '40%': '40%',
          '60%': '60%',
          '18%': '18%',
          '23%': '23%',
        },
      },
    },
    variants: {},
    plugins: [],
  }
  
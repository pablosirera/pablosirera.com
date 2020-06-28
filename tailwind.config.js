module.exports = {
  theme: {
    extend: {
      colors: {
        'green-main': {
          400: '#4fc08d',
        },
        'gray-main': {
          300: '#e4e4e4',
          700: '#808080',
          950: '#1a1a1a',
        },
        'blue-main': {
          400: '#1f8ed5',
          700: '#35495e',
          750: '#1f8ed540',
          800: '#2c3e50',
        },
      },
    },
  },
  variants: {},
  plugins: [],
  purge: {
    // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'nuxt.config.js',
    ],
  },
}

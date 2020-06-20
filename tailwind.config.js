module.exports = {
  theme: {
    extend: {
      colors: {
        'gray-main': {
          700: '#808080',
        },
        'blue-main': {
          400: '#1f8ed5',
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

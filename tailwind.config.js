module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#81a78f',
        dark: '#313131',
        'yellow-main': {
          500: '#f1e05a',
        },
        'green-main': {
          100: '#ebffeb',
          400: '#4fc08d',
          600: '#9bd681',
          700: '#81a78f',
          '700-40': '#81a78f47',
        },
        'gray-main': {
          50: '#ebf4f1',
          100: '#f5f5f5',
          200: '#eaecef',
          300: '#e4e4e4',
          400: '#e7e9db',
          600: '#586069',
          700: '#808080',
          800: '#313131',
          950: '#1a1a1a',
        },
        'blue-main': {
          300: '#09f',
          400: '#1f8ed5',
          500: '#526488',
          600: '#0366d6',
          700: '#35495e',
          750: '#1f8ed540',
          800: '#2c3e50',
          900: '#243746',
          950: '#091a28',
        },
      },
      borderWidth: {
        6: '6px',
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

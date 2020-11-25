module.exports = {
  purge: {
    content: ['./components/**/*.js', './pages/**/*.{js,mdx}', './layouts/**/*.js', './next.config.js'],
    options: {
      whitelist: [
        'text-code-red',
        'text-code-yellow',
        'text-code-green',
        'text-code-white',
        'text-code-purple',
        'text-code-blue',
        'text-gray-400',
        'italic'
      ]
    }
  },
  theme: {
    extend: {
      colors: {
        code: {
          green: '#b5f4a5',
          yellow: '#ffe484',
          purple: '#d9a9ff',
          red: '#ff8383',
          blue: '#93ddfd',
          white: '#fff'
        }
      }
    }
  },
  variants: {},
  plugins: []
};

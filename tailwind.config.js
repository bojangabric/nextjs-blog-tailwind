const defaultTheme = require('tailwindcss/defaultTheme');
const mdx = require('@mdx-js/mdx');

module.exports = {
  purge: {
    mode: 'all',
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
      ],
      extractors: [
        {
          extensions: ['mdx'],
          extractor: content => {
            content = mdx.sync(content);
            const broadMatches = content.match(/[^<>"'`\s]*[^<>"'`\s:]/g) || [];
            const innerMatches = content.match(/[^<>"'`\s.(){}[\]#=%]*[^<>"'`\s.(){}[\]#=%:]/g) || [];
            return broadMatches.concat(innerMatches);
          }
        }
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
      },
      fontFamily: {
        serif: ['Merriweather', ...defaultTheme.fontFamily.sans]
      }
    }
  },
  variants: {},
  plugins: [require('@tailwindcss/typography')]
};

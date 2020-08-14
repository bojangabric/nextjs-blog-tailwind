const withMdxEnhanced = require('next-mdx-enhanced');
const rehypePrism = require('@mapbox/rehype-prism');
const visit = require('unist-util-visit');
const smartypants = require('@silvenon/remark-smartypants');

const tokenClassNames = {
  tag: 'text-code-red',
  'attr-name': 'text-code-yellow',
  'attr-value': 'text-code-green',
  deleted: 'text-code-red',
  inserted: 'text-code-green',
  punctuation: 'text-code-white',
  keyword: 'text-code-purple',
  string: 'text-code-green',
  method: 'text-code-blue',
  function: 'text-code-blue',
  console: 'text-code-yellow',
  boolean: 'text-code-red',
  comment: 'text-gray-400 italic'
};

module.exports = withMdxEnhanced({
  layoutPath: 'layouts',
  defaultLayout: true,
  fileExtensions: ['mdx'],
  remarkPlugins: [smartypants],
  rehypePlugins: [
    rehypePrism,
    () => {
      return tree => {
        visit(tree, 'element', (node, index, parent) => {
          let [token, type] = node.properties.className || [];
          if (token === 'token') {
            node.properties.className = [tokenClassNames[type]];
          }
        });
      };
    }
  ],
  extendFrontMatter: {
    process: (mdxContent, frontMatter) => {},
    phase: 'prebuild|loader|both'
  }
})({
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.(png|jpe?g|gif|mp4)$/i,
      use: [
        {
          loader: 'file-loader',
          options: {
            publicPath: '/_next',
            name: 'static/media/[name].[hash].[ext]'
          }
        }
      ]
    });
    return config;
  }
});

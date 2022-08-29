const path = require('path')

module.exports = {
  title: 'Example Site',
  description: 'Example for vuepress-theme-simple',
  theme: path.resolve(__dirname, '../../'),
  themeConfig: {
    author: 'viko16',
  },
  plugins: [
    ['@vuepress/search', {
      searchMaxSuggestions: 10
    }]
  ]

}

const SitemapPlugin = require('sitemap-webpack-plugin').default
const paths = [
  {
    path: '/',
    lastmod: new Date().toISOString().slice(0, 10),
    priority: 0.8,
    changefreq: 'hourly'
  }
]

module.exports = {
  configureWebpack: {
    plugins: [
      new SitemapPlugin({
        base: 'https://gnosticchurchasheville.org',
        paths,
        options: {
          filename: 'sitemap.xml',
          lastmod: true,
          changefreq: 'hourly',
          priority: 0.8
        }
      })
    ]
  },
  chainWebpack: config => {
    config
      .plugin('html')
      .tap(args => {
        args[0].title = 'St. Martin of Tours'
        return args
      })
  }
}

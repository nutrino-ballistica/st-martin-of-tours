const SitemapPlugin = require('sitemap-webpack-plugin').default
const paths = ['', 'church', 'worship', 'contact'].map(path => ({
  path: `/#/${path}`,
  lastmod: new Date().toISOString().slice(0, 10),
  priority: 0.5,
  changefreq: 'yearly'
}))

module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/' : '/st-martin-of-tours',
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
        args[0].title = 'St. Martin of Tours, Gnostic Church of Asheville'
        return args
      })
  }
}

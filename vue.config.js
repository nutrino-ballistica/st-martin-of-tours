module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/st-martin-of-tours/'
    : '/',
  chainWebpack: config => {
    config
      .plugin('html')
      .tap(args => {
        args[0].title = 'St. Martin of Tours'
        return args
      })
  }
}

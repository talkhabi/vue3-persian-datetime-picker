const webpack = require('webpack')

module.exports = {
  publicPath: process.env.VUE_APP_PUBLIC_PATH,
  lintOnSave: false,
  filenameHashing: true,
  productionSourceMap: false,

  configureWebpack: {
    plugins: [new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/)]
  },

  css: {
    sourceMap: process.env.NODE_ENV !== 'production'
  }
}

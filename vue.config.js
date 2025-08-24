const webpack = require('webpack')

module.exports = {
  publicPath: import.meta.env.VUE_APP_PUBLIC_PATH,
  lintOnSave: false,
  filenameHashing: true,
  productionSourceMap: false,

  configureWebpack: {
    plugins: [new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/)]
  },

  css: {
    sourceMap: import.meta.env.NODE_ENV !== 'production',
    extract: false
  }
}

if (process.env.npm_lifecycle_event === 'export-common') {
  module.exports.configureWebpack.externals = {
    moment: 'moment',
    'moment-jalaali': 'moment-jalaali'
  }
  module.exports.configureWebpack.devtool = ''
}

if (process.env.npm_lifecycle_event === 'export-umd') {
  module.exports.configureWebpack.externals = {
    moment: 'moment',
    'moment-jalaali': 'moment'
  }
  module.exports.configureWebpack.devtool = ''
}

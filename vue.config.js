var path = require('path');
module.exports = {
  devServer: {
    host: 'localhost',
    port: 1234, // CHANGE YOUR PORT HERE!
    proxy: {
      '/api': {
        target: 'http://localhost:1235/api',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  },

  baseUrl: undefined,
  outputDir: '../stone-back/public',
  assetsDir: undefined,
  runtimeCompiler: undefined,
  productionSourceMap: undefined,
  parallel: undefined,
  css: undefined
}
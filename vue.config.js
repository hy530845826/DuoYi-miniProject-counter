const webpack = require('webpack')

module.exports = {
  publicPath: "./",

  outputDir: "dist",
  lintOnSave: true,
  runtimeCompiler: false,
  transpileDependencies: [
  ],

  productionSourceMap: false,
  chainWebpack: config => {
    config.plugin('provide').use(webpack.ProvidePlugin, [{
      $: 'jquery',
      jquery: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery'
    }]);
  },
  configureWebpack: () => { },
  css: {

    extract: true,
    sourceMap: false,
    loaderOptions: {},
    requireModuleExtension: false
  },

  parallel: require("os").cpus().length > 1,

  pwa: {},
  devServer: {
    open: process.platform === "darwin",
    disableHostCheck: false,
    host: "0.0.0.0",
    port: 8088,
    https: false,
    hotOnly: false,
    proxy: null

  },

  pluginOptions: {
  }
};
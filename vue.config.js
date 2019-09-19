const path = require('path')

function resolve(dir) {
  // return path.join(__dirname, '..', dir)
  return path.join(__dirname, dir)
}
// vue.config.js
module.exports = {
  chainWebpack: config => {
    config.module
      .rule('css')
      .test(/\.css$/)
      .oneOf('vue')
      .resourceQuery(/\?vue/)
      .use('px2rem')
      .loader('px2rem-loader')
      .options({
        remUnit: 75
      })
  },
  configureWebpack: {
    resolve: {
      extensions: ['.js', '.vue', '.json'],
      alias: {
        'vue$': 'vue/dist/vue.esm.js',
        '@': resolve('src'),
      }
    },
  },
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:5000', // 目录地址
        changeOrigin: true, //是否跨域
        pathRewrite: {
          '^/api': '', // rewrite path
        },
      }
    }
  }
}


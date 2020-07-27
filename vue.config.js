const path = require('path')

module.exports={
  devServer: {
    open: true // 配置自动启动浏览器
  },
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src')) // key,value自行定义
      .set('assets', resolve('src/assets'))
      .set('_c', resolve('src/components'))
      .set('_conf', resolve('config'))
  }
}
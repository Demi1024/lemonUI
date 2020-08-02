// const path = require('path')
// function resolve(dir){
//   return path.join(__dirname,dir)
// }
const BASE_URL = '/lemon/'
module.exports={
  publicPath:BASE_URL,
  devServer: {
    open: true // 配置自动启动浏览器
  }
}
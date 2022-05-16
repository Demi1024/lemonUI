// const path = require('path')
// function resolve(dir){
//   return path.join(__dirname,dir)
// }
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

const BASE_URL = '/lemon/'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base:BASE_URL,
  server: {
    open: true // 配置自动启动浏览器
  }
})
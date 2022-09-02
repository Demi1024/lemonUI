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
  base:'/lemon/',
  server: {
    port:5173
  }
})
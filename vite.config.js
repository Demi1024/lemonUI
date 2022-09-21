// const resolve=(dir)=>{
//   return path.join(__dirname,dir)
// }
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import {createSvg} from './src/utils/svg';
import path from 'path';

const BASE_URL = '/lemonUI/'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(),createSvg('./src/assets/icons/svg/')],
  base:BASE_URL,
  preview:{
    open:true
  },
  server: {
    port:5173
  },
  resolve:{
    alias:{
      '@':path.resolve(__dirname,'./src')
    }
  }
})
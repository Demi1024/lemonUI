// 增加对vue文件的声明
declare module "*.vue" {
  import {ComponentOptions} from 'vue'
  const componentOptions:ComponentOptions
  export default componentOptions
}
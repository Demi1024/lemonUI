declare module '*.svg' {
  import type { DefineComponent } from 'vue';
  const component: DefineComponent;
  export default component;
}

// 增加对vue文件的声明
declare module "*.vue" {
  import {ComponentOptions} from 'vue'
  const componentOptions:ComponentOptions
  export default componentOptions
}
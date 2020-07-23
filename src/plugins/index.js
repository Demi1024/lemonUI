/**
 * @author [Demi Wang]
 * @email [demi1024w@gmail.com]
 * @create date 2020-07-20 23:11:39
 * @modify date 2020-07-20 23:11:39
 * @desc [LemonUI]
 */
import Button from "./components/Button/index.vue"
import Input from "./components/Input/index.vue";

const install = function(Vue) {
  //注册组件
  Vue.component("de-button", Button);
  Vue.component("de-input", Input);
  
};

//判断是否是直接引入文件，不过是，就不要直接调用Vue.use();
if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue);
}

export default install;
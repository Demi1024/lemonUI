/**
 * @author [Demi Wang]
 * @email [demi1024w@gmail.com]
 * @create date 2020-07-20 23:11:39
 * @modify date 2020-07-20 23:11:39
 * @desc [LemonUI]
 */
import Icon from "./components/Icon/index.vue";
import Button from "./components/Button/index.vue";
import Input from "./components/Input/index.vue";

const install = function(Vue) {
  //注册组件
  Vue.component("de-icon", Icon);
  Vue.component("de-button", Button);
  Vue.component("de-input", Input);
  
};

export default install;
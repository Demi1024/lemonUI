/**
 * @author [Demi Wang]
 * @email [demi1024w@gmail.com]
 * @create date 2020-07-20 23:11:39
 * @modify date 2020-07-20 23:11:39
 * @desc [LemonUI]
 */
import Icon from "./components/icon/index.vue";
import Button from "./components/button/index.vue";
import Input from "./components/input/index.vue";
import Swicth from "./components/switch/index.vue";

const install = function(Vue) {
  //注册组件
  Vue.component("de-icon", Icon);
  Vue.component("de-button", Button);
  Vue.component("de-input", Input);
  Vue.component("de-switch", Swicth);
  
};

export default install;
/**
 * @author [Demi Wang]
 * @email [demi1024w@gmail.com]
 * @create date 2020-07-20 23:11:39
 * @modify date 2020-07-20 23:11:39
 * @desc [LemonUI]
 */

import Button from "/src/plugins/components/button/index.vue";
import Col from "/src/plugins/components/col/index.vue";
import Input from "/src/plugins/components/input/index.vue";
import Icon from "/src/plugins/components/icon/index.vue";
import Row from "/src/plugins/components/row/index.vue";
import Switch from "/src/plugins/components/switch/index.vue";


const install = function(Vue:any) {
  //注册组件
  Vue.component("le-button", Button);
  Vue.component("le-col", Col);
  Vue.component("le-input", Input);
  Vue.component("le-icon", Icon);
  Vue.component("le-row", Row);
  Vue.component("le-switch", Switch);
  
};

export default install;
/**
 * @author [Demi Wang]
 * @email [demi1024w@gmail.com]
 * @create date 2020-07-20 23:11:39
 * @modify date 2020-07-20 23:11:39
 * @desc [LemonUI]
 */

import Switch from "./components/Switch/index.vue";
import Input from "./components/Input/index.vue";
import Button from "./components/Button/index.vue";
import Col from "./components/Col/index.vue";
import Row from "./components/Row/index.vue";
import Icon from "./components/Icon/index.vue";
import Container from './components/Container/index.vue';
import { App } from 'vue'
import './styles/index.scss'

const Installer = {
  install(app: App) {
    app.component('le-button', Button);
    app.component('le-col', Col);
    app.component('le-container', Container);
    app.component('le-icon', Icon);
    app.component('le-input', Input);
    app.component('le-row', Row);
    app.component('le-switch', Switch);
  }
}

export default Installer;
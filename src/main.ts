import './plugins/style/index.scss'
import './styles/common/index.scss'
import { createApp } from 'vue'
import router from './router'
import App from './App.vue'
import Highlight from './libs/types/highlight'
import LemonUI from './plugins/index'

const app = createApp(App)
app.use(router)
app.use(Highlight)
app.use(LemonUI)
app.mount('#app')







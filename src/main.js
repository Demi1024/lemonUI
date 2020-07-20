import { createApp } from 'vue'
import router from './router/index'
import App from './App.vue'
import './index.scss'
import LemonUI from './plugins/index'

const app = createApp(App)
app.use(router)
app.use(LemonUI)
app.mount('#app')

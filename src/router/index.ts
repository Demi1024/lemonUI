import {createRouter, createWebHashHistory} from 'vue-router'
import Routes from './routes'
const routerHistory = createWebHashHistory()

const router = createRouter({
  history:routerHistory,
  routes:Routes
})
export default router

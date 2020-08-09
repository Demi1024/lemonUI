import Home from '../views/home/index.vue'
import Docs from '../views/doc/index.vue'
import GetStart from '../components/doc/get-start.vue'
import DeIcon from '../components/doc/icon.vue'
import DeButton from '../components/doc/button.vue'
import DeInput from '../components/doc/input.vue'
import DeSelect from '../components/doc/select.vue'
import DeSwitch from '../components/doc/switch.vue'
import DeGrid from '../components/doc/grid.vue'
export default [
  {
    path:'/',
    component:Home
  },
  {
    path:'/docs',
    component:Docs,
    children:[
      {
        path:'started',
        component:GetStart
      },
      {
        path:'icon',
        component:DeIcon
      },
      {
        path:'button',
        component:DeButton
      },
      {
        path:'input',
        component:DeInput
      },
      {
        path:'select',
        component:DeSelect
      },
      {
        path:'switch',
        component:DeSwitch
      },
      {
        path:'grid',
        component:DeGrid
      },
      {
        path:'layout',
        component:DeSelect
      }
    ]
  }
]
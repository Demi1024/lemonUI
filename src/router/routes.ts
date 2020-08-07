import Home from '../views/Home/index.vue'
import Docs from '../views/Docs/index.vue'
import GetStart from '../components/Docs/GetStart.vue'
import DeIcon from '../components/Docs/DeIcon.vue'
import DeButton from '../components/Docs/DeButton.vue'
import DeInput from '../components/Docs/DeInput.vue'
import DeSelect from '../components/Docs/DeSelect.vue'
import DeSwitch from '../components/Docs/DeSwitch.vue'
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
        component:DeSelect
      },
      {
        path:'layout',
        component:DeSelect
      }
    ]
  }
]
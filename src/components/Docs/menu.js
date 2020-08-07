export default [
  {
    key:'getStarted',
    label:'使用',
    children:[
      {
        key:'started',
        label:'快速上手',
        path:'/docs/started'
      }
    ]
  },
  {
    key:'component',
    label:'组件',
    children:[
      {
        key:'base',
        label:'基础',
        children:[
          {
            key:'icon',
            label:'Icon 图标',
            path:"/docs/icon"
          },
          {
            key:'button',
            label:'Button 按钮',
            path:"/docs/button"
          }
        ]
      },
      {
        key:'layout',
        label:'布局',
        children:[
          {
            key:'grid',
            label:'Grid 栅格',
            path:"/docs/grid"
          },
          {
            key:'layout',
            label:'Layout 布局',
            path:"/docs/layout"
          }
        ]
      },
      {
        key:'form',
        label:'表单',
        children:[
          {
            key:'input',
            label:'Input 输入框',
            path:"/docs/input"
          },
          {
            key:'select',
            label:'Select 选择框',
            path:"/docs/select"
          },
          {
            key:'switch',
            label:'Switch 开关',
            path:"/docs/switch"
          }
        ]
      }
    ]
  }
]
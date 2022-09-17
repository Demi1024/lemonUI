# LemonUI 柠檬 UI

这是一款基于 Vue3.0 的轻量级 UI 组件库。简单清爽的风格希望你会喜欢.

## 安装

执行语句

```cmd
npm install lemon-design -S
```

## 使用

全局使用请在您的 `main.js` 中增加如下语句

```js
import { createApp } from 'vue'
import App from './App.vue'
import LemonUI from 'lemon-design'

const app = createApp(App)
app.use(LemonUI)
app.mount('#app')

// 使用组件
<le-icon></le-icon>

<le-button></le-button>

<le-switch></le-switch>

<le-input></le-input>
```

目前计划开发的组件

- [ ] Input 输入框 （开发中）
- [ ] Select 选择框
- [ ] Icon 图标
- [ ] Button 按钮

## 温馨提示

本项目目前在开发中，不建议用于生产环境。

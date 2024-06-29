import './styles/common/index.scss';
import 'highlight.js/styles/monokai-sublime.css'
import { createApp } from 'vue'
import router from './router'
import App from './App.vue'
import hljs from 'highlight.js';
import svgIcon from './components/svgIcon/index.vue';

const app = createApp(App)
app.use(router)

// 注册自定义指令高亮代码
app.directive('highlight', {
  // Directive has a set of lifecycle hooks:
  // called before bound element's parent component is mounted
  beforeMount(el:any) {
    // on first bind, highlight all targets
    let blocks = el.querySelectorAll('pre code');
    for(let i = 0 ;i < blocks.length ; i++){
      let item = blocks[i]
      hljs.highlightBlock(item)
    }
  },
  // called after the containing component's VNode and the VNodes of its children // have updated
  updated(el:any, binding:any) {
    // after an update, re-fill the content and then highlight
    var targets = el.querySelectorAll('code');
    var target;
    var i;

    for (i = 0; i < targets.length; i += 1) {
        target = targets[i];
        if (typeof binding.value === 'string') {
        target.textContent = binding.value;
        }
        hljs.highlightBlock(target);
    }
  }
})

app.component('svg-icon', svgIcon);

app.mount('#app')







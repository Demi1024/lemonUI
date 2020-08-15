import Hljs from 'highlight.js';
import 'highlight.js/styles/monokai-sublime.css'

interface Highlightjs {
    [x:string]:any
 }

// let Highlight:Highlightjs = {};
let Highlight:any = {};

Highlight.install = function (Vue:any,options:any) {

    Vue.directive('highlightA',{
        inserted:function(el:any){
            let blocks = el.querySelectorAll('per code');
            for (let i = 0; i < blocks.length; i++) {
                const item = blocks[i]
                Hljs.highlightBlock(item)
            }
        }
    })

    Vue.directive('highlightB',{
        componentUpdated:function(el:any){
            let blocks = el.querySelectorAll('per code');
            for (let i = 0; i < blocks.length; i++) {
                const item = blocks[i]
                Hljs.highlightBlock(item)
            }
        }
    })
}

export default Highlight
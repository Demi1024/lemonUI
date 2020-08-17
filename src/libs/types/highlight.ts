import * as hljs from 'highlight.js'
import 'highlight.js/styles/monokai.css'

interface Highlightjs {
    [x:string]:any
 }

// let Highlight:Highlightjs = {};
let Highlight:any = {};

Highlight.install = function (Vue:any,options:any) {

    Vue.directive('highlight',{
        // inserted:function(el:any){
        //     let blocks = el.querySelectorAll('pre code');
        //     Array.prototype.forEach.call(blocks, Hljs.highlightBlock);
        // },
        // componentUpdated:function(el:any){
        //     let blocks = el.querySelectorAll('pre code');
        //     Array.prototype.forEach.call(blocks, Hljs.highlightBlock);
        // }
        deep: true,
        bind: function bind(el:any, binding:any) {
            // on first bind, highlight all targets
            var targets = el.querySelectorAll('code');
            var target;
            var i;

            for (i = 0; i < targets.length; i += 1) {
                target = targets[i];

                if (typeof binding.value === 'string') {
                // if a value is directly assigned to the directive, use this
                // instead of the element content.
                target.textContent = binding.value;
                }

                hljs.highlightBlock(target);
            }
        },
        componentUpdated: function componentUpdated(el:any, binding:any) {
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
}


export default Highlight
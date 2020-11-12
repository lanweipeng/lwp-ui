import Vue from 'vue'
import App from './App.vue'
import Iconfont from './package/Iconfont'
import Button from './package/Button'
import Tabs from './package/tabs/tabs'
import TabPane from './package/tabs/tab-pane'
import Row from './package/row/row'
import Link from './package/link/link.vue'
import Tag from './package/tag/tag.vue'
import Dialog from './package/dialog/index.vue'

// import Button from './package/button/button.vue'
// import './style.scss'
import './static/main.scss'
// Vue.component('lwp-app', App)
Vue.component('lwp-button', Button)
Vue.component('lwp-tabs', Tabs)
Vue.component('lwp-tab-pane', TabPane)
Vue.component('iconfont', Iconfont)
Vue.component('lwp-row', Row)
Vue.component('lwp-link', Link)
Vue.component('lwp-tag', Tag)
Vue.component('lwp-dialog',Dialog)

// Vue.component('lwp-button', Button)
// import showdown from 'showdown'// 引入md文件
 
// // 使用md文件
// Vue.prototype.md2html = (md)=> {
//   let converter = new showdown.Converter();
//   let text = md.toString();
//   console.log({text})
//   let html = converter.makeHtml(text);
//   return html
// };
import router from './router'
new Vue({
    el:'#app',
    router,
    render:h=>h(App)
})
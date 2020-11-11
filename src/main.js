import Vue from 'vue'
import App from './App.vue'
import Iconfont from './Iconfont'
import Button from './Button'
import Tabs from './components/tabs/tabs'
import TabPane from './components/tabs/tab-pane'
import Row from './components/row/row'
import Link from './components/link/link.vue'

import Tag from './components/tag/tag.vue'

import Dialog from './dialog/index.vue'

// import Button from './components/button/button.vue'
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
import showdown from 'showdown'// 引入md文件
 
// 使用md文件
Vue.prototype.md2html = (md)=> {
  let converter = new showdown.Converter();
  let text = md.toString();
  let html = converter.makeHtml(text);
  return html
};
new Vue({
    el:'#app',
    render:h=>h(App)
})
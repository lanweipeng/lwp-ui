import Vue from 'vue'
import App from './App.vue'
import Iconfont from './Iconfont'
import Button from './Button'
import Tabs from './tabs/tabs'
import TabPane from './tabs/tab-pane'
import Row from './components/row/row'
import Link from './components/link/link.vue'
import Dialog from './dialog/index.vue'
// import Button from './components/button/button.vue'
import './style.less'

// Vue.component('lwp-app', App)
Vue.component('lwp-button', Button)
Vue.component('lwp-tabs', Tabs)
Vue.component('lwp-tab-pane', TabPane)
Vue.component('iconfont', Iconfont)
Vue.component('lwp-row', Row)
Vue.component('lwp-link', Link)
Vue.component('lwp-dialog',Dialog)
// Vue.component('lwp-button', Button)
new Vue({
    el:'#app',
    render:h=>h(App)
})
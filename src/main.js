import Vue from 'vue'
import App from './App.vue'
import Iconfont from './Iconfont'
import Button from './Button'
import Tabs from './tabs/tabs'
import TabPane from './tabs/tab-pane'
import './style.less'

// Vue.component('lwp-app', App)
Vue.component('lwp-button', Button)
Vue.component('lwp-tabs', Tabs)
Vue.component('lwp-tab-pane', TabPane)
Vue.component('iconfont', Iconfont)
new Vue({
    el:'#app',
    render:h=>h(App)
})
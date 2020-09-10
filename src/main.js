import Vue from 'vue'
import App from './App.vue'
import Iconfont from './Iconfont'
import Button from './Button'
import './style.less'

// Vue.component('lwp-app', App)
Vue.component('lwp-button', Button)
Vue.component('lwp-tabs', Tabs)
Vue.component('iconfont', Iconfont)
new Vue({
    el:'#app',
    render:h=>h(App)
})
import Vue from 'vue'
import App from './App'
import Button from './Button'
Vue.component('lwp-app', App)
Vue.component('lwp-button', Button)
new Vue({
  el: '#app',
  data: {
    hh:'xx'
  },
  // template: `<lwp-button/>`
  // template:`<app/>`
})
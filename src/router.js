import Router from 'vue-router'
import Vue from 'vue'
Vue.use(Router)
export default new Router({routes:[
  {
    path:'/tag',
    name:'tag',
    component:()=>import('./example/tag/index.vue')
  }
]})
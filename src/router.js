import Router from 'vue-router'
import Vue from 'vue'
Vue.use(Router)
export default new Router({routes:[
  {
    path:'/input',
    name:'input',
    component:()=>import('./example/input/index.vue')
  },
  {
    path:'/tag',
    name:'tag',
    component:()=>import('./example/tag/index.vue')
  },
  {
    path:'/button',
    name:'button',
    component:()=>import('./example/button/index.vue')
  },
  {
    path:'/dialog',
    name:'dialog',
    component:()=>import('./example/dialog/index.vue')
  },
  
]})
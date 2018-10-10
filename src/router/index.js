import Vue from 'vue'
import Router from 'vue-router'
import home from '../views/index.vue'
import page404 from '@/components/404.vue'

Vue.use(Router)
const router = new Router({
  mode: 'history',
  linkActiveClass: 'on',
  routes: [
    {
      path: '',
      component: home
    },
    {
      path: '*',
      name: '404',
      component: page404
    } // 404页面一定要在最后面
  ]
})

//export default router

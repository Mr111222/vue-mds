import Vue from 'vue'
import VueRouter from 'vue-router';
import App from './App'
import routes from './route.config';
import store from './store'
import SideNav from './template/side-nav.vue';

Vue.use(VueRouter)
Vue.component('side-nav', SideNav);
Vue.config.productionTip = false


const router = new VueRouter({
  mode: 'hash',
  base: __dirname,
  routes
});
// eslint-disable-next-line no-new
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})

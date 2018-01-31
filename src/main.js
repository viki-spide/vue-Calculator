import Vue from 'vue'
import computermodule from './components/computermodule'
import VueRouter from 'vue-router'
import Computeraa from './pages/computerm'
import store from  './store/store.js'

Vue.use(VueRouter)

let router = new VueRouter({
	mode: 'hash',
	routes: [
    {
       path: '/',
       component: Computeraa
    }
	]
})

new Vue({
  el: '#app',
  router,
  store,
  template: '<computermodule/>',
  components: { computermodule }
})

import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import biancheng from '../views/biancheng.vue'
import cmd from '../views/cmd.vue'
Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component : ()=> import ('../views/About.vue')
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
  },
  {
    path:"/biancheng",
    name:'biancheng',
    component:biancheng
  },
  {
    path:"/cmd",
    name:'cmd',
    component:cmd
  }
]

const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes
})


export default router

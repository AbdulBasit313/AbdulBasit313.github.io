import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '../components/Dashboard.vue'
import Login from '../components/Login.vue'
import Register from '../components/Register.vue'
import About from '../components/About.vue'

Vue.use(Router)

const router = new Router({
   mode: 'history',
   base: process.env.BASE_URL,
   routes: [
      {
         path: '/',
         name: 'Dashboard',
         component: Dashboard
      },
      {
         path: '/login',
         name: 'Login',
         component: Login
      },
      {
         path: '/register',
         name: 'Register',
         component: Register
      },
      {
         path: '/about',
         name: 'About',
         component: About
      },
   ]
})

export default router
import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '../components/Dashboard.vue'
import Login from '../components/Login.vue'
import Register from '../components/Register.vue'

Vue.use(Router)

const router = new Router({
   mode: 'history',
   base: process.env.BASE_URL,
   routes: [
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
         path: '/dashboard',
         name: 'Dashboard',
         component: Dashboard
      },
   ]
})

export default router
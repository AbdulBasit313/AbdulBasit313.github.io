import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '../components/pages/Dashboard.vue'
import Login from '../components/pages/Login.vue'
import Register from '../components/pages/Register.vue'
import About from '../components/pages/About.vue'
import firebase from 'firebase'

Vue.use(Router)

const router = new Router({
   mode: 'history',
   base: process.env.BASE_URL,
   routes: [
      {
         path: '/login',
         name: 'Login',
         component: Login,
         meta: {
            requiresGuest: true
         }
      },
      {
         path: '/register',
         name: 'Register',
         component: Register,
         meta: {
            requiresGuest: true
         }
      },
      {
         path: '/',
         name: 'Dashboard',
         component: Dashboard,
         meta: {
            requiresAuth: true
         }
      },
      {
         path: '/about',
         name: 'About',
         component: About,
         meta: {
            requiresAuth: true
         }
      },
   ]
})

// nav guard
router.beforeEach((to, from, next) => {
   const requiresAuth = to.matched.some(record => record.meta.requiresAuth)
   const requiresGuest = to.matched.some(record => record.meta.requiresGuest)
   const currentUser = firebase.auth().currentUser

   if (requiresAuth && !currentUser) {
      next({
         path: '/login',
         query: {
            redirect: to.fullPath
         }
      })
   }
   else if (requiresGuest && currentUser) {
      next({
         path: '/',
         query: {
            redirect: to.fullPath
         }
      })
   }
   else {
      next()
   }
})

export default router
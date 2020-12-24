import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Auth from '../views/Auth.vue'
import Profile from '../views/Profile.vue'
import Player from '../views/Player.vue'

import { store } from '../store/store';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  /*
  {
    path: '/:pathMatch(.*)*',
    component: NotFound
  },*/
  {
    path: '/login',
    name: 'Login',
    component: Login,
    beforeEnter: (to, from, next) => {
      if (localStorage.auth) {
        router.push({ name: "Profile" });
      } else {
        next()
      }
    }
  },
  {
    path: '/auth',
    name: 'Auth',
    component: Auth,
    beforeEnter: (to, from, next) => {
      if (window.location.hash) {
        next()
      } else {
        router.push({ name: "Login" });
      }
    }
  },
  {
    path: '/player/:idvideo',
    name: 'Player',
    component: Player,
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile,
    beforeEnter: (to, from, next) => {
      if (store.login.status) {
        next()
      } else {
        router.push({ name: "Login" });
      }
    }
  },
  /*
  {
    path: '/signup',
    name: 'Signup',
    component: Signup,
    beforeEnter: (to, from, next) => {
      if (localStorage.user) {
        router.push({ name: "Profile" });
      } else {
        next()
      }
    }
  },
  {
    path: '/update',
    name: 'Update',
    component: Update,
    beforeEnter: (to, from, next) => {
      if (localStorage.user) {
        next()
      } else {
        router.push({ name: "Signin" });
      }
    }
  },
  
  {
    path: '/delete',
    name: 'Delete',
    component: Delete,
    beforeEnter: (to, from, next) => {
      if (localStorage.user) {
        next()
      } else {
        router.push({ name: "Profile" });
      }
    }
  }
  */
]

/*history: createWebHistory(process.env.BASE_URL),*/
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
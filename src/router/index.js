import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/latest',
    name: 'Latest',
    component: () => import('../views/Latest.vue')
  },
  {
    path: '/popular',
    name: 'Popular',
    component: () => import('../views/Popular.vue')
  },
  {
    path: '/top-rated',
    name: 'TopRated',
    component: () => import('../views/TopRated.vue')
  },
  {
    path: '/recommended',
    name: 'Recommended',
    component: () => import('../views/Recommended.vue') 
  },
  {
    path: '/similar/',
    name: 'Similar',
    component: () => import('../views/Similar.vue'),
    props: true
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

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
    path: '/details',
    name: 'Details',
    component: () => import('../views/Details.vue'),
    props: true
  },
  {
    path: '/similar',
    name: 'Similar',
    component: () => import('../views/Similar.vue'),
    props: true
  },
  {
    path: '/search',
    name: 'Search',
    component: () => import('../views/Search.vue'),
    props: true
  },
  {
    path: '/feedback',
    name: 'Feedback',
    component: () => import('../views/Feedback.vue'),
    props: true
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

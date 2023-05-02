import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView
    },
    {
      path: '/PopularityView',
      name: 'Popularity',
      component: () => import('../views/PopularityView.vue')
    },

    {
      path: '/BothView',
      name: 'Both',
      component: () => import('../views/BothView.vue')
    },
    {
      path: '/YearView',
      name: 'Year',
      component: () => import('../views/YearView.vue')
    },
    {
      path: '/dogData/:id',
      name: 'dogData',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/dogData.vue')
    }
  ]
})

export default router

import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/AnimalData/:id',
      name: 'AnimalData',
      component: () => import('./views/AnimalData.vue')
    }
  ]
})

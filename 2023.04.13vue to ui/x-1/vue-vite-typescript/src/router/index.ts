import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
     // component: HomeView
     component: () => import('../App.vue')
    },
    {
      path: '/PageBuy',
      name: 'PageBuy',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/PageBuy.vue')
    },
    {
      path: '/PageOrder',
      name: 'PageOrder',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/PageOrder.vue')
    }
  ]
})

export default router

import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/pages/HelloWorld.vue')
  }
]

export const router = createRouter({
  history: createWebHistory('/'), // TODO: 需要 baseUrl
  routes
})

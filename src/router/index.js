import { createRouter, createWebHistory } from 'vue-router'
import LoginVIew from '@/views/LoginVIew.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: LoginVIew,
    },
    
  ],
})

export default router

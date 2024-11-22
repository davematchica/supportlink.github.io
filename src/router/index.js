import { createRouter, createWebHistory } from 'vue-router'
import LoginVIew from '@/views/auth/LoginVIew.vue'
import RegisterView from '@/views/auth/RegisterView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: LoginVIew,
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterView,
    }
    
  ],
})

export default router

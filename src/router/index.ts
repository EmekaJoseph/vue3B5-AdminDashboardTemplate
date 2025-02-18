import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/auth/Login.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login,
    },
    {
      path: '/register',
      name: 'Register',
      component: () => import('../views/auth/Register.vue'),
    },

    {
      path: '/account',
      component: () => import('../views/account/Layout/Layout.vue'),
      children: [
        { path: 'dashboard', name: 'Dashboard', meta: { name: 'Dashboard', }, alias: '/dashboard', component: () => import('../views/account/Dashboard.vue') },
      ],
    },





    {
      path: '/:pathMatch(.*)*',
      name: '404',
      component: () => import(/* webpackChunkName: "public" */ '../views/auth/Login.vue')
    },
  ],
})

export default router

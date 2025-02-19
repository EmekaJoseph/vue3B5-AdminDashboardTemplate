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
        { path: 'tables', name: 'Tables', meta: { name: 'Tables', }, alias: '/tables', component: () => import('../views/account/Tables/Tables.vue') },
        { path: 'elements', name: 'Elements', meta: { name: 'Elements', }, alias: '/elements', component: () => import('../views/account/Elements/Elements.vue') },
        { path: 'charts', name: 'Charts', meta: { name: 'Charts', }, alias: '/charts', component: () => import('../views/account/Charts/Charts.vue') },
        { path: 'blank-page', name: 'Blank_Page', meta: { name: 'Blank Page', }, alias: '/blank-page', component: () => import('../views/account/Blank_Page.vue') },
      ],
    },


    {
      path: '/:pathMatch(.*)*',
      name: '404',
      redirect: '/',
      // component: () => import(/* webpackChunkName: "public" */ '../views/auth/Login.vue')
    },
  ],
})

export default router

import { createRouter, createWebHistory } from 'vue-router'
import public_routes from './public_routes'
import auth_routes from './auth_routes'
import account_routes from './account_routes'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior() {
    return { top: 0, behavior: 'smooth', }
  },
  routes: [
    ...auth_routes,
    ...account_routes,
    ...public_routes,
  ],
})

router.afterEach((to, from) => {
  document.title = "OYSTERCHECK | " + to.name?.toString()
})

export default router

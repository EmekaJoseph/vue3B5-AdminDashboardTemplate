export default [
    {
        path: '/login',
        name: 'Login',
        component: () => import('../pages/auth/Login.vue'),
    },
    {
        path: '/register',
        name: 'Register',
        component: () => import('../pages/auth/Register.vue'),
    },

]
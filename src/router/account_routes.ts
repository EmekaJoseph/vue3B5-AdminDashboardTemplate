export default [
    {
        path: '/account',
        component: () => import('../components/Layouts/account/Index.vue'),
        children: [
            { path: 'dashboard', name: 'Dashboard', meta: { name: 'Dashboard', }, component: () => import('../pages/account/Dashboard.vue') },
            { path: 'tables', name: 'Tables', meta: { name: 'Tables', }, component: () => import('../pages/account/Tables/Tables.vue') },
            { path: 'elements', name: 'Elements', meta: { name: 'Elements', }, component: () => import('../pages/account/Elements/Elements.vue') },
            { path: 'charts', name: 'Charts', meta: { name: 'Charts', }, component: () => import('../pages/account/Charts/Charts.vue') },
            { path: 'blank-page', name: 'Blank_Page', meta: { name: 'Blank Page', }, component: () => import('../pages/account/Blank_Page.vue') },
        ],
    },
]
import type { RouterConfig } from 'nuxt/schema';

export default <RouterConfig> {
    routes: _routes => [
        {
            path: '/',
            name: 'signup',
            component: () => import('@app/core/_pages/index.vue').then(r => r.default || r),
        },
        {
            path: '/already-submitted',
            name: 'already-submitted',
            component: () => import('@app/core/_pages/already-submitted.vue').then(r => r.default || r),
            meta: { middleware: ['sign-up'] },
        },
        {
            path: '/success',
            name: 'success',
            component: () => import('@app/core/_pages/success.vue').then(r => r.default || r),
            meta: { middleware: ['sign-up'] },
        },
    ],
};

import { defineNuxtRouteMiddleware, navigateTo } from 'nuxt/app';

export default defineNuxtRouteMiddleware((to) => {
    const store = useSignUpStore();

    if (to.path === '/success' && !store.isSignedUp) {
        return navigateTo('/');
    }
});

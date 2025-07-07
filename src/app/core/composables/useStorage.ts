import { readonly, computed } from 'vue';

export function useStorage() {
    const isAvailable = computed(() => {
        try {
            return typeof window !== 'undefined' && !!window.localStorage;
        } catch {
            return false;
        }
    });

    function getItem<T>(key: string, fallback: T): T {
        if (!isAvailable.value) return fallback;
        try {
            const raw = localStorage.getItem(key);
            return raw ? JSON.parse(raw) : fallback;
        } catch {
            return fallback;
        }
    }

    function setItem<T>(key: string, val: T): boolean {
        if (!isAvailable.value) return false;
        try {
            localStorage.setItem(key, JSON.stringify(val));
            return true;
        } catch {
            return false;
        }
    }

    function removeItem(key: string): boolean {
        if (!isAvailable.value) return false;
        try {
            localStorage.removeItem(key);
            return true;
        } catch {
            return false;
        }
    }

    return {
        isAvailable: readonly(isAvailable),
        getItem,
        setItem,
        removeItem,
    };
}

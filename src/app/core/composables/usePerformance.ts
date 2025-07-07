import { ref, readonly, onMounted, nextTick } from 'vue';

export function usePerformance() {
    const metrics = ref<Record<string, number>>({});

    function measure() {
        if (typeof performance === 'undefined') return;
        nextTick(() => {
            const nav = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
            metrics.value = {
                domContentLoaded: nav.domContentLoadedEventEnd - nav.domContentLoadedEventStart,
                loadComplete: nav.loadEventEnd - nav.loadEventStart,
            };
            console.table(metrics.value);
        });
    }

    onMounted(measure);

    return { metrics: readonly(metrics) };
}

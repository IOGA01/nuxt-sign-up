<template>
  <div class="app-layout">
    <nord-top-bar />
    <div class="layout-body">
      <Navigation />

      <main class="content">
        <NuxtPage />
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import { usePerformance } from '../composables/usePerformance';

usePerformance();
</script>

<style scoped>
.app-layout {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.layout-body {
  display: flex;
  flex: 1;
}

.content {
  flex: 1;
  padding: 1rem;
}
</style>

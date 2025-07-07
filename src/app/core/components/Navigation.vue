<template>
  <nord-navigation class="sidebar" style="min-inline-size: 250px">
    <nord-nav-group :heading="t('layout.workspace')" data-testid="nav-group">
      <NuxtLink v-slot="{ navigate, isActive: signupActive }" to="/" custom>
        <nord-nav-item
          :active="signupActive"
          icon="navigation-reports"
          data-testid="nav-signup"
          @click="navigate"
        >
          {{ t('layout.signUp') }}
        </nord-nav-item>
      </NuxtLink>
    </nord-nav-group>
  </nord-navigation>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
</script>

<style scoped>
.sidebar {
  border-right: 1px solid var(--n-color-border);
}
</style>

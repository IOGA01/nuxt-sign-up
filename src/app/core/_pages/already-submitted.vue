<template>
  <div class="already-submitted-page">
    <h1>{{ t('alreadySubmitted.title') }}</h1>
    <p>{{ t('alreadySubmitted.message') }}</p>
    <NuxtLink to="/" class="go-back">
      {{ t('alreadySubmitted.goBack') }}
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n();
</script>

<style scoped>
.already-submitted-page {
  max-width: 600px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
}

.go-back {
  display: inline-block;
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  background-color: var(--n-color-primary);
  color: #fff;
  text-decoration: none;
  border-radius: 4px;
}
</style>

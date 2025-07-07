<template>
  <div class="signup-page">
    <SignUpForm />
  </div>
</template>

<script setup lang="ts">
import SignUpForm from '../../core/components/SignUpForm.vue';
</script>

<style scoped>
.signup-page {
  max-width: 600px;
  margin: 0 auto;
  padding: 2rem;
}
</style>

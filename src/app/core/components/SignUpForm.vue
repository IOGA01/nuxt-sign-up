<template>
  <form @submit.prevent="onSubmit">
    <nord-stack direction="vertical" gap="m">
      <nord-input
        id="email-input"
        name="email-input"
        data-testid="email-input"
        :label="t('form.email')"
        type="email"
        expand
        placeholder="Enter your email"
        autocomplete="email"
        required
        :error="errors.email"
        :value="email"
        @input="email = $event.target.value"
      />

      <nord-input
        id="password-input"
        name="password-input"
        data-testid="password-input"
        :label="t('form.password')"
        :type="showPassword ? 'text' : 'password'"
        expand
        placeholder="Enter your password"
        autocomplete="current-password"
        required
        :error="errors.password"
        :value="password"
        @input="password = $event.target.value"
      >
        <nord-button
          type="button"
          slot="end"
          square
          aria-describedby="password-tooltip"
          @click.prevent="togglePassword"
        >
          <nord-icon v-if="!showPassword" name="interface-edit-on" />
          <nord-icon v-else name="interface-edit-off" />
        </nord-button>
      </nord-input>
      <nord-tooltip id="password-tooltip">
        {{ t('form.togglePassword') }}
      </nord-tooltip>

      <nord-checkbox
        data-testid="receiveUpdates-input"
        :label="t('form.receiveUpdates')"
        :checked="receiveUpdates"
        @change="receiveUpdates = $event.target.checked"
      />

      <nord-button
        variant="primary"
        type="submit"
        data-testid="submit-button"
        :disabled="!isValid"
      >
        {{ t('form.submit') }}
      </nord-button>
    </nord-stack>
  </form>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { useSignUp } from '../composables/useSignUp';
const { t } = useI18n();

const {
    email,
    password,
    receiveUpdates,
    errors,
    showPassword,
    togglePassword,
    onSubmit,
    isValid,
} = useSignUp();
</script>

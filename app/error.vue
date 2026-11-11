<template>
  <div class="relative min-h-screen bg-bg text-ink transition-colors duration-300">
    <AppHeader />
    <main id="main">
      <section class="pt-[68px]">
        <UiContainer class-name="flex min-h-[70vh] flex-col items-center justify-center text-center">
          <p class="font-mono text-[12px] uppercase tracking-[0.2em] text-brand-ink">
            Error {{ error?.statusCode || 404 }}
          </p>
          <h1 class="mt-4 text-[clamp(2.4rem,5vw,3.75rem)] font-semibold tracking-[-0.04em]">
            {{ error?.statusCode === 404 ? 'This page doesn’t exist.' : 'Something went wrong.' }}
          </h1>
          <p class="mt-4 max-w-md text-ink-2">
            {{
              error?.statusCode === 404
                ? 'The link may be outdated, or the page may have moved.'
                : error?.statusMessage || 'An unexpected error occurred.'
            }}
          </p>
          <UiButton class-name="mt-8" @click="handleClear">
            Back to home
          </UiButton>
        </UiContainer>
      </section>
    </main>
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
import type { NuxtError } from '#app'
import AppHeader from '~/components/navigation/AppHeader.vue'
import AppFooter from '~/components/navigation/AppFooter.vue'

defineProps<{
  error: NuxtError
}>()

const handleClear = () => {
  clearError({ redirect: '/' })
}
</script>


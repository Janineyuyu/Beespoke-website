<template>
  <div class="relative min-h-screen bg-bg text-ink transition-colors duration-300">
    <a
      href="#main"
      class="fixed left-4 top-3 z-[60] -translate-y-20 rounded-full bg-ink px-4 py-2 text-[14px] text-bg transition-transform focus:translate-y-0"
    >
      Skip to content
    </a>
    <AppHeader />
    <main id="main">
      <slot />
    </main>
    <AppFooter />
    <DemoDialog />
  </div>
</template>

<script setup lang="ts">
import AppHeader from '~/components/navigation/AppHeader.vue'
import AppFooter from '~/components/navigation/AppFooter.vue'
import DemoDialog from '~/components/forms/DemoDialog.vue'
</script>


<template>
  <section class="pt-[68px]">
    <UiContainer class-name="flex min-h-[70vh] flex-col items-center justify-center text-center">
      <p class="font-mono text-[12px] uppercase tracking-[0.2em] text-brand-ink">
        Error 404
      </p>
      <h1 class="mt-4 text-[clamp(2.4rem,5vw,3.75rem)] font-semibold tracking-[-0.04em]">
        This page doesn’t exist.
      </h1>
      <p class="mt-4 max-w-md text-ink-2">
        The link may be outdated, or the page may have moved.
      </p>
      <UiButton to="/" class-name="mt-8">
        Back to home
      </UiButton>
    </UiContainer>
  </section>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Page not found | Beespoke Solutions',
  description: 'The requested page could not be found.',
})
</script>


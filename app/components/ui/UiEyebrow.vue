<!--
  UiEyebrow.vue
  Purpose: Small uppercase tracking label with a decorative brand-colored rule prefix, used as section category tags.
-->
<template>
  <p
    :class="
      cn(
        'inline-flex items-center gap-2 font-mono text-[11.5px] uppercase tracking-[0.18em] text-ink-3',
        className,
      )
    "
  >
    <span aria-hidden="true" class="h-px w-5 bg-brand" />
    <slot />
  </p>
</template>

<script setup lang="ts">
import { cn } from '~/utils/cn'

defineProps<{
  className?: string
}>()
</script>


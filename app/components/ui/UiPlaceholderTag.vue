<template>
  <span
    :class="
      cn(
        'inline-flex items-center gap-1.5 rounded-full border border-dashed border-line-strong px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.12em] text-ink-3',
        className,
      )
    "
  >
    <span aria-hidden="true" class="size-1 rounded-full bg-brand" />
    {{ label }}
  </span>
</template>

<script setup lang="ts">
import { cn } from '~/utils/cn'

interface Props {
  label?: string
  className?: string
}

withDefaults(defineProps<Props>(), {
  label: 'To be confirmed',
})
</script>


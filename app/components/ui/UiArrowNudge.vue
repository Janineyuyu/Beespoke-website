<template>
  <svg
    viewBox="0 0 16 16"
    aria-hidden="true"
    :class="cn('size-3.5 transition-transform duration-200 group-hover/btn:translate-x-0.5', className)"
    fill="none"
    stroke="currentColor"
    stroke-width="1.75"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <path d="M3 8h10M9 4l4 4-4 4" />
  </svg>
</template>

<script setup lang="ts">
import { cn } from '~/utils/cn'

defineProps<{
  className?: string
}>()
</script>


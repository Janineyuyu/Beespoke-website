<template>
  <span
    :class="cn('block h-1.5 rounded-full bg-ink/10', className)"
    :style="{ width: w }"
  />
</template>

<script setup lang="ts">
import { cn } from '~/utils/cn'

defineProps<{
  w: string
  className?: string
}>()
</script>


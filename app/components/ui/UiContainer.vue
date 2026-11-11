<template>
  <div :class="cn('mx-auto w-full max-w-[1240px] px-5 sm:px-8', className)">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { cn } from '~/utils/cn'

defineProps<{
  className?: string
}>()
</script>


<template>
  <span
    :class="
      cn(
        'inline-grid shrink-0 place-items-center rounded-full font-semibold text-white',
        size === 'sm' ? 'size-5 text-[8px]' : 'size-7 text-[10px]',
      )
    "
    :style="{ background: color }"
    aria-hidden="true"
  >
    {{ initials }}
  </span>
</template>

<script setup lang="ts">
import { cn } from '~/utils/cn'

interface Props {
  initials: string
  color: string
  size?: 'sm' | 'md'
}

withDefaults(defineProps<Props>(), {
  size: 'md',
})
</script>


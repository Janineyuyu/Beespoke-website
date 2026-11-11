<template>
  <NuxtLink
    to="/"
    aria-label="Beespoke Solutions, home"
    :class="cn('group inline-flex items-center gap-2.5', className)"
  >
    <img
      v-if="compact"
      :src="asset('brand/beespoke-mark.png')"
      alt=""
      width="162"
      height="190"
      class="h-8 w-auto"
    />
    <img
      v-else
      :src="asset('brand/beespoke-logo.png')"
      alt=""
      width="716"
      height="190"
      class="h-[26px] w-auto"
    />
    <span
      class="hidden border-l border-line-strong pl-2.5 font-mono text-[10px] uppercase leading-none tracking-[0.22em] text-ink-3 sm:inline"
    >
      Solutions
    </span>
  </NuxtLink>
</template>

<script setup lang="ts">
import { asset, cn } from '~/utils/cn'

interface Props {
  compact?: boolean
  className?: string
}

withDefaults(defineProps<Props>(), {
  compact: false,
})
</script>


<template>
  <svg
    viewBox="0 0 24 24"
    :class="className"
    fill="none"
    stroke="currentColor"
    stroke-width="1.75"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="true"
  >
    <template v-if="network === 'linkedin'">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </template>
    <template v-else-if="network === 'facebook'">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </template>
    <template v-else-if="network === 'instagram'">
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <path d="M17.5 6.5h.01" />
    </template>
    <template v-else-if="network === 'x'">
      <path d="M4 4l11.7 16H20L8.3 4z" />
      <path d="M4 20l6.8-6.8M13.2 10.8L20 4" />
    </template>
  </svg>
</template>

<script setup lang="ts">
import type { SocialNetwork } from '~~/shared/types/company'

interface Props {
  network: SocialNetwork
  className?: string
}

withDefaults(defineProps<Props>(), {
  className: 'size-4',
})
</script>


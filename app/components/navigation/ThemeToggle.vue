<template>
  <button
    type="button"
    :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
    :aria-pressed="isDark"
    class="relative grid size-9 place-items-center overflow-hidden rounded-full border border-line-strong bg-elev text-ink-2 transition-colors hover:text-ink"
    @click="toggle"
  >
    <Transition name="theme-flip" mode="out-in">
      <span :key="theme" class="grid place-items-center">
        <Moon v-if="isDark" class="size-4" />
        <Sun v-else class="size-4" />
      </span>
    </Transition>
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { Moon, Sun } from 'lucide-vue-next'
import { useTheme } from '~/composables/useTheme'

const { theme, toggle } = useTheme()
const isDark = computed(() => theme.value === 'dark')
</script>

<style scoped>
.theme-flip-enter-active,
.theme-flip-leave-active {
  transition: all 0.22s ease-out;
}
.theme-flip-enter-from {
  opacity: 0;
  transform: translateY(12px) rotate(-40deg);
}
.theme-flip-leave-to {
  opacity: 0;
  transform: translateY(-12px) rotate(40deg);
}
</style>


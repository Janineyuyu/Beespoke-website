<!--
  UiReveal.vue
  Purpose: Lightweight scroll-triggered reveal animation component powered by IntersectionObserver.
  Smoothly animates elements into view as the user scrolls, respecting the prefers-reduced-motion accessibility preference.
-->
<template>
  <div
    ref="el"
    :class="className"
    :style="revealStyle"
  >
    <slot />
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'

interface Props {
  delay?: number
  y?: number
  duration?: number
  className?: string
}

const props = withDefaults(defineProps<Props>(), {
  delay: 0,
  y: 18,
  duration: 0.7,
})

const el = ref<HTMLElement | null>(null)
const isVisible = ref(false)

onMounted(() => {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    isVisible.value = true
    return
  }

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          isVisible.value = true
          observer.disconnect()
        }
      },
      {
        rootMargin: '0px 0px -10% 0px',
        threshold: 0.05,
      },
    )
    if (el.value) {
      observer.observe(el.value)
    }
  } else {
    isVisible.value = true
  }
})

const revealStyle = computed(() => ({
  opacity: isVisible.value ? 1 : 0,
  transform: isVisible.value ? 'none' : `translate3d(0, ${props.y}px, 0)`,
  transition: `opacity ${props.duration}s cubic-bezier(0.22, 1, 0.36, 1) ${props.delay}s, transform ${props.duration}s cubic-bezier(0.22, 1, 0.36, 1) ${props.delay}s`,
  willChange: isVisible.value ? 'auto' : 'opacity, transform',
}))
</script>


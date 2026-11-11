<template>
  <UiReveal
    :delay="index * 0.07"
    class-name="h-full"
  >
    <li class="flex h-full gap-4 bg-sunken py-7 sm:px-6">
      <component
        :is="icon"
        class="mt-0.5 size-5 shrink-0 text-brand"
        :stroke-width="1.6"
        aria-hidden="true"
      />
      <div>
        <h3 class="text-[15px] font-semibold tracking-tight">{{ title }}</h3>
        <p class="mt-1 text-[13.5px] leading-relaxed text-ink-3">{{ body }}</p>
      </div>
    </li>
  </UiReveal>
</template>

<script setup lang="ts">
import type { Component } from 'vue'

defineProps<{
  icon: Component
  title: string
  body: string
  index: number
}>()
</script>


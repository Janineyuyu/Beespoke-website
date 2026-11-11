<template>
  <UiReveal
    :delay="(index % 4) * 0.06"
    class-name="h-full"
  >
    <li class="group relative flex h-full flex-col bg-bg p-7 transition-colors duration-300 hover:bg-elev">
      <div class="flex items-center justify-between">
        <span
          class="grid size-10 place-items-center rounded-xl border border-line-strong text-ink-2 transition-colors duration-300 group-hover:border-brand/40 group-hover:bg-brand-soft group-hover:text-brand-ink"
        >
          <component :is="service.icon" class="size-[18px]" :stroke-width="1.6" aria-hidden="true" />
        </span>
        <span class="font-mono text-[11px] text-ink-3" aria-hidden="true">
          {{ String(index + 1).padStart(2, '0') }}
        </span>
      </div>
      <h3 class="mt-8 text-[16px] font-semibold tracking-tight">{{ service.title }}</h3>
      <p class="mt-2 text-[14px] leading-relaxed text-ink-3">{{ service.body }}</p>
      <span
        aria-hidden="true"
        class="absolute inset-x-7 bottom-0 h-[2px] origin-left scale-x-0 bg-gradient-brand transition-transform duration-500 group-hover:scale-x-100"
      />
    </li>
  </UiReveal>
</template>

<script setup lang="ts">
import type { Service } from '~~/shared/types/services'

defineProps<{
  service: Service
  index: number
}>()
</script>


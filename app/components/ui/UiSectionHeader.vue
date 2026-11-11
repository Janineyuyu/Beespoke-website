<template>
  <UiReveal
    :class="
      cn(
        'mb-12 flex flex-col gap-6 md:mb-16',
        align === 'center'
          ? 'items-center text-center'
          : 'lg:flex-row lg:items-end lg:justify-between',
      )
    "
  >
    <div :class="cn('max-w-2xl', align === 'center' && 'flex flex-col items-center')">
      <UiEyebrow>{{ eyebrow }}</UiEyebrow>
      <h2
        :id="id"
        class="mt-5 text-balance text-[clamp(2rem,4.2vw,3.25rem)] font-semibold leading-[1.04] tracking-[-0.035em]"
      >
        <slot name="title">{{ title }}</slot>
      </h2>
      <p
        v-if="description || $slots.description"
        class="mt-5 max-w-xl text-pretty text-[17px] leading-relaxed text-ink-2"
      >
        <slot name="description">{{ description }}</slot>
      </p>
    </div>
    <div v-if="$slots.aside">
      <slot name="aside" />
    </div>
  </UiReveal>
</template>

<script setup lang="ts">
import { cn } from '~/utils/cn'

interface Props {
  eyebrow: string
  title?: string
  description?: string
  align?: 'left' | 'center'
  id?: string
}

withDefaults(defineProps<Props>(), {
  align: 'left',
})
</script>


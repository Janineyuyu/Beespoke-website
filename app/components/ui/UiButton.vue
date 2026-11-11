<template>
  <NuxtLink
    v-if="to"
    :to="to"
    :class="classes"
  >
    <slot />
  </NuxtLink>
  <a
    v-else-if="href"
    :href="href"
    :class="classes"
  >
    <slot />
  </a>
  <button
    v-else
    :type="type"
    :disabled="disabled"
    :aria-busy="ariaBusy"
    :class="classes"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { cn } from '~/utils/cn'

type Variant = 'primary' | 'secondary' | 'ghost' | 'inverse'
type Size = 'sm' | 'md' | 'lg'

interface Props {
  variant?: Variant
  size?: Size
  to?: string
  href?: string
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
  ariaBusy?: boolean
  className?: string
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'primary',
  size: 'md',
  type: 'button',
  disabled: false,
  ariaBusy: false,
})

const base =
  'group/btn relative inline-flex select-none items-center justify-center gap-2 whitespace-nowrap rounded-full font-medium tracking-[-0.01em] transition-[background-color,border-color,color,box-shadow,transform] duration-200 active:scale-[0.98] disabled:pointer-events-none disabled:opacity-60'

const variants: Record<Variant, string> = {
  primary:
    'bg-brand text-[#1a1206] shadow-[inset_0_1px_0_rgb(255_255_255/0.35),0_1px_2px_rgb(0_0_0/0.08),0_8px_20px_-8px_var(--brand)] hover:bg-brand-2',
  secondary: 'border border-line-strong bg-elev text-ink shadow-soft hover:border-ink/30',
  ghost: 'text-ink-2 hover:bg-ink/5 hover:text-ink',
  inverse: 'bg-ink text-bg hover:bg-ink/90',
}

const sizes: Record<Size, string> = {
  sm: 'h-9 px-4 text-[13.5px]',
  md: 'h-11 px-5 text-[14.5px]',
  lg: 'h-12 px-6 text-[15px]',
}

const classes = computed(() =>
  cn(base, variants[props.variant], sizes[props.size], props.className),
)
</script>


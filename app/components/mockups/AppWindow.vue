<template>
  <div
    :class="
      cn(
        'overflow-hidden rounded-2xl border border-line-strong bg-elev shadow-lift ring-1 ring-black/[0.02]',
        className,
      )
    "
  >
    <div class="flex h-8 items-center gap-3 border-b border-line bg-sunken/70 px-3">
      <div class="flex gap-1.5" aria-hidden="true">
        <span class="size-2 rounded-full bg-ink/15" />
        <span class="size-2 rounded-full bg-ink/15" />
        <span class="size-2 rounded-full bg-ink/15" />
      </div>
      <div
        class="mx-auto flex h-[18px] max-w-[60%] flex-1 items-center justify-center rounded-md bg-ink/[0.05] px-2 font-mono text-[9.5px] text-ink-3"
      >
        <span class="truncate">{{ url }}</span>
      </div>
      <div class="w-10" aria-hidden="true" />
    </div>
    <div class="@container">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import { cn } from '~/utils/cn'

interface Props {
  url: string
  className?: string
}

defineProps<Props>()
</script>


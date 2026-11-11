<!--
  StoryCard.vue
  Purpose: Testimonial / customer story card shown in the StoriesSection.
  Displays a quote, the related product badge with matching accent colors, and author / organization metadata.
-->
<template>
  <figure
    class="group flex h-full flex-col rounded-[22px] border border-line bg-elev p-6 shadow-soft transition-[border-color,transform] duration-300 hover:-translate-y-1 hover:border-line-strong"
  >
    <div class="flex items-center justify-between">
      <Quote
        class="size-6"
        :style="{ color: product?.accent.hex }"
        fill="currentColor"
        :stroke-width="0"
        aria-hidden="true"
      />
      <span
        v-if="product"
        class="inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11.5px] font-medium"
        :style="{ background: product.accent.soft, color: product.accent.hex }"
      >
        <span
          class="size-1.5 rounded-full"
          :style="{ background: product.accent.hex }"
          aria-hidden="true"
        />
        {{ product.name }}
      </span>
    </div>

    <blockquote class="mt-5 flex-1 text-pretty text-[15px] leading-relaxed text-ink-2">
      “{{ story.quote }}”
    </blockquote>

    <figcaption class="mt-6 flex items-center gap-3 border-t border-line pt-5">
      <span
        class="grid size-10 shrink-0 place-items-center rounded-full text-[13px] font-semibold"
        :style="{ background: product?.accent.soft, color: product?.accent.hex }"
        aria-hidden="true"
      >
        {{ initials }}
      </span>
      <span class="min-w-0">
        <span class="block truncate text-[14px] font-semibold text-ink">{{ story.author }}</span>
        <span class="block truncate text-[12.5px] text-ink-3">
          {{ story.role }}, {{ story.organization }}
        </span>
      </span>
    </figcaption>
  </figure>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { Quote } from 'lucide-vue-next'
import type { Story } from '~~/shared/types/stories'
import { getProduct } from '~~/shared/content/products'
import { getInitials } from '~/utils/formatting'

/**
 * Props:
 * - story: Testimonial details (quote, author, role, organization, associated product slug)
 */
const props = defineProps<{
  story: Story
}>()

// Look up associated product definition for dynamic branding and accent colors
const product = computed(() => getProduct(props.story.product))
// Generate 2-letter avatar initials from company/organization name
const initials = computed(() => getInitials(props.story.organization))
</script>


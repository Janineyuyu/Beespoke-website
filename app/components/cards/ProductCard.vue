<template>
  <UiReveal
    :delay="(index % 2) * 0.08"
    class-name="h-full"
  >
    <article
      :aria-labelledby="`product-${product.slug}`"
      class="group relative flex h-full flex-col overflow-hidden rounded-[28px] border border-line bg-elev shadow-soft transition-[box-shadow,border-color] duration-300 hover:border-line-strong hover:shadow-lift"
    >
      <!-- Preview -->
      <div
        aria-hidden="true"
        class="relative h-[280px] overflow-hidden sm:h-[320px]"
        :style="{ background: product.accent.soft }"
      >
        <div
          aria-hidden="true"
          class="bg-stripes absolute inset-0 opacity-[0.06]"
          :style="{ color: product.accent.hex }"
        />
        <div
          aria-hidden="true"
          class="absolute -right-16 -top-16 size-64 rounded-full blur-3xl"
          :style="{ background: product.accent.ring }"
        />
        <div
          class="absolute inset-x-6 top-8 transition-transform duration-700 ease-[cubic-bezier(.22,1,.36,1)] group-hover:-translate-y-3 sm:inset-x-10 sm:top-10"
        >
          <ProductMockup :slug="product.slug" />
        </div>
        <div
          aria-hidden="true"
          class="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-elev to-transparent"
        />
      </div>

      <!-- Body -->
      <div class="flex flex-1 flex-col p-7 sm:p-8">
        <div class="flex items-start gap-3.5">
          <span
            class="grid size-11 shrink-0 place-items-center rounded-xl text-white shadow-[inset_0_1px_0_rgb(255_255_255/0.25)]"
            :style="{ background: product.accent.hex }"
          >
            <component :is="product.icon" class="size-5" :stroke-width="1.8" aria-hidden="true" />
          </span>
          <div>
            <h3
              :id="`product-${product.slug}`"
              class="text-[22px] font-semibold leading-tight tracking-tight"
            >
              {{ product.name }}
            </h3>
            <p class="mt-0.5 text-[13px] font-medium" :style="{ color: product.accent.hex }">
              {{ product.category }}
            </p>
          </div>
        </div>

        <p class="mt-5 text-[15px] leading-relaxed text-ink-2">
          {{ product.description }}
        </p>

        <ul class="mt-5 flex flex-wrap gap-1.5" :aria-label="`${product.name} key features`">
          <li
            v-for="f in shownFeatures"
            :key="f.title"
            class="rounded-full border border-line bg-sunken px-2.5 py-1 text-[12.5px] text-ink-2"
          >
            {{ f.title }}
          </li>
          <li
            v-if="product.features.length > shownFeatures.length"
            class="rounded-full px-2 py-1 text-[12.5px] text-ink-3"
          >
            +{{ product.features.length - shownFeatures.length }} more
          </li>
        </ul>

        <div class="mt-auto flex items-center justify-between pt-7">
          <NuxtLink
            :to="`/products/${product.slug}`"
            class="group/btn inline-flex items-center gap-2 rounded-full border border-line-strong py-2 pl-4 pr-3.5 text-[14px] font-medium transition-colors duration-300 after:absolute after:inset-0 after:rounded-[28px] after:content-[''] group-hover:border-ink group-hover:bg-ink group-hover:text-bg"
          >
            Explore {{ product.name }}
            <UiArrowNudge />
          </NuxtLink>
          <span class="font-mono text-[11px] text-ink-3" aria-hidden="true">
            0{{ index + 1 }} / 04
          </span>
        </div>
      </div>
    </article>
  </UiReveal>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { Product } from '~~/shared/types/products'
import ProductMockup from '~/components/mockups/ProductMockup.vue'

interface Props {
  product: Product
  index: number
}

const props = defineProps<Props>()

const shownFeatures = computed(() => props.product.features.slice(0, 4))
</script>


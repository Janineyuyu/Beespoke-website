<template>
  <section
    id="products"
    tabindex="-1"
    aria-labelledby="products-title"
    class="relative py-24 outline-none md:py-32"
  >
    <UiContainer>
      <UiSectionHeader
        id="products-title"
        eyebrow="Our Products"
        title="Solutions Designed for a Smarter Tomorrow."
        description="Discover our suite of digital products designed to address real-world challenges and help organizations achieve more through technology."
      >
        <template #aside>
          <ul
            class="flex flex-wrap gap-2 lg:max-w-xs lg:justify-end"
            aria-label="Product suite"
          >
            <li
              v-for="p in products"
              :key="p.slug"
              class="inline-flex items-center gap-1.5 rounded-full border border-line-strong px-3 py-1 text-[12.5px] text-ink-2"
            >
              <span
                class="size-1.5 rounded-full"
                :style="{ background: p.accent.hex }"
                aria-hidden="true"
              />
              {{ p.name }}
            </li>
          </ul>
        </template>
      </UiSectionHeader>

      <div class="grid gap-6 lg:grid-cols-2">
        <ProductCard
          v-for="(p, i) in products"
          :key="p.slug"
          :product="p"
          :index="i"
        />
      </div>
    </UiContainer>
  </section>
</template>

<script setup lang="ts">
import { products } from '~~/shared/content/products'
import ProductCard from '~/components/cards/ProductCard.vue'
</script>


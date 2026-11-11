<template>
  <div v-if="product">
    <!-- Hero section -->
    <section aria-labelledby="product-title" class="relative overflow-hidden pt-[68px]">
      <div
        aria-hidden="true"
        class="absolute inset-0 -z-10"
        :style="{ background: `linear-gradient(180deg, ${product.accent.soft}, transparent 70%)` }"
      />
      <div
        aria-hidden="true"
        class="bg-stripes absolute -right-20 top-10 -z-10 size-[420px] rounded-full opacity-[0.08] [mask-image:radial-gradient(circle,black_40%,transparent_70%)]"
        :style="{ color: product.accent.hex }"
      />

      <UiContainer class-name="pb-20 pt-10 md:pb-28">
        <NuxtLink
          :to="sectionHref('products')"
          class="inline-flex items-center gap-2 text-[13.5px] text-ink-2 transition-colors hover:text-ink"
        >
          <ArrowLeft class="size-4" aria-hidden="true" /> All products
        </NuxtLink>

        <div class="mt-10 grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          <UiReveal :duration="0.7">
            <div class="flex items-center gap-3">
              <span
                class="grid size-12 place-items-center rounded-2xl text-white"
                :style="{ background: product.accent.hex }"
              >
                <component
                  :is="product.icon"
                  class="size-6"
                  :stroke-width="1.8"
                  aria-hidden="true"
                />
              </span>
              <p class="text-[13.5px] font-medium" :style="{ color: product.accent.hex }">
                {{ product.category }}
              </p>
            </div>
            <h1
              id="product-title"
              class="mt-6 text-[clamp(2.75rem,6vw,4.5rem)] font-semibold leading-[0.98] tracking-[-0.045em]"
            >
              {{ product.name }}
            </h1>
            <p class="mt-5 max-w-lg text-pretty text-[19px] leading-relaxed text-ink">
              {{ product.description }}
            </p>
            <p class="mt-4 max-w-lg text-pretty text-[16px] leading-relaxed text-ink-2">
              {{ product.longDescription }}
            </p>
            <div class="mt-9 flex flex-col gap-3 sm:flex-row">
              <UiButton size="lg" @click="openDemo(product.slug)">
                Book a {{ product.name }} Demo <UiArrowNudge />
              </UiButton>
              <UiButton size="lg" variant="secondary" :to="sectionHref('contact')">
                Talk to Our Team
              </UiButton>
            </div>
          </UiReveal>

          <UiReveal :duration="0.9" :delay="0.1" aria-hidden="true">
            <ProductMockup :slug="product.slug" class-name="[&_.min-h-\[300px\]]:min-h-[360px]" />
          </UiReveal>
        </div>
      </UiContainer>
    </section>

    <!-- Key features -->
    <section aria-labelledby="features-heading" class="border-t border-line py-20 md:py-28">
      <UiContainer>
        <UiReveal class-name="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <UiEyebrow>Key features</UiEyebrow>
            <h2
              id="features-heading"
              class="mt-5 text-[clamp(1.9rem,3.6vw,2.75rem)] font-semibold leading-[1.05] tracking-[-0.035em]"
            >
              What {{ product.name }} brings to your team.
            </h2>
          </div>
          <p
            v-if="product.featuresProvisional"
            class="flex max-w-sm items-start gap-2 rounded-2xl border border-dashed border-line-strong p-3.5 text-[13.5px] text-ink-2"
          >
            <Info
              class="mt-0.5 size-4 shrink-0"
              :style="{ color: product.accent.hex }"
              aria-hidden="true"
            />
            The detailed feature list for {{ product.name }} is being finalized and will be updated here.
          </p>
        </UiReveal>

        <ul class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <li
            v-for="(f, i) in product.features"
            :key="f.title"
          >
            <UiReveal
              :delay="(i % 3) * 0.06"
              :duration="0.5"
              class-name="h-full rounded-3xl border border-line bg-elev p-6 shadow-soft"
            >
              <span
                class="grid size-8 place-items-center rounded-full"
                :style="{ background: product.accent.soft, color: product.accent.hex }"
              >
                <Check class="size-4" aria-hidden="true" />
              </span>
              <h3 class="mt-5 text-[17px] font-semibold tracking-tight">{{ f.title }}</h3>
              <p class="mt-2 text-[14.5px] leading-relaxed text-ink-2">{{ f.body }}</p>
            </UiReveal>
          </li>
        </ul>

        <UiReveal class-name="mt-16 grid gap-6 rounded-3xl border border-line bg-sunken p-7 sm:p-9 md:grid-cols-[0.6fr_1.4fr] md:items-center">
          <h2 class="text-[20px] font-semibold tracking-tight">Built for</h2>
          <ul class="flex flex-wrap gap-2">
            <li
              v-for="a in product.audiences"
              :key="a"
              class="rounded-full border border-line-strong bg-elev px-4 py-2 text-[14px]"
            >
              {{ a }}
            </li>
          </ul>
        </UiReveal>
      </UiContainer>
    </section>

    <!-- More products -->
    <section aria-labelledby="more-products" class="border-t border-line py-20">
      <UiContainer>
        <h2
          id="more-products"
          class="font-mono text-[11.5px] uppercase tracking-[0.18em] text-ink-3"
        >
          Explore more products
        </h2>
        <ul class="mt-6 grid gap-4 md:grid-cols-3">
          <li v-for="other in otherProducts" :key="other.slug">
            <NuxtLink
              :to="`/products/${other.slug}`"
              class="group flex h-full items-start gap-4 rounded-3xl border border-line bg-elev p-5 transition-[border-color,box-shadow] hover:border-line-strong hover:shadow-soft"
            >
              <span
                class="grid size-10 shrink-0 place-items-center rounded-xl text-white"
                :style="{ background: other.accent.hex }"
              >
                <component
                  :is="other.icon"
                  class="size-5"
                  :stroke-width="1.8"
                  aria-hidden="true"
                />
              </span>
              <span class="min-w-0 flex-1">
                <span class="flex items-center justify-between font-semibold tracking-tight">
                  {{ other.name }}
                  <UiArrowNudge class-name="text-ink-3 transition-transform group-hover:translate-x-0.5" />
                </span>
                <span class="mt-1 block text-[13px] text-ink-3">{{ other.category }}</span>
              </span>
            </NuxtLink>
          </li>
        </ul>
      </UiContainer>
    </section>

    <DemoCtaSection
      :product="product.slug"
      :title="`See ${product.name} in action.`"
    />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { ArrowLeft, Check, Info } from 'lucide-vue-next'
import { getProduct, products } from '~~/shared/content/products'
import { sectionHref } from '~~/shared/content/nav'
import { useDemo } from '~/composables/useDemo'
import ProductMockup from '~/components/mockups/ProductMockup.vue'
import DemoCtaSection from '~/components/sections/DemoCtaSection.vue'

const route = useRoute()
const slug = computed(() => route.params.slug as string)
const product = computed(() => getProduct(slug.value))
const otherProducts = computed(() => products.filter((p) => p.slug !== product.value?.slug))

const { openDemo } = useDemo()

if (!product.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Product not found',
    fatal: false,
  })
}

useSeoMeta({
  title: computed(() =>
    product.value
      ? `${product.value.name} | ${product.value.category} | Beespoke Solutions`
      : 'Product | Beespoke Solutions',
  ),
  description: computed(() => product.value?.description || ''),
})
</script>


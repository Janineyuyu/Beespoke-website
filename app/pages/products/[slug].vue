<template>
  <div>
    <!-- Dedicated Custom Landing Page with independent themed navbar & footer -->
    <ProductDetailPage
      v-if="productDetail && product"
      :detail="productDetail"
      :accent-hex="product.accent.hex"
      :accent-soft="product.accent.soft"
      :accent-ring="product.accent.ring"
    />

    <!-- Fallback Product Detail Template (if any product lacks deep data) -->
    <div v-else-if="product" class="relative min-h-screen bg-bg text-ink">
      <!-- Minimalist header -->
      <header class="sticky top-0 z-40 border-b border-line bg-glass backdrop-blur-xl">
        <UiContainer class-name="flex h-16 items-center justify-between">
          <NuxtLink
            to="/#products"
            class="inline-flex items-center gap-2 text-[13.5px] text-ink-2 transition-colors hover:text-ink"
          >
            <ArrowLeft class="size-4" aria-hidden="true" /> Back to Beespoke Solutions
          </NuxtLink>
          <UiButton size="sm" @click="openDemo(product.slug)">
            Book a Demo
          </UiButton>
        </UiContainer>
      </header>

      <!-- Hero section -->
      <section aria-labelledby="product-title" class="relative overflow-hidden pt-12 pb-20">
        <!-- Background IT / Industry Image featuring people & environments relevant to this product -->
        <div
          aria-hidden="true"
          class="pointer-events-none absolute inset-0 -z-10 select-none overflow-hidden"
        >
          <img
            v-if="product.heroVisual?.bgImage"
            :src="product.heroVisual.bgImage"
            :alt="`${product.name} application environment`"
            class="size-full object-cover object-center opacity-25 dark:opacity-20 transition-transform duration-1000 scale-105"
            loading="eager"
          />

          <!-- Multi-stage ambient overlay for contrast and theme integration -->
          <div
            class="absolute inset-0 bg-gradient-to-r from-bg via-bg/92 to-bg/70 dark:from-bg dark:via-bg/95 dark:to-bg/82"
          />
          <div
            class="absolute inset-0 bg-gradient-to-b from-bg/60 via-transparent to-bg"
          />

          <!-- Accent radial glow -->
          <div
            class="absolute inset-0"
            :style="{ background: `radial-gradient(ellipse 65% 55% at 65% 25%, ${product.accent.soft}, transparent 75%)` }"
          />
          <div
            class="bg-stripes absolute -right-20 top-10 size-[420px] rounded-full opacity-[0.06] [mask-image:radial-gradient(circle,black_40%,transparent_70%)]"
            :style="{ color: product.accent.hex }"
          />
          <div
            class="bg-dot-grid absolute inset-0 text-ink/[0.05] [mask-image:radial-gradient(ellipse_75%_65%_at_50%_35%,black,transparent)]"
          />
        </div>

        <UiContainer class-name="pb-20 pt-6 md:pb-28">
          <div class="mt-6 grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr]">
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
                class="mt-6 text-[clamp(2.75rem,6vw,4.5rem)] font-semibold leading-[0.98] tracking-[-0.04em]"
              >
                {{ product.name }}
              </h1>
              <p class="mt-5 max-w-lg text-pretty text-[19px] leading-relaxed text-ink">
                {{ product.description }}
              </p>
              <p class="mt-4 max-w-lg text-pretty text-[16px] leading-relaxed text-ink-2">
                {{ product.longDescription }}
              </p>

              <!-- Target Users & Real-World Use Case -->
              <div v-if="product.heroVisual" class="mt-6 space-y-2 border-t border-line/60 pt-4">
                <div class="flex flex-wrap items-center gap-2">
                  <span class="inline-flex items-center gap-1.5 text-[12px] font-semibold text-ink">
                    <Users class="size-3.5" :style="{ color: product.accent.hex }" />
                    Target Users:
                  </span>
                  <span
                    v-for="badge in product.heroVisual.audienceBadges"
                    :key="badge"
                    class="rounded-full border border-line-strong bg-elev/80 px-2.5 py-0.5 text-[11.5px] font-medium text-ink-2"
                  >
                    {{ badge }}
                  </span>
                </div>
                <p class="text-[12.5px] text-ink-3">
                  <span class="font-medium text-ink-2">Use case:</span> {{ product.heroVisual.realWorldUseCase }}
                </p>
              </div>

              <div class="mt-8 flex flex-col gap-3 sm:flex-row">
                <UiButton size="lg" @click="openDemo(product.slug)">
                  Book a {{ product.name }} Demo <UiArrowNudge />
                </UiButton>
                <UiButton size="lg" variant="secondary" :to="sectionHref('contact')">
                  Talk to Our Team
                </UiButton>
              </div>
            </UiReveal>

            <!-- Visual Showcase: In Action & Mockup -->
            <UiReveal :duration="0.9" :delay="0.1">
              <div class="relative overflow-hidden rounded-[20px] border border-line-strong bg-elev shadow-lift">
                <!-- Header with View Toggle -->
                <div class="flex h-11 items-center justify-between border-b border-line bg-sunken/75 px-3.5">
                  <div class="flex items-center gap-2">
                    <span class="size-2 rounded-full" :style="{ background: product.accent.hex }" />
                    <span class="text-[12.5px] font-semibold text-ink">{{ product.name }} In Action</span>
                  </div>
                  <div class="flex items-center rounded-lg border border-line bg-elev/90 p-0.5 text-[11px] font-medium shadow-2xs">
                    <button
                      type="button"
                      :class="cn('flex items-center gap-1 rounded-md px-2.5 py-1 transition-colors', fallbackHeroMode === 'action' ? 'bg-elev text-ink shadow-xs font-semibold' : 'text-ink-3 hover:text-ink')"
                      @click="fallbackHeroMode = 'action'"
                    >
                      <Users class="size-3" />
                      <span>Real-World</span>
                    </button>
                    <button
                      type="button"
                      :class="cn('flex items-center gap-1 rounded-md px-2.5 py-1 transition-colors', fallbackHeroMode === 'mockup' ? 'bg-elev text-ink shadow-xs font-semibold' : 'text-ink-3 hover:text-ink')"
                      @click="fallbackHeroMode = 'mockup'"
                    >
                      <Layers class="size-3" />
                      <span>Interface</span>
                    </button>
                  </div>
                </div>

                <!-- Panel content -->
                <div class="relative min-h-[350px] overflow-hidden">
                  <div v-if="fallbackHeroMode === 'action'" class="relative size-full min-h-[350px] overflow-hidden bg-sunken">
                    <img
                      v-if="product.heroVisual?.actionImage"
                      :src="product.heroVisual.actionImage"
                      :alt="`${product.name} in action`"
                      class="size-full object-cover object-center transition-transform duration-700 hover:scale-105"
                    />
                    <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/35 backdrop-blur-[0.5px]" />
                    <div class="absolute inset-x-4 top-4 flex items-center justify-between gap-2">
                      <span class="inline-flex max-w-[70%] items-center gap-1.5 rounded-full border border-white/20 bg-black/60 px-3 py-1 text-[11.5px] font-medium text-white shadow-sm backdrop-blur-md">
                        <span class="size-1.5 rounded-full" :style="{ background: product.accent.hex }" />
                        <span class="truncate">{{ product.heroVisual?.environmentLabel || product.category }}</span>
                      </span>
                      <span v-if="product.heroVisual?.impactMetric" class="inline-flex shrink-0 items-center gap-1 rounded-full border border-white/15 bg-white/20 px-3 py-1 text-[11.5px] font-semibold text-white shadow-sm backdrop-blur-md">
                        <TrendingUp class="size-3.5" />
                        {{ product.heroVisual.impactMetric.value }}
                      </span>
                    </div>
                    <div class="absolute inset-x-4 bottom-4 rounded-xl border border-white/15 bg-black/80 p-3.5 text-white backdrop-blur-md shadow-lift">
                      <p class="text-[13px] font-semibold text-white">{{ product.heroVisual?.floatingStatus.title }}</p>
                      <p class="text-[11.5px] text-white/80">{{ product.heroVisual?.floatingStatus.subtitle }}</p>
                    </div>
                  </div>
                  <div v-else class="p-2">
                    <ProductMockup :slug="product.slug" class-name="[&_.min-h-\[300px\]]:min-h-[350px]" />
                  </div>
                </div>
              </div>
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

      <!-- Minimalist Product Footer -->
      <footer class="border-t border-line bg-sunken/40 py-8 text-[12.5px] text-ink-3">
        <UiContainer class-name="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <span>© 2026 Beespoke Solutions · {{ product.name }}</span>
          <NuxtLink to="/#products" class="font-medium text-ink hover:underline">
            Back to Products Overview ↗
          </NuxtLink>
        </UiContainer>
      </footer>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { ArrowLeft, Check, Info, Layers, TrendingUp, Users } from 'lucide-vue-next'
import { getProduct, products } from '~~/shared/content/products'
import { getProductDetail } from '~~/shared/content/productDetails'
import { sectionHref } from '~~/shared/content/nav'
import { useDemo } from '~/composables/useDemo'
import { cn } from '~/utils/cn'
import ProductMockup from '~/components/mockups/ProductMockup.vue'
import ProductDetailPage from '~/components/products/ProductDetailPage.vue'
import DemoCtaSection from '~/components/sections/DemoCtaSection.vue'

const fallbackHeroMode = ref<'action' | 'mockup'>('action')

const route = useRoute()
const rawSlug = computed(() => route.params.slug as string)
// Normalize 'chizmis' -> 'chismis' to match internal product identifiers
const slug = computed(() => (rawSlug.value === 'chizmis' ? 'chismis' : rawSlug.value))

const product = computed(() => getProduct(slug.value))
const productDetail = computed(() => getProductDetail(slug.value))
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


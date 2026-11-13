<!--
  ProductDetailPage.vue
  Purpose: Full, dedicated product landing page experience matching the Figma designs
  for Acumen, SmartJuan, Chismis, and Presidio. Includes custom brand navbar, dedicated hero section with
  mockup, ecosystem hub constellation diagram, 6 in-depth feature deep dives, custom bottom CTA banner,
  and product-branded footer.
-->
<template>
  <div
    class="relative min-h-screen bg-bg text-ink transition-colors duration-300"
    :style="{
      '--product-accent': accentHex,
      '--product-accent-soft': accentSoft,
      '--product-accent-ring': accentRing,
    }"
  >
    <!-- 1. Dedicated Product Top Navbar (Independent for each product) -->
    <header class="sticky top-0 z-40 border-b border-line bg-glass backdrop-blur-xl">
      <UiContainer class-name="flex h-16 items-center justify-between">
        <!-- Brand identity -->
        <div class="flex items-center gap-4">
          <NuxtLink
            to="/#products"
            class="inline-flex items-center gap-1.5 text-[13px] text-ink-3 transition-colors hover:text-ink"
            aria-label="Back to Beespoke Solutions products overview"
          >
            <ArrowLeft class="size-3.5" aria-hidden="true" />
            <span class="hidden sm:inline">Beespoke</span>
          </NuxtLink>
          <span class="text-line-strong">/</span>
          <div class="flex items-center gap-2.5">
            <span
              class="size-2.5 rounded-full"
              :style="{ background: accentHex }"
              aria-hidden="true"
            />
            <span class="text-[17px] font-bold tracking-tight text-ink uppercase">
              {{ detail.brandTitle }}
            </span>
            <span
              v-if="detail.tagline"
              class="hidden font-mono text-[10.5px] text-ink-3 lg:inline"
            >
              · {{ detail.tagline }}
            </span>
          </div>
        </div>

        <!-- Navigation links matching the design -->
        <nav class="hidden md:flex items-center gap-7 text-[13.5px] font-medium text-ink-2">
          <a
            v-for="link in navLinks"
            :key="link.label"
            :href="link.href"
            class="transition-colors hover:text-ink"
          >
            {{ link.label }}
          </a>
        </nav>

        <!-- Header Actions -->
        <div class="flex items-center gap-3">
          <ThemeToggle />
          <UiButton
            size="sm"
            variant="secondary"
            :to="sectionHref('contact')"
            class-name="hidden sm:inline-flex text-[13px]"
          >
            All apps
          </UiButton>
          <button
            type="button"
            class="inline-flex items-center gap-2 rounded-full px-4 py-2 text-[13px] font-medium text-white transition-opacity hover:opacity-95"
            :style="{
              background: accentHex,
              boxShadow: `0 4px 16px -4px ${accentHex}88`,
            }"
            @click="openDemo(detail.slug as any)"
          >
            {{ detail.primaryCta.label }} <UiArrowNudge />
          </button>
        </div>
      </UiContainer>
    </header>

    <!-- 2. Product Hero Section -->
    <section class="relative overflow-hidden pt-12 pb-16 md:pt-20 md:pb-24">
      <!-- Background IT / Industry Image featuring people & environments relevant to this product -->
      <div
        aria-hidden="true"
        class="pointer-events-none absolute inset-0 -z-10 select-none overflow-hidden"
      >
        <img
          v-if="detail.heroVisual?.bgImage"
          :src="detail.heroVisual.bgImage"
          :alt="`${detail.name} application environment`"
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

        <!-- Ambient product-colored radial glow -->
        <div
          class="pointer-events-none absolute inset-x-0 -top-24 h-[520px] opacity-25 blur-3xl"
          :style="{ background: `radial-gradient(ellipse 65% 55% at 60% 25%, ${accentHex}, transparent 75%)` }"
        />
        <div
          class="bg-stripes pointer-events-none absolute -right-24 top-0 size-96 rounded-full opacity-[0.05]"
          :style="{ color: accentHex }"
        />
        <div
          class="bg-dot-grid absolute inset-0 text-ink/[0.05] [mask-image:radial-gradient(ellipse_75%_65%_at_50%_35%,black,transparent)]"
        />
      </div>

      <UiContainer class-name="grid items-center gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-14">
        <!-- Hero Copy -->
        <UiReveal :duration="0.7">
          <div
            class="inline-flex items-center gap-2 rounded-full border border-line-strong bg-elev/80 px-3 py-1 text-[11.5px] font-medium text-ink-2 shadow-sm backdrop-blur"
          >
            <span
              class="size-1.5 rounded-full"
              :style="{ background: accentHex }"
            />
            {{ detail.badgeText }}
          </div>

          <h1
            class="mt-6 text-balance text-[clamp(2.4rem,5.5vw,4.25rem)] font-semibold leading-[1.02] tracking-[-0.04em]"
          >
            {{ detail.heroHeadline.lead }}
            <br />
            <span :style="{ color: accentHex }">
              {{ detail.heroHeadline.highlight }}
            </span>
          </h1>

          <p class="mt-5 max-w-xl text-pretty text-[17px] leading-relaxed text-ink-2 sm:text-[18px]">
            {{ detail.heroDescription }}
          </p>

          <!-- Real-world target users & application tags -->
          <div v-if="detail.heroVisual" class="mt-6 space-y-2.5">
            <div class="flex flex-wrap items-center gap-2">
              <span class="inline-flex items-center gap-1.5 text-[12px] font-semibold text-ink">
                <Users class="size-3.5" :style="{ color: accentHex }" />
                Target Users:
              </span>
              <span
                v-for="badge in detail.heroVisual.audienceBadges"
                :key="badge"
                class="rounded-full border border-line-strong bg-elev/80 px-2.5 py-0.5 text-[11.5px] font-medium text-ink-2 backdrop-blur-xs"
              >
                {{ badge }}
              </span>
            </div>
            <p class="text-[12.5px] text-ink-3">
              <span class="font-medium text-ink-2">Real-world use case:</span> {{ detail.heroVisual.realWorldUseCase }}
            </p>
          </div>

          <!-- Bullet Points with checkmarks -->
          <ul class="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-[13.5px] text-ink-2">
            <li
              v-for="bullet in detail.heroBulletPoints"
              :key="bullet"
              class="flex items-center gap-2"
            >
              <Check class="size-4 shrink-0" :style="{ color: accentHex }" />
              {{ bullet }}
            </li>
          </ul>

          <!-- CTAs -->
          <div class="mt-8 flex flex-col gap-3 sm:flex-row">
            <button
              type="button"
              class="inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-[15px] font-medium text-white transition-opacity hover:opacity-95"
              :style="{
                background: accentHex,
                boxShadow: `0 6px 20px -6px ${accentHex}aa`,
              }"
              @click="openDemo(detail.slug as any)"
            >
              {{ detail.primaryCta.label }} <UiArrowNudge />
            </button>
            <UiButton
              size="lg"
              variant="secondary"
              :href="detail.secondaryCta.href"
            >
              {{ detail.secondaryCta.label }}
            </UiButton>
          </div>
        </UiReveal>

        <!-- Right Side: Lively, Engaging Real-World & Mockup Showcase -->
        <UiReveal :duration="0.9" :delay="0.1">
          <div class="relative overflow-hidden rounded-[20px] border border-line-strong bg-elev shadow-lift">
            <!-- Window header with view switcher -->
            <div class="flex h-11 items-center justify-between border-b border-line bg-sunken/75 px-3.5">
              <div class="flex items-center gap-2">
                <span class="size-2.5 rounded-full" :style="{ background: accentHex }" />
                <span class="text-[12.5px] font-semibold text-ink">{{ detail.name }} In Practice</span>
              </div>

              <!-- View Mode Toggle -->
              <div class="flex items-center rounded-lg border border-line bg-elev/90 p-0.5 text-[11px] font-medium shadow-2xs">
                <button
                  type="button"
                  :class="cn('flex items-center gap-1 rounded-md px-2.5 py-1 transition-colors', heroViewMode === 'action' ? 'bg-elev text-ink shadow-xs font-semibold' : 'text-ink-3 hover:text-ink')"
                  aria-label="Show real-world use case"
                  @click="heroViewMode = 'action'"
                >
                  <Users class="size-3" />
                  <span>Real-World</span>
                </button>
                <button
                  type="button"
                  :class="cn('flex items-center gap-1 rounded-md px-2.5 py-1 transition-colors', heroViewMode === 'mockup' ? 'bg-elev text-ink shadow-xs font-semibold' : 'text-ink-3 hover:text-ink')"
                  aria-label="Show software platform mockup"
                  @click="heroViewMode = 'mockup'"
                >
                  <Layers class="size-3" />
                  <span>Interface</span>
                </button>
              </div>
            </div>

            <!-- Visual Content Panel -->
            <div class="relative min-h-[360px] overflow-hidden sm:min-h-[410px]">
              <!-- View 1: Real-World In Action (People & Enterprise Environments) -->
              <div
                v-if="heroViewMode === 'action'"
                class="relative size-full min-h-[360px] sm:min-h-[410px] overflow-hidden bg-sunken"
              >
                <img
                  v-if="detail.heroVisual?.actionImage"
                  :src="detail.heroVisual.actionImage"
                  :alt="`${detail.name} being used in real-world application`"
                  class="size-full object-cover object-center transition-transform duration-700 hover:scale-105"
                />

                <!-- Photographic vignette for crisp overlay contrast -->
                <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/35 backdrop-blur-[0.5px]" />

                <!-- Top Environment & Impact Badge -->
                <div class="absolute inset-x-4 top-4 flex items-center justify-between gap-2">
                  <span
                    class="inline-flex max-w-[70%] items-center gap-1.5 rounded-full border border-white/20 bg-black/60 px-3 py-1 text-[11.5px] font-medium text-white shadow-sm backdrop-blur-md"
                  >
                    <span class="size-1.5 rounded-full" :style="{ background: accentHex }" />
                    <span class="truncate">{{ detail.heroVisual?.environmentLabel || detail.category }}</span>
                  </span>
                  <span
                    v-if="detail.heroVisual?.impactMetric"
                    class="inline-flex shrink-0 items-center gap-1 rounded-full border border-white/15 bg-white/20 px-3 py-1 text-[11.5px] font-semibold text-white shadow-sm backdrop-blur-md"
                  >
                    <TrendingUp class="size-3.5" />
                    {{ detail.heroVisual.impactMetric.value }}
                  </span>
                </div>

                <!-- Bottom Real-World Operational HUD Card -->
                <div class="absolute inset-x-4 bottom-4 rounded-xl border border-white/15 bg-black/80 p-3.5 text-white backdrop-blur-md shadow-lift">
                  <div class="flex items-center justify-between gap-3">
                    <div class="min-w-0">
                      <p class="truncate text-[13px] font-semibold leading-tight text-white">
                        {{ detail.heroVisual?.floatingStatus.title }}
                      </p>
                      <p class="mt-0.5 truncate text-[11.5px] text-white/80 leading-tight">
                        {{ detail.heroVisual?.floatingStatus.subtitle }}
                      </p>
                    </div>
                    <span
                      class="shrink-0 inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-2.5 py-1 text-[11px] font-medium text-white"
                    >
                      <span class="size-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      {{ detail.heroVisual?.floatingStatus.status }}
                    </span>
                  </div>
                </div>
              </div>

              <!-- View 2: Software Platform Mockup -->
              <div v-else class="p-2">
                <ProductDetailMockup
                  :kind="`${detail.slug}-hero`"
                  :accent-hex="accentHex"
                  :accent-soft="accentSoft"
                />
              </div>
            </div>
          </div>
        </UiReveal>
      </UiContainer>
    </section>

    <!-- 3. Ribbon Quote Strip -->
    <div
      class="border-y border-line py-4 text-center font-mono text-[11.5px] uppercase tracking-[0.16em] text-ink-3"
      :style="{ background: accentSoft }"
    >
      <UiContainer>
        {{ detail.ribbonQuote }}
      </UiContainer>
    </div>

    <!-- 4. The Connected Platform Hub (Constellation Diagram) -->
    <section id="features-hub" class="border-b border-line py-20 md:py-28">
      <UiContainer class-name="grid items-center gap-14 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
        <UiReveal>
          <UiEyebrow :style="{ color: accentHex }">
            {{ detail.hubHeading.eyebrow }}
          </UiEyebrow>
          <h2
            class="mt-4 text-balance text-[clamp(2rem,4vw,3.2rem)] font-semibold leading-[1.05] tracking-[-0.035em]"
          >
            {{ detail.hubHeading.title }}
          </h2>
          <p class="mt-5 max-w-xl text-pretty text-[16.5px] leading-relaxed text-ink-2">
            {{ detail.hubHeading.description }}
          </p>

          <!-- Checklist Grid -->
          <div class="mt-8 grid grid-cols-2 gap-3 text-[14px] sm:grid-cols-3">
            <div
              v-for="item in detail.hubHeading.checklist"
              :key="item"
              class="flex items-center gap-2 rounded-xl border border-line bg-elev/70 px-3 py-2 shadow-sm"
            >
              <Check class="size-3.5 shrink-0" :style="{ color: accentHex }" />
              <span class="font-medium text-ink">{{ item }}</span>
            </div>
          </div>
        </UiReveal>

        <!-- Orbital Constellation Hub Diagram -->
        <UiReveal :delay="0.15">
          <HubDiagram
            :center-label="detail.hubCenterLabel"
            :nodes="detail.hubNodes"
            :accent-hex="accentHex"
            :accent-soft="accentSoft"
          />
        </UiReveal>
      </UiContainer>
    </section>

    <!-- 5. Alternating Deep Dive Feature Sections -->
    <section id="deep-dives" class="divide-y divide-line">
      <article
        v-for="(feature, idx) in detail.deepDives"
        :key="feature.title"
        class="py-20 md:py-28"
      >
        <UiContainer>
          <div
            :class="[
              'grid items-center gap-12 lg:grid-cols-2 lg:gap-16',
              feature.reversed ? 'lg:[&>*:first-child]:order-2' : '',
            ]"
          >
            <!-- Feature Copy -->
            <UiReveal :delay="0.05">
              <span
                v-if="feature.tag"
                class="font-mono text-[11px] uppercase tracking-[0.18em]"
                :style="{ color: accentHex }"
              >
                — {{ feature.tag }}
              </span>

              <h3
                class="mt-3 text-balance text-[clamp(1.85rem,3.4vw,2.75rem)] font-semibold leading-[1.08] tracking-[-0.035em]"
              >
                {{ feature.title }}
              </h3>

              <p class="mt-4 text-pretty text-[16px] leading-relaxed text-ink-2 sm:text-[17px]">
                {{ feature.description }}
              </p>

              <ul v-if="feature.checkList?.length" class="mt-6 space-y-2.5">
                <li
                  v-for="item in feature.checkList"
                  :key="item"
                  class="flex items-start gap-2.5 text-[14.5px] text-ink-2"
                >
                  <Check
                    class="mt-0.5 size-4 shrink-0"
                    :style="{ color: accentHex }"
                  />
                  <span>{{ item }}</span>
                </li>
              </ul>

              <div class="mt-7">
                <button
                  type="button"
                  class="inline-flex items-center gap-2 font-medium text-[14px] transition-opacity hover:opacity-80"
                  :style="{ color: accentHex }"
                  @click="openDemo(detail.slug as any)"
                >
                  See it in {{ detail.name }} <UiArrowNudge />
                </button>
              </div>
            </UiReveal>

            <!-- Feature Simulated UI Mockup -->
            <UiReveal :delay="0.15">
              <ProductDetailMockup
                :kind="feature.mockupKind"
                :accent-hex="accentHex"
                :accent-soft="accentSoft"
              />
            </UiReveal>
          </div>
        </UiContainer>
      </article>
    </section>

    <!-- 6. Bottom Banner CTA Section -->
    <section id="cta-banner" class="border-t border-line py-20 md:py-28">
      <UiContainer>
        <UiReveal
          class-name="relative isolate overflow-hidden rounded-[32px] px-8 py-16 text-center text-white sm:px-14 md:py-24"
          :style="{
            background: `linear-gradient(135deg, ${accentHex}, #111116 85%)`,
            boxShadow: `0 24px 60px -24px ${accentHex}55`,
          }"
        >
          <!-- Background decoration -->
          <div
            aria-hidden="true"
            class="bg-stripes absolute inset-0 -z-10 opacity-10"
          />

          <span class="font-mono text-[11px] uppercase tracking-[0.2em] text-white/70">
            — {{ detail.bottomBanner.eyebrow }}
          </span>

          <h2
            class="mt-4 text-balance text-[clamp(2.1rem,4.6vw,3.6rem)] font-semibold leading-[1.04] tracking-[-0.04em] text-white"
          >
            {{ detail.bottomBanner.title }}
          </h2>

          <p class="mx-auto mt-4 max-w-xl text-pretty text-[17px] text-white/80">
            {{ detail.bottomBanner.description }}
          </p>

          <!-- Store Badges or Primary CTA Button -->
          <div class="mt-8 flex flex-wrap items-center justify-center gap-3">
            <template v-if="detail.bottomBanner.appBadges">
              <button
                type="button"
                class="inline-flex items-center gap-3 rounded-xl border border-white/20 bg-black/40 px-5 py-2.5 text-left text-white backdrop-blur transition-transform hover:scale-105"
                @click="openDemo(detail.slug as any)"
              >
                <span class="text-xl">▶</span>
                <div>
                  <span class="block font-mono text-[9px] uppercase tracking-wider text-white/60">GET IT ON</span>
                  <span class="block font-semibold text-[13px]">Google Play</span>
                </div>
              </button>
              <button
                type="button"
                class="inline-flex items-center gap-3 rounded-xl border border-white/20 bg-black/40 px-5 py-2.5 text-left text-white backdrop-blur transition-transform hover:scale-105"
                @click="openDemo(detail.slug as any)"
              >
                <span class="text-xl"></span>
                <div>
                  <span class="block font-mono text-[9px] uppercase tracking-wider text-white/60">DOWNLOAD ON THE</span>
                  <span class="block font-semibold text-[13px]">App Store</span>
                </div>
              </button>
            </template>
            <template v-else>
              <button
                type="button"
                class="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3 text-[15px] font-semibold text-ink transition-transform hover:scale-105"
                @click="openDemo(detail.slug as any)"
              >
                {{ detail.bottomBanner.ctaLabel }} <UiArrowNudge />
              </button>
              <UiButton
                size="lg"
                variant="secondary"
                :to="sectionHref('contact')"
                class-name="border-white/25 bg-black/30 text-white hover:bg-black/50"
              >
                Talk to Our Team
              </UiButton>
            </template>
          </div>
        </UiReveal>
      </UiContainer>
    </section>

    <!-- 7. Dedicated Product-Specific Footer (Preserves distinct brand identity per product) -->
    <footer class="border-t border-line bg-sunken/60 py-10 text-[13px] text-ink-3">
      <UiContainer class-name="flex flex-col items-center justify-between gap-5 sm:flex-row">
        <!-- Brand & Copyright -->
        <div class="flex flex-wrap items-center gap-3">
          <span
            class="size-2.5 rounded-full"
            :style="{ background: accentHex }"
          />
          <span class="font-bold uppercase tracking-wider text-ink">
            {{ detail.footerMeta.brandName }}
          </span>
          <span class="text-line-strong">·</span>
          <span>{{ detail.footerMeta.copyrightNotice }}</span>
          <span
            v-if="detail.footerMeta.categoryLabel"
            class="hidden text-[11.5px] text-ink-3 md:inline"
          >
            ({{ detail.footerMeta.categoryLabel }})
          </span>
        </div>

        <!-- Links and Beespoke parent link -->
        <div class="flex flex-wrap items-center gap-6">
          <a
            v-for="link in detail.footerMeta.links"
            :key="link.label"
            :href="link.href"
            class="transition-colors hover:text-ink"
          >
            {{ link.label }}
          </a>
          <NuxtLink
            to="/#products"
            class="inline-flex items-center gap-1 font-medium text-ink hover:underline"
          >
            Beespoke Solutions ↗
          </NuxtLink>
        </div>
      </UiContainer>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { ArrowLeft, Check, Layers, TrendingUp, Users } from 'lucide-vue-next'
import type { ProductDetailData } from '~~/shared/types/productDetail'
import { sectionHref } from '~~/shared/content/nav'
import { useDemo } from '~/composables/useDemo'
import { cn } from '~/utils/cn'
import ThemeToggle from '~/components/navigation/ThemeToggle.vue'
import HubDiagram from './HubDiagram.vue'
import ProductDetailMockup from './ProductDetailMockup.vue'

interface Props {
  detail: ProductDetailData
  accentHex: string
  accentSoft: string
  accentRing?: string
}

const props = defineProps<Props>()

const { openDemo } = useDemo()
const heroViewMode = ref<'action' | 'mockup'>('action')

const navLinks = computed(() => {
  if (props.detail.slug === 'presidio') {
    return [
      { label: 'Why Presidio', href: '#features-hub' },
      { label: 'Features', href: '#features-hub' },
      { label: 'Platform', href: '#deep-dives' },
      { label: 'Guest journey', href: '#deep-dives' },
    ]
  }
  return [
    { label: 'Features', href: '#features-hub' },
    { label: 'Platform', href: '#deep-dives' },
    { label: 'Get Started', href: '#cta-banner' },
  ]
})
</script>


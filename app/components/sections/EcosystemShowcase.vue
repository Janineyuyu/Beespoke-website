<!--
  EcosystemShowcase.vue
  Purpose: Interactive hero widget showing auto-cycling product tabs and live UI mockup previews.
  Includes interactive tabs, auto-advancing progress timers, pause-on-hover logic, and floating glass badges (Release pipeline & Connected ecosystem).
-->
<template>
  <div
    class="relative mx-auto w-full max-w-[640px] lg:max-w-none"
    @mouseenter="paused = true"
    @mouseleave="paused = false"
    @focusin="paused = true"
    @focusout="paused = false"
  >
    <!-- Striped orb echoing the logo mark -->
    <div
      aria-hidden="true"
      class="pointer-events-none absolute -right-10 -top-14 size-[340px] rounded-full text-brand/25 sm:size-[420px]"
    >
      <div
        class="bg-stripes size-full rounded-full [mask-image:radial-gradient(circle,black_45%,transparent_70%)]"
      />
    </div>
    <div
      aria-hidden="true"
      class="pointer-events-none absolute -bottom-10 left-10 size-64 rounded-full bg-brand/20 blur-[80px]"
    />

    <UiReveal :duration="0.9" :delay="0.15">
      <div
        class="relative overflow-hidden rounded-[20px] border border-line-strong bg-elev shadow-lift"
      >
        <div class="flex h-11 items-center justify-between border-b border-line bg-sunken/70 px-3">
          <div class="flex items-center gap-2 overflow-hidden">
            <img :src="asset('brand/beespoke-mark.png')" alt="" class="h-4 w-auto shrink-0" />
            <div
              role="tablist"
              aria-label="Beespoke products"
              class="no-scrollbar ml-1 flex gap-1 overflow-x-auto"
            >
              <button
                v-for="(p, i) in products"
                :key="p.slug"
                role="tab"
                type="button"
                :aria-selected="i === currentIndex"
                aria-controls="ecosystem-panel"
                :class="
                  cn(
                    'relative flex shrink-0 items-center gap-1.5 rounded-md px-2.5 py-1 text-[12px] font-medium transition-colors',
                    i === currentIndex ? 'bg-elev text-ink shadow-soft' : 'text-ink-3 hover:text-ink-2',
                  )
                "
                @click="currentIndex = i"
              >
                <span class="size-1.5 rounded-full" :style="{ background: p.accent.hex }" />
                {{ p.name }}
                <span
                  v-if="i === currentIndex && !paused && !reducedMotion"
                  :key="`bar-${currentIndex}`"
                  class="progress-bar absolute inset-x-2 -bottom-[5px] h-[2px] origin-left rounded-full"
                  :style="{ background: p.accent.hex, animationDuration: `${CYCLE_MS}ms` }"
                />
              </button>
            </div>
          </div>

          <!-- View toggle: Live In Action vs App Screen -->
          <div class="ml-2 flex shrink-0 items-center rounded-lg border border-line bg-elev/80 p-0.5 text-[11px] font-medium shadow-2xs">
            <button
              type="button"
              :class="cn('flex items-center gap-1 rounded-md px-2 py-0.5 transition-colors', viewMode === 'action' ? 'bg-elev text-ink shadow-xs font-semibold' : 'text-ink-3 hover:text-ink')"
              aria-label="Show real-world application"
              @click="viewMode = 'action'"
            >
              <Users class="size-3" />
              <span class="hidden sm:inline">In Action</span>
            </button>
            <button
              type="button"
              :class="cn('flex items-center gap-1 rounded-md px-2 py-0.5 transition-colors', viewMode === 'screen' ? 'bg-elev text-ink shadow-xs font-semibold' : 'text-ink-3 hover:text-ink')"
              aria-label="Show app interface mockup"
              @click="viewMode = 'screen'"
            >
              <Layers class="size-3" />
              <span class="hidden sm:inline">Interface</span>
            </button>
          </div>
        </div>

        <div
          id="ecosystem-panel"
          role="tabpanel"
          :aria-label="`${activeProduct.name} preview`"
          class="@container relative h-[330px] overflow-hidden sm:h-[350px]"
        >
          <Transition name="fade-screen" mode="out-in">
            <!-- View Mode: In Action (People, environments & real-world use cases) -->
            <div
              v-if="viewMode === 'action'"
              :key="`action-${activeProduct.slug}`"
              class="relative size-full overflow-hidden bg-sunken"
            >
              <!-- Photographic real-world image -->
              <img
                v-if="activeProduct.heroVisual?.actionImage"
                :src="activeProduct.heroVisual.actionImage"
                :alt="`${activeProduct.name} in action`"
                class="size-full object-cover object-center transition-transform duration-700 hover:scale-105"
              />

              <!-- Atmospheric dark gradient vignette for readable overlays -->
              <div
                class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/30 backdrop-blur-[0.5px]"
              />

              <!-- Top floating environment & impact metric pill -->
              <div class="absolute inset-x-3.5 top-3.5 flex items-center justify-between gap-2">
                <span
                  class="inline-flex max-w-[70%] truncate items-center gap-1.5 rounded-full border border-white/20 bg-black/60 px-2.5 py-1 text-[11px] font-medium text-white shadow-sm backdrop-blur-md"
                >
                  <span class="size-1.5 shrink-0 rounded-full" :style="{ background: activeProduct.accent.hex }" />
                  <span class="truncate">{{ activeProduct.heroVisual?.environmentLabel || activeProduct.category }}</span>
                </span>
                <span
                  v-if="activeProduct.heroVisual?.impactMetric"
                  class="inline-flex shrink-0 items-center gap-1 rounded-full border border-white/15 bg-white/20 px-2.5 py-1 text-[11px] font-semibold text-white shadow-sm backdrop-blur-md"
                >
                  <TrendingUp class="size-3" />
                  {{ activeProduct.heroVisual.impactMetric.value }}
                </span>
              </div>

              <!-- Bottom operational context HUD card -->
              <div class="absolute inset-x-3.5 bottom-3.5 rounded-xl border border-white/15 bg-black/75 p-3 text-white backdrop-blur-md shadow-lift">
                <div class="flex items-center justify-between gap-2">
                  <div class="flex items-center gap-2.5 min-w-0">
                    <span
                      class="grid size-7 shrink-0 place-items-center rounded-lg text-white"
                      :style="{ background: activeProduct.accent.hex }"
                    >
                      <component :is="activeProduct.icon" class="size-3.5" />
                    </span>
                    <div class="min-w-0">
                      <p class="truncate text-[12.5px] font-semibold leading-tight text-white">
                        {{ activeProduct.heroVisual?.floatingStatus.title || activeProduct.name }}
                      </p>
                      <p class="truncate text-[11px] text-white/75 leading-tight">
                        {{ activeProduct.heroVisual?.realWorldUseCase || activeProduct.description }}
                      </p>
                    </div>
                  </div>
                  <span
                    class="hidden shrink-0 items-center gap-1 rounded-full border border-white/20 bg-white/10 px-2 py-0.5 text-[10.5px] font-medium text-white/90 sm:inline-flex"
                  >
                    <span class="size-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    {{ activeProduct.heroVisual?.floatingStatus.status || 'Active' }}
                  </span>
                </div>
              </div>
            </div>

            <!-- View Mode: Screen (Interactive App Mockup) -->
            <div
              v-else
              :key="`screen-${activeProduct.slug}`"
              class="h-full"
            >
              <ProductScreen :slug="activeProduct.slug" />
            </div>
          </Transition>
        </div>
      </div>
    </UiReveal>

    <!-- Floating card: release pipeline -->
    <UiReveal
      :duration="0.8"
      :delay="0.55"
      class-name="absolute -right-3 top-[38%] hidden w-48 rounded-2xl border border-line-strong bg-glass p-3.5 shadow-lift backdrop-blur-xl sm:block lg:-right-8"
    >
      <div aria-hidden="true">
        <p class="font-mono text-[9.5px] uppercase tracking-[0.14em] text-ink-3">
          Release pipeline
        </p>
        <ul class="mt-2.5 space-y-2 text-[12px]">
          <li
            v-for="(stage, i) in ['Build', 'Quality checks', 'Deploy']"
            :key="stage"
            class="flex items-center gap-2"
          >
            <span
              v-if="i < 2"
              class="grid size-4 place-items-center rounded-full bg-emerald-500/15 text-emerald-600 dark:text-emerald-400"
            >
              <Check class="size-2.5" />
            </span>
            <LoaderCircle
              v-else
              class="size-4 animate-spin text-brand"
            />
            <span :class="i < 2 ? 'text-ink-2' : 'font-medium text-ink'">{{ stage }}</span>
          </li>
        </ul>
      </div>
    </UiReveal>

    <!-- Floating card: connected ecosystem -->
    <UiReveal
      :duration="0.8"
      :delay="0.7"
      class-name="absolute -bottom-8 -left-4 hidden items-center gap-3 rounded-2xl border border-line-strong bg-glass p-3 pr-4 shadow-lift backdrop-blur-xl sm:flex lg:-left-10"
    >
      <div aria-hidden="true" class="flex items-center gap-3">
        <div class="relative grid size-11 place-items-center rounded-xl bg-ink/[0.04]">
          <img :src="asset('brand/beespoke-mark.png')" alt="" class="h-6 w-auto" />
        </div>
        <div class="flex -space-x-1.5">
          <span
            v-for="p in products"
            :key="p.slug"
            class="grid size-7 place-items-center rounded-full border-2 border-elev text-white"
            :style="{ background: p.accent.hex }"
          >
            <component :is="p.icon" class="size-3.5" />
          </span>
        </div>
        <div class="text-[12px] leading-tight">
          <p class="font-semibold">One ecosystem</p>
          <p class="text-ink-3">Real-world IT impact</p>
        </div>
      </div>
    </UiReveal>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref, watch } from 'vue'
import { Check, Layers, LoaderCircle, TrendingUp, Users } from 'lucide-vue-next'
import { products } from '~~/shared/content/products'
import { asset, cn } from '~/utils/cn'
import ProductScreen from '~/components/mockups/ProductScreen.vue'

const CYCLE_MS = 5200

const currentIndex = ref(0)
const paused = ref(false)
const reducedMotion = ref(false)
const viewMode = ref<'action' | 'screen'>('action')

const activeProduct = computed(() => products[currentIndex.value] || products[0])

let timer: ReturnType<typeof setInterval> | null = null

const startCycle = () => {
  stopCycle()
  if (paused.value || reducedMotion.value) return
  timer = setInterval(() => {
    currentIndex.value = (currentIndex.value + 1) % products.length
  }, CYCLE_MS)
}

const stopCycle = () => {
  if (timer) {
    clearInterval(timer)
    timer = null
  }
}

watch([paused, currentIndex], () => {
  startCycle()
})

if (import.meta.client) {
  onMounted(() => {
    reducedMotion.value = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    startCycle()
  })

  onUnmounted(() => {
    stopCycle()
  })
}
</script>

<style scoped>
@keyframes progressAnim {
  from {
    transform: scaleX(0);
  }
  to {
    transform: scaleX(1);
  }
}

.progress-bar {
  animation-name: progressAnim;
  animation-timing-function: linear;
  animation-fill-mode: forwards;
}

.fade-screen-enter-active,
.fade-screen-leave-active {
  transition: opacity 0.4s ease, transform 0.4s ease;
}
.fade-screen-enter-from {
  opacity: 0;
  transform: translateY(10px);
}
.fade-screen-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}
</style>


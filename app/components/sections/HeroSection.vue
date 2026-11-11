<template>
  <section
    id="top"
    tabindex="-1"
    aria-labelledby="hero-title"
    class="relative overflow-hidden pt-[68px] outline-none"
  >
    <div
      aria-hidden="true"
      class="bg-dot-grid pointer-events-none absolute inset-0 text-ink/[0.07] [mask-image:radial-gradient(ellipse_70%_60%_at_60%_30%,black,transparent)]"
    />
    <UiContainer class-name="relative grid items-center gap-16 pb-24 pt-14 sm:pt-20 lg:grid-cols-[1fr_1.08fr] lg:gap-12 lg:pb-32 lg:pt-24">
      <div class="max-w-xl">
        <UiReveal :duration="0.6">
          <p
            class="inline-flex items-center gap-2 rounded-full border border-line-strong bg-elev/70 py-1 pl-1 pr-3 text-[12.5px] text-ink-2 shadow-soft backdrop-blur"
          >
            <span
              class="rounded-full bg-brand-soft px-2 py-0.5 font-mono text-[10.5px] uppercase tracking-wider text-brand-ink"
            >
              IT Solutions
            </span>
            Software, AI &amp; digital transformation
          </p>
        </UiReveal>

        <UiReveal :duration="0.8" :delay="0.05">
          <h1
            id="hero-title"
            class="mt-7 text-balance text-[clamp(2.6rem,6.2vw,4.75rem)] font-semibold leading-[0.98] tracking-[-0.045em]"
          >
            Technology That Moves Your Business
            <span class="text-gradient-brand">Forward.</span>
          </h1>
        </UiReveal>

        <UiReveal :duration="0.8" :delay="0.15">
          <p class="mt-6 max-w-lg text-pretty text-[18px] leading-relaxed text-ink-2">
            We build intelligent digital solutions that simplify operations, empower organizations,
            and transform the way businesses work.
          </p>
        </UiReveal>

        <UiReveal :duration="0.8" :delay="0.25">
          <div class="mt-9 flex flex-col gap-3 sm:flex-row">
            <UiButton :to="sectionHref('products')" size="lg">
              Explore Our Solutions <UiArrowNudge />
            </UiButton>
            <UiButton variant="secondary" size="lg" @click="openDemo()">
              Book a Demo
            </UiButton>
          </div>
        </UiReveal>
      </div>

      <EcosystemShowcase />
    </UiContainer>
  </section>
</template>

<script setup lang="ts">
import { sectionHref } from '~~/shared/content/nav'
import { useDemo } from '~/composables/useDemo'
import EcosystemShowcase from './EcosystemShowcase.vue'

const { openDemo } = useDemo()
</script>


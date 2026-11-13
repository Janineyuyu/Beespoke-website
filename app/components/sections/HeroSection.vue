<!--
  HeroSection.vue
  Purpose: Topmost landing page section (#top) introducing Beespoke Solutions.
  Displays an immersive business-related IT background featuring real collaborative teams and company environments,
  primary headline, value proposition subtitle, call-to-action buttons, enterprise trust proof,
  and an interactive EcosystemShowcase widget previewing real-world applications and the product suite.
-->
<template>
  <section
    id="top"
    tabindex="-1"
    aria-labelledby="hero-title"
    class="relative overflow-hidden pt-[68px] outline-none"
  >
    <!-- Business-related IT background featuring collaborative people and modern enterprise environment -->
    <div aria-hidden="true" class="pointer-events-none absolute inset-0 -z-10 select-none overflow-hidden">
      <!-- High-resolution IT team & company environment photography -->
      <img
        src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=2000&q=80"
        alt=""
        class="size-full object-cover object-center opacity-30 dark:opacity-20 transition-transform duration-1000 scale-[1.03]"
        loading="eager"
      />

      <!-- Atmospheric multi-stop gradient overlays for exceptional legibility and modern depth -->
      <div
        class="absolute inset-0 bg-gradient-to-r from-bg via-bg/92 to-bg/70 dark:from-bg dark:via-bg/95 dark:to-bg/80"
      />
      <div
        class="absolute inset-0 bg-gradient-to-b from-bg/60 via-transparent to-bg"
      />

      <!-- Ambient brand glowing orbs -->
      <div
        class="absolute -top-32 left-1/4 size-[520px] rounded-full bg-brand/12 blur-[120px] dark:bg-brand/15"
      />
      <div
        class="absolute -bottom-24 right-10 size-[420px] rounded-full bg-brand-2/10 blur-[100px] dark:bg-brand/10"
      />

      <!-- Dot grid overlay echoing Beespoke branding -->
      <div
        class="bg-dot-grid absolute inset-0 text-ink/[0.06] [mask-image:radial-gradient(ellipse_75%_65%_at_50%_35%,black,transparent)]"
      />
    </div>

    <UiContainer class-name="relative grid items-center gap-16 pb-24 pt-14 sm:pt-20 lg:grid-cols-[1fr_1.08fr] lg:gap-12 lg:pb-32 lg:pt-24">
      <div class="max-w-xl">
        <UiReveal :duration="0.6">
          <p
            class="inline-flex items-center gap-2 rounded-full border border-line-strong bg-elev/80 py-1 pl-1 pr-3.5 text-[12.5px] text-ink-2 shadow-soft backdrop-blur-md"
          >
            <span
              class="rounded-full bg-brand-soft px-2.5 py-0.5 font-mono text-[10.5px] font-medium uppercase tracking-wider text-brand-ink"
            >
              Enterprise IT
            </span>
            <span class="flex items-center gap-1.5 font-medium">
              <span class="inline-block size-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Software, AI &amp; Digital Transformation
            </span>
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
            and transform the way modern businesses and their teams work.
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

          <!-- Enterprise trust & team presence indicator -->
          <div class="mt-10 flex flex-wrap items-center gap-4 pt-6 border-t border-line/60">
            <div class="flex -space-x-2">
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&h=120&q=80"
                alt="IT Team Specialist"
                class="size-8 rounded-full border-2 border-elev object-cover"
              />
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&h=120&q=80"
                alt="Software Engineer"
                class="size-8 rounded-full border-2 border-elev object-cover"
              />
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=120&h=120&q=80"
                alt="Product Specialist"
                class="size-8 rounded-full border-2 border-elev object-cover"
              />
              <img
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&h=120&q=80"
                alt="Solutions Architect"
                class="size-8 rounded-full border-2 border-elev object-cover"
              />
            </div>
            <div class="text-[12.5px] leading-tight">
              <p class="font-medium text-ink">Built with Human-Centered IT</p>
              <p class="text-ink-3">Empowering teams &amp; enterprise operations</p>
            </div>
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


<!--
  AboutSection.vue
  Purpose: The "About Us" section (#about) describing company vision, mission, and philosophy.
  Features a responsive layout with team imagery, mission & vision cards, and structured core approach items.
-->
<template>
  <section
    id="about"
    tabindex="-1"
    aria-labelledby="about-title"
    class="border-t border-line py-24 outline-none md:py-32"
  >
    <UiContainer class-name="grid gap-14 lg:grid-cols-[1fr_1.05fr] lg:gap-20">
      <UiReveal class-name="relative lg:sticky lg:top-28 lg:self-start">
        <figure class="relative overflow-hidden rounded-[28px] border border-line">
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=75"
            srcset="
              https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=700&q=75 700w,
              https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=75 1200w
            "
            sizes="(min-width: 1024px) 560px, 100vw"
            alt="A team collaborating around laptops at a shared table"
            loading="lazy"
            decoding="async"
            width="1200"
            height="800"
            class="aspect-[4/5] w-full object-cover sm:aspect-[4/3] lg:aspect-[4/5]"
          />
          <div
            aria-hidden="true"
            class="absolute inset-0 bg-gradient-to-t from-black/55 via-black/0 to-black/0"
          />
          <figcaption
            class="absolute inset-x-5 bottom-5 flex items-center gap-3 rounded-2xl border border-white/15 bg-black/35 p-4 text-white backdrop-blur-md"
          >
            <Sparkles class="size-5 shrink-0 text-brand-2" aria-hidden="true" />
            <p class="text-[14px] leading-snug">
              Creativity, technical expertise, and business understanding, working as one team.
            </p>
          </figcaption>
        </figure>
        <div
          aria-hidden="true"
          class="bg-stripes absolute -bottom-6 -left-6 -z-10 size-40 rounded-full text-brand/30"
        />
      </UiReveal>

      <div>
        <UiReveal>
          <UiEyebrow>About Us</UiEyebrow>
          <h2
            id="about-title"
            class="mt-5 text-balance text-[clamp(2rem,4.2vw,3.25rem)] font-semibold leading-[1.04] tracking-[-0.035em]"
          >
            Building Technology With Purpose.
          </h2>
          <p class="mt-6 text-pretty text-[17px] leading-relaxed text-ink-2">
            Beespoke Solutions is an IT solutions company committed to developing innovative
            digital products and technology-driven services. We combine creativity, technical
            expertise, and business understanding to create solutions that help organizations
            evolve, operate efficiently, and embrace the future.
          </p>
        </UiReveal>

        <div class="mt-10 grid gap-4 sm:grid-cols-2">
          <UiReveal :delay="0.05" class-name="rounded-3xl border border-line bg-elev p-6 shadow-soft">
            <span class="grid size-9 place-items-center rounded-lg bg-brand-soft text-brand-ink">
              <Compass class="size-[18px]" :stroke-width="1.7" aria-hidden="true" />
            </span>
            <h3 class="mt-5 text-[17px] font-semibold tracking-tight">Our Mission</h3>
            <p class="mt-2 text-[14.5px] leading-relaxed text-ink-2">
              To empower businesses and organizations through accessible, innovative, and reliable
              technology solutions.
            </p>
          </UiReveal>

          <UiReveal :delay="0.12" class-name="rounded-3xl border border-line bg-elev p-6 shadow-soft">
            <span class="grid size-9 place-items-center rounded-lg bg-brand-soft text-brand-ink">
              <Eye class="size-[18px]" :stroke-width="1.7" aria-hidden="true" />
            </span>
            <h3 class="mt-5 text-[17px] font-semibold tracking-tight">Our Vision</h3>
            <p class="mt-2 text-[14.5px] leading-relaxed text-ink-2">
              To become a trusted technology partner recognized for delivering meaningful digital
              innovation and transformative solutions.
            </p>
          </UiReveal>
        </div>

        <UiReveal :delay="0.1" class-name="mt-12">
          <h3 class="font-mono text-[11.5px] uppercase tracking-[0.18em] text-ink-3">
            Our approach to innovation
          </h3>
          <ul class="mt-5 divide-y divide-line border-y border-line">
            <li
              v-for="item in approach"
              :key="item.title"
              class="flex gap-4 py-5"
            >
              <component
                :is="item.icon"
                class="mt-0.5 size-5 shrink-0 text-brand"
                :stroke-width="1.6"
                aria-hidden="true"
              />
              <div>
                <p class="font-semibold tracking-tight">{{ item.title }}</p>
                <p class="mt-1 text-[14.5px] text-ink-2">{{ item.body }}</p>
              </div>
            </li>
          </ul>
          <UiButton
            :to="sectionHref('contact')"
            variant="inverse"
            size="lg"
            class-name="mt-9"
          >
            Get to Know Us <UiArrowNudge />
          </UiButton>
        </UiReveal>
      </div>
    </UiContainer>
  </section>
</template>

<script setup lang="ts">
import { Compass, Eye, Layers, Sparkles, Users } from 'lucide-vue-next'
import { sectionHref } from '~~/shared/content/nav'

const approach = [
  {
    icon: Compass,
    title: 'Purpose before technology',
    body: 'We start from the problem worth solving, then choose the tools.',
  },
  {
    icon: Layers,
    title: 'Built to evolve',
    body: 'Modular, maintainable systems that adapt as your organization grows.',
  },
  {
    icon: Users,
    title: 'Partnership, not handoff',
    body: 'We stay close after launch to improve, support, and scale.',
  },
]
</script>


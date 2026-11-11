<template>
  <section aria-labelledby="demo-cta-title" class="py-20 md:py-28">
    <UiContainer>
      <UiReveal
        class-name="relative isolate overflow-hidden rounded-[32px] bg-[#121216] ring-1 ring-white/10 px-6 py-16 text-white sm:px-14 md:py-24"
      >
        <div
          aria-hidden="true"
          class="bg-stripes absolute inset-0 -z-10 text-white/[0.045] [mask-image:linear-gradient(90deg,transparent,black_60%)]"
        />
        <div
          aria-hidden="true"
          class="absolute -right-24 -top-32 -z-10 size-[460px] rounded-full bg-[#ff7a00]/35 blur-[110px]"
        />
        <div
          aria-hidden="true"
          class="absolute -bottom-40 left-1/4 -z-10 size-[360px] rounded-full bg-[#ffa514]/15 blur-[100px]"
        />

        <div class="grid items-end gap-10 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <p class="inline-flex items-center gap-2 font-mono text-[11.5px] uppercase tracking-[0.18em] text-white/55">
              <CalendarDays class="size-3.5 text-[#ffa514]" aria-hidden="true" /> Book a Demo
            </p>
            <h2
              id="demo-cta-title"
              class="mt-5 max-w-2xl text-balance text-[clamp(2.1rem,4.8vw,3.75rem)] font-semibold leading-[1.02] tracking-[-0.04em]"
            >
              {{ title }}
            </h2>
            <p class="mt-5 max-w-xl text-pretty text-[17px] leading-relaxed text-white/70">
              Experience our solutions firsthand. Schedule a personalized demonstration and
              discover how Beespoke Solutions can support your business.
            </p>
          </div>
          <div class="flex flex-col items-start gap-4 lg:items-end">
            <UiButton
              size="lg"
              class-name="h-14 px-8 text-[16px]"
              @click="openDemo(product)"
            >
              Book a Demo <UiArrowNudge />
            </UiButton>
            <p class="text-[13px] text-white/50">
              Choose a date and time that works for you.
            </p>
          </div>
        </div>
      </UiReveal>
    </UiContainer>
  </section>
</template>

<script setup lang="ts">
import { CalendarDays } from 'lucide-vue-next'
import type { ProductSlug } from '~~/shared/types/products'
import { useDemo } from '~/composables/useDemo'

interface Props {
  product?: ProductSlug
  title?: string
}

withDefaults(defineProps<Props>(), {
  title: 'See What Better Technology Can Do.',
})

const { openDemo } = useDemo()
</script>


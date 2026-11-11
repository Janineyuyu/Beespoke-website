<!--
  ProcessSection.vue
  Purpose: The "How It Works" 4-step process section (#process).
  Visualizes the development lifecycle (Discover -> Strategize -> Develop -> Deploy & Support) with responsive timeline connectors.
-->
<template>
  <section
    id="process"
    tabindex="-1"
    aria-labelledby="process-title"
    class="relative overflow-hidden py-24 outline-none md:py-32"
  >
    <UiContainer>
      <UiSectionHeader
        id="process-title"
        eyebrow="How It Works"
        title="From Vision to Reality."
        description="We turn ideas into impactful digital solutions through a collaborative and structured development process."
        align="center"
      />

      <ol class="relative grid gap-10 md:grid-cols-4 md:gap-8">
        <!-- Connector: vertical on mobile, horizontal on desktop -->
        <span
          aria-hidden="true"
          class="absolute bottom-6 left-[19px] top-6 w-px bg-line-strong md:hidden"
        />
        <span
          aria-hidden="true"
          class="absolute left-[12.5%] right-[12.5%] top-5 hidden h-px bg-line-strong md:block"
        />

        <UiReveal
          v-for="(s, i) in steps"
          :key="s.n"
          :delay="0.15 + i * 0.15"
          class-name="h-full"
        >
          <li class="relative flex gap-5 md:flex-col md:items-center md:gap-0 md:text-center">
            <span
              class="relative z-10 grid size-10 shrink-0 place-items-center rounded-full border border-brand/40 bg-bg font-mono text-[12px] font-medium text-brand-ink shadow-[0_0_0_6px_var(--bg)]"
            >
              {{ s.n }}
            </span>
            <div class="md:mt-7 md:max-w-[15rem]">
              <h3 class="text-[19px] font-semibold tracking-tight">{{ s.title }}</h3>
              <p class="mt-2 text-[14.5px] leading-relaxed text-ink-2">{{ s.body }}</p>
            </div>
          </li>
        </UiReveal>
      </ol>
    </UiContainer>
  </section>
</template>

<script setup lang="ts">
const steps = [
  {
    n: '01',
    title: 'Discover',
    body: 'We understand your business, challenges, goals, and requirements.',
  },
  {
    n: '02',
    title: 'Strategize',
    body: 'We develop a tailored technology strategy and solution aligned with your objectives.',
  },
  {
    n: '03',
    title: 'Develop',
    body: 'Our team designs, builds, tests, and refines your digital solution.',
  },
  {
    n: '04',
    title: 'Deploy & Support',
    body: 'We launch your solution and provide ongoing support, improvements, and maintenance.',
  },
]
</script>


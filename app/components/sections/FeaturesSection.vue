<!--
  FeaturesSection.vue
  Purpose: The "Capabilities / Services" section (#features).
  Renders an informative header and an 8-item grid of ServiceCard components detailing Beespoke's end-to-end technology services.
-->
<template>
  <section
    id="features"
    tabindex="-1"
    aria-labelledby="features-title"
    class="border-t border-line bg-sunken/50 py-24 outline-none md:py-32"
  >
    <UiContainer>
      <UiSectionHeader
        id="features-title"
        eyebrow="Capabilities"
        title="Everything You Need to Innovate and Grow."
        description="From intelligent software to business automation, our solutions are designed to help organizations operate smarter and achieve better results."
      />

      <ul class="grid overflow-hidden rounded-3xl border border-line bg-line [gap:1px] sm:grid-cols-2 lg:grid-cols-4">
        <ServiceCard
          v-for="(service, i) in services"
          :key="service.title"
          :service="service"
          :index="i"
        />
      </ul>
    </UiContainer>
  </section>
</template>

<script setup lang="ts">
import { services } from '~~/shared/content/services'
import ServiceCard from '~/components/cards/ServiceCard.vue'
</script>


<!--
  CredibilitySection.vue
  Purpose: Credibility strip positioned directly below the Hero section.
  Renders a 4-column responsive grid of PillarCards highlighting Beespoke's 4 core values:
  Innovative Technology, Business-Focused Solutions, Scalable Software, and Reliable Technology Partner.
-->
<template>
  <section aria-label="Why Beespoke Solutions" class="border-y border-line bg-sunken">
    <UiContainer>
      <ul class="grid gap-px bg-line sm:grid-cols-2 lg:grid-cols-4">
        <PillarCard
          v-for="(pillar, i) in pillars"
          :key="pillar.title"
          :icon="pillar.icon"
          :title="pillar.title"
          :body="pillar.body"
          :index="i"
        />
      </ul>
    </UiContainer>
  </section>
</template>

<script setup lang="ts">
import { Blocks, Handshake, Lightbulb, Target } from 'lucide-vue-next'
import PillarCard from '~/components/cards/PillarCard.vue'

const pillars = [
  {
    icon: Lightbulb,
    title: 'Innovative Technology',
    body: 'Modern stacks and practical AI, applied where they create real value.',
  },
  {
    icon: Target,
    title: 'Business-Focused Solutions',
    body: 'Every build starts from your goals, processes, and people.',
  },
  {
    icon: Blocks,
    title: 'Scalable Software',
    body: 'Architecture designed to grow with your users and your data.',
  },
  {
    icon: Handshake,
    title: 'Reliable Technology Partner',
    body: 'Clear communication, steady delivery, and long-term support.',
  },
]
</script>


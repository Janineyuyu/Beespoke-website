<template>
  <section
    id="stories"
    tabindex="-1"
    aria-labelledby="stories-title"
    class="border-t border-line bg-sunken/50 py-24 outline-none md:py-32"
  >
    <UiContainer>
      <UiSectionHeader
        id="stories-title"
        align="center"
        eyebrow="Customer Stories"
        title="Trusted by teams that build with us"
        description="From hotels to classrooms — here's what organizations say about working with Beespoke."
      />

      <ul class="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        <li v-for="(s, i) in stories" :key="s.product">
          <UiReveal :delay="i * 0.08" class-name="h-full">
            <StoryCard :story="s" />
          </UiReveal>
        </li>
      </ul>

      <UiReveal v-if="anyPlaceholder" class-name="mt-8 flex justify-center">
        <UiPlaceholderTag label="Sample testimonials · verified quotes coming soon" />
      </UiReveal>
    </UiContainer>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { stories } from '~~/shared/content/stories'
import StoryCard from '~/components/cards/StoryCard.vue'

const anyPlaceholder = computed(() => stories.some((s) => s.placeholder))
</script>


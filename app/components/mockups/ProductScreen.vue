<!--
  ProductScreen.vue
  Purpose: Router / switcher component that renders the appropriate product mockup UI based on the `slug` prop.
-->
<template>
  <ChismisMockup v-if="slug === 'chismis'" />
  <SmartJuanMockup v-else-if="slug === 'smartjuan'" />
  <AcumenMockup v-else-if="slug === 'acumen'" />
  <PresidioMockup v-else-if="slug === 'presidio'" />
</template>

<script setup lang="ts">
import type { ProductSlug } from '~~/shared/types/products'
import ChismisMockup from './ChismisMockup.vue'
import SmartJuanMockup from './SmartJuanMockup.vue'
import AcumenMockup from './AcumenMockup.vue'
import PresidioMockup from './PresidioMockup.vue'

/**
 * Props:
 * - slug: Determines which mockup component to display
 */
defineProps<{
  slug: ProductSlug
}>()
</script>


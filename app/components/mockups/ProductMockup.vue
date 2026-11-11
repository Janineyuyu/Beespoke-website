<!--
  ProductMockup.vue
  Purpose: Higher-level preview wrapper that frames a product screen within an AppWindow browser frame with a simulated URL bar.
-->
<template>
  <AppWindow :url="config.url" :class-name="className">
    <ProductScreen :slug="slug" />
  </AppWindow>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { ProductSlug } from '~~/shared/types/products'
import AppWindow from './AppWindow.vue'
import ProductScreen from './ProductScreen.vue'

/**
 * Props:
 * - slug: Identifier for the product ('chismis' | 'smartjuan' | 'acumen' | 'presidio')
 * - className: Optional CSS classes applied to the outer container
 */
interface Props {
  slug: ProductSlug
  className?: string
}

const props = defineProps<Props>()

// Simulated domain/path shown in the browser window header for each product
const urls: Record<ProductSlug, string> = {
  chismis: 'app.chismis.ph/feed',
  smartjuan: 'smartjuan.app/home',
  acumen: 'learn.acumen.ai/path',
  presidio: 'presidio.hotel/dashboard',
}

const config = computed(() => ({
  url: urls[props.slug] || '',
}))
</script>


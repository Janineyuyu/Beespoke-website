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

interface Props {
  slug: ProductSlug
  className?: string
}

const props = defineProps<Props>()

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


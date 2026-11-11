<template>
  <UiButton
    type="submit"
    size="lg"
    :disabled="submitting"
    :aria-busy="submitting"
    class-name="w-full sm:w-auto"
  >
    <template v-if="submitting">
      <LoaderCircle class="size-4 animate-spin" aria-hidden="true" />
      {{ busyLabel }}
    </template>
    <template v-else>
      {{ label }}
      <UiArrowNudge />
    </template>
  </UiButton>
</template>

<script setup lang="ts">
import { LoaderCircle } from 'lucide-vue-next'

interface Props {
  submitting: boolean
  label: string
  busyLabel: string
}

defineProps<Props>()
</script>


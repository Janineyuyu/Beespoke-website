<!--
  FormNotice.vue
  Purpose: Inline banner alert that notifies users when a submission fails or when online forms are not yet connected to a backend endpoint.
-->
<template>
  <div
    v-if="status === 'not-configured' || status === 'failed'"
    role="alert"
    :class="
      status === 'not-configured'
        ? 'flex gap-3 rounded-xl border border-brand/30 bg-brand-soft p-3.5 text-[13.5px] leading-relaxed text-ink'
        : 'flex gap-3 rounded-xl border border-red-500/30 bg-red-500/[0.07] p-3.5 text-[13.5px] leading-relaxed text-ink'
    "
  >
    <Info
      v-if="status === 'not-configured'"
      class="mt-0.5 size-4 shrink-0 text-brand-ink"
    />
    <CircleAlert
      v-else
      class="mt-0.5 size-4 shrink-0 text-red-500"
    />
    <p>
      <template v-if="status === 'not-configured'">
        <strong class="font-semibold">Your message was not sent.</strong> Online submissions
        aren’t connected yet. Your details are still in the form. Please contact us directly at
        <a class="font-medium underline underline-offset-2" :href="company.email.href">
          {{ company.email.value }}
        </a>.
      </template>
      <template v-else>
        <strong class="font-semibold">Something went wrong.</strong> We couldn’t send your request.
        Please check your connection and try again.
      </template>
    </p>
  </div>
</template>

<script setup lang="ts">
import { CircleAlert, Info } from 'lucide-vue-next'
import type { SubmitStatus } from '~~/shared/types/forms'
import { company } from '~~/shared/content/company'

defineProps<{
  status: SubmitStatus
}>()
</script>


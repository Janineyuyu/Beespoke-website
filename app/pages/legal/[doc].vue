<template>
  <div v-if="title">
    <section class="pt-[68px]">
      <UiContainer class-name="max-w-3xl py-24 md:py-32">
        <UiEyebrow>Legal</UiEyebrow>
        <h1 class="mt-5 text-[clamp(2.4rem,5vw,3.5rem)] font-semibold tracking-[-0.04em]">
          {{ title }}
        </h1>
        <div class="mt-10 rounded-3xl border border-dashed border-line-strong bg-elev p-7 sm:p-9">
          <div class="flex items-center gap-3">
            <FileText class="size-5 text-brand" aria-hidden="true" />
            <UiPlaceholderTag label="Document in preparation" />
          </div>
          <p class="mt-5 text-[16px] leading-relaxed text-ink-2">
            The official {{ title.toLowerCase() }} for {{ company.name }} is being finalized and will be
            published on this page. If you have a question in the meantime, please contact our
            team.
          </p>
          <UiButton :to="sectionHref('contact')" variant="secondary" class-name="mt-7">
            Contact us
          </UiButton>
        </div>
      </UiContainer>
    </section>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { FileText } from 'lucide-vue-next'
import { company } from '~~/shared/content/company'
import { sectionHref } from '~~/shared/content/nav'

const docs: Record<string, string> = {
  'privacy-policy': 'Privacy Policy',
  'terms-and-conditions': 'Terms & Conditions',
  'cookie-policy': 'Cookie Policy',
}

const route = useRoute()
const docKey = computed(() => route.params.doc as string)
const title = computed(() => docs[docKey.value])

if (!title.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Legal document not found',
    fatal: false,
  })
}

useSeoMeta({
  title: computed(() => (title.value ? `${title.value} | Beespoke Solutions` : 'Legal | Beespoke Solutions')),
})
</script>


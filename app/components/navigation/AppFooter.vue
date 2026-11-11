<!--
  AppFooter.vue
  Purpose: Global application footer.
  Contains company brand mark, description, navigation links grouped by category (Explore, Products, Contact),
  copyright info, legal document links (Privacy, Terms, Cookies), and a smooth "Back to top" button.
-->
<template>
  <footer class="relative border-t border-line bg-sunken">
    <div aria-hidden="true" class="h-[3px] bg-gradient-brand" />
    <UiContainer class-name="pb-10 pt-16">
      <div class="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
        <div class="max-w-sm">
          <UiLogo />
          <p class="mt-5 text-[14.5px] leading-relaxed text-ink-2">{{ company.description }}</p>
          <ul class="mt-6 flex gap-2">
            <li v-for="s in socials" :key="s.network">
              <a
                v-if="s.href"
                :href="s.href"
                target="_blank"
                rel="noreferrer"
                :aria-label="s.label"
                class="grid size-9 place-items-center rounded-full border border-line-strong text-ink-2 transition-colors hover:border-brand hover:text-brand-ink"
              >
                <UiSocialIcon :network="s.network" />
              </a>
              <span
                v-else
                :title="`${s.label} profile coming soon`"
                :aria-label="`${s.label} profile coming soon`"
                class="grid size-9 place-items-center rounded-full border border-dashed border-line-strong text-ink-3"
              >
                <UiSocialIcon :network="s.network" />
              </span>
            </li>
          </ul>
        </div>

        <div>
          <h2 class="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-3">Quick Links</h2>
          <ul class="mt-5 space-y-3 text-[14.5px]">
            <li v-for="id in quickLinks" :key="id">
              <NuxtLink
                :to="sectionHref(id)"
                class="text-ink-2 transition-colors hover:text-ink"
              >
                {{ getNavLabel(id) }}
              </NuxtLink>
            </li>
          </ul>
        </div>

        <div>
          <h2 class="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-3">Our Products</h2>
          <ul class="mt-5 space-y-3 text-[14.5px]">
            <li v-for="p in products" :key="p.slug">
              <NuxtLink
                :to="`/products/${p.slug}`"
                class="group inline-flex items-center gap-2 text-ink-2 transition-colors hover:text-ink"
              >
                <span
                  class="size-1.5 rounded-full"
                  :style="{ background: p.accent.hex }"
                  aria-hidden="true"
                />
                {{ p.name }}
              </NuxtLink>
            </li>
          </ul>
        </div>

        <div>
          <h2 class="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-3">Get in Touch</h2>
          <ul class="mt-5 space-y-3 text-[14.5px]">
            <li>
              <a :href="company.email.href" class="text-ink-2 transition-colors hover:text-ink">
                {{ company.email.value }}
              </a>
            </li>
            <li>
              <a :href="company.phone.href" class="text-ink-2 transition-colors hover:text-ink">
                {{ company.phone.value }}
              </a>
            </li>
            <li class="text-ink-2">{{ company.address.value }}</li>
            <li v-if="hasPlaceholderDetails">
              <UiPlaceholderTag label="Details to be confirmed" />
            </li>
          </ul>
        </div>
      </div>

      <div
        class="mt-14 flex flex-col-reverse gap-6 border-t border-line pt-6 text-[13px] text-ink-3 md:flex-row md:items-center md:justify-between"
      >
        <p>© 2026 Beespoke Solutions. All Rights Reserved.</p>
        <div class="flex flex-wrap items-center gap-x-6 gap-y-3">
          <NuxtLink to="/legal/privacy-policy" class="hover:text-ink">
            Privacy Policy
          </NuxtLink>
          <NuxtLink to="/legal/terms-and-conditions" class="hover:text-ink">
            Terms &amp; Conditions
          </NuxtLink>
          <NuxtLink to="/legal/cookie-policy" class="hover:text-ink">
            Cookie Policy
          </NuxtLink>
          <button
            type="button"
            class="group inline-flex items-center gap-2 rounded-full border border-line-strong bg-elev py-1.5 pl-3.5 pr-1.5 text-ink-2 transition-colors hover:text-ink"
            @click="scrollToTop"
          >
            Back to top
            <span
              class="grid size-6 place-items-center rounded-full bg-brand text-[#1a1206] transition-transform group-hover:-translate-y-0.5"
            >
              <ArrowUp class="size-3.5" />
            </span>
          </button>
        </div>
      </div>
    </UiContainer>
  </footer>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { ArrowUp } from 'lucide-vue-next'
import { company, socials } from '~~/shared/content/company'
import { navItems, sectionHref } from '~~/shared/content/nav'
import { products } from '~~/shared/content/products'

const quickLinks = ['top', 'about', 'features', 'process', 'stories', 'contact'] as const

const getNavLabel = (id: string) => navItems.find((n) => n.id === id)?.label || id

const hasPlaceholderDetails = computed(
  () => company.email.placeholder || company.phone.placeholder || company.address.placeholder,
)

const scrollToTop = () => {
  if (import.meta.client) {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
}
</script>


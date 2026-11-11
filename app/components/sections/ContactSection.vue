<!--
  ContactSection.vue
  Purpose: The "Contact Us" section (#contact).
  Combines the interactive ContactForm inquiry card on the right with direct company contact details (email, phone, address, hours, social links) on the left.
-->
<template>
  <section
    id="contact"
    tabindex="-1"
    aria-labelledby="contact-title"
    class="border-t border-line py-24 outline-none md:py-32"
  >
    <UiContainer class-name="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
      <UiReveal>
        <UiEyebrow>Contact</UiEyebrow>
        <h2
          id="contact-title"
          class="mt-5 text-balance text-[clamp(2rem,4.2vw,3.25rem)] font-semibold leading-[1.04] tracking-[-0.035em]"
        >
          Let’s Build Something Great Together.
        </h2>
        <p class="mt-5 max-w-md text-pretty text-[17px] leading-relaxed text-ink-2">
          Have a project in mind or looking for the right technology partner? Let’s discuss how
          Beespoke Solutions can help bring your ideas to life.
        </p>

        <dl class="mt-10 divide-y divide-line border-y border-line">
          <div
            v-for="row in contactRows"
            :key="row.label"
            class="flex gap-4 py-5"
          >
            <span
              class="grid size-10 shrink-0 place-items-center rounded-xl border border-line-strong text-ink-2"
            >
              <component :is="row.icon" class="size-[18px]" :stroke-width="1.6" aria-hidden="true" />
            </span>
            <div class="min-w-0">
              <dt class="flex flex-wrap items-center gap-2 text-[12.5px] text-ink-3">
                {{ row.label }}
                <UiPlaceholderTag v-if="row.field.placeholder" />
              </dt>
              <dd class="mt-1 break-words text-[15.5px] font-medium">
                <a
                  v-if="row.field.href"
                  :href="row.field.href"
                  class="transition-colors hover:text-brand-ink"
                >
                  {{ row.field.value }}
                </a>
                <template v-else>
                  {{ row.field.value }}
                </template>
              </dd>
            </div>
          </div>
        </dl>

        <div class="mt-8">
          <p class="text-[12.5px] text-ink-3">Follow us</p>
          <ul class="mt-3 flex gap-2">
            <li v-for="s in socials" :key="s.network">
              <a
                v-if="s.href"
                :href="s.href"
                target="_blank"
                rel="noreferrer"
                :aria-label="s.label"
                class="grid size-10 place-items-center rounded-full border border-line-strong text-ink-2 transition-colors hover:border-brand hover:text-brand-ink"
              >
                <UiSocialIcon :network="s.network" />
              </a>
              <span
                v-else
                :title="`${s.label} profile coming soon`"
                :aria-label="`${s.label} profile coming soon`"
                class="grid size-10 place-items-center rounded-full border border-dashed border-line-strong text-ink-3"
              >
                <UiSocialIcon :network="s.network" />
              </span>
            </li>
          </ul>
        </div>
      </UiReveal>

      <UiReveal :delay="0.1" class-name="relative">
        <div
          aria-hidden="true"
          class="absolute -inset-px -z-10 rounded-[30px] bg-gradient-to-br from-brand/30 via-transparent to-transparent"
        />
        <div class="rounded-[28px] border border-line bg-elev p-6 shadow-lift sm:p-9">
          <h3 class="text-[20px] font-semibold tracking-tight">Tell us about your project</h3>
          <p class="mb-7 mt-1.5 text-[14.5px] text-ink-2">
            Fields marked optional can be left blank.
          </p>
          <ContactForm />
        </div>
      </UiReveal>
    </UiContainer>
  </section>
</template>

<script setup lang="ts">
import { Clock, Mail, MapPin, Phone } from 'lucide-vue-next'
import { company, socials } from '~~/shared/content/company'
import ContactForm from '~/components/forms/ContactForm.vue'

const contactRows = [
  { icon: Mail, label: 'Email Address', field: company.email },
  { icon: Phone, label: 'Phone Number', field: company.phone },
  { icon: MapPin, label: 'Office Address', field: company.address },
  { icon: Clock, label: 'Business Hours', field: company.hours },
]
</script>


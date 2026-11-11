<template>
  <Transition name="fade-state" mode="out-in">
    <div
      v-if="status === 'success'"
      key="done"
      class="flex min-h-[420px] flex-col items-center justify-center text-center"
      role="status"
    >
      <span class="grid size-14 place-items-center rounded-full bg-brand-soft text-brand-ink">
        <CircleCheck class="size-7" />
      </span>
      <h3 class="mt-5 text-2xl font-semibold tracking-tight">
        Thank you, your inquiry is in.
      </h3>
      <p class="mt-2 max-w-sm text-ink-2">
        Our team will review your project details and get back to you shortly.
      </p>
      <UiButton variant="secondary" class-name="mt-6" @click="reset">
        Send another inquiry
      </UiButton>
    </div>

    <form
      v-else
      key="form"
      novalidate
      class="grid gap-5 sm:grid-cols-2"
      @submit.prevent="onSubmit"
    >
      <UiTextField
        label="Full Name"
        name="fullName"
        autocomplete="name"
        placeholder="Juan Dela Cruz"
        :model-value="values.fullName"
        :error="errors.fullName"
        @update:model-value="setFieldValue('fullName', $event)"
      />
      <UiTextField
        label="Business Email"
        name="email"
        type="email"
        autocomplete="email"
        placeholder="you@company.com"
        :model-value="values.email"
        :error="errors.email"
        @update:model-value="setFieldValue('email', $event)"
      />
      <UiTextField
        label="Company Name"
        name="company"
        autocomplete="organization"
        optional
        placeholder="Company or organization"
        :model-value="values.company"
        :error="errors.company"
        @update:model-value="setFieldValue('company', $event)"
      />
      <UiTextField
        label="Contact Number"
        name="phone"
        type="tel"
        autocomplete="tel"
        optional
        placeholder="+63 900 000 0000"
        :model-value="values.phone"
        :error="errors.phone"
        @update:model-value="setFieldValue('phone', $event)"
      />
      <UiSelectField
        label="Service Interested In"
        name="service"
        :options="serviceOptions"
        wrapper-class-name="sm:col-span-2"
        :model-value="values.service"
        :error="errors.service"
        @update:model-value="setFieldValue('service', $event)"
      />
      <UiTextAreaField
        label="Project Details / Message"
        name="message"
        placeholder="What are you looking to build or improve? Timelines and goals help us prepare."
        wrapper-class-name="sm:col-span-2"
        :model-value="values.message"
        :error="errors.message"
        @update:model-value="setFieldValue('message', $event)"
      />
      <div class="flex flex-col gap-4 sm:col-span-2">
        <FormNotice :status="status" />
        <div class="flex flex-col-reverse items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p class="text-[12.5px] text-ink-3">
            We only use your details to respond to this inquiry.
          </p>
          <SubmitButton
            :submitting="status === 'submitting'"
            label="Send Inquiry"
            busy-label="Sending"
          />
        </div>
      </div>
    </form>
  </Transition>
</template>

<script setup lang="ts">
import { CircleCheck } from 'lucide-vue-next'
import { serviceOptions } from '~~/shared/content/services'
import type { ContactFormValues } from '~~/shared/types/forms'
import { email, minLength, phone, required } from '~/utils/validation'
import { useFormState } from '~/composables/useFormState'
import SubmitButton from './SubmitButton.vue'
import FormNotice from './FormNotice.vue'

const initial: ContactFormValues = {
  fullName: '',
  email: '',
  company: '',
  phone: '',
  service: '',
  message: '',
}

const { values, errors, status, setFieldValue, reset, onSubmit } = useFormState<ContactFormValues>(
  'contact-inquiry',
  initial,
  {
    fullName: [required('Please enter your full name.')],
    email: [required('Please enter your business email.'), email],
    phone: [phone],
    service: [required('Please choose a service.')],
    message: [required('Tell us a little about your project.'), minLength(20)],
  },
)
</script>

<style scoped>
.fade-state-enter-active,
.fade-state-leave-active {
  transition: opacity 0.25s ease, transform 0.25s ease;
}
.fade-state-enter-from {
  opacity: 0;
  transform: translateY(10px);
}
.fade-state-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}
</style>


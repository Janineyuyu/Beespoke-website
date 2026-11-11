<template>
  <dialog
    ref="dialogRef"
    aria-labelledby="demo-title"
    class="m-auto max-h-[calc(100dvh-2rem)] w-[calc(100%-2rem)] max-w-3xl overflow-hidden rounded-3xl border border-line-strong bg-elev p-0 text-ink shadow-lift"
    @close="closeDemo"
    @click="onBackdropClick"
  >
    <div class="grid max-h-[calc(100dvh-2rem)] md:grid-cols-[0.8fr_1.2fr]">
      <aside class="relative hidden overflow-hidden bg-[#121216] p-8 text-white md:block">
        <div aria-hidden="true" class="bg-stripes absolute inset-0 text-white/[0.05]" />
        <div
          aria-hidden="true"
          class="absolute -bottom-24 -left-16 size-72 rounded-full bg-brand/40 blur-3xl"
        />
        <div class="relative">
          <span class="grid size-10 place-items-center rounded-xl bg-white/10">
            <CalendarDays class="size-5 text-brand-2" />
          </span>
          <h2 class="mt-6 text-2xl font-semibold leading-tight tracking-tight">
            A walkthrough built around your goals.
          </h2>
          <ul class="mt-6 space-y-3 text-[14px] text-white/70">
            <li
              v-for="point in benefits"
              :key="point"
              class="flex gap-2.5"
            >
              <span class="mt-2 size-1 shrink-0 rounded-full bg-brand-2" />
              {{ point }}
            </li>
          </ul>
        </div>
      </aside>

      <div class="overflow-y-auto p-6 sm:p-8">
        <div class="mb-6 flex items-start justify-between gap-4">
          <div>
            <h2 id="demo-title" class="text-[22px] font-semibold tracking-tight">
              Book a Demo
            </h2>
            <p class="mt-1 text-[14px] text-ink-2">
              Pick a time that suits you and we’ll confirm by email.
            </p>
          </div>
          <button
            type="button"
            aria-label="Close"
            class="grid size-9 shrink-0 place-items-center rounded-full border border-line-strong text-ink-2 hover:text-ink"
            @click="closeDemo"
          >
            <X class="size-4" />
          </button>
        </div>

        <Transition name="fade-state" mode="out-in">
          <div
            v-if="status === 'success'"
            key="ok"
            role="status"
            class="py-10 text-center"
          >
            <span class="mx-auto grid size-14 place-items-center rounded-full bg-brand-soft text-brand-ink">
              <CircleCheck class="size-7" />
            </span>
            <h3 class="mt-5 text-xl font-semibold tracking-tight">
              Your demo request is confirmed.
            </h3>
            <p class="mx-auto mt-2 max-w-sm text-[14.5px] text-ink-2">
              {{ values.product }} on {{ formattedDate }} at {{ values.time }}. We’ll send a calendar invite to {{ values.email }}.
            </p>
            <UiButton variant="secondary" class-name="mt-6" @click="closeDemo">
              Done
            </UiButton>
          </div>

          <form
            v-else
            key="form"
            novalidate
            class="grid gap-4 sm:grid-cols-2"
            @submit.prevent="onSubmit"
          >
            <UiTextField
              label="Full Name"
              name="fullName"
              autocomplete="name"
              :model-value="values.fullName"
              :error="errors.fullName"
              @update:model-value="setFieldValue('fullName', $event)"
            />
            <UiTextField
              label="Work Email"
              name="email"
              type="email"
              autocomplete="email"
              :model-value="values.email"
              :error="errors.email"
              @update:model-value="setFieldValue('email', $event)"
            />
            <UiTextField
              label="Company"
              name="company"
              autocomplete="organization"
              :model-value="values.company"
              :error="errors.company"
              @update:model-value="setFieldValue('company', $event)"
            />
            <UiSelectField
              label="Product Interested In"
              name="product"
              :options="productOptions"
              :model-value="values.product"
              :error="errors.product"
              @update:model-value="setFieldValue('product', $event)"
            />
            <UiTextField
              label="Preferred Date"
              name="date"
              type="date"
              :min="getTodayISO()"
              :model-value="values.date"
              :error="errors.date"
              @update:model-value="setFieldValue('date', $event)"
            />
            <UiSelectField
              label="Preferred Time"
              name="time"
              placeholder="Select a time"
              :options="timeSlots"
              :model-value="values.time"
              :error="errors.time"
              @update:model-value="setFieldValue('time', $event)"
            />
            <UiTextAreaField
              label="Additional Notes"
              name="notes"
              optional
              placeholder="Anything we should know before the call?"
              class-name="min-h-24"
              wrapper-class-name="sm:col-span-2"
              :model-value="values.notes"
              :error="errors.notes"
              @update:model-value="setFieldValue('notes', $event)"
            />
            <div class="flex flex-col gap-4 sm:col-span-2">
              <FormNotice :status="status" />
              <div class="flex justify-end">
                <SubmitButton
                  :submitting="status === 'submitting'"
                  label="Request Demo"
                  busy-label="Requesting"
                />
              </div>
            </div>
          </form>
        </Transition>
      </div>
    </div>
  </dialog>
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { CalendarDays, CircleCheck, X } from 'lucide-vue-next'
import { products } from '~~/shared/content/products'
import type { DemoFormValues } from '~~/shared/types/forms'
import { email, futureDate, required } from '~/utils/validation'
import { formatDateLong, getTodayISO } from '~/utils/formatting'
import { useDemo } from '~/composables/useDemo'
import { useFormState } from '~/composables/useFormState'
import SubmitButton from './SubmitButton.vue'
import FormNotice from './FormNotice.vue'

const timeSlots = ['9:00 AM', '10:00 AM', '11:00 AM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM']
const productOptions = [...products.map((p) => p.name), 'Custom solution / Not sure yet']

const benefits = [
  'A guided tour of the product you choose',
  'Answers to your team’s questions',
  'Next steps tailored to your needs',
]

const { isOpen, selectedProduct, closeDemo } = useDemo()
const dialogRef = ref<HTMLDialogElement | null>(null)

const initial: DemoFormValues = {
  fullName: '',
  email: '',
  company: '',
  product: '',
  date: '',
  time: '',
  notes: '',
}

const { values, errors, status, setFieldValue, reset, onSubmit } = useFormState<DemoFormValues>(
  'demo-request',
  initial,
  {
    fullName: [required('Please enter your full name.')],
    email: [required('Please enter your work email.'), email],
    company: [required('Please enter your company.')],
    product: [required('Choose a product.')],
    date: [required('Choose a preferred date.'), futureDate],
    time: [required('Choose a preferred time.')],
  },
)

const formattedDate = computed(() => formatDateLong(values.value.date))

watch(
  [isOpen, selectedProduct],
  ([open, prod]) => {
    if (!dialogRef.value) return
    if (open) {
      reset()
      const found = products.find((p) => p.slug === prod)?.name
      if (found) {
        setFieldValue('product', found)
      }
      if (!dialogRef.value.open) {
        dialogRef.value.showModal()
      }
    } else if (dialogRef.value.open) {
      dialogRef.value.close()
    }
  },
)

const onBackdropClick = (e: MouseEvent) => {
  if (e.target === dialogRef.value) {
    closeDemo()
  }
}
</script>

<style scoped>
.fade-state-enter-active,
.fade-state-leave-active {
  transition: opacity 0.25s ease, transform 0.25s ease;
}
.fade-state-enter-from {
  opacity: 0;
  transform: translateY(8px);
}
.fade-state-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}
</style>


<!--
  UiTextAreaField.vue
  Purpose: Accessible multiline text area primitive with dynamic resizing, validation feedback, and optional badge support.
-->
<template>
  <div :class="cn('flex flex-col gap-1.5', wrapperClassName)">
    <label
      :for="textareaId"
      class="flex items-baseline justify-between text-[13px] font-medium text-ink-2"
    >
      <span>{{ label }}</span>
      <span v-if="optional" class="text-[12px] font-normal text-ink-3">Optional</span>
    </label>
    <textarea
      :id="textareaId"
      :name="name"
      :value="modelValue"
      :placeholder="placeholder"
      :disabled="disabled"
      :rows="rows"
      :aria-invalid="Boolean(error) || undefined"
      :aria-describedby="error || hint ? descId : undefined"
      :class="
        cn(
          'peer w-full rounded-xl border bg-elev px-3.5 text-[15px] text-ink placeholder:text-ink-3/70 shadow-[inset_0_1px_1px_rgb(0_0_0/0.03)] outline-none transition-[border-color,box-shadow] duration-150 focus:border-brand focus:ring-4 focus:ring-brand/15 disabled:opacity-60 min-h-32 resize-y py-3 leading-relaxed',
          error ? 'border-red-500/70' : 'border-line-strong',
          className,
        )
      "
      @input="onInput"
    />
    <p
      v-if="error || hint"
      :id="descId"
      :class="cn('text-[12.5px]', error ? 'text-red-600 dark:text-red-400' : 'text-ink-3')"
      :role="error ? 'alert' : undefined"
    >
      {{ error ?? hint }}
    </p>
  </div>
</template>

<script setup lang="ts">
import { useId } from 'vue'
import { cn } from '~/utils/cn'

interface Props {
  label: string
  modelValue?: string
  name?: string
  placeholder?: string
  error?: string
  hint?: string
  optional?: boolean
  disabled?: boolean
  rows?: number
  wrapperClassName?: string
  className?: string
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: '',
  optional: false,
  disabled: false,
  rows: 4,
})

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()

const textareaId = useId()
const descId = `${textareaId}-desc`

const onInput = (e: Event) => {
  const target = e.target as HTMLTextAreaElement
  emit('update:modelValue', target.value)
}
</script>


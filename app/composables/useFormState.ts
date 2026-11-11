import type { FormKind, SubmitStatus, ValidationSchema } from '~~/shared/types/forms'
import { validate } from '~/utils/validation'

export function useFormState<T extends Record<string, string>>(
  kind: FormKind,
  initialValues: T,
  schema: ValidationSchema<T>,
) {
  const values = ref<T>({ ...initialValues }) as Ref<T>
  const errors = ref<Partial<Record<keyof T, string>>>({})
  const attempted = ref(false)
  const status = ref<SubmitStatus>('idle')

  const setFieldValue = (field: keyof T, val: string) => {
    values.value[field] = val as any
    if (attempted.value) {
      errors.value = validate(values.value, schema)
    }
    if (status.value === 'failed' || status.value === 'not-configured') {
      status.value = 'idle'
    }
  }

  const reset = () => {
    values.value = { ...initialValues }
    errors.value = {}
    attempted.value = false
    status.value = 'idle'
  }

  const onSubmit = async (e?: Event) => {
    if (e) e.preventDefault()
    attempted.value = true
    const foundErrors = validate(values.value, schema)
    errors.value = foundErrors

    const firstInvalid = Object.keys(foundErrors)[0]
    if (firstInvalid && import.meta.client) {
      const el = document.querySelector<HTMLElement>(`[name="${firstInvalid}"]`)
      if (el) el.focus()
      return
    }

    status.value = 'submitting'
    try {
      const res = await $fetch<{ ok: boolean; status?: string }>('/api/submit', {
        method: 'POST',
        body: {
          kind,
          data: values.value,
        },
      })

      if (res && res.status === 'not-configured') {
        status.value = 'not-configured'
      } else {
        status.value = 'success'
      }
    } catch (err: any) {
      if (err?.data?.status === 'not-configured' || err?.message?.includes('not-configured')) {
        status.value = 'not-configured'
      } else {
        status.value = 'failed'
      }
    }
  }

  return {
    values,
    errors,
    attempted,
    status,
    setFieldValue,
    reset,
    onSubmit,
  }
}


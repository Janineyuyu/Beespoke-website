import type { ValidationRule, ValidationSchema } from '~~/shared/types/forms'

export const required =
  (message = 'This field is required.'): ValidationRule =>
  (v) =>
    v.trim() ? undefined : message

export const email: ValidationRule = (v) =>
  !v.trim() || /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim())
    ? undefined
    : 'Enter a valid email address.'

export const phone: ValidationRule = (v) =>
  !v.trim() || /^[+()\d\s-]{7,20}$/.test(v.trim()) ? undefined : 'Enter a valid phone number.'

export const minLength =
  (n: number, message?: string): ValidationRule =>
  (v) =>
    !v.trim() || v.trim().length >= n
      ? undefined
      : (message ?? `Please write at least ${n} characters.`)

export const futureDate: ValidationRule = (v) => {
  if (!v) return undefined
  const today = new Date()
  today.setHours(0, 0, 0, 0)
  return new Date(`${v}T00:00:00`) >= today ? undefined : 'Choose today or a later date.'
}

export function validate<T extends Record<string, string>>(
  values: T,
  schema: ValidationSchema<T>,
): Partial<Record<keyof T, string>> {
  const errors: Partial<Record<keyof T, string>> = {}
  for (const key in schema) {
    const rules = schema[key]
    if (rules) {
      for (const rule of rules) {
        const msg = rule(values[key] ?? '')
        if (msg) {
          errors[key] = msg
          break
        }
      }
    }
  }
  return errors
}


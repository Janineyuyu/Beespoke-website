export type FormKind = 'contact-inquiry' | 'demo-request'

export type SubmitStatus = 'idle' | 'submitting' | 'success' | 'not-configured' | 'failed'

export interface ContactFormValues {
  fullName: string
  email: string
  company: string
  phone: string
  service: string
  message: string
}

export interface DemoFormValues {
  fullName: string
  email: string
  company: string
  product: string
  date: string
  time: string
  notes: string
}

export type ValidationRule = (value: string) => string | undefined

export type ValidationSchema<T> = Partial<Record<keyof T, ValidationRule[]>>


import type { ProductSlug } from './products'

export interface Story {
  placeholder: boolean
  product: ProductSlug
  quote: string
  author: string
  role: string
  organization: string
}


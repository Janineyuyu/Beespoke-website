import type { Component } from 'vue'

export type ProductSlug = 'chismis' | 'smartjuan' | 'acumen' | 'presidio'

export interface ProductAccent {
  hex: string
  soft: string
  ring: string
}

export interface ProductFeature {
  title: string
  body: string
}

export interface Product {
  slug: ProductSlug
  name: string
  category: string
  icon: Component
  accent: ProductAccent
  description: string
  longDescription: string
  features: ProductFeature[]
  featuresProvisional?: boolean
  audiences: string[]
}


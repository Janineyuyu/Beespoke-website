export interface CompanyField {
  value: string
  href?: string
  placeholder: boolean
}

export type SocialNetwork = 'linkedin' | 'facebook' | 'instagram' | 'x'

export interface SocialLink {
  network: SocialNetwork
  label: string
  href?: string
}

export interface CompanyInfo {
  name: string
  tagline: string
  description: string
  email: CompanyField
  phone: CompanyField
  address: CompanyField
  hours: CompanyField
}


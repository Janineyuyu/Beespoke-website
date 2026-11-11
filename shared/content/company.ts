import type { CompanyInfo, SocialLink } from '~~/shared/types/company'

export const company: CompanyInfo = {
  name: 'Beespoke Solutions',
  tagline: 'IT solutions & software development',
  description:
    'An IT solutions company building intelligent digital products and technology-driven services that help organizations operate smarter.',
  email: {
    value: 'hello@beespoke-solutions.com',
    href: 'mailto:hello@beespoke-solutions.com',
    placeholder: true,
  },
  phone: {
    value: '+63 (000) 000 0000',
    href: 'tel:+630000000000',
    placeholder: true,
  },
  address: {
    value: 'Office address to be announced',
    placeholder: true,
  },
  hours: {
    value: 'Monday to Friday, 9:00 AM to 6:00 PM',
    placeholder: true,
  },
}

export const socials: SocialLink[] = [
  { network: 'linkedin', label: 'LinkedIn' },
  { network: 'facebook', label: 'Facebook' },
  { network: 'instagram', label: 'Instagram' },
  { network: 'x', label: 'X' },
]


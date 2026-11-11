export interface NavItem {
  id: string
  label: string
}

export const navItems: readonly NavItem[] = [
  { id: 'top', label: 'Home' },
  { id: 'products', label: 'Products' },
  { id: 'features', label: 'Features' },
  { id: 'process', label: 'How It Works' },
  { id: 'about', label: 'About Us' },
  { id: 'stories', label: 'Customer Stories' },
  { id: 'contact', label: 'Contact' },
] as const

export const sectionHref = (id: string): string => `/#${id}`


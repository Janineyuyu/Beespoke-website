export interface ProductSubFeature {
  title: string
  subtitle?: string
  description?: string
  tag?: string
  checkList?: string[]
  mockupKind: string
  mockupData?: any
  reversed?: boolean
}

export interface ProductDetailData {
  slug: string
  name: string
  brandTitle: string
  tagline: string
  badgeText: string
  category: string
  heroHeadline: {
    lead: string
    highlight: string
    tail?: string
  }
  heroDescription: string
  heroBulletPoints: string[]
  primaryCta: {
    label: string
    action: string
  }
  secondaryCta: {
    label: string
    href: string
  }
  ribbonQuote: string
  hubHeading: {
    eyebrow: string
    title: string
    description: string
    checklist: string[]
  }
  hubCenterLabel: {
    main: string
    sub: string
  }
  hubNodes: {
    id: string
    label: string
    icon: string
    angle: number
  }[]
  deepDives: ProductSubFeature[]
  bottomBanner: {
    eyebrow: string
    title: string
    description: string
    ctaLabel: string
    appBadges?: boolean
  }
  footerMeta: {
    brandName: string
    copyrightNotice: string
    categoryLabel: string
    links: { label: string; href: string }[]
  }
}


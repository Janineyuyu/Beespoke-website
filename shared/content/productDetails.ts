import type { ProductDetailData } from '~~/shared/types/productDetail'

export const productDetails: Record<string, ProductDetailData> = {
  acumen: {
    slug: 'acumen',
    name: 'Acumen',
    brandTitle: 'Acumen',
    tagline: 'Your personal study companion',
    badgeText: 'AI · Your personal study companion',
    category: 'AI-Powered Learning Management System',
    heroHeadline: {
      lead: 'Everything you study.',
      highlight: 'A clearer way to understand it.',
    },
    heroDescription:
      'Upload your materials, find your knowledge gaps, and learn with a personalized path that adapts to your confidence.',
    heroBulletPoints: [
      'Built around your notes',
      'Guided by your confidence',
      'Lessons, quizzes & flashcards',
    ],
    heroVisual: {
      bgImage: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=2000&q=80',
      actionImage: 'https://images.unsplash.com/photo-1531545514256-b1400bc00f31?auto=format&fit=crop&w=1200&q=80',
      environmentLabel: 'Higher Education, Tech Academies & Corporate Learning Labs',
      targetUsersLabel: 'Students, Academic Mentors & Corporate Trainees',
      realWorldUseCase: 'Adaptive AI study pathways, personalized tutor explanations, and automated concept retention tracking',
      impactMetric: {
        value: '42%',
        label: 'Faster Concept Mastery',
      },
      floatingStatus: {
        title: 'Adaptive Learning Active',
        subtitle: 'Biochemistry · Module 4 Quiz Ready',
        status: 'Optimal Pacing',
      },
      audienceBadges: ['University Learners', 'Educators & Tutors', 'Enterprise L&D'],
    },
    primaryCta: {
      label: 'Start learning',
      action: 'demo',
    },
    secondaryCta: {
      label: 'Explore the platform',
      href: '#features-hub',
    },
    ribbonQuote: 'Your materials. Your pace. A smarter way to study.',
    hubHeading: {
      eyebrow: 'The platform',
      title: 'One learning journey. Everything connected.',
      description:
        'From your first upload to your next breakthrough, Acumen connects your content, confidence, and study tools in one focused learning experience.',
      checklist: [
        'AI analysis',
        'Assessment',
        'Lesson plans',
        'Study tools',
        'AI chat',
        'Check-ins',
      ],
    },
    hubCenterLabel: {
      main: 'Acumen',
      sub: 'YOUR LEARNING, CONNECTED',
    },
    hubNodes: [
      { id: 'analysis', label: 'AI analysis', icon: 'FileSearch', angle: 300 },
      { id: 'assessment', label: 'Assessment', icon: 'CheckCircle2', angle: 0 },
      { id: 'lesson', label: 'Lesson plans', icon: 'BookOpen', angle: 60 },
      { id: 'tools', label: 'Study tools', icon: 'Layers', angle: 120 },
      { id: 'chat', label: 'AI chat', icon: 'Bot', angle: 180 },
      { id: 'checkins', label: 'Check-ins', icon: 'CalendarClock', angle: 240 },
    ],
    deepDives: [
      {
        tag: 'AI-powered analysis',
        title: 'Your notes, turned into clear concepts.',
        description:
          'Bring what you are studying. Acumen breaks your materials into manageable concepts, so you can see what to learn next.',
        checkList: [
          'Upload course outlines, lecture notes, or textbooks',
          'Support for PDF, DOCX, TXT, and direct text input',
          'Start with your own course content',
        ],
        mockupKind: 'acumen-materials',
        reversed: false,
      },
      {
        tag: 'Confidence-based assessment',
        title: 'Know what you know. Find what needs work.',
        description:
          'A quick assessment and your confidence ratings help reveal the gaps in your understanding.',
        checkList: [
          'Assess your knowledge of key concepts',
          'Rate how confident you feel',
          'Focus your time where it matters most',
        ],
        mockupKind: 'acumen-assessment',
        reversed: true,
      },
      {
        tag: 'Personalized lesson plans',
        title: 'A learning path made around you.',
        description:
          'Move from uncertainty to a clear next step with lessons and practice built around your knowledge gaps.',
        checkList: [
          'Personalized lessons based on your materials',
          'Practice questions for the topics you need',
          'A focused path through each concept',
        ],
        mockupKind: 'acumen-path',
        reversed: false,
      },
      {
        tag: 'Interactive study tools',
        title: 'Make it click, your way.',
        description:
          'Work through a lesson, test yourself with a quiz, or turn a concept over with flashcards.',
        checkList: [
          'Quizzes generated from your content',
          'Flashcards for focused review',
          'Different ways to build understanding',
        ],
        mockupKind: 'acumen-tools',
        reversed: true,
      },
      {
        tag: 'Your learning companion',
        title: 'A little stuck? Talk it through.',
        description:
          'Ask the learning AI about the concepts in your materials and keep exploring until the topic feels clearer.',
        checkList: [
          'Explore concepts through conversation',
          'Ask follow-up questions as you learn',
          'Keep your own content at the center',
        ],
        mockupKind: 'acumen-chat',
        reversed: false,
      },
      {
        tag: 'Smart alerts & notifications',
        title: 'Keep your next step in sight.',
        description:
          'Stay connected to your progress with check-ins, reminders, and suggestions based on your study patterns.',
        checkList: [
          'Regular check-ins on your learning',
          'Study reminders to keep your momentum',
          'Insights to guide your next session',
        ],
        mockupKind: 'acumen-checkins',
        reversed: true,
      },
    ],
    bottomBanner: {
      eyebrow: 'Your next chapter starts here',
      title: 'Less overwhelm. More understanding.',
      description:
        'Bring your materials. Find your focus. Make your next study session count.',
      ctaLabel: 'Start learning with Acumen',
    },
    footerMeta: {
      brandName: 'Acumen',
      copyrightNotice: '© 2026 Acumen · AI assisted learning',
      categoryLabel: 'AI Learning Companion',
      links: [
        { label: 'Pricing', href: '#pricing' },
        { label: 'Privacy', href: '/legal/privacy-policy' },
        { label: 'Terms', href: '/legal/terms-and-conditions' },
      ],
    },
  },

  smartjuan: {
    slug: 'smartjuan',
    name: 'SmartJuan',
    brandTitle: 'SMARTJUAN',
    tagline: 'Local services. One portal. A smarter way.',
    badgeText: 'LGU · One stop shop eGovernment services',
    category: 'Smart Digital Solutions',
    heroHeadline: {
      lead: 'Local services. One portal.',
      highlight: 'A smarter way.',
    },
    heroDescription:
      'Apply for business permits, manage real property taxes, and access municipal services online with SmartJuan.',
    heroBulletPoints: [
      'Business permits',
      'Property taxes',
      'Permits & clearances',
    ],
    heroVisual: {
      bgImage: 'https://images.unsplash.com/photo-1573497620053-ea5300f94f21?auto=format&fit=crop&w=2000&q=80',
      actionImage: 'https://images.unsplash.com/photo-1556740758-90de374c12ad?auto=format&fit=crop&w=1200&q=80',
      environmentLabel: 'Municipal City Halls, Citizen Service Centers & Public Desks',
      targetUsersLabel: 'Everyday Citizens, City Treasurers & Front-Line Desk Officers',
      realWorldUseCase: 'Paperless permit renewals, real-time property tax settlement, and zero-wait public service counters',
      impactMetric: {
        value: '85%',
        label: 'Reduction in Service Wait Times',
      },
      floatingStatus: {
        title: 'Digital Permit Cleared',
        subtitle: 'Quezon City Central Civic Hub',
        status: 'Verified in 45s',
      },
      audienceBadges: ['Local Gov Units (LGUs)', 'Business Owners', 'Civic Residents'],
    },
    primaryCta: {
      label: 'Get started',
      action: 'demo',
    },
    secondaryCta: {
      label: 'Explore services',
      href: '#features-hub',
    },
    ribbonQuote: 'Connecting citizens to a smarter, more efficient community.',
    hubHeading: {
      eyebrow: 'The portal',
      title: 'Everyday government. Better connected.',
      description:
        'SmartJuan brings key municipal services together from starting a business to checking your property tax assessment and following an application.',
      checklist: [
        'Business permits',
        'Renewals',
        'Property tax',
        'Clearances',
        'Application tracking',
        'Your account',
      ],
    },
    hubCenterLabel: {
      main: 'SmartJuan',
      sub: 'ONE STOP SHOP',
    },
    hubNodes: [
      { id: 'permits', label: 'Business permits', icon: 'FileText', angle: 300 },
      { id: 'renewals', label: 'Renewals', icon: 'RotateCw', angle: 0 },
      { id: 'property', label: 'Property tax', icon: 'Home', angle: 60 },
      { id: 'clearances', label: 'Clearances', icon: 'FileCheck', angle: 120 },
      { id: 'tracking', label: 'Application tracking', icon: 'Activity', angle: 180 },
      { id: 'account', label: 'Your account', icon: 'User', angle: 240 },
    ],
    deepDives: [
      {
        tag: 'New business permits',
        title: 'Your next business chapter starts here.',
        description:
          'Bring your business permit application online. SmartJuan gives you a clear starting point for a new business and a way to follow its progress.',
        checkList: [
          'Start a new business permit application',
          'Access business permit services in one portal',
          'Track your application status',
        ],
        mockupKind: 'smartjuan-new-business',
        reversed: false,
      },
      {
        tag: 'Business renewals',
        title: 'Keep your business moving forward.',
        description:
          'Renew an existing business permit through SmartJuan’s dedicated renewal service. Keep your next business requirement within reach.',
        checkList: [
          'A direct path for business permit renewals',
          'Business permit amendment services',
          'Online access through the SmartJuan portal',
        ],
        mockupKind: 'smartjuan-renewals',
        reversed: true,
      },
      {
        tag: 'Real property tax',
        title: 'Your property. A clearer view of your taxes.',
        description:
          'Declare real property, view tax assessments, and make payments online through SmartJuan’s real property tax services.',
        checkList: [
          'Declare a real property online',
          'View assessments and make tax payments',
          'Download official receipts',
        ],
        mockupKind: 'smartjuan-property',
        reversed: false,
      },
      {
        tag: 'Permits & clearances',
        title: 'The documents you need, in one place.',
        description:
          'Find the right place to apply for everyday government certificates and clearances, without searching across different services.',
        checkList: [
          'Community Tax Certificates (Cedula)',
          'Barangay Clearances',
          'Police Clearances',
        ],
        mockupKind: 'smartjuan-permits',
        reversed: true,
      },
      {
        tag: 'Application tracking',
        title: 'Know where your application stands.',
        description:
          'Keep your reference number close. SmartJuan helps you check your application status as it moves through the process.',
        checkList: [
          'Track with your application reference number',
          'Follow the progress of a business permit',
          'Return to the portal for your latest status',
        ],
        mockupKind: 'smartjuan-tracking',
        reversed: false,
      },
      {
        tag: 'Your citizen account',
        title: 'One account. A simpler place to begin.',
        description:
          'Create a SmartJuan account or log in to access the portal. When you need guidance, the help center is a click away.',
        checkList: [
          'Create an account to get started',
          'Log in to access online services',
          'Find answers through the FAQs and support pages',
        ],
        mockupKind: 'smartjuan-account',
        reversed: true,
      },
    ],
    bottomBanner: {
      eyebrow: 'Welcome to SmartJuan',
      title: 'A smarter way to get things done.',
      description:
        'Your local government services, brought together in one portal.',
      ctaLabel: 'Create your SmartJuan account',
    },
    footerMeta: {
      brandName: 'SMARTJUAN',
      copyrightNotice: '© 2026 SmartJuan · eGovernment services',
      categoryLabel: 'LGU eGovernment Portal',
      links: [
        { label: 'Services', href: '#features-hub' },
        { label: 'FAQs & support', href: '#faqs' },
        { label: 'Contact', href: '/#contact' },
      ],
    },
  },

  chismis: {
    slug: 'chismis',
    name: 'Chismis',
    brandTitle: 'chizmis',
    tagline: 'Your stories. Your people. A little Chizmis.',
    badgeText: 'Social · Where stories connect',
    category: 'Social Networking & Digital Community Platform',
    heroHeadline: {
      lead: 'Your stories. Your people.',
      highlight: 'A little Chizmis.',
    },
    heroDescription:
      'Discover what’s buzzing, share with your circles, and find a community for every side of you.',
    heroBulletPoints: [
      'Stories & reels',
      'Public & private communities',
      'Your own aliases',
    ],
    heroVisual: {
      bgImage: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=2000&q=80',
      actionImage: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1200&q=80',
      environmentLabel: 'Creator Collectives, Modern Digital Circles & Campuses',
      targetUsersLabel: 'Community Organizers, Content Creators & Modern Circles',
      realWorldUseCase: 'Vibrant interest-based groups, real-time voice lounges, and multimedia story sharing with privacy aliases',
      impactMetric: {
        value: '3.8x',
        label: 'Higher Community Engagement',
      },
      floatingStatus: {
        title: 'Live Audio Lounge & Stories',
        subtitle: 'Creative Tech Circle · 2,480 Active',
        status: 'Trending Now',
      },
      audienceBadges: ['Community Leaders', 'Digital Creators', 'Campus Networks'],
    },
    primaryCta: {
      label: 'Get Chizmis',
      action: 'demo',
    },
    secondaryCta: {
      label: 'Explore the experience',
      href: '#features-hub',
    },
    ribbonQuote: 'A whole new social experience. Where every story finds its place.',
    hubHeading: {
      eyebrow: 'Explore Chizmis',
      title: 'More ways to share. More reasons to connect.',
      description:
        'From the latest buzz to your closest circle, Chizmis brings stories, communities, creative identities, and social discovery together.',
      checklist: [
        'Stories & reels',
        'Post & sharing',
        'Aliases',
        'Communities',
        'ChizCoins',
        'Chizmart',
      ],
    },
    hubCenterLabel: {
      main: 'Chizmis',
      sub: 'STORIES CONNECT',
    },
    hubNodes: [
      { id: 'stories', label: 'Stories & reels', icon: 'Film', angle: 300 },
      { id: 'posts', label: 'Post & sharing', icon: 'Share2', angle: 0 },
      { id: 'aliases', label: 'Aliases', icon: 'Smile', angle: 60 },
      { id: 'communities', label: 'Communities', icon: 'Users', angle: 120 },
      { id: 'coins', label: 'ChizCoins', icon: 'Coins', angle: 180 },
      { id: 'mart', label: 'Chizmart', icon: 'ShoppingBag', angle: 240 },
    ],
    deepDives: [
      {
        tag: 'Home & Hottest Chizmis',
        title: 'Stay close to what’s happening.',
        description:
          'Catch up on trending stories, explore reels, and stay connected to your local community. There’s always another conversation to discover.',
        checkList: [
          'Discover news, gossip, and trending stories',
          'Stay connected to local conversations',
          'Explore reels and follow your favorite users',
        ],
        mockupKind: 'chismis-discover',
        reversed: false,
      },
      {
        tag: 'Post & sharing',
        title: 'Your story. Your chosen circle.',
        description:
          'Share within communities that make sense for the moment, whether it’s family, friends, or a work group.',
        checkList: [
          'Post and interact within specific communities',
          'Keep group conversations together',
          'Explore advanced sharing options',
        ],
        mockupKind: 'chismis-sharing',
        reversed: true,
      },
      {
        tag: 'The Chizmis Alias',
        title: 'Every side of you has a story.',
        description:
          'Make room for your different interests and creative identities. Chizmis aliases give you more ways to express yourself.',
        checkList: [
          'Create multiple identities for creative purposes',
          'Express yourself through an alias',
          'Build an online presence around your interests',
        ],
        mockupKind: 'chismis-aliases',
        reversed: false,
      },
      {
        tag: 'The Chizmis Community',
        title: 'Find your people. Make your space.',
        description:
          'Bring people together around what connects them. Choose a public or private setting that fits your community.',
        checkList: [
          'Public spaces for wider conversations',
          'Private settings for your chosen group',
          'Communities for people and shared interests',
        ],
        mockupKind: 'chismis-communities',
        reversed: true,
      },
      {
        tag: 'Earn ChizCoins',
        title: 'Make every connection count.',
        description:
          'Engage with content, share your perspective, and take part in the community. ChizCoins add a little extra to the experience.',
        checkList: [
          'Interact with content',
          'Share and engage with your community',
          'Earn ChizCoins through participation',
        ],
        mockupKind: 'chismis-coins',
        reversed: false,
      },
      {
        tag: 'Chizmart & Badge Owners',
        title: 'Where connection meets discovery.',
        description:
          'Explore the social commerce side of Chizmis, with e-stores, brands, and recognition for early adopters.',
        checkList: [
          'Access to multiple e-stores',
          'Selected discounts for Badge Owners',
          'Post boosting for greater visibility',
        ],
        mockupKind: 'chismis-chizmart',
        reversed: true,
      },
    ],
    bottomBanner: {
      eyebrow: 'Join us now',
      title: 'Your next story starts with Chizmis.',
      description:
        'Download the app and find your place in the conversation.',
      ctaLabel: 'Get Chizmis on mobile',
      appBadges: true,
    },
    footerMeta: {
      brandName: 'chizmis',
      copyrightNotice: '© 2026 Chizmis · Where stories connect',
      categoryLabel: 'Social Network & Community',
      links: [
        { label: 'Features', href: '#features-hub' },
        { label: 'Facebook', href: 'https://facebook.com' },
        { label: 'Contact', href: '/#contact' },
      ],
    },
  },

  presidio: {
    slug: 'presidio',
    name: 'Presidio',
    brandTitle: 'PRESIDIO',
    tagline: 'Hotel Management System',
    badgeText: 'HOSPITALITY CLOUD · Every stay, beautifully managed',
    category: 'Hotel Property Management System',
    heroHeadline: {
      lead: 'A calmer front desk.',
      highlight: 'A better guest stay.',
    },
    heroDescription:
      'Presidio brings arrivals, departures, reservations, room availability and guest profiles into one elegant hotel operations workspace — so your team can spend less time navigating systems and more time welcoming guests.',
    heroBulletPoints: [
      'Live room status',
      'One-click check-in',
      'Unified guest history',
    ],
    heroVisual: {
      bgImage: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=2000&q=80',
      actionImage: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80',
      environmentLabel: 'Boutique Hotels, Luxury Resorts & Serviced Suites',
      targetUsersLabel: 'Front-Desk Concierges, General Managers & Housekeeping Leads',
      realWorldUseCase: 'Express 60-second guest check-in, real-time room readiness tracking, and unified guest preference profiles',
      impactMetric: {
        value: '60s',
        label: 'Average Check-in Speed',
      },
      floatingStatus: {
        title: 'VIP Guest Arrival Cleared',
        subtitle: 'Deluxe Suite 402 · Keycard Issued',
        status: 'Room 100% Ready',
      },
      audienceBadges: ['Boutique Hotels', 'Resort Concierges', 'Hospitality Operators'],
    },
    primaryCta: {
      label: 'Get Started',
      action: 'demo',
    },
    secondaryCta: {
      label: 'Explore the experience',
      href: '#features-hub',
    },
    ribbonQuote: 'Built for modern hospitality',
    hubHeading: {
      eyebrow: 'The platform',
      title: 'One platform. Every guest touchpoint.',
      description:
        'Presidio connects the front desk, guest directory, reservations and live room operations so each team member works from the same clear picture of the property.',
      checklist: [
        'Front Desk',
        'Availability',
        'Guest Directory',
        'Room Moves',
        'Reservations',
        'Stay Extensions',
      ],
    },
    hubCenterLabel: {
      main: 'PRESIDIO',
      sub: 'HUB',
    },
    hubNodes: [
      { id: 'frontdesk', label: 'Front Desk', icon: 'Hotel', angle: 300 },
      { id: 'availability', label: 'Availability', icon: 'CheckCircle2', angle: 0 },
      { id: 'directory', label: 'Guest Directory', icon: 'Users', angle: 60 },
      { id: 'roommoves', label: 'Room Moves', icon: 'RotateCw', angle: 120 },
      { id: 'reservations', label: 'Reservations', icon: 'CalendarDays', angle: 180 },
      { id: 'extensions', label: 'Stay Extensions', icon: 'Clock', angle: 240 },
    ],
    deepDives: [
      {
        tag: 'Front Desk Overview',
        title: 'Start every shift with the whole property in view.',
        description:
          'Arrivals, departures, in-house guests, vacant rooms and urgent actions are organized into one calm command center.',
        checkList: [
          'See today’s arrivals and departures at a glance',
          'Complete check-ins and check-outs from the same view',
          'Launch walk-ins, room moves and stay extensions quickly',
        ],
        mockupKind: 'presidio-frontdesk',
        reversed: false,
      },
      {
        tag: 'Guest & Reservation Search',
        title: 'Find the right guest before they finish asking.',
        description:
          'Search across names, booking references, room numbers and phone details, then move directly into the next service action.',
        checkList: [
          'Filter confirmed, in-house and checked-out stays',
          'Open complete guest and reservation profiles',
          'Move from search to service without duplicate entry',
        ],
        mockupKind: 'presidio-search',
        reversed: true,
      },
      {
        tag: 'Reservations',
        title: 'Turn every inquiry into a confident booking.',
        description:
          'A guided reservation flow keeps guest, stay and booking details clear from the first date selection to confirmation.',
        checkList: [
          'Create advance and walk-in reservations',
          'Choose room type and booking source',
          'Keep initial status and stay dates consistent',
        ],
        mockupKind: 'presidio-reservations',
        reversed: false,
      },
      {
        tag: 'Room Operations',
        title: 'Handle room changes without disrupting the stay.',
        description:
          'Select the current guest, capture the reason and compare clean available rooms before confirming the move.',
        checkList: [
          'See room type, floor and readiness together',
          'Review the complete transfer before confirmation',
          'Keep the front desk and inventory synchronized',
        ],
        mockupKind: 'presidio-roomops',
        reversed: true,
      },
      {
        tag: 'Stay Extensions',
        title: 'When plans change, keep the guest settled.',
        description:
          'Extend a stay in a focused flow that keeps the guest, room and current departure details visible throughout.',
        checkList: [
          'Check room continuity before changing dates',
          'Capture the reason for every extension',
          'Update the departure plan for the whole team',
        ],
        mockupKind: 'presidio-extensions',
        reversed: false,
      },
      {
        tag: 'Guest Directory',
        title: 'Remember the person, not just the reservation.',
        description:
          'Keep reliable guest profiles, contact information and stay context together so returning visitors receive more thoughtful service.',
        checkList: [
          'Maintain one dependable profile per guest',
          'See active and previous booking references',
          'Give authorized teams the context they need',
        ],
        mockupKind: 'presidio-directory',
        reversed: true,
      },
    ],
    bottomBanner: {
      eyebrow: 'Join us now',
      title: 'Hospitality Operation without the friction',
      description:
        'Give every team member a clear, responsive workspace for the moments that shape a guest’s stay.',
      ctaLabel: 'Start Presidio now',
    },
    footerMeta: {
      brandName: 'PRESIDIO',
      copyrightNotice: '© 2026 CCCI · Presidio. All rights reserved.',
      categoryLabel: 'Centralized Cloud Computing International, Inc.',
      links: [
        { label: 'Why Presidio', href: '#features-hub' },
        { label: 'Features', href: '#features-hub' },
        { label: 'Platform', href: '#deep-dives' },
        { label: 'Guest journey', href: '#deep-dives' },
      ],
    },
  },
}

export const getProductDetail = (slug: string | undefined): ProductDetailData | undefined => {
  if (!slug) return undefined
  // Normalize variations like 'chizmis' -> 'chismis'
  const norm = slug.toLowerCase() === 'chizmis' ? 'chismis' : slug.toLowerCase()
  return productDetails[norm]
}


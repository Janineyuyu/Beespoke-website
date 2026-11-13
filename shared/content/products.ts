import { BedDouble, BrainCircuit, MessagesSquare, Sparkles } from 'lucide-vue-next'
import type { Product, ProductSlug } from '~~/shared/types/products'

export const products: Product[] = [
  {
    slug: 'chismis',
    name: 'Chismis',
    category: 'Social Networking & Digital Community Platform',
    icon: MessagesSquare,
    accent: { hex: '#7F22FE', soft: 'rgb(123 69 232 / 0.10)', ring: 'rgb(123 69 232 / 0.28)' },
    description:
      'A dynamic social platform designed to connect people, build communities, and create meaningful digital experiences.',
    longDescription:
      'Chismis brings people together around shared interests. It gives communities a home to talk, share, and organize, with the tools moderators need to keep conversations healthy and engaging.',
    features: [
      {
        title: 'Social Networking',
        body: 'Profiles, follows, and personalized feeds that help people find their circle.',
      },
      {
        title: 'Community Management',
        body: 'Groups, roles, and moderation tools for organizers who run thriving spaces.',
      },
      {
        title: 'Digital Content Sharing',
        body: 'Posts, photos, and media sharing designed for easy, expressive publishing.',
      },
      {
        title: 'Interactive Communication',
        body: 'Comments, reactions, and real-time conversations that keep members engaged.',
      },
    ],
    audiences: ['Online communities', 'Organizations & associations', 'Brands building audiences'],
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
  },
  {
    slug: 'smartjuan',
    name: 'SmartJuan',
    category: 'Smart Digital Solutions',
    icon: Sparkles,
    accent: { hex: '#7CCF00', soft: 'rgb(27 214 61 / 0.10)', ring: 'rgb(27 214 61 / 0.28)' },
    description:
      'An intelligent digital solution designed to make everyday processes more accessible, efficient, and convenient.',
    longDescription:
      'SmartJuan turns everyday processes into simple digital experiences. It is built to reduce friction, so tasks that used to take paperwork, queues, or phone calls can be handled in a few taps.',
    features: [
      {
        title: 'Accessible by design',
        body: 'Clear, inclusive interfaces that work for everyone, on any device.',
      },
      {
        title: 'Efficient workflows',
        body: 'Streamlined steps that cut waiting time and remove repetitive manual work.',
      },
      {
        title: 'Convenient everywhere',
        body: 'Start a task on mobile, pick it up on desktop, and track progress in real time.',
      },
      {
        title: 'Intelligent assistance',
        body: 'Smart prompts and guidance that help people complete processes correctly.',
      },
    ],
    featuresProvisional: true,
    audiences: ['Service providers', 'Public-facing organizations', 'Everyday users'],
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
  },
  {
    slug: 'acumen',
    name: 'Acumen',
    category: 'AI-Powered Learning Management System',
    icon: BrainCircuit,
    accent: { hex: '#00BBA7', soft: 'rgb(87 230 223 / 0.10)', ring: 'rgb(87 230 223 / 0.28)' },
    description:
      'An intelligent learning platform that transforms education through AI-powered personalization, interactive learning, and smarter knowledge management.',
    longDescription:
      'Acumen helps schools and organizations deliver learning that adapts to every learner. AI personalizes paths, supports learners with a built-in tutor, and gives educators insight into what is working.',
    features: [
      {
        title: 'AI-Powered Learning',
        body: 'Content and pacing that adapt to each learner’s strengths and gaps.',
      },
      {
        title: 'Intelligent Assessments',
        body: 'Quizzes and evaluations with smart feedback and automated grading.',
      },
      {
        title: 'Adaptive Learning Paths',
        body: 'Personalized sequences that adjust as learners progress.',
      },
      {
        title: 'AI Tutor',
        body: 'An always-available assistant that explains concepts and answers questions.',
      },
      {
        title: 'Learning Analytics',
        body: 'Dashboards that surface engagement, mastery, and at-risk learners.',
      },
      {
        title: 'Course Management',
        body: 'Build, organize, and publish courses with flexible content tools.',
      },
    ],
    audiences: ['Schools & universities', 'Corporate training teams', 'Online academies'],
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
  },
  {
    slug: 'presidio',
    name: 'Presidio',
    category: 'Hotel Property Management System',
    icon: BedDouble,
    accent: { hex: '#FF6900', soft: 'rgb(255 106 0 / 0.10)', ring: 'rgb(255 106 0 / 0.28)' },
    description:
      'A comprehensive hotel management solution designed to streamline hospitality operations and deliver seamless property management.',
    longDescription:
      'Presidio gives hotel teams one place to run the property, from reservations and guest profiles to housekeeping and reporting, so staff can spend less time on admin and more time on guests.',
    features: [
      {
        title: 'Reservation Management',
        body: 'A clear booking calendar with availability, rates, and modifications.',
      },
      {
        title: 'Guest Management',
        body: 'Guest profiles, preferences, and stay history in one record.',
      },
      {
        title: 'Room Management',
        body: 'Room status, housekeeping, and maintenance tracked in real time.',
      },
      {
        title: 'Check-in & Check-out',
        body: 'Fast front-desk flows that keep queues short and records accurate.',
      },
      {
        title: 'Hotel Operations Dashboard',
        body: 'A live overview of arrivals, departures, and occupancy.',
      },
      {
        title: 'Reporting & Analytics',
        body: 'Reports on occupancy, revenue, and performance to guide decisions.',
      },
    ],
    audiences: ['Independent hotels', 'Resorts', 'Serviced apartments'],
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
  },
]

export const getProduct = (slug: string | undefined): Product | undefined =>
  products.find((p) => p.slug === slug)


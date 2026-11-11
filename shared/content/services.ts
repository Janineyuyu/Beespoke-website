import {
  BrainCircuit,
  CodeXml,
  Compass,
  Globe,
  PenTool,
  Puzzle,
  RefreshCcw,
  Workflow,
} from 'lucide-vue-next'
import type { Service } from '~~/shared/types/services'

export const services: Service[] = [
  {
    title: 'Custom Software Development',
    icon: CodeXml,
    body: 'Software built around how your organization actually works, not the other way around.',
  },
  {
    title: 'AI & Intelligent Solutions',
    icon: BrainCircuit,
    body: 'Practical AI that personalizes experiences, surfaces insight, and supports decisions.',
  },
  {
    title: 'Business Process Automation',
    icon: Workflow,
    body: 'Replace repetitive manual work with reliable, auditable automated workflows.',
  },
  {
    title: 'Web & Application Development',
    icon: Globe,
    body: 'Fast, secure web and mobile applications engineered to scale with demand.',
  },
  {
    title: 'Digital Transformation',
    icon: RefreshCcw,
    body: 'Modernize legacy processes and systems with a clear, phased roadmap.',
  },
  {
    title: 'System Integration',
    icon: Puzzle,
    body: 'Connect your tools and data so information flows without double entry.',
  },
  {
    title: 'UI/UX Design',
    icon: PenTool,
    body: 'Research-led interfaces that are intuitive, accessible, and on-brand.',
  },
  {
    title: 'Technology Consulting',
    icon: Compass,
    body: 'Independent guidance on architecture, tooling, and technology investment.',
  },
]

/** Options for the "Service interested in" dropdown. */
export const serviceOptions: string[] = [
  ...services.map((s) => s.title),
  'Chismis',
  'SmartJuan',
  'Acumen',
  'Presidio',
  'Something else',
]


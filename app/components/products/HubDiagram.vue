<!--
  HubDiagram.vue
  Purpose: Circular connected ecosystem / feature constellation diagram matching the Figma design.
  Shows a central branded node surrounded by radiating connected circular feature nodes with dashed orbital ring.
-->
<template>
  <div class="relative mx-auto flex size-[320px] items-center justify-center sm:size-[380px] lg:size-[420px]">
    <!-- Outer subtle orbit rings -->
    <div
      class="pointer-events-none absolute inset-0 rounded-full border border-dashed border-line-strong/60"
      aria-hidden="true"
    />
    <div
      class="pointer-events-none absolute inset-8 rounded-full border border-line/40"
      aria-hidden="true"
    />

    <!-- Radial connector spokes -->
    <svg
      class="pointer-events-none absolute inset-0 size-full text-line-strong"
      viewBox="0 0 420 420"
      aria-hidden="true"
    >
      <line
        v-for="node in nodesWithCoords"
        :key="`line-${node.id}`"
        x1="210"
        y1="210"
        :x2="node.cx"
        :y2="node.cy"
        stroke="currentColor"
        stroke-width="1.25"
        stroke-dasharray="3 3"
        class="opacity-60"
      />
    </svg>

    <!-- Center Brand Hub Node -->
    <div
      class="relative z-10 flex size-24 flex-col items-center justify-center rounded-full border-2 border-elev bg-elev p-2 text-center shadow-lift sm:size-28"
      :style="{ boxShadow: `0 0 0 6px ${accentSoft}, 0 12px 32px -8px ${accentSoft}` }"
    >
      <span
        class="text-[15px] font-bold tracking-tight text-ink sm:text-[17px]"
      >
        {{ centerLabel.main }}
      </span>
      <span
        class="mt-0.5 font-mono text-[7.5px] uppercase tracking-wider text-ink-3 sm:text-[8px]"
      >
        {{ centerLabel.sub }}
      </span>
    </div>

    <!-- Orbital Feature Nodes -->
    <div
      v-for="node in nodesWithCoords"
      :key="node.id"
      class="group absolute z-10 flex flex-col items-center gap-1.5 transition-transform duration-300 hover:scale-110"
      :style="{
        left: `${(node.cx / 420) * 100}%`,
        top: `${(node.cy / 420) * 100}%`,
        transform: 'translate(-50%, -50%)',
      }"
    >
      <div
        class="grid size-10 place-items-center rounded-full border border-line-strong bg-elev text-ink shadow-soft transition-colors duration-200 group-hover:border-current sm:size-11"
        :style="{ color: accentHex }"
      >
        <component
          :is="resolveIcon(node.icon)"
          class="size-4 sm:size-5"
          :stroke-width="1.8"
          aria-hidden="true"
        />
      </div>
      <span
        class="max-w-[70px] text-center text-[10px] font-medium leading-tight text-ink-2 sm:max-w-[85px] sm:text-[11px]"
      >
        {{ node.label }}
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import {
  Activity,
  BookOpen,
  Bot,
  CalendarClock,
  CalendarDays,
  CheckCircle2,
  Clock,
  Coins,
  FileCheck,
  FileSearch,
  FileText,
  Film,
  Home,
  Hotel,
  Layers,
  RotateCw,
  Share2,
  ShoppingBag,
  Smile,
  Sparkles,
  User,
  Users,
} from 'lucide-vue-next'

interface HubNode {
  id: string
  label: string
  icon: string
  angle: number
}

interface Props {
  centerLabel: { main: string; sub: string }
  nodes: HubNode[]
  accentHex: string
  accentSoft: string
}

const props = defineProps<Props>()

const iconMap: Record<string, any> = {
  FileSearch,
  CheckCircle2,
  BookOpen,
  Layers,
  Bot,
  CalendarClock,
  CalendarDays,
  Clock,
  FileText,
  RotateCw,
  Home,
  Hotel,
  FileCheck,
  Activity,
  User,
  Film,
  Share2,
  Smile,
  Users,
  Coins,
  ShoppingBag,
  Sparkles,
}

const resolveIcon = (iconName: string) => iconMap[iconName] || Sparkles

// Calculate coordinates (r = 150 on a 420x420 coordinate system)
const nodesWithCoords = computed(() => {
  const r = 155
  const cx0 = 210
  const cy0 = 210
  return props.nodes.map((node) => {
    const rad = (node.angle * Math.PI) / 180
    const cx = cx0 + r * Math.cos(rad)
    const cy = cy0 + r * Math.sin(rad)
    return {
      ...node,
      cx,
      cy,
    }
  })
})
</script>


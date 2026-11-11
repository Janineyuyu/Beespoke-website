<!--
  SmartJuanMockup.vue
  Purpose: Interactive visual mockup preview for SmartJuan (Smart Digital Solutions & Citizen Services).
  Simulates a citizen portal dashboard: quick-action service tiles, live multi-step application tracking, and automated status alerts.
-->
<template>
  <div
    class="flex h-full min-h-[300px] flex-col gap-3 p-3 text-[11px] text-ink @lg:p-4"
    aria-hidden="true"
  >
    <div class="flex items-center justify-between">
      <div>
        <p class="text-[9.5px] text-ink-3">Good morning</p>
        <p class="text-[14px] font-semibold tracking-tight">What can we help with today?</p>
      </div>
      <span
        class="grid size-7 place-items-center rounded-full text-white"
        :style="{ background: accentColor }"
      >
        <Sparkles class="size-3.5" />
      </span>
    </div>

    <div class="grid grid-cols-2 gap-2 @md:grid-cols-4">
      <div
        v-for="(item, i) in quickActions"
        :key="item.label"
        class="flex items-center gap-2 rounded-xl border border-line bg-elev p-2.5"
        :style="
          i === 0
            ? { borderColor: 'rgb(27 143 214 / 0.35)', background: 'rgb(27 143 214 / 0.06)' }
            : undefined
        "
      >
        <span
          class="grid size-6 place-items-center rounded-lg"
          :style="{ background: 'rgb(27 143 214 / 0.12)', color: accentColor }"
        >
          <component :is="item.icon" class="size-3.5" />
        </span>
        <span class="font-medium">{{ item.label }}</span>
      </div>
    </div>

    <div class="grid flex-1 gap-2 @lg:grid-cols-[1.4fr_1fr]">
      <div class="rounded-xl border border-line bg-elev p-3">
        <div class="flex items-center justify-between">
          <p class="font-semibold">Active request</p>
          <span
            class="rounded-full px-2 py-0.5 text-[9px] font-medium"
            :style="{ background: 'rgb(27 143 214 / 0.12)', color: accentColor }"
          >
            In progress
          </span>
        </div>
        <p class="mt-0.5 text-[9.5px] text-ink-3">Ref. SJ-20481 · Submitted today</p>
        <ol class="mt-3 space-y-2.5">
          <li
            v-for="step in steps"
            :key="step.label"
            class="flex items-center gap-2"
          >
            <span
              class="grid size-4 place-items-center rounded-full border"
              :style="
                step.state === 'done'
                  ? { background: accentColor, borderColor: accentColor, color: 'white' }
                  : step.state === 'current'
                    ? { borderColor: accentColor, color: accentColor }
                    : undefined
              "
            >
              <Check v-if="step.state === 'done'" class="size-2.5" />
              <span
                v-else-if="step.state === 'current'"
                class="size-1.5 rounded-full"
                :style="{ background: accentColor }"
              />
            </span>
            <span :class="step.state === 'next' ? 'text-ink-3' : 'font-medium'">
              {{ step.label }}
            </span>
            <span
              v-if="step.state === 'current'"
              class="ml-auto flex items-center gap-1 text-[9.5px] text-ink-3"
            >
              <Clock class="size-2.5" /> ~2h
            </span>
          </li>
        </ol>
      </div>

      <div
        class="hidden flex-col gap-2 rounded-xl p-3 text-white @lg:flex"
        :style="{ background: `linear-gradient(150deg, ${accentColor}, #0f5f96)` }"
      >
        <Sparkles class="size-3.5 opacity-80" />
        <p class="font-semibold leading-snug">Tip: Your documents are complete.</p>
        <p class="text-[10px] leading-snug text-white/75">
          You can book a pickup slot now to skip the queue.
        </p>
        <span
          class="mt-auto self-start rounded-full bg-white/95 px-2.5 py-1 text-[10px] font-semibold"
          :style="{ color: accentColor }"
        >
          Book slot
        </span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  CalendarDays,
  Check,
  Clock,
  FileText,
  Smartphone,
  Sparkles,
  Wallet,
} from 'lucide-vue-next'

const accentColor = '#1b8fd6'

const quickActions = [
  { icon: FileText, label: 'Requests' },
  { icon: CalendarDays, label: 'Appointments' },
  { icon: Wallet, label: 'Payments' },
  { icon: Smartphone, label: 'Updates' },
]

const steps = [
  { label: 'Submitted', state: 'done' },
  { label: 'Verified', state: 'done' },
  { label: 'Processing', state: 'current' },
  { label: 'Ready for release', state: 'next' },
]
</script>


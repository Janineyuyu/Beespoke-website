<template>
  <div class="flex h-full min-h-[300px] text-[11px] text-ink" aria-hidden="true">
    <main class="flex min-w-0 flex-1 flex-col gap-3 p-3 @lg:p-4">
      <div class="flex items-center gap-3">
        <svg viewBox="0 0 36 36" class="size-11 shrink-0 -rotate-90">
          <circle
            cx="18"
            cy="18"
            r="15"
            fill="none"
            stroke="currentColor"
            stroke-opacity="0.08"
            stroke-width="4"
          />
          <circle
            cx="18"
            cy="18"
            r="15"
            fill="none"
            :stroke="accentColor"
            stroke-width="4"
            stroke-linecap="round"
            :stroke-dasharray="`${progress * 94.2} 94.2`"
          />
        </svg>
        <div class="min-w-0">
          <p class="text-[9.5px] text-ink-3">Course · Module 4 of 6</p>
          <p class="truncate text-[13px] font-semibold tracking-tight">
            Data Literacy Fundamentals
          </p>
        </div>
        <span
          class="ml-auto hidden rounded-full px-2 py-0.5 text-[9.5px] font-medium @md:inline"
          :style="{ background: 'rgb(115 87 230 / 0.12)', color: accentColor }"
        >
          64% complete
        </span>
      </div>

      <div class="rounded-xl border border-line bg-elev p-3">
        <div class="mb-2.5 flex items-center justify-between">
          <p class="font-semibold">Your adaptive path</p>
          <span class="flex items-center gap-1 text-[9.5px] text-ink-3">
            <Sparkles class="size-2.5" :style="{ color: accentColor }" /> Personalized
          </span>
        </div>
        <div class="relative flex items-center justify-between">
          <span class="absolute inset-x-3 top-1/2 h-px -translate-y-1/2 bg-ink/10" />
          <span
            class="absolute left-3 top-1/2 h-px w-[52%] -translate-y-1/2"
            :style="{ background: accentColor }"
          />
          <span
            v-for="(s, i) in pathSteps"
            :key="i"
            class="relative grid size-6 place-items-center rounded-full border bg-elev"
            :style="
              s === 'done'
                ? { background: accentColor, borderColor: accentColor, color: 'white' }
                : s === 'current'
                  ? { borderColor: accentColor, color: accentColor, boxShadow: '0 0 0 4px rgb(115 87 230 / 0.15)' }
                  : { color: 'var(--ink-3)' }
            "
          >
            <Check v-if="s === 'done'" class="size-3" />
            <BookOpen v-else-if="s === 'current'" class="size-3" />
            <Lock v-else class="size-2.5" />
          </span>
        </div>
        <div class="mt-2.5 grid grid-cols-2 gap-2">
          <div class="rounded-lg bg-sunken p-2">
            <p class="text-[9.5px] text-ink-3">Up next</p>
            <p class="font-medium">Reading charts critically</p>
          </div>
          <div class="rounded-lg bg-sunken p-2">
            <p class="text-[9.5px] text-ink-3">Mastery</p>
            <div class="mt-1.5 flex h-1.5 gap-0.5">
              <span
                v-for="(o, i) in [1, 1, 1, 0.5, 0.15]"
                :key="i"
                class="flex-1 rounded-full"
                :style="{ background: accentColor, opacity: o }"
              />
            </div>
          </div>
        </div>
      </div>
    </main>

    <aside class="hidden w-[42%] max-w-56 shrink-0 flex-col border-l border-line bg-sunken/40 @lg:flex">
      <div class="flex items-center gap-1.5 border-b border-line px-3 py-2 font-semibold">
        <span
          class="grid size-5 place-items-center rounded-md text-white"
          :style="{ background: accentColor }"
        >
          <BrainCircuit class="size-3" />
        </span>
        AI Tutor
      </div>
      <div class="flex flex-1 flex-col gap-2 p-3">
        <p class="self-end rounded-xl rounded-br-sm bg-ink px-2.5 py-1.5 text-bg">
          Why is the median better here?
        </p>
        <p class="rounded-xl rounded-bl-sm border border-line bg-elev px-2.5 py-1.5 leading-snug text-ink-2">
          Great question. A few very large values pull the mean upward, so the median better
          reflects a typical case.
        </p>
        <div class="mt-auto flex items-center gap-1.5 rounded-lg border border-line bg-elev px-2 py-1.5 text-ink-3">
          Ask a follow-up
          <Send class="ml-auto size-3" :style="{ color: accentColor }" />
        </div>
      </div>
    </aside>
  </div>
</template>

<script setup lang="ts">
import {
  BookOpen,
  BrainCircuit,
  Check,
  Lock,
  Send,
  Sparkles,
} from 'lucide-vue-next'

const accentColor = '#7357e6'
const progress = 0.64

const pathSteps = ['done', 'done', 'done', 'current', 'locked', 'locked']
</script>


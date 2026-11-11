<template>
  <div
    class="flex h-full min-h-[300px] flex-col gap-3 p-3 text-[11px] text-ink @lg:p-4"
    aria-hidden="true"
  >
    <div class="grid grid-cols-2 gap-2 @md:grid-cols-4">
      <div
        v-for="(stat, i) in stats"
        :key="stat.label"
        class="rounded-xl border border-line bg-elev p-2.5"
      >
        <div class="flex items-center gap-1.5 text-[9.5px] text-ink-3">
          <component
            :is="stat.icon"
            class="size-3"
            :style="i === 0 ? { color: accentColor } : undefined"
          />
          {{ stat.label }}
        </div>
        <p class="mt-1 text-[15px] font-semibold tracking-tight">{{ stat.value }}</p>
      </div>
    </div>

    <div class="flex-1 rounded-xl border border-line bg-elev p-3">
      <div class="mb-2 flex items-center justify-between">
        <p class="font-semibold">Room calendar</p>
        <div class="flex items-center gap-3 text-[9.5px] text-ink-3">
          <span class="flex items-center gap-1">
            <span class="size-2 rounded-sm" :style="{ background: accentColor }" /> Confirmed
          </span>
          <span class="flex items-center gap-1">
            <span class="size-2 rounded-sm" :style="{ background: 'rgb(20 147 107 / 0.3)' }" />
            Tentative
          </span>
        </div>
      </div>
      <div class="grid grid-cols-[34px_repeat(7,1fr)] gap-y-1.5 text-[9.5px]">
        <span />
        <span
          v-for="d in days"
          :key="d"
          class="text-center text-ink-3"
        >
          {{ d }}
        </span>
        <template v-for="r in rooms" :key="r.room">
          <span class="self-center font-mono text-ink-3">{{ r.room }}</span>
          <div class="relative col-span-7 h-6 rounded-md bg-sunken">
            <span
              v-for="b in r.bookings"
              :key="b.g"
              class="absolute inset-y-0.5 flex items-center truncate rounded-[5px] px-1.5 font-medium"
              :style="{
                left: `calc(${(b.s / 7) * 100}% + 2px)`,
                width: `calc(${(b.l / 7) * 100}% - 4px)`,
                background: b.alt ? 'rgb(20 147 107 / 0.22)' : accentColor,
                color: b.alt ? accentColor : 'white',
              }"
            >
              {{ b.g }}
            </span>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { BedDouble, LogIn, LogOut, Users } from 'lucide-vue-next'

const accentColor = '#14936b'

const stats = [
  { icon: BedDouble, label: 'Occupancy', value: '82%' },
  { icon: LogIn, label: 'Arrivals', value: '14' },
  { icon: LogOut, label: 'Departures', value: '9' },
  { icon: Users, label: 'In-house', value: '126' },
]

const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']

const rooms = [
  {
    room: '101',
    bookings: [
      { s: 0, l: 3, g: 'Santos' },
      { s: 4, l: 2, g: 'Lim' },
    ],
  },
  { room: '102', bookings: [{ s: 1, l: 4, g: 'Garcia', alt: true }] },
  {
    room: '103',
    bookings: [
      { s: 0, l: 1, g: 'Cruz' },
      { s: 2, l: 5, g: 'Tan' },
    ],
  },
  { room: '104', bookings: [{ s: 3, l: 3, g: 'Dela Rosa', alt: true }] },
]
</script>


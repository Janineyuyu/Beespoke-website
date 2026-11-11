<!--
  ChismisMockup.vue
  Purpose: Interactive visual mockup preview for Chismis (Social Networking & Community Platform).
  Simulates a modern social feed UI: sidebar channels/circles, user post with image gallery and reaction counters, and trending tags.
-->
<template>
  <div class="flex h-full min-h-[300px] text-[11px] text-ink" aria-hidden="true">
    <aside class="hidden w-40 shrink-0 flex-col gap-1 border-r border-line p-3 @lg:flex">
      <div class="mb-2 flex items-center gap-1.5 font-semibold" :style="{ color: accentColor }">
        <span
          class="grid size-5 place-items-center rounded-md text-white"
          :style="{ background: accentColor }"
        >
          <MessageCircle class="size-3" />
        </span>
        Chismis
      </div>
      <div
        v-for="item in navLinks"
        :key="item.label"
        class="flex items-center gap-2 rounded-md px-2 py-1.5"
        :style="item.active ? { background: 'rgb(232 69 107 / 0.1)', color: accentColor } : undefined"
      >
        <component :is="item.icon" class="size-3.5" />
        {{ item.label }}
      </div>
      <p class="mt-3 px-2 font-mono text-[9px] uppercase tracking-wider text-ink-3">
        Your circles
      </p>
      <div
        v-for="circle in circles"
        :key="circle.name"
        class="flex items-center gap-2 px-2 py-1 text-ink-2"
      >
        <span class="size-2 rounded-sm" :style="{ background: circle.color }" />
        {{ circle.name }}
      </div>
    </aside>

    <main class="flex min-w-0 flex-1 flex-col gap-2.5 bg-sunken/40 p-3">
      <div class="flex items-center gap-2 rounded-lg border border-line bg-elev px-2.5 py-1.5 text-ink-3">
        <Search class="size-3" /> Search people, posts, and circles
      </div>
      <div class="rounded-xl border border-line bg-elev p-3">
        <div class="flex items-center gap-2">
          <MockupAvatar initials="MR" color="#f59e0b" />
          <div class="min-w-0">
            <p class="font-semibold">Mara Reyes</p>
            <p class="text-[9.5px] text-ink-3">Design Guild · 12m</p>
          </div>
        </div>
        <p class="mt-2 leading-snug text-ink-2">
          Sharing the moodboard from Saturday’s meetup. Which direction should we take for the
          poster?
        </p>
        <div class="mt-2 grid grid-cols-3 gap-1.5">
          <div class="aspect-[4/3] rounded-md bg-gradient-to-br from-[#fbcfe8] to-[#e8456b]" />
          <div class="aspect-[4/3] rounded-md bg-gradient-to-br from-[#fde68a] to-[#f97316]" />
          <div class="aspect-[4/3] rounded-md bg-gradient-to-br from-[#c7d2fe] to-[#6366f1]" />
        </div>
        <div class="mt-2.5 flex items-center gap-4 text-ink-3">
          <span class="flex items-center gap-1" :style="{ color: accentColor }">
            <Heart class="size-3 fill-current" /> 48
          </span>
          <span class="flex items-center gap-1">
            <MessageCircle class="size-3" /> 16
          </span>
          <span class="flex items-center gap-1">
            <Share2 class="size-3" /> Share
          </span>
        </div>
      </div>
      <div class="rounded-xl border border-line bg-elev p-3">
        <div class="flex items-center gap-2">
          <MockupAvatar initials="JT" color="#10b981" />
          <div class="flex-1 space-y-1.5">
            <MockupBar w="40%" />
            <MockupBar w="70%" className="bg-ink/[0.06]" />
          </div>
        </div>
      </div>
    </main>

    <aside class="hidden w-36 shrink-0 flex-col gap-2 border-l border-line p-3 @2xl:flex">
      <p class="font-mono text-[9px] uppercase tracking-wider text-ink-3">Trending</p>
      <div v-for="tag in trending" :key="tag.name">
        <p class="font-medium">{{ tag.name }}</p>
        <p class="text-[9.5px] text-ink-3">{{ tag.count }} posts</p>
      </div>
      <button
        type="button"
        class="mt-auto flex items-center justify-center gap-1 rounded-md py-1.5 font-medium text-white"
        :style="{ background: accentColor }"
      >
        <Plus class="size-3" /> New post
      </button>
    </aside>
  </div>
</template>

<script setup lang="ts">
import {
  Bell,
  Heart,
  House,
  MessageCircle,
  Plus,
  Search,
  Share2,
  Users,
} from 'lucide-vue-next'

const accentColor = '#e8456b'

const navLinks = [
  { icon: House, label: 'Home', active: true },
  { icon: Users, label: 'Communities', active: false },
  { icon: Bell, label: 'Notifications', active: false },
]

const circles = [
  { name: 'Design Guild', color: '#f59e0b' },
  { name: 'Weekend Runners', color: '#10b981' },
  { name: 'Local Makers', color: '#6366f1' },
]

const trending = [
  { name: '#MeetupRecap', count: 214 },
  { name: '#OpenStudio', count: 168 },
  { name: '#RunClub', count: 97 },
]
</script>


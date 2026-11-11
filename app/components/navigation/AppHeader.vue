<!--
  AppHeader.vue
  Purpose: Global sticky navigation bar.
  Features:
  - Sticky glass header with blur effect on scroll
  - Active section indicator on desktop using useActiveSection
  - Theme toggle (light/dark mode switch)
  - Quick action buttons ("Contact Us", "Book a Demo")
  - Mobile slide-down navigation menu with focus trap & keyboard Escape handler
-->
<template>
  <header class="fixed inset-x-0 top-0 z-50">
    <div
      :class="
        cn(
          'border-b transition-[background-color,border-color,backdrop-filter] duration-300',
          elevated
            ? 'border-line bg-glass backdrop-blur-xl backdrop-saturate-150'
            : 'border-transparent bg-transparent',
        )
      "
    >
      <div class="mx-auto flex h-[68px] max-w-[1320px] items-center gap-6 px-5 sm:px-8">
        <UiLogo />

        <nav aria-label="Primary" class="ml-4 hidden xl:block">
          <ul class="flex items-center gap-0.5">
            <li v-for="item in navItems" :key="item.id">
              <NuxtLink
                :to="sectionHref(item.id)"
                :aria-current="activeSection === item.id ? 'location' : undefined"
                :class="
                  cn(
                    'relative rounded-full px-3 py-2 text-[13.5px] transition-colors',
                    activeSection === item.id ? 'text-ink' : 'text-ink-2 hover:text-ink',
                  )
                "
              >
                <span
                  v-if="activeSection === item.id"
                  class="absolute inset-0 -z-10 rounded-full bg-ink/[0.06]"
                />
                {{ item.label }}
              </NuxtLink>
            </li>
          </ul>
        </nav>

        <div class="ml-auto flex items-center gap-2">
          <ThemeToggle />
          <UiButton
            :to="sectionHref('contact')"
            variant="secondary"
            size="sm"
            class-name="hidden md:inline-flex"
          >
            Contact Us
          </UiButton>
          <UiButton
            size="sm"
            class-name="hidden sm:inline-flex"
            @click="openDemo()"
          >
            Book a Demo
          </UiButton>
          <button
            type="button"
            class="grid size-9 place-items-center rounded-full border border-line-strong bg-elev text-ink xl:hidden"
            :aria-label="menuOpen ? 'Close menu' : 'Open menu'"
            :aria-expanded="menuOpen"
            aria-controls="mobile-menu"
            @click="menuOpen = !menuOpen"
          >
            <X v-if="menuOpen" class="size-4" />
            <Menu v-else class="size-4" />
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile menu -->
    <Transition name="drawer">
      <div
        v-if="menuOpen"
        id="mobile-menu"
        class="overflow-hidden border-b border-line bg-glass backdrop-blur-xl xl:hidden"
      >
        <nav aria-label="Mobile" class="mx-auto max-w-[1320px] px-5 pb-6 pt-2 sm:px-8">
          <ul class="divide-y divide-line">
            <li v-for="(item, i) in navItems" :key="item.id">
              <NuxtLink
                :to="sectionHref(item.id)"
                :class="
                  cn(
                    'flex items-center justify-between py-3.5 text-[17px] tracking-tight',
                    activeSection === item.id ? 'text-ink' : 'text-ink-2',
                  )
                "
                @click="menuOpen = false"
              >
                {{ item.label }}
                <span class="font-mono text-[11px] text-ink-3">0{{ i + 1 }}</span>
              </NuxtLink>
            </li>
          </ul>
          <div class="mt-5 grid grid-cols-2 gap-3">
            <UiButton
              :to="sectionHref('contact')"
              variant="secondary"
              @click="menuOpen = false"
            >
              Contact Us
            </UiButton>
            <UiButton
              @click="
                menuOpen = false;
                openDemo();
              "
            >
              Book a Demo
            </UiButton>
          </div>
        </nav>
      </div>
    </Transition>
  </header>
</template>

<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref, watch } from 'vue'
import { Menu, X } from 'lucide-vue-next'
import { navItems, sectionHref } from '~~/shared/content/nav'
import { cn } from '~/utils/cn'
import { useDemo } from '~/composables/useDemo'
import { useActiveSection } from '~/composables/useActiveSection'
import ThemeToggle from './ThemeToggle.vue'

const route = useRoute()
const { openDemo } = useDemo()

const isHome = computed(() => route.path === '/')
const ids = navItems.map((n) => n.id)
const activeSection = useActiveSection(ids, isHome)

const scrolled = ref(false)
const menuOpen = ref(false)
const elevated = computed(() => scrolled.value || menuOpen.value)

watch(
  () => route.fullPath,
  () => {
    menuOpen.value = false
  },
)

if (import.meta.client) {
  const onScroll = () => {
    scrolled.value = window.scrollY > 8
  }

  const onKey = (e: KeyboardEvent) => {
    if (e.key === 'Escape' && menuOpen.value) {
      menuOpen.value = false
    }
  }

  const onResize = () => {
    if (window.innerWidth >= 1280 && menuOpen.value) {
      menuOpen.value = false
    }
  }

  watch(menuOpen, (open) => {
    document.body.style.overflow = open ? 'hidden' : ''
  })

  onMounted(() => {
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('keydown', onKey)
    window.addEventListener('resize', onResize)
  })

  onUnmounted(() => {
    document.body.style.overflow = ''
    window.removeEventListener('scroll', onScroll)
    window.removeEventListener('keydown', onKey)
    window.removeEventListener('resize', onResize)
  })
}
</script>

<style scoped>
.drawer-enter-active,
.drawer-leave-active {
  transition: all 0.35s cubic-bezier(0.22, 1, 0.36, 1);
  max-height: 500px;
}
.drawer-enter-from,
.drawer-leave-to {
  opacity: 0;
  max-height: 0;
}
</style>


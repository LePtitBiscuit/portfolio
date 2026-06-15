<script setup lang="ts">
import { ref, watch } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import ThemeToggle from '@/components/ui/ThemeToggle.vue'

const navItems = [
  { to: '/', label: 'Accueil' },
  { to: '/cv', label: 'CV' },
  { to: '/competences', label: 'Compétences' },
  { to: '/passions', label: 'Passions' },
]

const isMenuOpen = ref(false)
const route = useRoute()

watch(
  () => route.path,
  () => {
    isMenuOpen.value = false
  },
)
</script>

<template>
  <header class="fixed inset-x-0 top-4 z-50 px-4 sm:top-6">
    <nav
      class="mx-auto flex max-w-5xl items-center justify-between rounded-2xl border border-white/25 bg-white/40 px-3 py-2 shadow-[0_8px_30px_-12px_rgba(0,0,0,0.35)] backdrop-blur-xl transition-colors duration-300 dark:border-zinc-700/50 dark:bg-zinc-900/45"
      aria-label="Navigation principale"
    >
      <RouterLink
        to="/"
        class="rounded-full px-3 py-2 text-sm font-semibold tracking-wide text-zinc-800 transition-colors duration-300 hover:text-[#2f617d] dark:text-zinc-100 dark:hover:text-[#b3def8]"
      >
        LePtitBiscuit
      </RouterLink>

      <!-- Liens — bureau (md+) -->
      <div
        class="hidden items-center gap-1 rounded-full border border-white/35 bg-white/60 p-1 md:flex dark:border-zinc-700/60 dark:bg-zinc-900/60"
      >
        <RouterLink
          v-for="item in navItems"
          :key="item.to"
          :to="item.to"
          class="rounded-full px-3 py-2 text-xs font-medium text-zinc-600 transition-all duration-300 hover:text-zinc-900 sm:px-4 sm:text-sm dark:text-zinc-300 dark:hover:text-white"
          active-class=""
          exact-active-class="bg-[#b3def8]/25 text-[#244a5e] shadow-inner dark:bg-[#b3def8]/20 dark:text-[#d9f0ff]"
        >
          {{ item.label }}
        </RouterLink>
      </div>

      <div class="flex items-center gap-2">
        <ThemeToggle />

        <!-- Bouton hamburger — mobile uniquement -->
        <button
          type="button"
          class="flex h-9 w-9 items-center justify-center rounded-full border border-white/35 bg-white/60 text-zinc-700 transition-all duration-300 hover:border-[#b3def8]/55 md:hidden dark:border-zinc-700/60 dark:bg-zinc-900/60 dark:text-zinc-300"
          :aria-expanded="isMenuOpen"
          aria-label="Menu de navigation"
          @click="isMenuOpen = !isMenuOpen"
        >
          <svg
            v-if="!isMenuOpen"
            class="h-4 w-4"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            aria-hidden="true"
          >
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
          <svg
            v-else
            class="h-4 w-4"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            aria-hidden="true"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
      </div>
    </nav>

    <!-- Menu déroulant mobile -->
    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0 -translate-y-2 scale-95"
      enter-to-class="opacity-100 translate-y-0 scale-100"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100 translate-y-0 scale-100"
      leave-to-class="opacity-0 -translate-y-2 scale-95"
    >
      <div
        v-if="isMenuOpen"
        class="mx-auto mt-2 max-w-5xl overflow-hidden rounded-2xl border border-white/25 bg-white/80 shadow-[0_8px_30px_-12px_rgba(0,0,0,0.25)] backdrop-blur-xl md:hidden dark:border-zinc-700/50 dark:bg-zinc-900/85"
      >
        <div class="flex flex-col p-2">
          <RouterLink
            v-for="item in navItems"
            :key="item.to"
            :to="item.to"
            class="rounded-xl px-4 py-3 text-sm font-medium text-zinc-700 transition-all duration-200 hover:bg-[#b3def8]/15 hover:text-[#2f617d] dark:text-zinc-300 dark:hover:text-[#b3def8]"
            active-class=""
            exact-active-class="bg-[#b3def8]/20 text-[#244a5e] dark:bg-[#b3def8]/15 dark:text-[#d9f0ff]"
          >
            {{ item.label }}
          </RouterLink>
        </div>
      </div>
    </Transition>
  </header>
</template>

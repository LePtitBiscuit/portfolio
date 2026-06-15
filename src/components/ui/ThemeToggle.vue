<script setup lang="ts">
import { useTheme } from '@/composables/useTheme'

const { isDark, toggleTheme } = useTheme()
</script>

<template>
  <button
    type="button"
    class="group inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-white/70 text-zinc-700 shadow-sm transition-all duration-300 hover:scale-[1.03] hover:border-[#b3def8]/70 hover:text-[#2f617d] dark:border-zinc-700/70 dark:bg-zinc-900/80 dark:text-zinc-200 dark:hover:border-[#b3def8]/70 dark:hover:text-[#b3def8]"
    :aria-label="isDark ? 'Activer le thème clair' : 'Activer le thème sombre'"
    @click="toggleTheme"
  >
    <svg
      v-if="isDark"
      class="h-5 w-5 transition-transform duration-300 group-hover:rotate-12"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="1.8"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <circle cx="12" cy="12" r="4" />
      <path
        d="M12 2v2.2M12 19.8V22M4.9 4.9l1.6 1.6M17.5 17.5l1.6 1.6M2 12h2.2M19.8 12H22M4.9 19.1l1.6-1.6M17.5 6.5l1.6-1.6"
      />
    </svg>

    <svg
      v-else
      class="h-5 w-5 transition-transform duration-300 group-hover:-rotate-12"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="1.8"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 1 0 9.8 9.8Z" />
    </svg>
  </button>
</template>

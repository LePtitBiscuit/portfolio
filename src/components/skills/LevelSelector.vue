<script setup lang="ts">
import type { SkillLevel } from '@/types/skill'

interface LevelSelectorProps {
  levels: SkillLevel[]
  selectedIndex: number
}

defineProps<LevelSelectorProps>()

const emit = defineEmits<{
  select: [index: number]
}>()
</script>

<template>
  <div class="flex flex-col gap-3">
    <button
      v-for="(level, index) in levels"
      :key="level.name"
      type="button"
      class="group relative w-full overflow-hidden rounded-2xl border p-4 text-left transition-all duration-300 hover:-translate-y-0.5 sm:p-5"
      :class="
        selectedIndex === index
          ? 'border-[#b3def8]/80 bg-[#b3def8]/18 shadow-[0_0_30px_-10px_rgba(179,222,248,0.95)]'
          : 'border-[#b3def8]/20 bg-white/55 hover:border-[#b3def8]/55 hover:bg-[#b3def8]/10 hover:shadow-[0_0_28px_-16px_rgba(179,222,248,0.8)] dark:bg-white/[0.04]'
      "
      @click="emit('select', index)"
    >
      <span
        class="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent to-transparent transition-opacity duration-300"
        :class="
          selectedIndex === index
            ? 'via-[#b3def8]/90 opacity-100'
            : 'via-[#b3def8]/40 opacity-0 group-hover:opacity-100'
        "
      ></span>

      <div class="flex items-center gap-3 sm:gap-5">
        <span
          class="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border text-base font-semibold transition-all duration-300"
          :class="
            selectedIndex === index
              ? 'border-[#b3def8]/70 bg-[#b3def8]/20 text-[#2f617d] shadow-[0_0_18px_-6px_rgba(179,222,248,0.9)] dark:text-[#b3def8]'
              : 'border-zinc-300/50 bg-zinc-100/60 text-zinc-500 dark:border-zinc-700/50 dark:bg-zinc-800/50 dark:text-zinc-400'
          "
        >
          {{ index + 1 }}
        </span>

        <div class="min-w-0 flex-1">
          <p
            class="text-base font-semibold transition-colors duration-300"
            :class="
              selectedIndex === index
                ? 'text-[#2f617d] dark:text-[#b3def8]'
                : 'text-zinc-800 dark:text-zinc-200'
            "
          >
            {{ level.name }}
          </p>
          <p class="mt-1 text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">
            {{ level.description }}
          </p>
        </div>

        <span
          class="flex-shrink-0 transition-all duration-300"
          :class="
            selectedIndex === index
              ? 'text-[#2f617d] dark:text-[#b3def8]'
              : 'text-zinc-400 group-hover:text-[#2f617d] dark:group-hover:text-[#b3def8]'
          "
        >
          <svg
            class="h-5 w-5 transition-transform duration-300 group-hover:translate-x-0.5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            aria-hidden="true"
          >
            <path d="m9 18 6-6-6-6" />
          </svg>
        </span>
      </div>
    </button>
  </div>
</template>

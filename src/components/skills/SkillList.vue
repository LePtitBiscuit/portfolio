<script setup lang="ts">
import type { Skill } from '@/types/skill'

interface SkillListProps {
  skills: Skill[]
}

defineProps<SkillListProps>()

const emit = defineEmits<{
  select: [index: number]
}>()
</script>

<template>
  <div class="flex flex-col gap-4">
    <button
      v-for="(skill, index) in skills"
      :key="skill.title"
      type="button"
      class="group relative w-full overflow-hidden rounded-2xl border border-[#b3def8]/20 bg-white/60 p-4 text-left shadow-[0_0_40px_-28px_rgba(179,222,248,0.9)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 hover:border-[#b3def8]/60 hover:shadow-[0_0_44px_-16px_rgba(179,222,248,0.9)] sm:rounded-3xl sm:p-6 dark:bg-black/45"
      @click="emit('select', index)"
    >
      <div
        class="absolute inset-0 bg-gradient-to-r from-[#b3def8]/8 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      ></div>
      <span
        class="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#b3def8]/55 to-transparent"
      ></span>

      <div class="relative flex items-center gap-3 sm:gap-6">
        <span
          class="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl border border-[#b3def8]/35 bg-[#b3def8]/12 text-[#2f617d] shadow-[0_0_22px_-10px_rgba(179,222,248,0.95)] transition-all duration-300 group-hover:border-[#b3def8]/65 group-hover:shadow-[0_0_28px_-8px_rgba(179,222,248,1)] sm:h-14 sm:w-14 sm:rounded-2xl dark:text-[#b3def8]"
        >
          <svg
            class="h-5 w-5 sm:h-7 sm:w-7"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.8"
            stroke-linecap="round"
            stroke-linejoin="round"
            aria-hidden="true"
          >
            <path :d="skill.icon" />
          </svg>
        </span>

        <div class="min-w-0 flex-1">
          <div class="flex flex-wrap items-center gap-3">
            <h3
              class="bg-gradient-to-r from-zinc-900 to-[#2f617d] bg-clip-text text-xl font-semibold text-transparent transition-all duration-300 dark:from-zinc-100 dark:to-[#b3def8]"
            >
              {{ skill.title }}
            </h3>
            <div class="flex flex-wrap gap-1.5">
              <span
                v-for="level in skill.levels"
                :key="level.name"
                class="rounded-full border border-[#b3def8]/25 bg-[#b3def8]/8 px-2.5 py-0.5 text-xs font-medium text-[#2f617d] dark:text-[#b3def8]/75"
              >
                {{ level.name }}
              </span>
            </div>
          </div>
          <p class="mt-1.5 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
            {{ skill.description }}
          </p>
        </div>

        <div class="flex-shrink-0 pl-2">
          <span
            class="flex h-8 w-8 items-center justify-center rounded-full border border-[#b3def8]/25 bg-[#b3def8]/8 text-[#2f617d] transition-all duration-300 group-hover:border-[#b3def8]/65 group-hover:bg-[#b3def8]/18 group-hover:shadow-[0_0_18px_-6px_rgba(179,222,248,0.9)] sm:h-10 sm:w-10 dark:text-[#b3def8]"
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
      </div>
    </button>
  </div>
</template>

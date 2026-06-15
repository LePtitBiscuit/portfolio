<script setup lang="ts">
import { computed } from 'vue'
import type { FlatLearning } from '@/types/skill'

interface SkillProgressIndicatorProps {
  flatLearnings: FlatLearning[]
  currentIndex: number
  skillTitle: string
}

const props = defineProps<SkillProgressIndicatorProps>()

const current = computed<FlatLearning | undefined>(() => props.flatLearnings[props.currentIndex])

interface LevelGroup {
  levelIndex: number
  levelName: string
  dots: { globalIndex: number; isPast: boolean; isCurrent: boolean }[]
}

const levelGroups = computed<LevelGroup[]>(() => {
  const groups: LevelGroup[] = []

  for (const fl of props.flatLearnings) {
    let group = groups.find((g) => g.levelIndex === fl.levelIndex)
    if (!group) {
      group = { levelIndex: fl.levelIndex, levelName: fl.levelName, dots: [] }
      groups.push(group)
    }
    const globalIndex = props.flatLearnings.indexOf(fl)
    group.dots.push({
      globalIndex,
      isCurrent: globalIndex === props.currentIndex,
      isPast: globalIndex < props.currentIndex,
    })
  }

  return groups
})
</script>

<template>
  <div v-if="current" class="flex flex-col gap-3">
    <div class="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm">
      <span class="font-semibold text-zinc-800 dark:text-zinc-100">{{ skillTitle }}</span>
      <span class="text-zinc-400 dark:text-zinc-500">·</span>
      <span class="font-medium text-[#2f617d] dark:text-[#b3def8]">{{ current.levelName }}</span>
      <span class="text-zinc-400 dark:text-zinc-500">·</span>
      <span class="tabular-nums text-zinc-500 dark:text-zinc-400">
        AC {{ current.indexInLevel + 1 }}&thinsp;/&thinsp;{{ current.totalInLevel }}
      </span>
    </div>

    <div class="flex items-center gap-3">
      <div v-for="group in levelGroups" :key="group.levelIndex" class="flex items-center gap-1.5">
        <span
          v-for="dot in group.dots"
          :key="dot.globalIndex"
          class="rounded-full transition-all duration-400"
          :class="
            dot.isCurrent
              ? 'h-2.5 w-2.5 bg-[#b3def8] shadow-[0_0_12px_rgba(179,222,248,0.9)]'
              : dot.isPast
                ? 'h-1.5 w-1.5 bg-[#b3def8]/55'
                : 'h-1.5 w-1.5 bg-zinc-400/35 dark:bg-zinc-600/45'
          "
        ></span>

        <span
          v-if="group.levelIndex < levelGroups.length - 1"
          class="mx-0.5 h-px w-3 rounded-full bg-zinc-300/60 dark:bg-zinc-700/60"
        ></span>
      </div>
    </div>
  </div>
</template>

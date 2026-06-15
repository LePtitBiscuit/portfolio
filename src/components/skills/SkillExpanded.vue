<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import type { FlatLearning, Skill } from '@/types/skill'
import LevelSelector from '@/components/skills/LevelSelector.vue'
import CriticalLearningViewer from '@/components/skills/CriticalLearningViewer.vue'

interface SkillExpandedProps {
  skill: Skill
  skillIndex: number
  skillTotal: number
}

const props = defineProps<SkillExpandedProps>()

const emit = defineEmits<{
  close: []
}>()

type ViewState = 'levels' | 'learning'

const viewState = ref<ViewState>('levels')
const globalIndex = ref(0)

const flatLearnings = computed<FlatLearning[]>(() =>
  props.skill.levels.flatMap((level, li) =>
    level.critical_learnings.map((ac, ai) => ({
      ...ac,
      levelIndex: li,
      levelName: level.name,
      indexInLevel: ai,
      totalInLevel: level.critical_learnings.length,
    })),
  ),
)

const currentLevelIndex = computed<number>(() => {
  const fl = flatLearnings.value[globalIndex.value]
  return fl?.levelIndex ?? 0
})

const startAtLevel = (levelIndex: number): void => {
  const idx = flatLearnings.value.findIndex((fl) => fl.levelIndex === levelIndex)
  if (idx !== -1) globalIndex.value = idx
  viewState.value = 'learning'
}

const backToLevels = (): void => {
  viewState.value = 'levels'
}

watch(
  () => props.skill,
  () => {
    globalIndex.value = 0
    viewState.value = 'levels'
  },
)
</script>

<template>
  <div class="flex min-h-[calc(100vh-6rem)] flex-col">
    <div
      class="absolute left-4 top-28 -z-10 h-72 w-72 rounded-full bg-[#b3def8]/20 blur-3xl sm:left-10"
    ></div>
    <div
      class="absolute bottom-10 right-4 -z-10 h-80 w-80 rounded-full bg-[#b3def8]/14 blur-3xl sm:right-10"
    ></div>

    <button
      type="button"
      class="mb-6 inline-flex items-center gap-2 self-start rounded-full border border-[#b3def8]/30 bg-white/60 px-4 py-2 text-sm font-medium text-[#2f617d] shadow-sm backdrop-blur transition-all duration-300 hover:border-[#b3def8]/70 hover:shadow-[0_0_18px_-8px_rgba(179,222,248,0.9)] dark:bg-black/40 dark:text-[#b3def8]"
      @click="viewState === 'learning' ? backToLevels() : emit('close')"
    >
      <svg
        class="h-4 w-4"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        aria-hidden="true"
      >
        <path d="m15 18-6-6 6-6" />
      </svg>
      {{ viewState === 'learning' ? 'Retour aux niveaux' : 'Toutes les compétences' }}
    </button>

    <Transition
      mode="out-in"
      enter-active-class="transition duration-400 ease-out"
      enter-from-class="opacity-0 translate-y-4"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-250 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-4"
    >
      <div v-if="viewState === 'levels'" key="levels" class="flex flex-col gap-8">
        <header>
          <div class="mb-4 flex items-center gap-3">
            <span
              class="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#b3def8]/40 bg-[#b3def8]/14 text-[#2f617d] shadow-[0_0_26px_-8px_rgba(179,222,248,0.95)] dark:text-[#b3def8]"
            >
              <svg
                class="h-7 w-7"
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
            <span
              class="rounded-full border border-[#b3def8]/35 bg-[#b3def8]/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#2f617d] dark:text-[#b3def8]"
            >
              Compétence {{ skillIndex + 1 }}&thinsp;/&thinsp;{{ skillTotal }}
            </span>
          </div>
          <h1
            class="bg-gradient-to-r from-zinc-900 via-[#2f617d] to-[#b3def8] bg-clip-text text-4xl font-semibold leading-tight text-transparent sm:text-5xl dark:from-white dark:via-[#dff3ff] dark:to-[#b3def8]"
          >
            {{ skill.title }}
          </h1>
          <p
            class="mt-4 max-w-2xl text-base leading-relaxed text-zinc-600 sm:text-lg dark:text-zinc-300"
          >
            {{ skill.description }}
          </p>
        </header>

        <div>
          <p
            class="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-zinc-400 dark:text-zinc-500"
          >
            Choisissez un niveau
          </p>
          <LevelSelector
            :levels="skill.levels"
            :selected-index="-1"
            @select="startAtLevel"
          />
        </div>
      </div>

      <div v-else key="learning" class="relative flex-1">
        <CriticalLearningViewer
          v-model="globalIndex"
          :flat-learnings="flatLearnings"
          :skill-title="skill.title"
        />
      </div>
    </Transition>
  </div>
</template>

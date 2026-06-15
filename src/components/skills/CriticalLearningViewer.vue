<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import type { FlatLearning, SkillImage } from '@/types/skill'
import SkillProgressIndicator from '@/components/skills/SkillProgressIndicator.vue'
import ImageLightbox from '@/components/ui/ImageLightbox.vue'

interface CriticalLearningViewerProps {
  flatLearnings: FlatLearning[]
  modelValue: number
  skillTitle: string
}

const props = defineProps<CriticalLearningViewerProps>()

const emit = defineEmits<{
  'update:modelValue': [index: number]
}>()

const direction = ref<'next' | 'prev'>('next')
const lightboxImage = ref<SkillImage | null>(null)

const current = computed<FlatLearning | undefined>(() => props.flatLearnings[props.modelValue])

const isFirst = computed(() => props.modelValue === 0)
const isLast = computed(() => props.modelValue === props.flatLearnings.length - 1)

const goNext = (): void => {
  if (isLast.value) return
  direction.value = 'next'
  emit('update:modelValue', props.modelValue + 1)
}

const goPrev = (): void => {
  if (isFirst.value) return
  direction.value = 'prev'
  emit('update:modelValue', props.modelValue - 1)
}

watch(
  () => props.flatLearnings,
  () => {
    direction.value = 'next'
  },
)
</script>

<template>
  <div v-if="current" class="relative flex flex-col gap-6 sm:px-20">
    <SkillProgressIndicator
      :flat-learnings="flatLearnings"
      :current-index="modelValue"
      :skill-title="skillTitle"
    />

    <div class="relative min-h-0">
      <Transition
        mode="out-in"
        enter-active-class="transition duration-400 ease-out"
        :enter-from-class="
          direction === 'next' ? 'translate-x-10 opacity-0' : '-translate-x-10 opacity-0'
        "
        enter-to-class="translate-x-0 opacity-100"
        leave-active-class="transition duration-250 ease-in"
        leave-from-class="translate-x-0 opacity-100"
        :leave-to-class="
          direction === 'next' ? '-translate-x-10 opacity-0' : 'translate-x-10 opacity-0'
        "
      >
        <article :key="current.code" class="flex flex-col gap-5 pb-28 sm:pb-20">
          <!-- 1. En-tête : code, titre, description -->
          <header>
            <div class="mb-3 flex flex-wrap items-center gap-3">
              <span
                class="rounded-full border border-[#b3def8]/50 bg-[#b3def8]/14 px-3 py-1 font-mono text-xs font-semibold tracking-wider text-[#2f617d] dark:text-[#b3def8]"
              >
                {{ current.code }}
              </span>
              <span class="text-xs text-zinc-500 dark:text-zinc-400">
                {{ current.levelName }} · {{ skillTitle }}
              </span>
            </div>
            <h2
              class="bg-gradient-to-r from-zinc-900 via-[#2f617d] to-[#b3def8] bg-clip-text text-2xl font-semibold leading-tight text-transparent sm:text-3xl dark:from-white dark:via-[#dff3ff] dark:to-[#b3def8]"
            >
              {{ current.title }}
            </h2>
            <p class="mt-3 max-w-3xl text-base leading-relaxed text-zinc-600 dark:text-zinc-300">
              {{ current.description }}
            </p>
          </header>

          <!-- 2. Mise en contexte — juste après la description -->
          <div
            v-if="current.project_context"
            class="rounded-2xl border border-[#b3def8]/20 bg-[#b3def8]/8 p-5"
          >
            <h3
              class="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#2f617d] dark:text-[#b3def8]"
            >
              Mise en contexte
            </h3>
            <p class="text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
              {{ current.project_context }}
            </p>
          </div>

          <!-- 3. Points clés -->
          <div
            v-if="current.main_points.length > 0"
            class="rounded-2xl border border-[#b3def8]/20 bg-white/50 p-5 backdrop-blur dark:bg-white/[0.04]"
          >
            <h3
              class="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-[#2f617d] dark:text-[#b3def8]"
            >
              Points clés
            </h3>
            <ul class="space-y-3">
              <li
                v-for="(point, i) in current.main_points"
                :key="i"
                class="flex items-start gap-3 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300"
              >
                <span
                  class="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#b3def8] shadow-[0_0_10px_rgba(179,222,248,0.9)]"
                ></span>
                {{ point }}
              </li>
            </ul>
          </div>

          <!-- 4. Images avec légendes -->
          <div
            v-if="current.images && current.images.length > 0"
            :class="[
              current.images.length === 1 ? 'flex flex-col gap-3' : 'grid gap-3 sm:grid-cols-2',
            ]"
          >
            <figure
              v-for="(img, i) in current.images"
              :key="i"
              class="group/img cursor-zoom-in overflow-hidden rounded-2xl border border-[#b3def8]/20 bg-zinc-900/40"
              @click="lightboxImage = img"
            >
              <div class="relative h-56 overflow-hidden sm:h-64">
                <img
                  :src="img.src"
                  :alt="img.description || `Illustration ${i + 1} — ${current.title}`"
                  class="h-full w-full object-cover object-center transition-transform duration-500 group-hover/img:scale-105"
                  loading="lazy"
                />
                <div
                  class="absolute right-2.5 top-2.5 flex h-8 w-8 items-center justify-center rounded-full border border-white/25 bg-black/50 text-white opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover/img:opacity-100"
                >
                  <svg
                    class="h-3.5 w-3.5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    aria-hidden="true"
                  >
                    <circle cx="11" cy="11" r="8" />
                    <line x1="21" y1="21" x2="16.65" y2="16.65" />
                    <line x1="11" y1="8" x2="11" y2="14" />
                    <line x1="8" y1="11" x2="14" y2="11" />
                  </svg>
                </div>
              </div>
              <figcaption
                v-if="img.description"
                class="border-t border-[#b3def8]/15 px-4 py-2.5 text-xs leading-relaxed text-zinc-500 dark:text-zinc-400"
              >
                {{ img.description }}
              </figcaption>
            </figure>
          </div>

          <ImageLightbox
            v-if="lightboxImage"
            :src="lightboxImage.src"
            :description="lightboxImage.description"
            :alt="lightboxImage.description || current.title"
            @close="lightboxImage = null"
          />

          <!-- 5. Visuels — centré -->
          <div
            v-if="current.visuals && current.visuals.length > 0"
            class="rounded-2xl border border-[#b3def8]/20 bg-white/50 p-6 text-center backdrop-blur dark:bg-white/[0.04]"
          >
            <h3
              class="mb-5 text-xs font-semibold uppercase tracking-[0.18em] text-[#2f617d] dark:text-[#b3def8]"
            >
              Visuels
            </h3>
            <div class="flex flex-wrap items-center justify-center gap-3">
              <span
                v-for="(visual, i) in current.visuals"
                :key="i"
                class="inline-flex items-center gap-2 rounded-xl border border-[#b3def8]/30 bg-[#b3def8]/8 px-4 py-2.5 text-sm text-zinc-600 dark:text-zinc-400"
              >
                <svg
                  class="h-3.5 w-3.5 flex-shrink-0 text-[#2f617d] dark:text-[#b3def8]"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  aria-hidden="true"
                >
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <circle cx="8.5" cy="8.5" r="1.5" />
                  <path d="m21 15-5-5L5 21" />
                </svg>
                {{ visual }}
              </span>
            </div>
          </div>

          <!-- 6. Impact — en bas -->
          <div
            v-if="current.impact && current.impact.length > 0"
            class="rounded-2xl border border-[#b3def8]/20 bg-white/50 p-5 backdrop-blur dark:bg-white/[0.04]"
          >
            <h3
              class="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-[#2f617d] dark:text-[#b3def8]"
            >
              Impact
            </h3>
            <ul class="space-y-3">
              <li
                v-for="(item, i) in current.impact"
                :key="i"
                class="flex items-start gap-3 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300"
              >
                <span
                  class="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#b3def8] shadow-[0_0_10px_rgba(179,222,248,0.9)]"
                ></span>
                {{ item }}
              </li>
            </ul>
          </div>
        </article>
      </Transition>
    </div>

    <!-- Flèches latérales — bureau (sm+) -->
    <div class="pointer-events-none fixed inset-y-0 left-0 z-30 hidden items-center pl-5 sm:flex">
      <button
        type="button"
        :disabled="isFirst"
        class="pointer-events-auto flex h-14 w-14 items-center justify-center rounded-full border border-[#b3def8]/35 bg-black/40 text-[#b3def8] backdrop-blur-md transition-all duration-300 hover:border-[#b3def8]/80 hover:shadow-[0_0_24px_-6px_rgba(179,222,248,0.9)] disabled:cursor-not-allowed disabled:opacity-30"
        aria-label="Apprentissage précédent"
        @click="goPrev"
      >
        <svg
          class="h-5 w-5"
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
      </button>
    </div>

    <div class="pointer-events-none fixed inset-y-0 right-0 z-30 hidden items-center pr-5 sm:flex">
      <button
        type="button"
        :disabled="isLast"
        class="pointer-events-auto flex h-14 w-14 items-center justify-center rounded-full border border-[#b3def8]/35 bg-black/40 text-[#b3def8] backdrop-blur-md transition-all duration-300 hover:border-[#b3def8]/80 hover:shadow-[0_0_24px_-6px_rgba(179,222,248,0.9)] disabled:cursor-not-allowed disabled:opacity-30"
        aria-label="Apprentissage suivant"
        @click="goNext"
      >
        <svg
          class="h-5 w-5"
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
      </button>
    </div>

    <!-- Barre de navigation — mobile uniquement -->
    <div class="fixed inset-x-0 bottom-4 z-30 flex items-center justify-between px-4 sm:hidden">
      <button
        type="button"
        :disabled="isFirst"
        class="flex h-12 w-12 items-center justify-center rounded-full border border-[#b3def8]/35 bg-black/55 text-[#b3def8] backdrop-blur-md transition-all duration-300 active:scale-95 disabled:cursor-not-allowed disabled:opacity-30"
        aria-label="Apprentissage précédent"
        @click="goPrev"
      >
        <svg
          class="h-5 w-5"
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
      </button>

      <span
        class="rounded-full border border-[#b3def8]/25 bg-black/50 px-4 py-1.5 font-mono text-xs text-zinc-400 backdrop-blur-md"
      >
        {{ modelValue + 1 }}&thinsp;/&thinsp;{{ flatLearnings.length }}
      </span>

      <button
        type="button"
        :disabled="isLast"
        class="flex h-12 w-12 items-center justify-center rounded-full border border-[#b3def8]/35 bg-black/55 text-[#b3def8] backdrop-blur-md transition-all duration-300 active:scale-95 disabled:cursor-not-allowed disabled:opacity-30"
        aria-label="Apprentissage suivant"
        @click="goNext"
      >
        <svg
          class="h-5 w-5"
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
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import SkillList from '@/components/skills/SkillList.vue'
import SkillExpanded from '@/components/skills/SkillExpanded.vue'
import skillsData from '@/data/skills.json'
import type { Skill } from '@/types/skill'

const skills = skillsData as Skill[]

const activeIndex = ref<number | null>(null)

const activeSkill = computed<Skill | undefined>(() =>
  activeIndex.value !== null ? skills[activeIndex.value] : undefined,
)

const openSkill = (index: number): void => {
  activeIndex.value = index
}

const closeSkill = (): void => {
  activeIndex.value = null
}
</script>

<template>
  <section class="relative mx-auto w-full max-w-6xl px-6 pb-20 pt-28 sm:pt-36">
    <Transition
      mode="out-in"
      enter-active-class="transition duration-400 ease-out"
      enter-from-class="opacity-0 translate-y-6"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-250 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-4"
    >
      <div v-if="activeIndex === null" key="list">
        <header class="mx-auto mb-12 max-w-3xl">
          <span
            class="inline-flex rounded-full border border-[#b3def8]/45 bg-[#b3def8]/15 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#2f617d] shadow-[0_0_22px_-12px_rgba(179,222,248,0.95)] dark:text-[#b3def8]"
          >
            BUT Informatique
          </span>
          <h1
            class="mt-5 bg-gradient-to-r from-zinc-900 via-[#2f617d] to-[#b3def8] bg-clip-text text-4xl font-semibold leading-tight text-transparent sm:text-5xl dark:from-white dark:via-[#dff3ff] dark:to-[#b3def8]"
          >
            Compétences
          </h1>
          <p class="mt-4 max-w-2xl text-base leading-relaxed text-zinc-600 dark:text-zinc-300">
            Six compétences construites tout au long du parcours BUT Informatique. Cliquez sur une
            compétence pour en explorer les niveaux et les apprentissages critiques associés.
          </p>
        </header>

        <SkillList :skills="skills" @select="openSkill" />
      </div>

      <div v-else-if="activeSkill" key="expanded">
        <SkillExpanded
          :skill="activeSkill"
          :skill-index="activeIndex ?? 0"
          :skill-total="skills.length"
          @close="closeSkill"
        />
      </div>
    </Transition>
  </section>
</template>

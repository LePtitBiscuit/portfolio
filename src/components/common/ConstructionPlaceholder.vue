<script setup lang="ts">
interface ConstructionPlaceholderProps {
  title: string
}

defineProps<ConstructionPlaceholderProps>()
</script>

<template>
  <section
    class="mx-auto flex min-h-[70vh] w-full max-w-5xl flex-col items-center justify-center px-6 text-center"
  >
    <span
      class="mb-4 inline-flex items-center rounded-full border border-[#b3def8]/50 bg-[#b3def8]/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[#2f617d] dark:text-[#b3def8]"
    >
      En construction
    </span>
    <h1 class="text-3xl font-semibold text-zinc-900 sm:text-4xl dark:text-zinc-100">{{ title }}</h1>
    <p class="mt-3 max-w-lg text-sm text-zinc-600 sm:text-base dark:text-zinc-400">
      Cette section arrive prochainement. La base est prête pour accueillir ton contenu.
    </p>
  </section>
</template>

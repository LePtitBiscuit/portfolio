<script setup lang="ts">
interface PassionCardProps {
  title: string
  subtitle: string
  description: string
  image: string
  tags: string[]
  quote: string
  expanded: boolean
  shrunk: boolean
}

defineProps<PassionCardProps>()

const emit = defineEmits<{
  enter: []
  leave: []
}>()
</script>

<template>
  <article
    class="group relative min-h-72 cursor-pointer overflow-hidden rounded-3xl transition-all duration-500 ease-in-out sm:min-h-96 md:min-h-0"
    :class="[expanded ? 'md:flex-[1.8]' : shrunk ? 'md:flex-[0.7]' : 'md:flex-1']"
    @mouseenter="emit('enter')"
    @mouseleave="emit('leave')"
  >
    <!-- Image de fond -->
    <img
      :src="image"
      :alt="title"
      class="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
      loading="lazy"
    />

    <!-- Couches de gradient -->
    <div class="absolute inset-0 bg-gradient-to-t from-black/92 via-black/35 to-black/12"></div>
    <div
      class="absolute inset-0 bg-gradient-to-t from-[#b3def8]/12 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
    ></div>

    <!-- Ligne d'accent haute -->
    <span
      class="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#b3def8]/70 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
    ></span>

    <!-- Numéro décoratif -->
    <span
      class="absolute right-5 top-5 font-mono text-[6rem] font-bold leading-none text-white/5 transition-all duration-500 group-hover:text-[#b3def8]/8 sm:text-[8rem]"
      aria-hidden="true"
    >
      {{ title.charAt(0) }}
    </span>

    <!-- Contenu principal -->
    <div class="absolute inset-x-0 bottom-0 p-6 sm:p-8">
      <!-- Tags -->
      <div
        class="mb-4 flex flex-wrap gap-2 opacity-0 transition-all duration-300 group-hover:opacity-100"
        style="
          transform: translateY(6px);
          transition:
            opacity 0.3s,
            transform 0.3s;
        "
        :style="{ transform: 'translateY(0)', opacity: undefined }"
      >
        <span
          v-for="tag in tags"
          :key="tag"
          class="rounded-full border border-[#b3def8]/40 bg-black/40 px-3 py-1 text-xs font-medium text-[#b3def8] backdrop-blur-sm"
        >
          {{ tag }}
        </span>
      </div>

      <!-- Titre et sous-titre -->
      <h2 class="text-3xl font-bold leading-tight text-white sm:text-4xl">
        {{ title }}
      </h2>
      <p class="mt-1 text-sm font-medium text-[#b3def8]">{{ subtitle }}</p>

      <!-- Description : révélée au hover -->
      <div
        class="mt-3 grid transition-all duration-500 ease-in-out"
        :class="['grid-rows-[0fr] group-hover:grid-rows-[1fr]']"
      >
        <p class="overflow-hidden text-sm leading-relaxed text-zinc-300">
          {{ description }}
        </p>
      </div>

      <!-- Citation -->
      <p
        class="mt-5 border-l-2 border-[#b3def8]/55 pl-3 text-xs italic leading-relaxed text-zinc-400 opacity-0 transition-all duration-400 group-hover:opacity-100"
      >
        "{{ quote }}"
      </p>
    </div>
  </article>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import PassionCard from '@/components/passions/PassionCard.vue'

interface Passion {
  title: string
  subtitle: string
  description: string
  image: string
  tags: string[]
  quote: string
}

const passions: Passion[] = [
  {
    title: 'Domino',
    subtitle: 'Stratégie & culture créole',
    description:
      "Le domino est bien plus qu'un jeu — c'est une pratique ancrée dans la culture martiniquaise, un moment de partage, de concentration et de stratégie. Anticiper les pièces adverses, mémoriser ce qui a été posé, adapter sa tactique en temps réel : le domino m'a appris que la réflexion et la patience sont des forces.",
    image: '/images/domino_image.jpg',
    tags: ['Stratégie', 'Culture créole', 'Concentration'],
    quote: 'Chaque pièce posée est une décision.',
  },
  {
    title: 'Drone',
    subtitle: 'Photographie & vidéographie aérienne',
    description:
      "Piloter un drone, c'est changer de perspective — littéralement. Capturer les paysages de la Martinique depuis les airs, trouver le bon angle, maîtriser la lumière et le mouvement : c'est un mélange de technique et d'art. Le drone m'a ouvert un rapport différent à l'espace et à l'image.",
    image: '/images/drone_image.jpg',
    tags: ['Photographie', 'Vidéographie', 'Martinique', 'Pilotage'],
    quote: "La liberté de voir le monde d'en haut.",
  },
]

const hoveredIndex = ref<number | null>(null)
</script>

<template>
  <section class="relative mx-auto w-full max-w-6xl px-6 pb-20 pt-28 sm:pt-36">
    <!-- Fonds décoratifs -->
    <div
      class="pointer-events-none absolute left-0 top-24 -z-10 h-72 w-72 rounded-full bg-[#b3def8]/14 blur-3xl"
    ></div>
    <div
      class="pointer-events-none absolute bottom-10 right-0 -z-10 h-80 w-80 rounded-full bg-[#b3def8]/10 blur-3xl"
    ></div>

    <!-- En-tête de page -->
    <header class="mx-auto mb-12 max-w-3xl">
      <span
        class="inline-flex rounded-full border border-[#b3def8]/45 bg-[#b3def8]/15 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#2f617d] shadow-[0_0_22px_-12px_rgba(179,222,248,0.95)] dark:text-[#b3def8]"
      >
        En dehors du code
      </span>
      <h1
        class="mt-5 bg-gradient-to-r from-zinc-900 via-[#2f617d] to-[#b3def8] bg-clip-text text-4xl font-semibold leading-tight text-transparent sm:text-5xl dark:from-white dark:via-[#dff3ff] dark:to-[#b3def8]"
      >
        Passions
      </h1>
      <p class="mt-4 max-w-2xl text-base leading-relaxed text-zinc-600 dark:text-zinc-300">
        Ce qui m'anime en dehors du code. Deux univers différents, une même logique : observer,
        comprendre, maîtriser.
      </p>
    </header>

    <!-- Cartes en split-screen -->
    <div class="flex flex-col gap-4 md:h-[75vh] md:flex-row" @mouseleave="hoveredIndex = null">
      <PassionCard
        v-for="(passion, index) in passions"
        :key="passion.title"
        v-bind="passion"
        :expanded="hoveredIndex === index"
        :shrunk="hoveredIndex !== null && hoveredIndex !== index"
        @enter="hoveredIndex = index"
        @leave="hoveredIndex = null"
      />
    </div>
  </section>
</template>

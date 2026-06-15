<script setup lang="ts">
interface AboutCard {
  title: string
  description: string
  iconPath: string
}

const aboutCards: AboutCard[] = [
  {
    title: 'Développement',
    description:
      'Création d’applications web modernes avec une attention particulière portée à la qualité du code et à l’expérience utilisateur.',
    iconPath: 'M7 8 3 12l4 4M17 8l4 4-4 4M14 4l-4 16',
  },
  {
    title: 'Architecture & données',
    description: 'Conception de bases de données structurées, APIs et solutions maintenables.',
    iconPath:
      'M12 3c4.4 0 8 1.3 8 3s-3.6 3-8 3-8-1.3-8-3 3.6-3 8-3ZM4 6v6c0 1.7 3.6 3 8 3s8-1.3 8-3V6M4 12v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6',
  },
  {
    title: 'Infrastructure',
    description: 'Déploiement, conteneurisation et automatisation des environnements techniques.',
    iconPath:
      'M6 18h12M8 18V8a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v10M7 10h10M9 14h.01M12 14h.01M15 14h.01',
  },
]
</script>

<template>
  <section class="relative mx-auto w-full max-w-6xl px-6 py-14">
    <div class="absolute inset-x-8 top-10 -z-10 h-40 rounded-full bg-[#b3def8]/15 blur-3xl"></div>

    <div class="mb-9 flex flex-col gap-3">
      <span
        class="h-px w-24 bg-gradient-to-r from-[#b3def8] to-transparent shadow-[0_0_18px_rgba(179,222,248,0.75)]"
      ></span>
      <h2
        class="bg-gradient-to-r from-[#b3def8] via-white to-[#b3def8] bg-clip-text text-3xl font-semibold text-transparent sm:text-4xl"
      >
        À propos
      </h2>
      <p class="max-w-2xl text-sm leading-relaxed text-zinc-600 sm:text-base dark:text-zinc-400">
        Mon approche relie conception, qualité logicielle et compréhension du besoin utilisateur
        pour créer des solutions numériques utiles, fiables et adaptées à leur contexte.
      </p>
    </div>

    <div class="grid gap-5 md:grid-cols-3">
      <article
        v-for="card in aboutCards"
        :key="card.title"
        class="group relative overflow-hidden rounded-3xl border border-[#b3def8]/25 bg-white/60 p-6 shadow-[0_0_35px_-28px_rgba(179,222,248,0.9)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-[#b3def8]/70 hover:shadow-[0_0_38px_-14px_rgba(179,222,248,0.8)] dark:bg-zinc-950/55"
      >
        <div
          class="absolute inset-0 bg-gradient-to-br from-[#b3def8]/16 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        ></div>
        <div class="relative">
          <div
            class="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-[#b3def8]/40 bg-[#b3def8]/15 text-[#2f617d] shadow-[0_0_24px_-8px_rgba(179,222,248,0.85)] dark:text-[#b3def8]"
          >
            <svg
              class="h-6 w-6"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.8"
              stroke-linecap="round"
              stroke-linejoin="round"
              aria-hidden="true"
            >
              <path :d="card.iconPath" />
            </svg>
          </div>
          <h3 class="text-lg font-semibold text-zinc-900 dark:text-zinc-100">{{ card.title }}</h3>
          <p class="mt-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
            {{ card.description }}
          </p>
        </div>
      </article>
    </div>
  </section>
</template>

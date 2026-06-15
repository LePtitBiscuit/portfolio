<script setup lang="ts">
import { technologies } from '@/data/technologies'

const carouselItems = [...technologies, ...technologies]
</script>

<template>
  <section class="relative mx-auto w-full max-w-6xl overflow-hidden px-6 py-16">
    <div class="absolute inset-x-4 top-16 -z-10 h-48 rounded-full bg-[#b3def8]/20 blur-3xl"></div>

    <div class="mb-9 flex flex-col gap-3">
      <span
        class="h-px w-28 bg-gradient-to-r from-[#b3def8] to-transparent shadow-[0_0_18px_rgba(179,222,248,0.75)]"
      ></span>
      <h2
        class="bg-gradient-to-r from-[#b3def8] via-white to-[#b3def8] bg-clip-text text-3xl font-semibold text-transparent sm:text-4xl"
      >
        Technologies maîtrisées
      </h2>
      <p class="max-w-2xl text-sm leading-relaxed text-zinc-600 sm:text-base dark:text-zinc-400">
        Un socle technique orienté développement, données, automatisation et infrastructure pour
        adapter chaque solution aux besoins réels du projet.
      </p>
    </div>

    <div
      class="group relative overflow-hidden rounded-[2rem] border border-[#b3def8]/25 bg-white/55 py-5 shadow-[0_0_55px_-30px_rgba(179,222,248,0.95)] backdrop-blur-xl dark:bg-zinc-950/55"
    >
      <div
        class="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-zinc-50 via-zinc-50/85 to-transparent dark:from-zinc-950 dark:via-zinc-950/85"
      ></div>
      <div
        class="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-zinc-50 via-zinc-50/85 to-transparent dark:from-zinc-950 dark:via-zinc-950/85"
      ></div>

      <div
        class="flex w-max animate-[tech-scroll_42s_linear_infinite] gap-4 px-5 group-hover:[animation-play-state:paused]"
      >
        <article
          v-for="(technology, index) in carouselItems"
          :key="`${technology.name}-${index}`"
          class="group/card flex min-w-36 flex-col items-center justify-center gap-3 rounded-2xl border border-[#b3def8]/18 bg-white/70 px-5 py-5 text-center transition-all duration-300 hover:-translate-y-1 hover:border-[#b3def8]/80 hover:bg-[#b3def8]/12 hover:shadow-[0_0_30px_-10px_rgba(179,222,248,0.9)] sm:min-w-40 dark:bg-white/[0.035]"
        >
          <div
            class="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#b3def8]/25 bg-[#b3def8]/10 shadow-[0_0_22px_-12px_rgba(179,222,248,0.95)] transition-all duration-300 group-hover/card:scale-110 group-hover/card:border-[#b3def8]/70 group-hover/card:shadow-[0_0_26px_-6px_rgba(179,222,248,0.95)]"
          >
            <img
              :src="technology.iconUrl"
              :alt="`Logo ${technology.name}`"
              class="h-8 w-8 object-contain"
              loading="lazy"
            />
          </div>
          <h3
            class="text-sm font-semibold text-zinc-800 transition-colors duration-300 group-hover/card:text-[#2f617d] dark:text-zinc-100 dark:group-hover/card:text-[#b3def8]"
          >
            {{ technology.name }}
          </h3>
        </article>
      </div>
    </div>
  </section>
</template>

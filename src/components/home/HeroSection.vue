<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { RouterLink } from 'vue-router'

const isVisible = ref(false)

onMounted(() => {
  requestAnimationFrame(() => {
    isVisible.value = true
  })
})
</script>

<template>
  <section
    class="relative mx-auto flex w-full max-w-6xl flex-col items-center gap-14 px-6 pb-16 pt-28 sm:pt-36 lg:flex-row lg:gap-16"
  >
    <div class="absolute left-6 top-28 -z-10 h-72 w-72 rounded-full bg-[#b3def8]/20 blur-3xl"></div>
    <div
      class="absolute bottom-10 right-10 -z-10 h-56 w-56 rounded-full bg-[#b3def8]/15 blur-3xl"
    ></div>

    <div
      class="w-full max-w-2xl transform transition-all duration-700 ease-out"
      :class="isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'"
    >
      <p
        class="mb-4 inline-flex rounded-full border border-[#b3def8]/45 bg-[#b3def8]/15 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#2f617d] shadow-[0_0_24px_-12px_rgba(179,222,248,0.9)] dark:text-[#b3def8]"
      >
        BUT Informatique - IUT de Martinique
      </p>
      <h1
        class="bg-gradient-to-r from-zinc-950 via-[#2f617d] to-[#b3def8] bg-clip-text text-4xl font-semibold leading-tight text-transparent sm:text-5xl lg:text-6xl dark:from-white dark:via-[#dff3ff] dark:to-[#b3def8]"
      >
        Développeur logiciel passionné par la création de solutions numériques
      </h1>
      <p
        class="mt-6 max-w-2xl text-base leading-relaxed text-zinc-600 sm:text-lg dark:text-zinc-300"
      >
        Étudiant en
        <span class="font-semibold text-[#2f617d] dark:text-[#b3def8]">BUT Informatique</span>, je
        conçois des applications modernes et performantes, de la conception jusqu’au déploiement.
        J’aime transformer des besoins réels en solutions fiables, maintenables et adaptées aux
        utilisateurs.
      </p>
      <p
        class="mt-5 max-w-2xl text-sm leading-relaxed text-zinc-600 sm:text-base dark:text-zinc-400"
      >
        Mon parcours m’a permis de travailler sur des projets complets mêlant développement web,
        bases de données, architecture logicielle et déploiement. Curieux et autonome, je développe
        continuellement mes compétences pour construire des solutions robustes.
      </p>
      <div class="mt-6 flex flex-wrap gap-2">
        <span
          class="rounded-full border border-[#b3def8]/35 bg-[#b3def8]/10 px-3 py-1 text-xs font-medium text-[#2f617d] dark:text-[#b3def8]"
        >
          Qualité logicielle
        </span>
        <span
          class="rounded-full border border-[#b3def8]/35 bg-[#b3def8]/10 px-3 py-1 text-xs font-medium text-[#2f617d] dark:text-[#b3def8]"
        >
          Architecture propre
        </span>
        <span
          class="rounded-full border border-[#b3def8]/35 bg-[#b3def8]/10 px-3 py-1 text-xs font-medium text-[#2f617d] dark:text-[#b3def8]"
        >
          Digitalisation de la Martinique
        </span>
      </div>
      <div class="mt-9 flex flex-wrap items-center gap-4">
        <RouterLink
          to="/cv"
          class="inline-flex items-center rounded-full border border-[#b3def8]/80 bg-[#b3def8]/25 px-6 py-3 text-sm font-semibold text-[#244a5e] shadow-[0_0_30px_-14px_rgba(179,222,248,0.95)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#b3def8]/40 hover:shadow-[0_0_34px_rgba(179,222,248,0.42)] dark:text-[#dff3ff]"
        >
          Voir mon CV
        </RouterLink>
      </div>
    </div>

    <div
      class="relative w-full max-w-sm flex-shrink-0 transform transition-all delay-150 duration-700 ease-out sm:max-w-md"
      :class="isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'"
    >
      <div
        class="absolute inset-0 -z-20 rounded-[2rem] bg-gradient-to-br from-[#b3def8]/70 via-[#b3def8]/18 to-transparent blur-3xl"
      ></div>
      <div
        class="absolute -inset-5 -z-10 rounded-[2.5rem] border border-[#b3def8]/30 shadow-[0_0_50px_-22px_rgba(179,222,248,1)]"
      ></div>
      <img
        src="/images/me.png"
        alt="Portrait de profil"
        class="w-full rounded-[2rem] border border-[#b3def8]/35 bg-zinc-800/15 object-cover shadow-[0_18px_65px_-18px_rgba(179,222,248,0.9)] ring-1 ring-[#b3def8]/50 transition-transform duration-500 hover:scale-[1.01] dark:border-[#b3def8]/25"
      />
    </div>
  </section>
</template>

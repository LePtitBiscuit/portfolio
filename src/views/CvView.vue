<script setup lang="ts">
const printCV = (): void => window.print()
</script>

<template>
  <div class="mx-auto w-full max-w-[900px] px-4 pb-20 pt-28 sm:pt-36">
    <!-- Bouton imprimer -->
    <div class="mb-6 flex items-center justify-between">
      <div>
        <h1
          class="bg-gradient-to-r from-zinc-900 via-[#2f617d] to-[#b3def8] bg-clip-text text-3xl font-semibold text-transparent dark:from-white dark:via-[#dff3ff] dark:to-[#b3def8]"
        >
          Curriculum Vitæ
        </h1>
        <p class="mt-1 text-sm text-zinc-500 dark:text-zinc-400">Format A4 — imprimable</p>
      </div>
      <button
        type="button"
        class="inline-flex items-center gap-2 rounded-full border border-[#b3def8]/70 bg-[#b3def8]/18 px-5 py-2.5 text-sm font-medium text-[#2f617d] transition-all duration-300 hover:bg-[#b3def8]/30 hover:shadow-[0_0_24px_-8px_rgba(179,222,248,0.9)] print:hidden dark:text-[#b3def8]"
        @click="printCV"
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
          <polyline points="6 9 6 2 18 2 18 9" />
          <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
          <rect x="6" y="14" width="12" height="8" />
        </svg>
        Imprimer / Télécharger
      </button>
    </div>

    <!-- Document CV -->
    <div
      class="cv-doc flex w-full overflow-hidden rounded-xl shadow-[0_0_60px_-20px_rgba(179,222,248,0.35)]"
    >
      <!-- ── Sidebar gauche ── -->
      <aside class="flex w-1/3 flex-shrink-0 flex-col bg-[#1e3a5f] p-6 text-white">
        <!-- Photo -->
        <div class="mb-5 flex flex-shrink-0 justify-center">
          <div class="h-28 w-28 overflow-hidden rounded-full border-2 border-white bg-white">
            <img
              src="../../public/images/profile_picture.jpeg"
              alt="Photo Andy GUSTAVE"
              class="h-full w-full object-cover object-top"
            />
          </div>
        </div>

        <!-- Sections sidebar -->
        <div class="flex flex-1 flex-col items-start justify-start gap-7">
          <!-- Contact -->
          <section class="w-full">
            <h2 class="mb-2 text-xs font-bold uppercase tracking-widest text-white">Contact</h2>
            <div class="mb-3 w-full border-b border-white/30 pb-2"></div>
            <ul class="space-y-2">
              <li class="flex items-center gap-2.5">
                <svg
                  class="h-3.5 w-3.5 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"
                  />
                </svg>
                <span class="text-[13px] leading-[1.4]">Lamentin</span>
              </li>
              <li class="flex items-center gap-2.5">
                <svg
                  class="h-3.5 w-3.5 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"
                  />
                </svg>
                <span class="text-[13px] leading-[1.4]">0696 36 42 47</span>
              </li>
              <li class="flex items-center gap-2.5">
                <svg
                  class="h-3.5 w-3.5 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"
                  />
                </svg>
                <span class="break-all text-[13px] leading-[1.4]">andy.gustavee@gmail.com</span>
              </li>
              <li class="flex items-center gap-2.5">
                <svg
                  class="h-3.5 w-3.5 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                  />
                </svg>
                <span class="text-[13px] leading-[1.4]">github.com/LePtitBiscuit</span>
              </li>
            </ul>
          </section>

          <!-- Compétences techniques -->
          <section class="w-full">
            <h2 class="mb-2 text-xs font-bold uppercase tracking-widest text-white">
              Compétences techniques
            </h2>
            <div class="mb-3 w-full border-b border-white/30 pb-2"></div>
            <div class="space-y-3.5">
              <div class="border-l-2 border-white/40 pl-3">
                <p class="mb-1 text-[11px] font-bold uppercase tracking-wide text-white">
                  Langages & Développement
                </p>
                <p class="text-[13px] leading-[1.4] text-white/80">
                  Node.js · Python · PHP · HTML · Vue.js · TailwindCSS
                </p>
              </div>
              <div class="border-l-2 border-white/40 pl-3">
                <p class="mb-1 text-[11px] font-bold uppercase tracking-wide text-white">
                  Bases de données
                </p>
                <p class="text-[13px] leading-[1.4] text-white/80">PostgreSQL · MySQL · MongoDB</p>
              </div>
              <div class="border-l-2 border-white/40 pl-3">
                <p class="mb-1 text-[11px] font-bold uppercase tracking-wide text-white">
                  DevOps & Infrastructure
                </p>
                <p class="text-[13px] leading-[1.4] text-white/80">
                  Docker · Linux · Nginx · Apache · Proxmox
                </p>
              </div>
              <div class="border-l-2 border-white/40 pl-3">
                <p class="mb-1 text-[11px] font-bold uppercase tracking-wide text-white">
                  Automatisation & Outils
                </p>
                <p class="text-[13px] leading-[1.4] text-white/80">n8n · Airtable</p>
              </div>
              <div class="border-l-2 border-white/40 pl-3">
                <p class="mb-1 text-[11px] font-bold uppercase tracking-wide text-white">
                  API & Sécurité
                </p>
                <p class="text-[13px] leading-[1.4] text-white/80">
                  REST APIs · JWT Authentication
                </p>
              </div>
            </div>
          </section>

          <!-- Centres d'intérêt -->
          <section class="w-full">
            <h2 class="mb-2 text-xs font-bold uppercase tracking-widest text-white">
              Centres d'intérêt
            </h2>
            <div class="mb-3 w-full border-b border-white/30 pb-2"></div>
            <ul class="space-y-1.5 text-[13px] leading-[1.4]">
              <li>Drone</li>
              <li>Engagement associatif</li>
              <li>Développement d'applications</li>
              <li>Systèmes et infrastructure</li>
            </ul>
          </section>
        </div>
      </aside>

      <!-- ── Colonne principale ── -->
      <main class="w-2/3 bg-white p-8 text-black">
        <!-- En-tête -->
        <header class="mb-5">
          <h1 class="text-2xl font-bold text-black">Andy GUSTAVE</h1>
          <p class="mt-0.5 text-base font-medium text-[#1e3a5f]">
            Étudiant en BUT Informatique — Développeur Web
          </p>
        </header>

        <!-- Profil -->
        <section class="mb-5">
          <h2
            class="mb-3 border-b-2 border-black/20 pb-1.5 text-base font-bold uppercase text-black"
          >
            Profil
          </h2>
          <p class="text-justify text-[13px] leading-[1.5] text-black">
            Étudiant en BUT Informatique à l'IUT de Martinique, spécialisé dans le développement
            d'applications web. Intéressé par la conception d'outils numériques, la gestion de bases
            de données et le développement full-stack.
          </p>
        </section>

        <!-- Expériences -->
        <section class="mb-5">
          <h2
            class="mb-3 border-b-2 border-black/20 pb-1.5 text-base font-bold uppercase text-black"
          >
            Expériences
          </h2>
          <div class="timeline-track grid grid-cols-[16px_1fr] gap-x-4 gap-y-5">
            <!-- FeelingCar -->
            <div class="flex justify-center pt-0.5">
              <div class="timeline-dot"></div>
            </div>
            <div>
              <h3 class="text-[13px] font-bold text-[#1e3a5f]">
                Stage — Développeur Web Full-Stack
              </h3>
              <p class="mt-0.5 text-[13px] font-medium text-black">FeelingCar</p>
              <p class="mt-0.5 text-[13px] font-medium text-[#1e3a5f]">Janvier – Février 2026</p>
              <p class="mt-1 text-[13px] italic text-black/60">Airtable · n8n · Node.js · Python</p>
              <ul class="mt-1.5 list-inside list-disc space-y-0.5 text-[13px] text-black">
                <li>Développement d'une plateforme de suivi de dossiers clients.</li>
                <li>Mise en place d'automatisations de processus avec n8n.</li>
                <li>Nettoyage de données csv (Excel) et migration vers SGBDR.</li>
              </ul>
            </div>

            <!-- IUT de Martinique -->
            <div class="flex justify-center pt-0.5">
              <div class="timeline-dot"></div>
            </div>
            <div>
              <h3 class="text-[13px] font-bold text-[#1e3a5f]">Stage — Développeur Web Stack</h3>
              <p class="mt-0.5 text-[13px] font-medium text-black">IUT de Martinique</p>
              <p class="mt-0.5 text-[13px] font-medium text-[#1e3a5f]">Avril – Juin 2025</p>
              <p class="mt-1 text-[13px] italic text-black/60">Nuxt · Docker · Proxmox</p>
              <ul class="mt-1.5 list-inside list-disc space-y-0.5 text-[13px] text-black">
                <li>Développement d'une application de génération de plannings.</li>
                <li>Conception d'une application web de gestion de machines virtuelles.</li>
              </ul>
            </div>

            <!-- Vizyon Dijital -->
            <div class="flex justify-center pt-0.5">
              <div class="timeline-dot"></div>
            </div>
            <div>
              <h3 class="text-[13px] font-bold text-[#1e3a5f]">
                Stage — Développeur Web Full-Stack
              </h3>
              <p class="mt-0.5 text-[13px] font-medium text-black">Vizyon Dijital</p>
              <p class="mt-0.5 text-[13px] font-medium text-[#1e3a5f]">Juin 2024</p>
              <p class="mt-1 text-[13px] italic text-black/60">PHP · HTML · CSS · JavaScript</p>
              <ul class="mt-1.5 list-inside list-disc space-y-0.5 text-[13px] text-black">
                <li>Développement d'un espace collaboratif.</li>
                <li>Conception de maquettes interactives.</li>
                <li>Gestion de base de données et dépôt de fichiers sécurisés.</li>
              </ul>
            </div>
          </div>
        </section>

        <!-- Formations -->
        <section>
          <h2
            class="mb-3 border-b-2 border-black/20 pb-1.5 text-base font-bold uppercase text-black"
          >
            Formations
          </h2>
          <div class="timeline-track grid grid-cols-[16px_1fr] gap-x-4 gap-y-5">
            <!-- BUT -->
            <div class="flex justify-center pt-0.5">
              <div class="timeline-dot"></div>
            </div>
            <div>
              <h3 class="text-[13px] font-bold text-[#1e3a5f]">BUT Informatique</h3>
              <p class="mt-0.5 text-[13px] font-medium text-black">IUT de Martinique</p>
              <p class="mt-0.5 text-[13px] font-medium text-[#1e3a5f]">2023 – 2026</p>
              <ul class="mt-1.5 list-inside list-disc space-y-0.5 text-[13px] text-black">
                <li>
                  Parcours : Réalisation d'applications (conception, développement, validation)
                </li>
              </ul>
            </div>

            <!-- Bac -->
            <div class="flex justify-center pt-0.5">
              <div class="timeline-dot"></div>
            </div>
            <div>
              <h3 class="text-[13px] font-bold text-[#1e3a5f]">
                Baccalauréat Général
                <span class="font-normal text-black"> (Mention Assez Bien)</span>
              </h3>
              <p class="mt-0.5 text-[13px] font-medium text-black">AMEP</p>
              <p class="mt-0.5 text-[13px] font-medium text-[#1e3a5f]">2020 – 2023</p>
              <ul class="mt-1.5 list-inside list-disc space-y-0.5 text-[13px] text-black">
                <li>Spécialités : NSI (Numérique et Sciences Informatiques), Physique-Chimie</li>
              </ul>
            </div>
          </div>
        </section>
      </main>
    </div>
  </div>
</template>

<style scoped>
.timeline-track {
  position: relative;
}

.timeline-track::before {
  content: '';
  position: absolute;
  left: 7px;
  top: 0;
  bottom: 0;
  width: 2px;
  background: #1e3a5f;
}

.timeline-dot {
  position: relative;
  z-index: 1;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: #1e3a5f;
  flex-shrink: 0;
}

@media print {
  * {
    print-color-adjust: exact !important;
    -webkit-print-color-adjust: exact !important;
  }

  /* Masquer le header du portfolio et le bouton imprimer */
  header,
  nav,
  .print\:hidden {
    display: none !important;
  }

  /* Supprimer les marges du wrapper de page */
  body,
  html {
    margin: 0 !important;
    padding: 0 !important;
    background: white !important;
  }

  /* Le document CV occupe toute la feuille */
  .cv-doc {
    width: 210mm !important;
    min-height: 297mm !important;
    border-radius: 0 !important;
    box-shadow: none !important;
    margin: 0 !important;
  }

  @page {
    size: A4;
    margin: 0;
  }
}
</style>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import AppNavbar from '@/components/layout/AppNavbar.vue'
</script>

<template>
  <div
    class="relative min-h-screen overflow-x-clip bg-zinc-50 transition-colors duration-500 dark:bg-black"
  >
    <div
      class="pointer-events-none absolute inset-x-0 top-[-28rem] h-[46rem] bg-[radial-gradient(circle_at_top,rgba(179,222,248,0.24),transparent_58%)] dark:bg-[radial-gradient(circle_at_top,rgba(179,222,248,0.22),transparent_58%)]"
    ></div>
    <div
      class="pointer-events-none absolute left-[-10rem] top-40 h-80 w-80 rounded-full bg-[#b3def8]/10 blur-3xl dark:bg-[#b3def8]/16"
    ></div>
    <div
      class="pointer-events-none absolute right-[-8rem] top-[34rem] h-96 w-96 rounded-full bg-[#b3def8]/10 blur-3xl dark:bg-[#b3def8]/14"
    ></div>
    <div
      class="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(179,222,248,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(179,222,248,0.04)_1px,transparent_1px)] bg-[size:72px_72px] opacity-35 dark:opacity-25"
    ></div>
    <AppNavbar />
    <main class="relative z-10">
      <RouterView v-slot="{ Component, route }">
        <Transition
          mode="out-in"
          enter-active-class="transition duration-400 ease-out"
          enter-from-class="opacity-0 translate-y-3"
          enter-to-class="opacity-100 translate-y-0"
          leave-active-class="transition duration-300 ease-in"
          leave-from-class="opacity-100 translate-y-0"
          leave-to-class="opacity-0 -translate-y-2"
        >
          <component :is="Component" :key="route.path" />
        </Transition>
      </RouterView>
    </main>
  </div>
</template>

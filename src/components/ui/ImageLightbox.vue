<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'

interface ImageLightboxProps {
  src: string
  description?: string
  alt: string
}

defineProps<ImageLightboxProps>()

const emit = defineEmits<{ close: [] }>()

const onKeydown = (e: KeyboardEvent) => {
  if (e.key === 'Escape') emit('close')
}

onMounted(() => {
  document.addEventListener('keydown', onKeydown)
  document.body.style.overflow = 'hidden'
})

onUnmounted(() => {
  document.removeEventListener('keydown', onKeydown)
  document.body.style.overflow = ''
})
</script>

<template>
  <Teleport to="body">
    <Transition
      enter-active-class="transition duration-250 ease-out"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        class="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8"
        role="dialog"
        aria-modal="true"
        :aria-label="alt"
        @click.self="emit('close')"
      >
        <!-- Fond assombri -->
        <div class="absolute inset-0 bg-black/85 backdrop-blur-md" @click="emit('close')"></div>

        <!-- Contenu -->
        <div
          class="relative z-10 flex max-h-[90vh] max-w-5xl flex-col overflow-hidden rounded-2xl border border-[#b3def8]/20 shadow-[0_0_80px_-20px_rgba(179,222,248,0.4)]"
          @click.stop
        >
          <!-- Bouton fermer -->
          <button
            type="button"
            class="absolute right-3 top-3 z-20 flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-black/60 text-white backdrop-blur-md transition-all duration-200 hover:border-[#b3def8]/60 hover:text-[#b3def8]"
            aria-label="Fermer"
            @click="emit('close')"
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
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>

          <!-- Image -->
          <div class="overflow-auto">
            <img :src="src" :alt="alt" class="block max-h-[80vh] w-full object-contain" />
          </div>

          <!-- Légende -->
          <p
            v-if="description"
            class="border-t border-[#b3def8]/15 bg-black/70 px-5 py-3 text-xs leading-relaxed text-zinc-400 backdrop-blur-md"
          >
            {{ description }}
          </p>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

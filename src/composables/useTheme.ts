import { computed, ref } from 'vue'

export type Theme = 'light' | 'dark'

const THEME_STORAGE_KEY = 'portfolio-theme'
const isInitialized = ref(false)
const currentTheme = ref<Theme>('dark')

const applyThemeToDocument = (theme: Theme): void => {
  document.documentElement.classList.toggle('dark', theme === 'dark')
}

const resolveTheme = (): Theme => {
  const storedTheme = localStorage.getItem(THEME_STORAGE_KEY)

  if (storedTheme === 'light' || storedTheme === 'dark') {
    return storedTheme
  }

  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

const setTheme = (theme: Theme): void => {
  currentTheme.value = theme
  applyThemeToDocument(theme)
  localStorage.setItem(THEME_STORAGE_KEY, theme)
}

const initializeTheme = (): void => {
  if (isInitialized.value) {
    return
  }

  setTheme(resolveTheme())
  isInitialized.value = true
}

export const useTheme = () => {
  initializeTheme()

  const toggleTheme = (): void => {
    setTheme(currentTheme.value === 'dark' ? 'light' : 'dark')
  }

  return {
    currentTheme: computed(() => currentTheme.value),
    isDark: computed(() => currentTheme.value === 'dark'),
    toggleTheme,
    setTheme,
  }
}

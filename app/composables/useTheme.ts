export type Theme = 'light' | 'dark'

const STORAGE_KEY = 'beespoke-theme'

export function useTheme() {
  const theme = useState<Theme>('theme', () => 'light')

  const applyTheme = (next: Theme) => {
    theme.value = next
    if (import.meta.client) {
      document.documentElement.classList.toggle('dark', next === 'dark')
      try {
        localStorage.setItem(STORAGE_KEY, next)
      } catch {
        // Handle private browsing or storage disabled
      }
    }
  }

  const toggle = () => {
    const next = theme.value === 'dark' ? 'light' : 'dark'
    applyTheme(next)
  }

  // Synchronize initial theme from DOM on client mount
  if (import.meta.client) {
    onMounted(() => {
      const isDark = document.documentElement.classList.contains('dark')
      theme.value = isDark ? 'dark' : 'light'
    })
  }

  return {
    theme: readonly(theme),
    toggle,
  }
}


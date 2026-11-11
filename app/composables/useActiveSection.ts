export function useActiveSection(ids: readonly string[], isEnabled: Ref<boolean> | ComputedRef<boolean>) {
  const activeId = ref<string>(ids[0] || 'top')

  if (import.meta.client) {
    let unwatch: (() => void) | undefined

    const update = () => {
      if (!isEnabled.value) return
      const probe = window.innerHeight * 0.35
      let current: string = ids[0] ?? 'top'
      for (const id of ids) {
        const el = document.getElementById(id)
        if (el && el.getBoundingClientRect().top <= probe) {
          current = id
        }
      }
      activeId.value = current
    }

    onMounted(() => {
      window.addEventListener('scroll', update, { passive: true })
      window.addEventListener('resize', update)
      update()
    })

    onUnmounted(() => {
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
      if (unwatch) unwatch()
    })
  }

  return computed(() => (isEnabled.value ? activeId.value : undefined))
}

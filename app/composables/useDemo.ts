import type { ProductSlug } from '~~/shared/types/products'

export interface DemoState {
  open: boolean
  product?: ProductSlug
}

export function useDemo() {
  const state = useState<DemoState>('demo-modal-state', () => ({
    open: false,
    product: undefined,
  }))

  const openDemo = (product?: ProductSlug) => {
    state.value = { open: true, product }
  }

  const closeDemo = () => {
    state.value = { ...state.value, open: false }
  }

  return {
    isOpen: computed(() => state.value.open),
    selectedProduct: computed(() => state.value.product),
    openDemo,
    closeDemo,
  }
}


import { defineStore } from 'pinia'
import { getProduct } from '~/services'
import type { Product } from '~/types/product'

export interface IProductState {
  isLoading: boolean
  isError: boolean
  product?: Product
}

export const useProduct = defineStore('product', {
  state: (): IProductState => ({
    isLoading: false,
    isError: false,
    product: undefined,
  }),
  actions: {
    async fetchProduct(id: string) {
      try {
        this.isLoading = true
        const data = await getProduct(id)
        this.product = data
      } catch (error) {
        this.isError = true
      } finally {
        this.isLoading = false
      }
    },
  },
})

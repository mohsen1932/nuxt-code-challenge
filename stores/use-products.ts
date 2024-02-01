import { defineStore } from 'pinia'
import { getProducts } from '~/services'
import type { Product, getProductsParams } from '~/types/product'

export interface IProductsState {
  isLoading: boolean
  isError: boolean
  products: Product[]
}

export const useProducts = defineStore('products', {
  state: (): IProductsState => ({
    isLoading: false,
    isError: false,
    products: [],
  }),
  actions: {
    async fetchProducts({ order, sortBy, material }: getProductsParams) {
      try {
        this.products = []
        this.isLoading = true
        const data = await getProducts({ order, sortBy, material })
        this.products = data
      } catch (error) {
        this.isError = true
      } finally {
        this.isLoading = false
      }
    },
  },
})

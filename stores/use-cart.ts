import { defineStore } from 'pinia'
import type { Product, ProductInCart } from '~/types/product'

export interface ICartState {
  total: number
  items: ProductInCart[]
}

export const useCart = defineStore('cart', {
  state: (): ICartState => ({
    total: 0,
    items: [],
  }),
  actions: {
    addToCart(product: Product, count: number) {
      const indexInTheCart = this.items.findIndex(
        (item) => item.id === product.id,
      )
      if (indexInTheCart >= 0) {
        this.items[indexInTheCart].count += count
      } else {
        this.items.push({ ...product, count })
      }

      this.total = this.items.reduce(
        (accumulator, currentValue) => accumulator + Number(currentValue.price),
        0,
      )
    },
    removeFromCart(product: ProductInCart) {
      const indexInTheCart = this.items.findIndex(
        (item) => item.id === product.id,
      )
      if (indexInTheCart >= 0) {
        this.items.splice(indexInTheCart, 1)
      }
      this.total = this.items.reduce(
        (accumulator, currentValue) => accumulator + Number(currentValue.price),
        0,
      )
    },
  },
  persist: true,
})

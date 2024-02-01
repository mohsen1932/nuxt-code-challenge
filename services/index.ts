import type { getProductsParams } from '~/types/product'

const baseURL = 'https://65b6c8d1da3a3c16ab013017.mockapi.io'

export const getProducts = async ({
  order,
  sortBy,
  material,
}: getProductsParams) => {
  const url = new URL(`${baseURL}/products`)
  if (order && sortBy) {
    url.searchParams.append('sortBy', sortBy)
    url.searchParams.append('order', order)
  }
  if (material) {
    url.searchParams.append('material', material)
  }
  return await fetch(url).then((res) => res.json())
}

export const getProduct = async (id: string) => {
  return await fetch(`${baseURL}/products/${id}`).then((res) => res.json())
}

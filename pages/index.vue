<script setup lang="ts">
import type { getProductsParams, Product } from '~/types/product'

useHead({
  title: 'Products',
})

const products: Ref<Product[] | null> = ref(null)
const isLoading: Ref<boolean> = ref(false)
const isError: Ref<boolean> = ref(false)

const order: Ref<'asc' | 'desc' | undefined> = ref(undefined)
const material: Ref<string | undefined> = ref(undefined)

const fetchProducts = async (params: getProductsParams) => {
  if (params.order) {
    params.sortBy = 'Price'
  }
  const { data, error, pending } = await useFetch<Product[]>(
    `https://65b6c8d1da3a3c16ab013017.mockapi.io/products`,
    {
      params,
    },
  )
  products.value = data.value
  isLoading.value = pending.value
  isError.value = Boolean(error.value)
}

const handleFilterByMaterial = (value: string | undefined) => {
  material.value = value
}

const handleSorting = (value: 'asc' | 'desc' | undefined) => {
  order.value = value
}

watchEffect(() => {
  fetchProducts({
    material: material.value,
    order: order.value,
  })
})
</script>

<template>
  <FilterAndSorting
    @set-material="handleFilterByMaterial"
    @set-sorting="handleSorting"
  />
  <div class="items-center flex flex-col w-full">
    <Loading v-if="isLoading" />
    <Alert
      v-if="isError"
      text="Something went wrong!. please try again later."
    />

    <ul
      v-if="products && products.length"
      class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 w-full"
    >
      <li v-for="product of products" :key="product.id">
        <Product :product="product" />
      </li>
    </ul>
    <Alert v-if="!isLoading && !isError && !products" text="List is empty." />
  </div>
</template>

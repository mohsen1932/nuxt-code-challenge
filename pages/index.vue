<script setup lang="ts">
import { useProducts } from '~/stores/use-products'

useHead({
  title: 'Products',
})

const { $state, fetchProducts } = useProducts()

const products = computed(() => $state.products)
const isLoading = computed(() => $state.isLoading)
const isError = computed(() => $state.isError)

const order: Ref<'asc' | 'desc' | undefined> = ref(undefined)
const material: Ref<string | undefined> = ref(undefined)

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
    sortBy: 'price',
  })
})
</script>

<template>
  <div>
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
        v-if="products.length"
        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 w-full"
      >
        <li v-for="product of products" :key="product.id">
          <Product :product="product" />
        </li>
      </ul>
      <Alert
        v-if="!isLoading && !isError && !products.length"
        text="List is empty."
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useCart } from '~/stores/use-cart'
import type { Product } from '~/types/product'

const route = useRoute()
const { addToCart } = useCart()

const product: Ref<Product | null> = ref(null)
const isLoading: Ref<boolean> = ref(false)
const isError: Ref<boolean> = ref(false)

const fetchProduct = async (id: string) => {
  const { data, error, pending, status } = await useFetch<Product>(
    `https://65b6c8d1da3a3c16ab013017.mockapi.io/products/${id}`,
  )
  product.value = data.value
  isLoading.value = pending.value
  isError.value = Boolean(error.value)
}

onMounted(() => {
  fetchProduct(route.params.id as string)
})

useHead({
  title: product.value?.title ?? 'Loading...',
})

const cnt = ref(1)

const handleAddToCart = () => {
  if (product.value) {
    addToCart(product.value, cnt.value)
  }
}
</script>

<template>
  <div class="flex flex-col">
    <Loading v-if="isLoading" />
    <Alert
      v-if="isError"
      text="Something went wrong!. please try again later."
    />
    <div v-if="product && !isLoading">
      <div class="flex flex-col items-center lg:flex-row lg:items-start gap-6">
        <NuxtImg
          :src="product.image"
          height="256"
          width="256"
          class="p-4 border"
        />
        <div class="flex flex-col gap-2">
          <h1 class="text-3xl font-bold">{{ product.title }}</h1>
          <span class="text-gray-500 text-sm my-2">{{ product.material }}</span>
          <p>{{ product.description }}</p>
          <div class="flex gap-2 items-center mt-2">
            <input
              v-model="cnt"
              type="number"
              name="cnt"
              :min="1"
              class="p-2 border border-gray-300 text-center w-16"
            />
            <Button label="Add to Basket" @click="handleAddToCart" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

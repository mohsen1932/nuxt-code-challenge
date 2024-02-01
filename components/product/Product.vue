<script setup lang="ts">
import type { Product } from '~/types/product'
defineProps<{
  product: Product
}>()
</script>

<template>
  <NuxtLink
    :to="'/product/' + product.id"
    class="flex flex-col items-center p-4 border-[1px] hover:bg-slate-100"
    data-testid="product-link"
  >
    <NuxtImg :src="product.image" height="128" width="128" />
    <span class="text-gray-500 text-xs my-2">{{ product.material }}</span>
    <h3 class="font-bold text-base h-12">{{ product.title }}</h3>
    <span class="text-blue-800 font-semibold">${{ product.price }}</span>
    <span class="text-blue-400 text-xs my-2">more detail -></span>
  </NuxtLink>
</template>

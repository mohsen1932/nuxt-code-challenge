<script setup lang="ts">
import { useCart } from '~/stores/use-cart'

const { $state } = useCart()
const items = computed(() => $state.items)
</script>

<template>
  <div class="flex flex-col">
    <h1 class="text-2xl font-bold mb-6">Cart</h1>
    <Alert v-if="!items.length" text="Cart is empty." />
    <CartTable v-if="items.length" />
    <div class="flex mt-4">
      <Button
        label="Checkout"
        :disabled="!items.length"
        @click="() => console.log('Checkout')"
      />
    </div>
  </div>
</template>

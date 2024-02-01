<script setup lang="ts">
import VueFeather from 'vue-feather'
import { useCart } from '~/stores/use-cart'

const { $state } = useCart()

const items = computed(() => $state.items)

defineComponent({
  'vue-feather': VueFeather,
})
</script>

<template>
  <div class="wfull border-b-[1px] flex justify-between mb-4">
    <NuxtLink to="/" class="flex gap-2 items-center px-4">
      <vue-feather type="command" size="24" class="icon" />
      <h1 class="text-lg font-bold text-blue-700 py-4">Products</h1>
    </NuxtLink>
    <NuxtLink
      to="/cart"
      class="flex gap-2 items-center px-4 hover:bg-slate-100"
    >
      <vue-feather
        type="shopping-cart"
        size="24"
        :class="{
          'text-blue-700': items.length,
          'text-gray-400': !items.length,
        }"
      />
      <span
        v-if="items.length"
        class="text-md font-bold bg-red-500 text-white p-1 px-3 rounded-lg"
        data-testid="header-cart-badge"
        >{{ items.length }}</span
      >
    </NuxtLink>
  </div>
</template>

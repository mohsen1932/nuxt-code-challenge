<script setup lang="ts">
import VueFeather from 'vue-feather'
import { useCart } from '~/stores/use-cart'

const { $state, removeFromCart } = useCart()
const items = computed(() => $state.items)
const total = computed(() => $state.total)

defineComponent({
  'vue-feather': VueFeather,
})
</script>

<template>
  <table class="w-full text-left">
    <thead class="border-b-[1px]">
      <tr>
        <th class="py-2">Product:</th>
        <th class="py-2">Quantity:</th>
        <th class="py-2">Unit Price:</th>
        <th class="py-2">Price:</th>
        <th class="py-2"></th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item of items" :key="item.id" class="border-b-[1px]">
        <td class="py-4">
          <NuxtLink :to="'/product/' + item.id" class="items-center flex gap-2">
            <NuxtImg :src="item.image" height="64" width="64" />
            <h3 class="text-md font-semibold">{{ item.title }}</h3>
          </NuxtLink>
        </td>
        <td>{{ item.count }}</td>
        <td>${{ item.price }}</td>
        <td>${{ Number(item.price) * item.count }}</td>
        <td>
          <button
            type="button"
            class="text-gray-600 hover:text-gray-950"
            @click="() => removeFromCart(item)"
          >
            <vue-feather type="trash-2" size="24" />
          </button>
        </td>
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <th class="py-2">Total:</th>
        <td>${{ total }}</td>
      </tr>
    </tfoot>
  </table>
</template>

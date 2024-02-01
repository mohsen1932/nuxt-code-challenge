<script setup lang="ts">
defineProps<{
  text: string
  isActive: boolean
}>()
</script>

<template>
  <button
    class="px-2 py-1.5 text-sm font-semibold rounded-lg border"
    :class="{
      ' text-blue-800 bg-blue-100 border-blue-200  dark:bg-blue-600 dark:text-white dark:border-blue-500':
        isActive,
      ' text-gray-800 bg-gray-100 border-gray-200  dark:bg-gray-600 dark:text-gray-100 dark:border-gray-500':
        !isActive,
    }"
    type="button"
  >
    {{ text }}
  </button>
</template>

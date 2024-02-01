<script setup lang="ts">
defineProps<{
  label: string
}>()
</script>

<template>
  <button
    type="button"
    class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium text-md px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none disabled:bg-slate-300 disabled:pointer-events-none"
  >
    {{ label }}
  </button>
</template>

<script setup lang="ts">
defineProps<{
  text: string
}>()
</script>

<template>
  <div
    class="my-6 flex w-full rounded-lg border-l-[6px] border-[#FBBF24] bg-[#FBBF24] bg-opacity-[15%] p-4 shadow-md md:p-5"
    role="alert"
  >
    <div class="w-full">
      <h5 class="text-md text-[#9D5425]">{{ text }}</h5>
    </div>
  </div>
</template>

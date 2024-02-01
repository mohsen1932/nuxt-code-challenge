<script setup lang="ts">
const activeTag: Ref<string | undefined> = ref(undefined)
const tags = ['Steel', 'Bronze', 'Granite', 'Metal', 'Frozen']

const sortBy = ref(undefined)

const options = ref([
  { text: 'Default', value: undefined },
  { text: 'Price high to low', value: 'desc' },
  { text: 'Price low to high', value: 'asc' },
])

const emit = defineEmits(['set-material', 'set-sorting'])

const setTag = (tag?: string) => {
  activeTag.value = tag
  emit('set-material', tag)
}

watch([sortBy], () => emit('set-sorting', sortBy.value))
</script>

<template>
  <div class="flex flex-col lg:flex-row lg:justify-between mb-4">
    <div class="flex items-center gap-2 mb-4 lg:mb-0">
      <div class="text-md font-bold">Sort:</div>
      <div class="flex">
        <select v-model="sortBy" class="border p-2">
          <option
            v-for="option in options"
            :key="option.value"
            :value="option.value"
          >
            {{ option.text }}
          </option>
        </select>
      </div>
    </div>

    <div class="flex lg:items-center gap-2">
      <div class="text-md font-bold">Material:</div>
      <div class="flex gap-2 flex-wrap">
        <Tag
          text="All"
          :is-active="activeTag === undefined"
          @click="() => setTag(undefined)"
        />
        <Tag
          v-for="tag of tags"
          :key="tag"
          :text="tag"
          :is-active="activeTag === tag"
          @click="() => setTag(tag)"
        />
      </div>
    </div>
  </div>
</template>

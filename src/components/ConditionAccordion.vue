<script setup lang="ts">
import { ref } from 'vue'

const items = [
  {
    title: 'Condition Term 1',
    description: 'Description for Condition Term 1'
  },
  {
    title: 'Condition Term 2',
    description: 'Description for Condition Term 2'
  },
  {
    title: 'Condition Term 3',
    description: 'Description for Condition Term 3'
  }
]
const isOpen = ref<number | null>(null)

const toggleOpen = (index: number) => {
  if (isOpen.value === index) {
    isOpen.value = null
  } else {
    isOpen.value = index
  }
}
</script>

<template>
  <div>
    <div v-for="(item, index) in items" :key="index">
      <div
        class="border-b border-gray-200 cursor-pointer transition duration-300 ease-in-out transform hover:bg-gray-50"
        :class="{ 'pb-4': isOpen === index, 'mb-4': isOpen !== index }"
        @click="toggleOpen(index)"
      >
        <h3 class="flex justify-between items-center py-4 font-medium text-lg">
          <span>{{ item.title }}</span>
          <svg
            class="w-6 h-6 transform transition-transform duration-300"
            :class="{ 'rotate-180': isOpen === index }"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M19 9l-7 7-7-7" />
          </svg>
        </h3>
        <p
          class="text-gray-500 pb-4"
          v-show="isOpen === index"
          :class="{ 'opacity-100': isOpen === index, 'opacity-0': isOpen !== index }"
        >
          {{ item.description }}
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.transform {
  transition-property: transform;
}
.rotate-180 {
  transform: rotate(180deg);
}
.opacity-0 {
  opacity: 0;
}
.opacity-100 {
  opacity: 1;
}
</style>

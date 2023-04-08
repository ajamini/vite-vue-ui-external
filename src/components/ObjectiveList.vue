<script setup lang="ts">
const obj = [
  {
    text: 'Systematize all credentialling processes for easy hand-off to matt and his team for work for easy hand-off to matt and his team for work',
    isActive: true,
    dueDate: '2021-09-30'
  },
  {
    text: 'Train to run point on templating such heisenberg uncertainty principle',
    isActive: false,
    dueDate: '2022-10-12'
  },
  {
    text: 'Finally a really great subscription for the coffe ',
    isActive: true,
    dueDate: '2023-05-10'
  }
]

const handleAction = () => {
  alert('Action button clicked')
}
</script>

<template>
  <div class="grid grid-flow-row gap-4">
    <div
      v-for="(item, index) in obj"
      :key="index"
      class="w-full bg-gray-100 hover:shadow-lg hover:bg-gray-50 cursor-pointer relative py-2 px-3 min-h-[64px] rounded"
    >
      <!-- Action button top right -->
      <button
        @click="handleAction"
        class="absolute top-0 right-0 mt-2 mr-2 cursor-pointer hover:text-gray-600"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6 z-50"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"
          />
        </svg>
      </button>
      <div class="text-sm text-start w-full pr-8">{{ item.text }}</div>
      <div class="w-full flex justify-start items-center pt-2">
        <!-- A circle indicator with random color -->
        <span
          class="w-2 h-2 rounded-full mr-2"
          :style="{ backgroundColor: '#' + Math.floor(Math.random() * 16777215).toString(16) }"
        ></span>
        <span class="text-sm text-gray-500 mr-4">{{ item.dueDate }}</span>
        <span v-if="item.isActive === true" class="text-sm text-gray-500">Active</span>
      </div>
    </div>
  </div>
</template>

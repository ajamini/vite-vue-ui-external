<script setup lang="ts">
const obj = [
  {
    text: 'Systematize all credentialling processes for easy hand-off to matt and his team for work for easy hand-off to matt and his team for work',
    isActive: true,
    dueDate: '2021-09-30'
  },
  {
    text: 'Train to run point on templating such heisenberg uncertainty principle',
    isActive: true,
    dueDate: '2022-10-12'
  },
  {
    text: 'Finally a really great subscription for the coffe ',
    isActive: false,
    dueDate: '2023-05-10'
  }
]
</script>

<template>
  <div class="grid grid-flow-row">
    <div class="w-full bg-gray-200 relative py-2 px-3 min-h-[64px] rounded">
      <!-- Action button top right -->
      <button class="absolute top-0 right-0 mt-2 mr-2 cursor-pointer hover:text-gray-600">
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
      <div class="text-sm text-start w-full">Hi there</div>
      <div class="w-full flex justify-start pt-2">
        <span class="text-sm text-gray-500 mr-4">Due on 10/02/23</span>
        <span class="text-sm text-gray-500">Active</span>
      </div>
    </div>
  </div>
</template>

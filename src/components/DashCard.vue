<script setup lang="ts">
import MinProgress from './MinProgress.vue'

const props = defineProps<{
  title: string
  progress: string
  progText: string
  progColor: string
  value: string
  subtext: string
}>()
</script>

<template>
  <div class="flex items-start rounded-xl bg-white p-4 shadow-lg">
    <slot name="icon"></slot>
    <div class="absolute top-2 right-2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-6 h-6 hover:text-gray-500 cursor-pointer"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"
        />
      </svg>
    </div>
    <div class="ml-4 w-full">
      <h2 class="font-medium font-sans text-gray-700">{{ props.title }}</h2>
      <div class="flex gap-2 mt-2 w-full">
        <div class="text-lg w-1/2 font-bold">
          {{ props.value }}
          <p class="mt-2 text-sm text-gray-500">{{ props.subtext }}</p>
        </div>
        <div class="w-1/2">
          <p class="mb-1 text-sm text-gray-600">{{ props.progText }}</p>
          <MinProgress :progress="props.progress" :color="props.progColor" />
        </div>
      </div>
    </div>
  </div>
</template>

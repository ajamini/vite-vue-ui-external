<script setup lang="ts">
import { defineProps, defineEmits } from 'vue'
const props = defineProps<{
  group: data
}>()
</script>

<template>
  <div class="bg-white shadow-md rounded-lg">
    <div class="p-4">
      <h3 class="text-lg font-medium text-gray-900">ID: 1</h3>
      <div class="mt-2">
        <div class="flex items-center mb-1">
          <div class="flex-grow">
            <p class="text-sm font-medium text-gray-900">Group Name</p>
            <p class="text-sm text-gray-500">contact1@example.com</p>
          </div>
          <div class="ml-2 flex-shrink-0">
            <button
              class="px-2 py-1 text-sm font-medium text-gray-900 rounded-md hover:bg-gray-100"
            >
              View
            </button>
            <button
              class="ml-2 px-2 py-1 text-sm font-medium text-gray-900 rounded-md hover:bg-gray-100"
            >
              Edit
            </button>
            <button
              class="ml-2 px-2 py-1 text-sm font-medium text-red-600 rounded-md hover:bg-red-100"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

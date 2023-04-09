<script setup lang="ts">
import { reactive } from 'vue'

const docs = reactive([
  {
    id: 1,
    title: 'Martin Emil Andresen',
    status: 'submitted',
    created_at: '4 January 2023, 12:00 PM'
  },
  {
    id: 2,
    title: 'Vigilante Aiden',
    status: 'pending',
    created_at: '2 February 2023, 12:00 PM'
  },
  {
    id: 3,
    title: 'Doc title number 3',
    status: 'overdue',
    created_at: '3 March 2023, 12:00 PM'
  },
  {
    id: 4,
    title: 'John Silverhand',
    status: 'pending',
    created_at: '4 April 2023, 12:00 PM'
  },
  {
    id: 5,
    title: 'Victor Wang',
    status: 'submitted',
    created_at: '5 May 2023, 12:00 PM'
  }
])
</script>

<template>
  <div class="w-full grid grid-flow-row md:w-4/5 bg-gray-200 shadow-2xl mb-6">
    <div
      v-for="doc in docs"
      :key="doc.id"
      class="w-full flex justify-start items-center px-4 border-y border-gray-200 h-28 bg-white"
      :class="{
        'border-b border-gray-200': doc.id !== docs.length,
        'border-b-0': doc.id === docs.length
      }"
    >
      <div class="text-gray-500 text-2xl font-semibold">1</div>
      <div class="flex ml-4 items-center">
        <div
          class="w-7 h-7 rounded-sm bg-cyan-500 flex items-center justify-center text-white text-sm font-semibold"
        >
          ME
        </div>
      </div>
    </div>
  </div>
</template>

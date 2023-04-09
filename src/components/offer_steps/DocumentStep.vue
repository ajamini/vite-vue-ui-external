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
      class="w-full flex justify-start items-center px-8 border-y border-gray-200 h-28 bg-white"
      :class="{
        'border-b border-gray-200': doc.id !== docs.length,
        'border-b-0': doc.id === docs.length
      }"
    >
      <div class="text-gray-500 text-2xl font-semibold">{{ doc.id }}</div>
      <div class="flex ml-4 items-center">
        <div
          class="w-7 h-7 uppercase rounded-sm bg-indigo-500 flex items-center justify-center text-white text-sm font-medium"
        >
          {{ doc.title.substring(0, 2) }}
        </div>
      </div>
      <div class="flex flex-col ml-4">
        <div class="font-sans text-gray-700 text-lg font-medium">{{ doc.title }}</div>
        <div class="text-gray-500 text-sm font-medium">
          <span class="text-gray-700 font-medium capitalize">{{ doc.status }}</span>
          <span class="mx-1">•</span>
          {{ doc.created_at }}
        </div>
      </div>
    </div>
  </div>
</template>

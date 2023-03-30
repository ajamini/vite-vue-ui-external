<script setup lang="ts">
import { ref } from 'vue'

const tasks = ref([
  {
    title: 'Complete Profile',
    description: 'Fill out your profile information',
    completed: true,
    active: false
  },
  {
    title: 'Upload Photo',
    description: 'Add a photo to your profile',
    completed: false,
    active: true
  },
  {
    title: 'Follow Friends',
    description: 'Find and follow your friends on the platform',
    completed: false,
    active: false
  },
  {
    title: 'Create Post',
    description: 'Write your first post on the platform',
    completed: false,
    active: false
  },
  {
    title: 'Join Group',
    description: 'Find and join a group on the platform',
    completed: false,
    active: false
  }
])
</script>
<template>
  <div class="mt-4 md:mt-0 mx-auto w-full max-w-[550px]">
    <div class="active-task-wrapper bg-white rounded-lg shadow-lg flex justify-between">
      <div class="h-16 flex p-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-12 h-12"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25zm.75-12h9v9h-9v-9z"
          />
        </svg>
        <div class="text-gray-800 pl-4 text-start">
          <h4 class="text-lg font-semibold">Leveling Mastery</h4>
          <p class="text-sm">
            <span class="text-green-500 font-semibold">Next up:</span> Create a new story
          </p>
        </div>
      </div>
      <div class="py-4 px-4 text-end">
        <span class="text-teal-600 text-sm font-semibold">20% finished</span>
        <!-- Progess bar -->
        <div class="h-2 bg-gray-200 rounded-full w-40 mt-1">
          <div class="w-1/5 h-full bg-teal-600 rounded-full"></div>
        </div>
      </div>
    </div>

    <div class="tasks-list-wrapper bg-white rounded-lg shadow-lg flex justify-between mt-4">
      <div class="h-16 flex p-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-12 h-12"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25zm.75-12h9v9h-9v-9z"
          />
        </svg>
        <div class="text-gray-800 pl-4 text-start">
          <h4 class="text-lg font-semibold">Leveling Mastery</h4>
          <p class="text-sm">
            <span class="text-green-500 font-semibold">Next up:</span> Create a new story
          </p>
        </div>
      </div>
      <div class="py-4 px-4 text-end">
        <span class="text-teal-600 text-sm font-semibold">20% finished</span>
        <!-- Progess bar -->
        <div class="h-2 bg-gray-200 rounded-full w-40 mt-1">
          <div class="w-1/5 h-full bg-teal-600 rounded-full"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const stepTitles = ['Basics', 'Agreement', 'Condition', 'Representation', 'Documents', 'Review']
</script>

<template>
  <div class="w-full p-8">
    Other things goes here
    <div class="wrapper-wizard p-8 flex flex-initial bg-white mt-8 gap-2">
      <aside class="min-h-screen w-1/3 border-2 grid justify-center">
        <ul class="list-none mt-4">
          <li
            v-for="(stepTitle, index) in stepTitles"
            :key="index"
            class="flex items-center mt-4 gap-4"
          >
            <span
              class="w-10 h-10 text-xl font-semibold text-gray-600 rounded bg-gray-200 flex items-center justify-center"
            >
              {{ index + 1 }}
            </span>
            <span class="font-semibold text-sm text-gray-700">{{ stepTitle }}</span>
          </li>
        </ul>
      </aside>
      <main class="min-h-screen w-2/3 border-2 border-teal-500">Hmm</main>
    </div>
  </div>
</template>

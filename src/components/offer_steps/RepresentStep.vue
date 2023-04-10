<script setup lang="ts">
import { ref } from 'vue'

const selectedRep = ref('')

function getRep() {
  return selectedRep
}
defineExpose({
  getRep
})
</script>

<template>
  <div class="py-4 mb-4 md:bg-gray-100">
    <div class="max-w-6xl mx-auto md:px-4 sm:px-6 lg:px-8">
      <div class="lg:text-center">
        <h2 class="text-base text-indigo-600 font-semibold tracking-wide uppercase">
          Representation
        </h2>
        <span class="text-sm text-gray-400"> Tell us who you represent </span>
      </div>
      <div class="md:p-4 mt-4 grid grid-rows-4 gap-2">
        <div class="rep-wrapper">
          <input
            v-model="selectedRep"
            class="hidden"
            id="buyer"
            value="buyer"
            type="radio"
            name="represent"
          />
          <label
            for="buyer"
            class="h-16 flex w-full md:w-1/2 mx-auto shadow-lg rounded bg-white hover:shadow-2xl cursor-pointer"
          >
            <div class="flex items-center justify-center w-16 h-16 rounded-l bg-indigo-600">
              <svg
                class="w-8 h-8 text-white"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path
                  d="m3 15 5.12-5.12A3 3 0 0 1 10.24 9H13a2 2 0 1 1 0 4h-2.5m4-.68 4.17-4.89a1.88 1.88 0 0 1 2.92 2.36l-4.2 5.94A3 3 0 0 1 14.96 17H9.83a2 2 0 0 0-1.42.59L7 19"
                ></path>
                <path d="m2 14 6 6"></path>
              </svg>
            </div>
            <div class="flex flex-col text-gray-800 justify-center px-4">
              <h3 class="text-base font-medium text-gray-800">You represent buyer only</h3>
            </div>
            <div class="flex items-center justify-center w-16 h-16 rounded-r ml-auto">
              <!-- Action ICON -->
              <svg
                class="w-8 h-8 move -rotate-90 text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
          </label>
          <ul class="list-disc w-full md:w-1/2 p-2 pl-20 mx-auto">
            <li class="text-sm text-gray-500">You are a representator.</li>
            <li class="text-sm text-gray-500">You represent buyer only</li>
            <li class="text-sm text-gray-500">Something goes here</li>
          </ul>
        </div>
        <div class="rep-wrapper">
          <input
            v-model="selectedRep"
            class="hidden"
            id="seller"
            value="seller"
            type="radio"
            name="represent"
          />
          <label
            for="seller"
            class="h-16 flex w-full md:w-1/2 mx-auto shadow-lg rounded bg-white hover:shadow-2xl cursor-pointer"
          >
            <div class="flex items-center justify-center w-16 h-16 rounded-l bg-indigo-600">
              <svg
                class="w-8 h-8 text-white"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="m12 19 7-7 3 3-7 7-3-3z"></path>
                <path d="m18 13-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path>
                <path d="m2 2 7.586 7.586"></path>
                <circle cx="11" cy="11" r="2"></circle>
              </svg>
            </div>
            <div class="flex flex-col text-gray-800 justify-center px-4">
              <h3 class="text-base font-medium text-gray-800">You represent seller only</h3>
            </div>
            <div class="flex items-center justify-center w-16 h-16 rounded-r ml-auto">
              <!-- Action ICON -->
              <svg class="w-8 h-8 -rotate-90 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fill-rule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
          </label>
          <ul class="list-disc w-full md:w-1/2 p-2 pl-20 mx-auto">
            <li class="text-sm text-gray-500">You are a representator.</li>
            <li class="text-sm text-gray-500">You represent seller only</li>
            <li class="text-sm text-gray-500">Something goes here</li>
          </ul>
        </div>
        <div class="rep-wrapper">
          <input
            v-model="selectedRep"
            class="hidden"
            id="both"
            value="both"
            type="radio"
            name="represent"
          />
          <label
            for="both"
            class="h-16 flex w-full md:w-1/2 mx-auto shadow-lg rounded bg-white hover:shadow-2xl cursor-pointer"
          >
            <div class="flex items-center justify-center w-16 h-16 rounded-l bg-indigo-600">
              <svg
                class="w-8 h-8 text-white"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path
                  d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z"
                ></path>
                <path
                  d="M12 5.36 8.87 8.5a2.13 2.13 0 0 0 0 3h0a2.13 2.13 0 0 0 3 0l2.26-2.21a3 3 0 0 1 4.22 0l2.4 2.4"
                ></path>
                <path d="m18 15-2-2"></path>
                <path d="m15 18-2-2"></path>
              </svg>
            </div>
            <div class="flex flex-col text-gray-800 justify-center px-4">
              <h3 class="text-base font-medium text-gray-800">You represent seller & buyer</h3>
            </div>
            <div class="flex items-center justify-center w-16 h-16 rounded-r ml-auto">
              <!-- Action ICON -->
              <svg class="w-8 h-8 -rotate-90 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fill-rule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
          </label>
          <ul class="list-disc w-full md:w-1/2 p-2 pl-20 mx-auto">
            <li class="text-sm text-gray-500">You are a representator.</li>
            <li class="text-sm text-gray-500">You represent buyer only</li>
            <li class="text-sm text-gray-500">Something goes here</li>
          </ul>
        </div>
        <div class="rep-wrapper">
          <input
            v-model="selectedRep"
            class="hidden"
            id="either"
            value="either"
            type="radio"
            name="represent"
          />
          <label
            for="either"
            class="h-16 flex w-full md:w-1/2 mx-auto shadow-lg rounded bg-white hover:shadow-2xl cursor-pointer"
          >
            <div class="flex items-center justify-center w-16 h-16 rounded-l bg-indigo-600">
              <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fill-rule="evenodd"
                  d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 14a6 6 0 110-12 6 6 0 010 12z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
            <div class="flex flex-col text-gray-800 justify-center px-4">
              <h3 class="text-base font-medium text-gray-800">You represent either of them</h3>
            </div>
            <div class="flex items-center justify-center w-16 h-16 rounded-r ml-auto">
              <!-- Action ICON -->
              <svg class="w-8 h-8 -rotate-90 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fill-rule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
          </label>
          <ul class="list-disc w-full md:w-1/2 p-2 pl-20 mx-auto">
            <li class="text-sm text-gray-500">You are a representator.</li>
            <li class="text-sm text-gray-500">You represent buyer only</li>
            <li class="text-sm text-gray-500">Something goes here</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
input:checked + label {
  box-shadow: 0 0 0 1px #f7fafc, 0 0 0 3px #667eea;
}
</style>

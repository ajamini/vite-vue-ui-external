<script setup lang="ts">
import { ref } from 'vue'

const selectedRep = ref('seller')
</script>

<template>
  <div class="py-4">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="lg:text-center">
        <h2 class="text-base text-indigo-600 font-semibold tracking-wide uppercase">
          Representation
        </h2>
        <span class="text-sm text-gray-400"> Tell us who you represent </span>
      </div>
      <div class="p-4 mt-4 grid grid-rows-4 gap-6">
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
              <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fill-rule="evenodd"
                  d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 14a6 6 0 110-12 6 6 0 010 12z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
            <div class="flex flex-col text-gray-800 justify-center px-4">
              <h3 class="text-base font-medium text-gray-800">You represent buyer only</h3>
            </div>
            <div class="flex items-center justify-center w-16 h-16 rounded-r ml-auto">
              <!-- SVG ICON -->
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
              <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fill-rule="evenodd"
                  d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 14a6 6 0 110-12 6 6 0 010 12z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
            <div class="flex flex-col text-gray-800 justify-center px-4">
              <h3 class="text-base font-medium text-gray-800">You represent seller only</h3>
            </div>
            <div class="flex items-center justify-center w-16 h-16 rounded-r ml-auto">
              <!-- SVG ICON -->
              <svg class="w-8 h-8 -rotate-90 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fill-rule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
          </label>
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
              <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fill-rule="evenodd"
                  d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 14a6 6 0 110-12 6 6 0 010 12z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
            <div class="flex flex-col text-gray-800 justify-center px-4">
              <h3 class="text-base font-medium text-gray-800">You represent seller & buyer</h3>
            </div>
            <div class="flex items-center justify-center w-16 h-16 rounded-r ml-auto">
              <!-- SVG ICON -->
              <svg class="w-8 h-8 -rotate-90 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fill-rule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
          </label>
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
              <!-- SVG ICON -->
              <svg class="w-8 h-8 -rotate-90 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fill-rule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
          </label>
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

<script setup lang="ts">
import { ref, watch } from 'vue'
</script>

<template>
  <div class="mx-auto w-full max-w-[550px] bg-white rounded-lg shadow-lg">
    <form class="py-6 px-9">
      <div class="px-0">
        <span class="mb-1 text-start block text-xl font-semibold text-[#07074D]">
          Upload Offer
        </span>
        <span class="text-start block text-sm font-medium text-gray-600">
          Add your offer here, if selected you will be contacted by our team
        </span>
      </div>
      <div class="mb-6 pt-4">
        <div class="flex items-center justify-center w-full">
          <label
            for="dropzone-file"
            class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100"
          >
            <div class="flex flex-col items-center justify-center pt-5 pb-6">
              <svg
                aria-hidden="true"
                class="w-10 h-10 mb-3 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                ></path>
              </svg>
              <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
                <span class="font-semibold">Click to upload</span> or drag and drop
              </p>
              <p class="text-xs text-gray-500 dark:text-gray-400">PDF, PNG, JPG (MAX. 5MB)</p>
            </div>
            <input id="dropzone-file" type="file" class="hidden" />
          </label>
        </div>
      </div>
      <div>
        <button
          class="hover:shadow-form w-full rounded-md bg-darkblue py-3 px-8 text-center text-base font-semibold text-white outline-none"
        >
          Upload File
        </button>
      </div>
    </form>
  </div>
</template>

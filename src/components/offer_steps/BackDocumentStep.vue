<script setup lang="ts">
import { ref } from 'vue'

interface FileWithDetails extends File {
  name: string
}
const uploadedFiles = ref<FileWithDetails[]>([])

//File Upload Handler
const handleFileUpload = (event: InputEvent) => {
  const inputElement = event.target as HTMLInputElement
  const files = inputElement.files!

  for (let i = 0; i < files.length; i++) {
    const reader = new FileReader()
    reader.onload = () => {
      // handle file preview if needed
    }
    reader.readAsDataURL(files[i])

    // store the file in the uploadedFiles array
    uploadedFiles.value.push(files[i])
  }
  console.log(uploadedFiles.value, 'Uploaded ')
}

//Remove file from the uploadedFiles array
const removeFile = (index: number) => {
  uploadedFiles.value.splice(index, 1)
}
</script>

<template>
  <div class="w-full md:w-3/4">
    <h4 class="text-2xl font-semibold text-gray-700">Upload documents here</h4>
    <div class="flex items-center justify-center mt-2">
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
            <span class="font-semibold">Click to upload </span> or drag and drop
          </p>
          <p class="text-xs text-gray-500 dark:text-gray-400">PDF, PNG, JPG (MAX. 5MB)</p>
        </div>
        <input
          @change="handleFileUpload($event as InputEvent)"
          id="dropzone-file"
          type="file"
          class="hidden"
        />
      </label>
    </div>
    <div class="mb-6 pt-4">
      <div
        v-for="(file, index) in uploadedFiles"
        :key="index"
        class="mb-5 mt-4 rounded-md bg-[#F5F7FB] py-4 px-8"
      >
        <div class="flex items-center justify-between">
          <span class="truncate pr-3 text-base font-medium text-[#07074D]">
            {{ file.name }}
          </span>
          <button @click.prevent="removeFile(index)" class="text-[#07074D]">
            <svg
              width="10"
              height="10"
              viewBox="0 0 10 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M0.279337 0.279338C0.651787 -0.0931121 1.25565 -0.0931121 1.6281 0.279338L9.72066 8.3719C10.0931 8.74435 10.0931 9.34821 9.72066 9.72066C9.34821 10.0931 8.74435 10.0931 8.3719 9.72066L0.279337 1.6281C-0.0931125 1.25565 -0.0931125 0.651788 0.279337 0.279338Z"
                fill="currentColor"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M0.279337 9.72066C-0.0931125 9.34821 -0.0931125 8.74435 0.279337 8.3719L8.3719 0.279338C8.74435 -0.0931127 9.34821 -0.0931123 9.72066 0.279338C10.0931 0.651787 10.0931 1.25565 9.72066 1.6281L1.6281 9.72066C1.25565 10.0931 0.651787 10.0931 0.279337 9.72066Z"
                fill="currentColor"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

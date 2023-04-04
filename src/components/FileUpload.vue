<script setup lang="ts">
import { ref } from 'vue'

interface FileWithDetails extends File {
  name: string
}

const selectedFile = ref<FileWithDetails | null>(null)

const handleFileUpload = (event: InputEvent) => {
  const inputElement = event.target as HTMLInputElement
  selectedFile.value = inputElement.files![0]
  const reader = new FileReader()
  reader.onload = () => {
    //Preview if you want
  }
  reader.readAsDataURL(selectedFile.value)
}

const uploadFile = () => {
  if (selectedFile.value) {
    // This is just a dummy function for demonstration purposes
    alert(`Uploading ${selectedFile.value.name}...`)
  }
}
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
      <div class="mb-4 pt-4">
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
      </div>
      <div>
        <span class="font-semibold text-left block text-sm text-gray-600 mb-2"
          >{{ selectedFile && selectedFile.name }}
        </span>
        <button
          @click.prevent="uploadFile"
          class="hover:shadow-form w-full rounded-md bg-darkblue hover:opacity-95 py-3 px-8 text-center text-base font-semibold text-white outline-none"
        >
          Upload File
        </button>
      </div>
    </form>
  </div>
</template>

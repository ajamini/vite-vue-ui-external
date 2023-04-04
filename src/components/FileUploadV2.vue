<script setup lang="ts">
import { ref } from 'vue'

interface FileWithDetails extends File {
  name: string
}

const selectedFiles = ref<FileWithDetails[]>([])

const handleFileUpload = (event: InputEvent) => {
  const inputElement = event.target as HTMLInputElement
  const files = inputElement.files!

  for (let i = 0; i < files.length; i++) {
    const reader = new FileReader()
    reader.onload = () => {
      // handle file preview if needed
    }
    reader.readAsDataURL(files[i])

    // store the file in the selectedFiles array
    selectedFiles.value.push(files[i])
  }
  console.log(selectedFiles.value, 'Uploaded ')
}

//Remove file from the selectedFiles array
const removeFile = (index: number) => {
  selectedFiles.value.splice(index, 1)
}

const uploadFiles = () => {
  if (selectedFiles.value) {
    // This is just a dummy function for demonstration purposes
    alert(`Uploading ${selectedFiles.value.length} files...`)
  }
}
</script>
<template>
  <div class="mt-4 md:mt-0 mx-auto w-full max-w-[550px] bg-white rounded-lg shadow-lg">
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
        <div class="mb-5 mt-4 rounded-md bg-[#F5F7FB] py-4 px-8">
          <div v-if="selectedFiles.length === 0" class="text-base font-medium text-[#666]">
            Currently no file selected
          </div>
          <div
            v-else
            v-for="(file, index) in selectedFiles"
            :key="index"
            class="flex items-center justify-between"
          >
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
        <!-- Progress if Needed -->
        <!-- <div class="rounded-md bg-[#F5F7FB] py-4 px-8">
          <div class="flex items-center justify-between">
            <span class="truncate pr-3 text-base font-medium text-[#07074D]"> Progress Demo </span>
            <button class="text-[#07074D]">
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
          <div class="relative mt-5 h-[6px] w-full rounded-lg bg-[#E2E5EF]">
            <div class="absolute left-0 right-0 h-full w-[75%] rounded-lg bg-lightblue"></div>
          </div>
        </div> -->
      </div>

      <div class="flex items-center justify-center w-full">
        <label
          for="offer-upload"
          class="flex flex-col items-center justify-center w-full h-12 text-teal-600 hover:text-teal-800 cursor-pointer"
        >
          <span class="font-semibold">Add more files</span>

          <input
            accept=".pdf,.jpg,.jpeg,.png"
            @change="handleFileUpload($event as InputEvent)"
            id="offer-upload"
            type="file"
            class="hidden"
          />
        </label>
      </div>
    </form>
    <button
      @click.prevent="uploadFiles"
      class="w-full py-4 bg-teal-700 hover:bg-teal-900 text-white font-semibold rounded-b-lg"
    >
      Upload
    </button>
  </div>
</template>

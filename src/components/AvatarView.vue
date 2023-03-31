<script setup lang="ts">
import { ref } from 'vue'

interface FileWithDetails extends File {
  name: string
}

const selectedFile = ref<FileWithDetails | null>(null)
const avatarUrl = ref<string>('https://via.placeholder.com/150')

const handleFileUpload = (event: InputEvent) => {
  const inputElement = event.target as HTMLInputElement
  selectedFile.value = inputElement.files![0]
  const reader = new FileReader()
  reader.onload = () => {
    avatarUrl.value = reader.result as string
  }
  reader.readAsDataURL(selectedFile.value)
}

const uploadAvatar = () => {
  if (selectedFile.value) {
    // This is just a dummy function for demonstration purposes
    alert(`Uploading ${selectedFile.value.name}...`)
  }
}
</script>

<template>
  <div class="w-full text-center">
    <img class="w-24 h-24 rounded-full mx-auto mb-4" :src="avatarUrl" alt="Avatar" />
    <div class="flex items-center justify-center w-full">
      <label
        for="avatar"
        class="flex flex-col items-center justify-center w-full h-12 text-teal-600 hover:text-teal-800 cursor-pointer"
      >
        <span class="font-semibold">Choose avatar</span>

        <input
          id="avatar"
          type="file"
          class="hidden"
          accept="image/*"
          @change="handleFileUpload($event as InputEvent)"
        />
      </label>
    </div>
    <button
      class="mt-1 bg-sky-600 hover:bg-sky-800 text-white py-2 px-4 rounded cursor-pointer"
      @click.prevent="uploadAvatar"
      :disabled="!selectedFile"
    >
      Change
    </button>
  </div>
</template>

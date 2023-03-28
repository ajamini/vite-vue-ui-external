<script setup lang="ts">
//Form Data and Validation Errors Object as props
import { defineProps, watch } from 'vue'
const props = defineProps({
  err: {
    type: Object,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  }
})

const updateFormData = () => {
    props['onUpdate:name'](props.name)
    props['onUpdate:title'](props.title)
}

watch([props.name, props.title], () => {
    updateFormData()
})

</script>

<template>
  <div class="basics-wrapper p-4">
    <label for="title" class="block text-sm font-medium text-gray-700">Title</label>
    <input
      v-model="name"
      type="text"
      name="title"
      id="title"
      autocomplete="title"
      class="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
    />
  </div>
</template>

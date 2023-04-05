<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps<{
  attributes: any // TODO: Type this Record<string, string>
}>()
</script>

<template>
  <!-- Chips to Show Attribute Values -->
  <div class="flex gap-2 flex-wrap mt-2 w-full">
    <div
      v-for="(value, key) in attributes"
      :key="key"
      class="p-chip p-component p-chip-rounded p-chip-info p-mr-2 p-mb-2"
    >
      <span class="p-chip-icon pi pi-info-circle"></span>
      <span class="p-chip-text capitalize">{{ key }}: {{ value }}</span>
    </div>
  </div>
</template>

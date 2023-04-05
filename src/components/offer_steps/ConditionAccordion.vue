<script setup lang="ts">
import { ref } from 'vue'

const conditionItems = ref([
  {
    id: 1,
    title: 'Condition Item 1',
    description: 'Description for Condition Term 1',
    attributes: []
  },
  {
    title: 'Condition Term 2',
    description: 'Description for Condition Term 2'
  },
  {
    title: 'Condition Term 3',
    description: 'Description for Condition Term 3'
  }
])
</script>

<template>
  <div class="condition-wrapper">
    <div class="w-full flex justify-end">
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Select a template
      </button>
    </div>
    <AccordionVue :activeIndex="0">
      <AccordionTab v-for="(item, index) in conditionItems" :key="index" :header="item.title">
        <div class="condition-item">
          <p class="text-sm text-gray-500">{{ item.description }}</p>
        </div>
        <div class="flex justify-end w-full">
          <span class="p-buttonset">
            <PrimeButton label="Skip" icon="pi pi-file" severity="secondary" size="small" />
            <PrimeButton
              label="Edit Template"
              icon="pi pi-file-edit "
              severity="secondary"
              size="small"
            />
          </span>
        </div>
      </AccordionTab>
    </AccordionVue>
  </div>
</template>

<style scoped></style>

<script setup lang="ts">
import { ref } from 'vue'

const showTempModal = ref(false)

const conditionItems = ref([
  {
    id: 1,
    title: 'Condition Item 1',
    description: 'Description for Condition Term 1',
    attributes: {}
  },
  {
    id: 2,
    title: 'Condition Term 2',
    description: 'Description for Condition Term 2',
    attributes: {}
  },
  {
    id: 3,
    title: 'Condition Term 3',
    description: 'Description for Condition Term 3',
    attributes: {}
  }
])

const conditionTemplates = ref([
  {
    title: 'Template 1',
    description: 'Description for Template 1',
    attributes: {
      'Attribute 1': 'Value 1',
      'Attribute 2': 'Value 2',
      'Attribute 3': 'Value 3'
    }
  },
  {
    title: 'Something that is really long and will wrap to the next line',
    description: 'This gonna be a long text for the template',
    attributes: {
      salmon: 'Salmon Value',
      southeast: 'Yes',
      practical: 'probably',
      loan: 'nope'
    }
  },
  {
    title: 'Template 3',
    description: 'Description for Template 3',
    attributes: {
      forward: 'Value 1',
      assimilated: 'Value 2',
      east: 'Value 3',
      indexing: 'Yes'
    }
  },
  {
    title: 'Template for AD',
    description: 'Description for Template for AD',
    attributes: {
      road: '03 Becker',
      watt: 'wattage',
      enhanced: 'absoluetly',
      soft: 'yes'
    }
  }
])

//Template Modal Functions
function editTemplate(event: Event, item_id: number) {
  // viewContactDetails.value = contacts.value.find(
  //   (contact) => contact.id === id
  // ) as (typeof contacts.value)[0]
  console.log('Edit Template', item_id)
  showTempModal.value = true
}
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
              @click.prevent="editTemplate($event, item.id)"
              label="Edit Template"
              icon="pi pi-file-edit "
              severity="secondary"
              size="small"
            />
          </span>
        </div>
      </AccordionTab>
    </AccordionVue>
    <DialogModal
      v-model:visible="showTempModal"
      modal
      header="Select a template"
      :style="{ width: '35vw' }"
      :breakpoints="{ '960px': '75vw', '641px': '100vw' }"
    >
      <div class="w-full">Form goes here</div>
      <template #footer>
        <button
          class="inline-block px-6 py-2 text-xs font-medium leading-6 text-center text-white uppercase transition bg-darkred rounded shadow ripple hover:shadow-lg hover:bg-red-600 focus:outline-none"
          @click="showTempModal = false"
        >
          Cancel
        </button>
        <button
          class="inline-block px-6 py-2 text-xs font-medium leading-6 text-center text-white uppercase transition bg-lightblue rounded shadow ripple hover:shadow-lg hover:bg-sky-700 focus:outline-none"
          autofocus
        >
          Add
        </button>
      </template>
    </DialogModal>
  </div>
</template>

<style scoped></style>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import AttributeChip from './AttributeChip.vue'

const showTempModal = ref(false)
const editCondition = ref({
  id: 0,
  title: '',
  description: '',
  is_list: false,
  attributes: {}
})
//API Returned Data for Condition Items and Templates (Mocked)
const conditionItems = reactive([
  {
    id: 1,
    title: 'Condition Item 1',
    description: 'List of Conditions, Condition 1, Condition 2, Condition 3',
    is_list: true,
    attributes: {
      salmon: 'Salmon Value',
      southeast: 'Yes',
      practical: 'probably',
      loan: 'nope'
    }
  },
  {
    id: 2,
    title: 'Condition Term 2',
    description: 'Description for Condition Term 2',
    is_list: false,
    attributes: {}
  },
  {
    id: 3,
    title: 'Condition Term 3',
    description: 'Description for Condition Term 3',
    is_list: false,
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
  console.log('Edit Condition Template', item_id)
  editCondition.value = conditionItems.find(
    (item) => item.id === item_id
  ) as (typeof conditionItems)[0]
  showTempModal.value = true
}

function handleUpdate() {
  console.log('Update Condition Template', editCondition.value)
  // TODO:Validate the form
  const index = conditionItems.findIndex((item) => item.id === editCondition.value.id)
  conditionItems[index] = editCondition.value
  showTempModal.value = false
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
          <ul v-if="item.is_list === true" class="list-disc pl-8">
            <li v-for="(row, index) in item.description.split(',')" :key="index">
              {{ row.trim() }}
            </li>
          </ul>
          <p v-else class="text-sm text-gray-500">{{ item.description }}</p>
          <AttributeChip :attributes="item.attributes" />
        </div>
        <div class="flex justify-end w-full mt-2">
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
      header="Edit Condition Template"
      :style="{ width: '40vw' }"
      :breakpoints="{ '960px': '75vw', '641px': '100vw' }"
    >
      <div class="w-full">
        <div class="flex flex-col">
          <div class="flex flex-col">
            <label class="block text-sm font-medium text-gray-700">Title</label>
            <input
              type="text"
              class="w-full px-3 mt-2 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
              v-model="editCondition.title"
            />
          </div>
          <div class="flex flex-col mt-4">
            <label class="block text-sm font-medium text-gray-700">Description</label>
            <textarea
              class="w-full mt-2 px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
              v-model="editCondition.description"
            ></textarea>
          </div>
          <div class="mt-2 flex justify-start items-center">
            <PrimeCheckbox v-model="editCondition.is_list" :binary="true" />
            <span class="text-md text-gray-500 ml-1"
              >Show as list
              <span class="text-xs text-gray-500"> (separate by comma)</span>
            </span>
          </div>
          <div class="text-gray-600 pt-4">
            <h2 class="text-2xl font-semibold">Attributes</h2>
          </div>
          <div class="attributes-wrapper grid grid-cols-1 md:grid-cols-2 mt-2">
            <div
              v-for="(value, key) in editCondition.attributes"
              :key="key"
              class="inline-flex justify-between md:pr-8 py-1 items-center"
            >
              <label for="{{ key }}" class="mr-2 text-sm capitalize">{{ key }}</label>
              <input
                v-model="editCondition.attributes[key]"
                id="{{ key }}"
                type="text"
                class="p-1 text-sm border rounded"
              />
            </div>
          </div>
        </div>
        <!-- Show Preview -->
        <div class="w-full mt-4 border-t-2 border-gray-400">
          <h2 class="text-2xl font-semibold text-gray-700">Preview</h2>
          <div class="condition-item mt-2">
            <p class="text-lg text-gray-600">{{ editCondition.title }}</p>
            <ul v-if="editCondition.is_list === true" class="list-disc pl-8">
              <li v-for="(item, index) in editCondition.description.split(',')" :key="index">
                {{ item.trim() }}
              </li>
            </ul>
            <p v-else class="text-sm text-gray-500">{{ editCondition.description }}</p>
            <AttributeChip :attributes="editCondition.attributes" />
          </div>
        </div>
      </div>
      <template #footer>
        <button
          class="inline-block px-6 py-2 text-xs font-medium leading-6 text-center text-white uppercase transition bg-darkred rounded shadow ripple hover:shadow-lg hover:bg-red-600 focus:outline-none"
          @click="showTempModal = false"
        >
          Cancel
        </button>
        <button
          @click="handleUpdate"
          class="inline-block px-6 py-2 text-xs font-medium leading-6 text-center text-white uppercase transition bg-lightblue rounded shadow ripple hover:shadow-lg hover:bg-sky-700 focus:outline-none"
          autofocus
        >
          Update
        </button>
      </template>
    </DialogModal>
  </div>
</template>

<style scoped></style>

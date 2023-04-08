<script setup lang="ts">
import { ref, reactive } from 'vue'
import { useConfirm } from 'primevue/useconfirm'
import AttributeChip from './AttributeChip.vue'

const confirm = useConfirm()

interface ConditionItem {
  id: number
  title: string
  description: string
  is_list: boolean
  attributes: {
    [key: string]: string
  }
}

//API Returned Data for Condition Items and Templates (Mocked)
const conditionItems = reactive<ConditionItem[]>([
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
    description: 'Some Vague Condition, List Items, Condition 1, Condition 2, Condition 3',
    is_list: true,
    attributes: {}
  }
])

const conditionTemplates = ref([
  {
    id: 1,
    title: 'Template 1',
    description: 'Description for Template 1',
    is_list: false,
    attributes: {
      attr_1: 'Value 1',
      attr_2: 'Value 2',
      attr_3: 'Value 3',
      attr_4: 'Yes'
    }
  },
  {
    id: 2,
    title: 'Something that is really long and will wrap to the next line',
    description: 'Condition 9, condition 6, condition 7',
    is_list: true,
    attributes: {
      salmon: 'Salmon Value',
      southeast: 'Yes',
      practical: 'probably',
      loan: 'nope'
    }
  },
  {
    id: 3,
    title: 'Template 3',
    description: 'Description for Template 3',
    is_list: false,
    attributes: {
      forward: 'Value 1',
      assimilated: 'Value 2',
      east: 'Value 3',
      indexing: 'Yes'
    }
  },
  {
    id: 9,
    title: 'Template for AD',
    description: 'Description for Template for AD',
    is_list: false,
    attributes: {
      road: '03 Becker',
      watt: 'wattage',
      enhanced: 'absoluetly',
      soft: 'yes'
    }
  }
])
const showTempList = ref(false)

//Modal to Edit Condition Template
const showTempMenu = ref(false)
const editCondition = ref<ConditionItem>({
  id: 0,
  title: '',
  description: '',
  is_list: false,
  attributes: {}
})

const tempAttributes = ref<{ [key: string]: string }>({})
//Template Modal Functions
function editTemplate(item_id: number) {
  console.log('Edit Condition Template', item_id)
  const item = conditionItems.find((item) => item.id === item_id)
  if (item) {
    editCondition.value = { ...item }
    tempAttributes.value = { ...item.attributes }
    showTempMenu.value = true
  }
}

function handleUpdate() {
  // TODO: Validate the form
  const index = conditionItems.findIndex((item) => item.id === editCondition.value.id)
  conditionItems[index] = {
    ...editCondition.value,
    attributes: { ...tempAttributes.value }
  }
  console.log('Update Condition Template', editCondition.value)

  showTempMenu.value = false
}

//Remove / Skip Condition Item
function handleSkip(event: Event, item_id: number) {
  console.log('Skip Condition Item', item_id)
  confirm.require({
    message: 'Are you sure you want to skip this condition?',
    header: 'Skip COndition',
    icon: 'pi pi-exclamation-triangle',
    acceptIcon: 'pi pi-check',
    rejectIcon: 'pi pi-times',
    acceptClass: 'p-button-danger',
    target: event.currentTarget as HTMLElement,

    accept: () => {
      const index = conditionItems.findIndex((item) => item.id === item_id)
      conditionItems.splice(index, 1)
      //TODO: API Call to delete the contact
      console.log('Skipped', item_id)
    },
    reject: () => {
      //Do nothing
      console.log('Rejected')
    }
  })
}

const searchInput = ref('')
const filteredTemplates = () => {
  return conditionTemplates.value.filter((item) => {
    return (
      item.title.toLowerCase().includes(searchInput.value.toLowerCase()) ||
      item.description.toLowerCase().includes(searchInput.value.toLowerCase())
    )
  })
}

//Add new Condition Item from Template
function handleSelect(item_id: number) {
  console.log('Add Condition Item', item_id)
  const item = conditionTemplates.value.find((item) => item.id === item_id)
  // Add to conditionItems with new ID
  if (item) {
    conditionItems.push({
      ...item,
      id: conditionItems.length + 1,
      attributes: { ...item.attributes } as any //HACK: Used any to avoid type error since the interface is not matching and has dynamic attributes
    })
  }
  showTempList.value = false //Close the modal
}

//Expose Condition Items to Parent Component ~ PINIA Store or Vuex is better for this
function getConditionItems() {
  return conditionItems
}

defineExpose({
  getConditionItems
})
</script>

<template>
  <div class="condition-wrapper">
    <div class="w-full flex justify-end">
      <button
        @click.prevent="showTempList = true"
        class="bg-darkblue hover:opacity-90 mb-2 text-white font-bold py-2 px-4 rounded"
      >
        Select a template
      </button>
    </div>
    <AccordionVue :activeIndex="0">
      <AccordionTab
        v-for="(item, index) in conditionItems.reverse()"
        :key="index"
        :header="item.title"
      >
        <ConfirmPopup></ConfirmPopup>
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
            <PrimeButton
              @click="handleSkip($event, item.id)"
              label="Skip"
              icon="pi pi-file"
              size="small"
            />
            <PrimeButton
              @click.prevent="editTemplate(item.id)"
              label="Edit Template"
              icon="pi pi-file-edit "
              size="small"
            />
          </span>
        </div>
      </AccordionTab>
    </AccordionVue>
    <!-- Available Templates -->
    <DialogModal
      v-model:visible="showTempList"
      modal
      header="Select a template"
      :style="{ width: '60vw' }"
      :breakpoints="{ '960px': '75vw', '641px': '100vw' }"
    >
      <div class="w-full">
        <h3 class="text-gray-600 text-sm font-semibold">
          Select a template to add to the condition list. You can also edit the template to add
          additional information.
        </h3>
        <div class="flex flex-col mt-4">
          <div class="pt-2 relative text-gray-600">
            <input
              class="border-2 border-gray-300 w-full bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
              type="search"
              name="search"
              placeholder="Search"
              v-model="searchInput"
            />
            <div class="absolute right-0 top-0 mt-5 mr-4">
              <svg
                class="text-gray-600 h-4 w-4 fill-current cursor-text"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                version="1.1"
                id="Capa_1"
                x="0px"
                y="0px"
                viewBox="0 0 56.966 56.966"
                style="enable-background: new 0 0 56.966 56.966"
                xml:space="preserve"
                width="512px"
                height="512px"
              >
                <path
                  d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z"
                />
              </svg>
            </div>
          </div>
        </div>
        <div class="grid grid-flow-row gap-3 pt-4">
          <div
            v-for="(item, index) in filteredTemplates()"
            :key="index"
            class="shadow-lg rounded-md overflow-hidden py-2 px-4 bg-gray-100"
          >
            <h4 class="text-gray-600 text-base font-semibold">{{ item.title }}</h4>

            <div class="mt-2">
              <ul v-if="item.is_list === true" class="list-disc pl-8">
                <li v-for="(row, index) in item.description.split(',')" :key="index">
                  {{ row.trim() }}
                </li>
              </ul>
              <p v-else class="text-sm text-gray-500">{{ item.description }}</p>
            </div>
            <div class="template-contents flex justify-between my-4">
              <div class="attr-wrapper">
                <AttributeChip :attributes="item.attributes" />
              </div>
              <div class="flex justify-center items-center">
                <button
                  @click.prevent="handleSelect(item.id)"
                  class="hover:opacity-90 text-darkblue font-bold py-2 px-4 rounded"
                >
                  Select
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DialogModal>
    <!-- Edit Templates -->
    <SidebarVue v-model:visible="showTempMenu" class="w-full condition-edit-menu" position="right">
      <h2 class="text-gray-800 font-semibold text-lg">Pending approval</h2>
      <div class="w-full border border-gray-200 p-8 my-4">
        <div class="flex justify-between">
          <div class="flex-1">
            <p class="text-gray-800 font-semibold text-lg">From</p>
            <p class="text-gray-600 text-base">marketplace-b9f277</p>
          </div>
          <div class="flex-1 pl-8">
            <p class="text-gray-800 font-semibold text-lg">Transaction Nr.</p>
            <p class="text-gray-600 text-base">1000.00</p>
          </div>
        </div>
        <div class="flex justify-between border-t my-4 pt-4">
          <div class="flex-1">
            <p class="text-gray-800 font-semibold text-lg">Source</p>
            <p class="text-violet-800 text-sm md:text-base mt-4">
              <span class="bg-violet-300 rounded px-2 py-1">merchants:118271</span>
            </p>
          </div>
          <div class="flex-1 pl-8">
            <p class="text-gray-800 font-semibold text-lg">Destination</p>
            <p class="text-amber-800 text-sm md:text-base mt-4">
              <span class="bg-amber-200 rounded px-2 py-1">merchants:118271</span>
            </p>
          </div>
        </div>
        <div class="flex justify-between border-t my-4 pt-4">
          <div class="flex-1">
            <p class="text-gray-800 font-semibold text-lg">Value</p>
            <p class="text-green-800 font-semibold text-2xl mt-4">$50,000.00</p>
          </div>
          <div class="flex-1 pl-8">
            <p class="text-gray-800 font-semibold text-lg">Description</p>
            <p class="text-gray-800 text-sm md:text-base mt-4">No description provided</p>
          </div>
        </div>
      </div>
      <div class="w-full border border-gray-200 p-8 my-4 flex">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-8 h-8"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
          />
        </svg>
        <p class="text-gray-800 font-semibold text-lg ml-4">
          This <span class="text-green-800 font-semibold">transaction</span> is pending approval.
        </p>
      </div>
      <div class="flex items-center justify-center w-full gap-2">
        <button
          @click="showTempMenu = false"
          type="button"
          class="w-full py-3 px-4 text-base font-semibold text-gray-800 border-2 rounded hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-opacity-50"
        >
          Reject
        </button>
        <button
          type="button"
          class="w-full py-3 px-4 text-base font-semibold text-white bg-gray-700 rounded hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-opacity-50"
        >
          Pay now
        </button>
      </div>
    </SidebarVue>
  </div>
</template>

<style>
.condition-edit-menu {
  width: 32rem !important;
}

@media (max-width: 768px) {
  .condition-edit-menu {
    width: 70% !important;
  }
}
</style>

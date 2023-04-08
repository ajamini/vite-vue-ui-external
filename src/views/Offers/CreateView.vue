<script setup lang="ts">
import ConditionAccordion from '@/components/offer_steps/ConditionAccordion.vue'
import RepresentStep from '@/components/offer_steps/RepresentStep.vue'
import ReviewStep from '@/components/offer_steps/ReviewStep.vue'
import { ref } from 'vue'
import { validateForm } from './ValidateForm'

interface FileWithDetails extends File {
  name: string
}

const stepTitles = ['Basics', 'Agreement', 'Condition', 'Representation', 'Documents', 'Review']

const currentStep = ref(2) //Change to 0 to start from first step - 0, 1, 2, 3, 4, 5 ~ 6 steps
const formData = ref({
  created_at: '',
  mls: '',
  buyers: [],
  offerDate: '',
  seller: '',
  purchasePrice: 0,
  depositAmount: 0,
  depositTerms: '',
  irrevocableDate: '',
  completionDate: '',
  conditions: {},
  represent: ''
})

const uploadedFiles = ref<FileWithDetails[]>([])
const conditionComponent = ref()
const repComponent = ref()

//Error Message Object for Validation
const errors = ref({
  mls: '',
  buyers: '',
  offerDate: '',
  seller: '',
  purchasePrice: '',
  depositAmount: '',
  depositTerms: '',
  irrevocableDate: '',
  completionDate: ''
})

//Set min date to start from today
const minDate = ref(new Date())
minDate.value.setDate(minDate.value.getDate() + 1)

// Form Submit Handler - Validate and Move to Next Step
const handleSubmit = () => {
  let fieldsToValidate = []
  switch (currentStep.value) {
    case 0:
      fieldsToValidate = ['mls', 'buyers']
      validateForm(formData, errors, fieldsToValidate)
      if (errors.value.mls !== '' || errors.value.buyers !== '') {
        return
      }
      currentStep.value = 1 //Could be currentStep.value++ but I prefer to be explicit
      break

    case 1:
      fieldsToValidate = [
        'offerDate',
        'seller',
        'purchasePrice',
        'depositAmount',
        'depositTerms',
        'irrevocableDate',
        'completionDate'
      ]
      validateForm(formData, errors, fieldsToValidate)
      if (
        errors.value.offerDate !== '' ||
        errors.value.seller !== '' ||
        errors.value.purchasePrice !== '' ||
        errors.value.depositAmount !== '' ||
        errors.value.depositTerms !== '' ||
        errors.value.irrevocableDate !== '' ||
        errors.value.completionDate !== ''
      ) {
        return
      }
      currentStep.value = 2
      break
    case 2:
      // Conditions are handled by Child Component
      formData.value.conditions = conditionComponent.value.getConditionItems()
      //Validation if Required
      // if (formData.value.conditions === '') {
      //   return alert('Select Condition')
      // }
      currentStep.value = 3
      break
    case 3:
      formData.value.represent = repComponent.value.getRep()
      if (formData.value.represent === '') {
        return alert('Select Representation')
      }
      console.log('Rep Value', formData.value.represent)
      //Move to next step
      currentStep.value = 4
      break
    case 4:
      // Upload Files to Server
      console.log('Upload Files', uploadedFiles.value)
      // do something
      currentStep.value = 5
      break
    case 5:
      // do something
      //Actual Submit Form Data
      console.log('Save these Data', formData.value)
      alert('Form Submitted, Check Console')
      //Reset Form Data
      break
    default:
      // Back to first step
      currentStep.value = 0
      break
  }
}

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

const handleGoBack = () => {
  if (currentStep.value > 0) {
    currentStep.value--
  }
}

//First Step
//TODO: Contacts should be retrived from DB
const suggestedItems = ref([
  {
    id: 1,
    name: 'Wraith'
  },
  {
    id: 2,
    name: 'Bangalore'
  },
  {
    id: 3,
    name: 'Bloodhound'
  },
  {
    id: 4,
    name: 'Pathfinder'
  },
  {
    id: 5,
    name: 'Watson'
  }
])
//Store Filtered Contacts/Items for Autocomplete
const filteredContactItems = ref<{ id: number; name: string }[]>([])

const contactSearch = (event: any) => {
  setTimeout(() => {
    if (!event.query.trim().length) {
      filteredContactItems.value = [...suggestedItems.value]
    } else {
      filteredContactItems.value = suggestedItems.value.filter((item) => {
        return item.name.toLowerCase().startsWith(event.query.toLowerCase())
      })
    }
  }, 250)
}
</script>

<template>
  <div class="w-full p-4 md:p-8">
    <h1 class="text-2xl font-semibold text-gray-700">Create Offer</h1>
    <span class="text-sm text-gray-500"
      >You need to complete a series of Steps to create a offer.
    </span>
    <div
      class="wrapper-wizard pb-8 px-6 md:p-8 md:flex flex-initial bg-white shadow-xl rounded-lg mt-8 gap-2"
    >
      <!-- Left Side Panel -->
      <aside class="md:min-h-screen w-full md:w-1/3 md:grid justify-center">
        <div class="mt-4 grid grid-cols-2 md:flex md:flex-col flex-wrap md:justify-start">
          <li
            v-for="(stepTitle, index) in stepTitles"
            :key="index"
            class="flex items-center ml-2 md:ml-0 mt-4 gap-4"
          >
            <span
              class="w-8 h-8 md:w-10 md:h-10 text-xl font-semibold rounded flex items-center justify-center"
              :class="
                currentStep === index ? 'bg-darkblue text-white' : 'bg-gray-200 text-gray-600'
              "
            >
              <!-- Completed Steps are Marked otherwise Step Number -->
              <span v-if="currentStep > index" class="text-darkblue"
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
              </span>
              <span v-else>{{ index + 1 }}</span>
            </span>
            <span class="font-semibold text-xs md:text-sm text-gray-700">{{ stepTitle }}</span>
          </li>
        </div>
      </aside>
      <!-- Right Panel -->
      <main class="w-full md:w-2/3">
        <form class="w-full pt-6" @submit.prevent="handleSubmit">
          <div class="steps-wrapper min-h-[240px] md:min-h-[420px]">
            <!-- Second Step ~// First Step at the Bottom served as Default -->
            <div
              class="agree-wrapper px-4 md:px-8 md:flex gap-6 justify-start"
              v-if="currentStep === 1"
            >
              <div class="w-full md:w-1/2">
                <div class="input-wrapper grid grid-flow-row mt-4">
                  <label class="text-gray-600 font-semibold mb-1" for="buyers">Offer Date</label>
                  <CalendarVue
                    v-model="formData.offerDate"
                    :minDate="minDate"
                    :manualInput="false"
                    :class="{ 'p-invalid': errors.offerDate }"
                  />
                  <small class="p-error" id="date-error">{{ errors.offerDate || '&nbsp;' }}</small>
                </div>
                <div class="input-wrapper grid grid-flow-row mt-4">
                  <label class="text-gray-600 font-semibold mb-1" for="buyers">Sellers</label>
                  <AutoComplete
                    v-model="formData.seller"
                    dropdown
                    :suggestions="filteredContactItems"
                    @complete="contactSearch"
                    forceSelection
                    option-label="name"
                    placeholder="Search for seller"
                    :class="{ 'p-invalid': errors.seller }"
                  />
                  <small class="p-error" id="text-error">{{ errors.seller || '&nbsp;' }}</small>
                </div>
                <div class="input-wrapper grid grid-flow-row mt-4">
                  <label class="text-gray-600 font-semibold mb-1" for="depositTerms"
                    >Deposit Terms</label
                  >
                  <InputText
                    id="depositTerms"
                    v-model="formData.depositTerms"
                    :class="{ 'p-invalid': errors.depositTerms }"
                  />
                  <small class="p-error" id="text-error">{{
                    errors.depositTerms || '&nbsp;'
                  }}</small>
                </div>
                <div class="input-wrapper grid grid-flow-row mt-4">
                  <label class="text-gray-600 font-semibold mb-1" for="completion"
                    >Completion Date</label
                  >
                  <CalendarVue
                    v-model="formData.completionDate"
                    :minDate="minDate"
                    :manualInput="false"
                    :class="{ 'p-invalid': errors.completionDate }"
                  />
                  <small class="p-error" id="date-error">{{
                    errors.completionDate || '&nbsp;'
                  }}</small>
                </div>
              </div>
              <div class="w-full md:w-1/2">
                <div class="input-wrapper grid grid-flow-row mt-4">
                  <label class="text-gray-600 font-semibold mb-1" for="buyers"
                    >Irrevocable Date</label
                  >
                  <CalendarVue
                    v-model="formData.irrevocableDate"
                    :minDate="minDate"
                    :manualInput="false"
                    :class="{ 'p-invalid': errors.irrevocableDate }"
                  />
                  <small class="p-error" id="date-error">{{
                    errors.irrevocableDate || '&nbsp;'
                  }}</small>
                </div>
                <div class="input-wrapper grid grid-flow-row mt-4">
                  <label class="text-gray-600 font-semibold mb-1" for="purchasePrice"
                    >Purchase Price</label
                  >
                  <InputNumber
                    v-model="formData.purchasePrice"
                    inputId="integeronly"
                    :class="{ 'p-invalid': errors.purchasePrice }"
                  />
                  <small class="p-error" id="text-error">{{
                    errors.purchasePrice || '&nbsp;'
                  }}</small>
                </div>
                <div class="input-wrapper grid grid-flow-row mt-4">
                  <label class="text-gray-600 font-semibold mb-1" for="purchasePrice"
                    >Deposit Amount</label
                  >
                  <InputNumber
                    v-model="formData.depositAmount"
                    inputId="integeronly"
                    :class="{ 'p-invalid': errors.depositAmount }"
                  />
                  <small class="p-error" id="text-error">{{
                    errors.depositAmount || '&nbsp;'
                  }}</small>
                </div>
              </div>
            </div>
            <!-- Third Step -->
            <ConditionAccordion v-else-if="currentStep === 2" ref="conditionComponent" />
            <!-- Forth Step -->
            <RepresentStep v-else-if="currentStep === 3" ref="repComponent" />
            <!-- Fifth Step -->
            <div v-else-if="currentStep === 4" class="w-full md:w-3/4">
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
            <!-- Sixth Step -->
            <ReviewStep :data="formData" :files="uploadedFiles" v-else-if="currentStep === 5" />
            <!-- Default Step / First Step -->
            <div class="basics-wrapper px-8" v-if="currentStep === 0">
              <div class="input-wrapper grid grid-flow-row mt-4 md:w-1/2">
                <label class="text-gray-600 font-semibold mb-1" for="buyers">Buyers</label>
                <AutoComplete
                  v-model="formData.buyers"
                  dropdown
                  multiple
                  :suggestions="filteredContactItems"
                  @complete="contactSearch"
                  forceSelection
                  option-label="name"
                  placeholder="Search for Buyers"
                  :class="{ 'p-invalid': errors.buyers }"
                />
                <small class="p-error" id="text-error">{{ errors.buyers || '&nbsp;' }}</small>
              </div>
              <div class="input-wrapper grid grid-flow-row mt-4 md:w-1/2">
                <label class="text-gray-600 font-semibold mb-1" for="mls">MLS#</label>
                <AutoComplete
                  v-model="formData.mls"
                  dropdown
                  :suggestions="filteredContactItems"
                  @complete="contactSearch"
                  forceSelection
                  option-label="name"
                  placeholder="Type contact name"
                  :class="{ 'p-invalid': errors.mls }"
                />
                <small class="p-error" id="text-error">{{ errors.mls || '&nbsp;' }}</small>
              </div>
            </div>
          </div>
          <div class="flex justify-between w-full pl-4 mt-1">
            <div class="w-1/3 flex justify-start">
              <button
                type="button"
                v-if="currentStep > 0"
                class="w-20 px-2 py-2 text-sm bg-slate-200 rounded hover:opacity-80 font-medium leading-6 text-center text-darkblue uppercase focus:outline-none"
                @click="handleGoBack"
              >
                Back
              </button>
              <button
                type="submit"
                class="ml-4 block w-20 px-2 py-2 text-xs font-medium leading-6 text-center text-white uppercase transition bg-darkblue rounded shadow ripple hover:shadow-lg hover:bg-opacity-90 focus:outline-none"
              >
                {{ currentStep === 5 ? 'Submit' : 'Next' }}
              </button>
            </div>
            <div class="w-2/3 px-12">
              <span class="text-sm text-sky-700">25% Complete</span>
              <div class="relative flex rounded h-3 w-full overflow-hidden bg-gray-300">
                <div
                  class="relative w-1/4 bg-sky-500 top-0 left-0 h-full rounded p-1 text-center text-sm text-blue-100"
                ></div>
              </div>
            </div>
          </div>
        </form>
      </main>
    </div>
  </div>
</template>

<style>
ul.p-autocomplete-multiple-container {
  width: 100%;
}
</style>

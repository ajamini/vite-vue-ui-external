<script setup lang="ts">
import BasicsFormVue from '@/components/offers/BasicsForm.vue'
import { ref } from 'vue'

const stepTitles = ['Basics', 'Agreement', 'Condition', 'Representation', 'Documents', 'Review']

const currentStep = ref(0)

const handleSubmit = () => {
  switch (currentStep.value) {
    case 0:
      // Validate Form
      // If valid, then currentStep++
      currentStep.value = 1 //Could be currentStep.value++ but I prefer to be explicit
      break
    case 1:
      currentStep.value = 2
      break
    case 2:
      // do something
      break
    case 3:
      // do something
      break
    case 4:
      // do something
      break
    case 5:
      // do something
      break
    default:
      // do something
      break
  }
}

const handleGoBack = () => {
  if (currentStep.value > 0) {
    currentStep.value--
  }
}
</script>

<template>
  <div class="w-full p-8">
    Other things goes here
    <div class="wrapper-wizard p-8 flex flex-initial bg-white shadow-xl rounded-lg mt-8 gap-2">
      <aside class="min-h-screen w-1/3 grid justify-center">
        <ul class="list-none mt-4">
          <li
            v-for="(stepTitle, index) in stepTitles"
            :key="index"
            class="flex items-center mt-4 gap-4"
          >
            <span
              class="w-10 h-10 text-xl font-semibold rounded flex items-center justify-center"
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
            <span class="font-semibold text-sm text-gray-700">{{ stepTitle }}</span>
          </li>
        </ul>
      </aside>
      <main class="border-2 w-2/3">
        <form class="w-full" @submit.prevent="handleSubmit">
          <div class="input-wrapper border-2 border-teal-400 min-h-[480px]">
            <BasicsFormVue v-if="currentStep === 0" />
            <div v-else-if="currentStep === 1"><Agreement /> Agreement</div>
            <div v-else-if="currentStep === 2"><Condition /> Condition</div>
            <div v-else-if="currentStep === 3"><Representation /> Representation</div>
            <div v-else-if="currentStep === 4"><Documents /> Documents</div>
            <div v-else-if="currentStep === 5"><Review /> Review</div>
            <div v-else><Basics /> Basics</div>
          </div>

          <div class="button-wrapper flex justify-start w-full pl-4 mt-2">
            <button
              type="button"
              v-if="currentStep > 0"
              class="w-20 px-2 py-2 text-sm hover:text-teal-700 font-medium leading-6 text-center text-darkblue uppercase focus:outline-none"
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
        </form>
      </main>
    </div>
  </div>
</template>

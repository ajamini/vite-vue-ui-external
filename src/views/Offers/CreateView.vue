<script setup lang="ts">
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
      // do something
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
      <aside class="min-h-screen w-1/3 border-2 grid justify-center">
        <ul class="list-none mt-4">
          <li
            v-for="(stepTitle, index) in stepTitles"
            :key="index"
            class="flex items-center mt-4 gap-4"
          >
            <span
              class="w-10 h-10 text-xl font-semibold text-gray-600 rounded bg-gray-200 flex items-center justify-center"
            >
              {{ index + 1 }}
            </span>
            <span class="font-semibold text-sm text-gray-700">{{ stepTitle }}</span>
          </li>
        </ul>
      </aside>
      <main class="min-h-screen w-2/3 border-2 border-teal-500">
        <div v-if="currentStep === 0"><Basics /> Basics</div>
        <div v-else-if="currentStep === 1"><Agreement /> Agreement</div>
        <div v-else-if="currentStep === 2"><Condition /> Condition</div>
        <div v-else-if="currentStep === 3"><Representation /> Representation</div>
        <div v-else-if="currentStep === 4"><Documents /> Documents</div>
        <div v-else-if="currentStep === 5"><Review /> Review</div>
        <div v-else><Basics /> Basics</div>
        <button @click="handleGoBack">Back</button>
        <button class="ml-4" @click="handleSubmit">Next</button>
      </main>
    </div>
  </div>
</template>

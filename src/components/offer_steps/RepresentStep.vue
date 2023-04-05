<script setup lang="ts">
import { ref, reactive } from 'vue'

type Question = {
  id: number
  question: string
  yes: Question | null
  no: Question | null
}

type FinalAnswers = {
  [key: number]: boolean
}

const props = defineProps({
  data: {
    type: Object,
    required: true
  }
})

const toHumanDate = (date: string) => {
  const d = new Date(date)
  return d.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })
}
// TODO: Replace with actual questions ~ ID should be unique currently using index
const questions = reactive([
  {
    id: 1,
    question: 'Do you know the way?',
    yes: {
      id: 2,
      question: 'Have you been there?',
      yes: {
        id: 3,
        question: 'Did you like it?',
        yes: {
          id: 4,
          question: 'You should go there again sometime',
          yes: null,
          no: null
        },
        no: {
          id: 5,
          question: 'Nice try ',
          yes: null,
          no: null
        }
      },
      no: {
        id: 6,
        question: 'Cool story bro',
        yes: null,
        no: null
      }
    },
    no: {
      id: 9,
      question: 'You wanna know which way?',
      yes: {
        id: 10,
        question: 'Are you okay with me?',
        yes: {
          id: 15,
          question: 'Are you sure?',
          yes: null,
          no: null
        },
        no: {
          id: 11,
          question: 'okie dokie',
          yes: null,
          no: null
        }
      },
      no: {
        id: 12,
        question: 'You sure?',
        yes: {
          id: 13,
          question: 'Maybe you should go there',
          yes: null,
          no: null
        },
        no: {
          id: 14,
          question: 'Good choice',
          yes: null,
          no: null
        }
      }
    }
  }
])

const currentQuestion = ref<Question>(questions[0])

const finalAnswers = reactive<FinalAnswers>({})

function answerQuestion(answer: Question | boolean) {
  if (answer) {
    if (currentQuestion.value.yes) {
      currentQuestion.value = currentQuestion.value.yes
      // Add Current Question and answer to final answers
      Object.assign(finalAnswers, { [currentQuestion.value.question]: true })
    }
  } else {
    if (currentQuestion.value.no) {
      currentQuestion.value = currentQuestion.value.no
      Object.assign(finalAnswers, { [currentQuestion.value.question]: false })
    } else {
      // Object.assign(finalAnswers, { [currentQuestion.value.question]: false }) //Default to False
      // Reset to first question
      currentQuestion.value = questions[0]
    }
  }
  console.log('Final answers', finalAnswers)
}
</script>

<template>
  <div class="bg-gray-100 py-8">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="lg:text-center">
        <h2 class="text-base text-indigo-600 font-semibold tracking-wide uppercase">
          Representation
        </h2>
        <p class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          Details
        </p>
      </div>
      <div class="p-4">
        <div class="text-lg font-bold mb-4">{{ currentQuestion.question }}</div>
        <div class="flex justify-start gap-4">
          <button
            v-if="currentQuestion.yes"
            class="py-2 px-4 rounded-md bg-lightblue text-white hover:bg-teal-800"
            @click.prevent="answerQuestion(true)"
          >
            Yes
          </button>
          <button
            v-if="currentQuestion.no"
            class="py-2 px-4 rounded-md bg-lightblue text-white hover:bg-teal-800"
            @click.prevent="answerQuestion(false)"
          >
            No
          </button>
        </div>
        <div class="w-full">
          <!-- SHow all anwser if available -->
          <div v-if="Object.keys(finalAnswers).length > 0">
            <div class="text-lg text-gray-500 font-bold my-4">Final Answers:</div>
            <div class="text-lg text-gray-500 leading-relaxed pl-6">
              {{ finalAnswers }}
            </div>
          </div>
        </div>
      </div>

      <div class="mt-16">
        <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div class="bg-white rounded-lg shadow-lg">
            <div class="px-6 py-8">
              <div class="text-2xl font-bold mb-4">Location</div>
              <div class="text-lg text-gray-700 leading-relaxed">
                <p>123 Main St.</p>
                <p>Anytown, USA 12345</p>
              </div>
            </div>
          </div>

          <div class="bg-white rounded-lg shadow-lg">
            <div class="px-6 py-8">
              <div class="text-2xl font-bold mb-4">Offer Details</div>
              <div class="text-lg text-gray-700 leading-relaxed">
                <p>Price: ${{ props.data.purchasePrice }}</p>
                <p>Date: {{ toHumanDate(props.data.offerDate) }}</p>
              </div>
            </div>
          </div>

          <div class="bg-white rounded-lg shadow-lg">
            <div class="px-6 py-8">
              <div class="text-2xl font-bold mb-4">Conditions</div>
              <div class="text-lg text-gray-700 leading-relaxed">
                <ul class="list-disc pl-6">
                  <li>As-is condition</li>
                  <li>Inspection period: 7 days</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

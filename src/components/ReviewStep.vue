<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps({
  data: {
    type: Object,
    required: true
  },
  files: {
    type: Object,
    required: true
  }
})

console.log('Props', props)

const toHumanDate = (date: string) => {
  const d = new Date(date)
  return d.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })
}
</script>

<template>
  <div class="bg-gray-100 py-8">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="lg:text-center">
        <h2 class="text-base text-lightblue font-semibold tracking-wide uppercase">Review</h2>
        <span
          class="mt-2 block text-3xl leading-8 font-extrabold tracking-tight text-gray-500 sm:text-4xl"
        >
          Review your offer
        </span>
      </div>

      <div class="mt-16">
        <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div class="bg-white rounded-lg shadow-lg">
            <div class="px-6 py-8">
              <div class="text-2xl text-gray-600 font-bold mb-4">Basics</div>
              <div class="text-lg text-gray-600 leading-relaxed">
                <span class="font-bold">MLS#:</span> {{ props.data.mls.name }}
                <p class="font-bold">
                  Buyers:
                  <span class="mx-1" v-for="buyer in props.data.buyers" :key="buyer.id">{{
                    buyer.name
                  }}</span>
                </p>
                <p class="font-bold">
                  Sellers:
                  <span class="mx-1">{{ props.data.seller.name }}</span>
                </p>
              </div>
            </div>
          </div>

          <div class="bg-white rounded-lg shadow-lg">
            <div class="px-6 py-8">
              <div class="text-2xl text-gray-600 font-bold mb-4">Agreement</div>
              <div class="text-lg text-gray-600 leading-relaxed">
                <p class="font-bold">
                  Offer Date:<span class="mx-1"> {{ toHumanDate(props.data.offerDate) }} </span>
                </p>
                <p class="font-bold">
                  Purchase Price:<span class="mx-1"> ${{ props.data.purchasePrice }}</span>
                </p>
                <p class="font-bold">
                  Deposit Amount:<span class="mx-1"> ${{ props.data.depositAmount }}</span>
                </p>
                <p class="font-bold">
                  Deposit Terms:<span class="mx-1"> {{ props.data.depositTerms }}</span>
                </p>
              </div>
            </div>
          </div>

          <div class="bg-white rounded-lg shadow-lg">
            <div class="px-6 py-8">
              <div class="text-2xl text-gray-600 font-bold mb-4">Important Dates</div>
              <div class="text-lg text-gray-700 leading-relaxed">
                <p class="font-bold">
                  Offer Date:
                  <span class="mx-1">{{ toHumanDate(props.data.offerDate) }}</span>
                </p>
                <p class="font-bold">
                  Irrevocable:
                  <span class="mx-1">{{ toHumanDate(props.data.irrevocableDate) }}</span>
                </p>
                <p class="font-bold">
                  Completion:
                  <span class="mx-1">{{ toHumanDate(props.data.completionDate) }}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="bg-white rounded-lg shadow-lg mt-2">
          <div class="text-2xl text-gray-600 font-bold mt-4 p-8">Documents</div>
          <ul class="list-none -mt-2">
            <!-- Uploaded Documents  -->
            <li v-for="(file, index) in props.files" :key="index">
              <div class="px-8 py-2">
                <div class="text-lg text-gray-600 leading-relaxed">
                  <p class="font-bold">
                    Name:
                    <span class="mx-1">{{ file.name }}</span>
                  </p>
                  <p class="font-bold">
                    Type:
                    <span class="mx-1">{{ file.type }}</span>
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

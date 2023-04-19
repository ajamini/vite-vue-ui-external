<script setup lang="ts">
import { ref, reactive } from 'vue'
import { useRoute } from 'vue-router'

//Start from top of Screen instead of scroll position
window.scrollTo(0, 0)

//Get the id from the route
const { id } = useRoute().params

interface OfferDetails {
  id: number
  created_at: string
  mls: string
  buyers: string[]
  offerDate: string
  seller: string
  purchasePrice: number
  depositAmount: number
  depositTerms: string
  irrevocableDate: string
  completionDate: string
  conditions: Record<string, any>
  represent: Record<string, any>
}

const offerDetails = ref<OfferDetails>({
  id: 0,
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
  represent: {}
})

//Retrive offers from LocalStorage
const offers = reactive(JSON.parse(localStorage.getItem('offersData') || '[]'))

//Find the offer with the same id as the route
const offer = offers.find((offer: any) => offer.id === Number(id))

// If the offer is found, set the offerDetails to the offer
if (offer) {
  offerDetails.value = offer
}
</script>

<template>
  <div class="w-full p-8">
    <div class="w-full flex justify-start">
      <RouterLink to="/offers" class="flex items-center mr-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6 mr-2"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M10 19l-7-7m0 0l7-7m-7 7h18"
          />
        </svg>
      </RouterLink>
      <div class="w-full">
        <h1 class="text-2xl font-bold">Address, City, State, Zip</h1>
        <h4 class="text-sm text-gray-500">MLS# {{ offerDetails.mls }}</h4>
        <div class="flex flex-wrap gap-3">
          <div v-for="buyer in offerDetails.buyers" :key="buyer" class="flex items-center">
            <div class="w-2 h-2 bg-green-500 rounded-full mr-1"></div>
            <h4 class="text-sm text-gray-500">{{ buyer }}</h4>
          </div>
        </div>
      </div>
    </div>
    <div class="w-full mt-4 flex gap-4">
      <main class="w-3/4">
        <div class="w-1/2 flex gap-2 justify-start">
          <button
            class="w-full h-8 bg-gray-200 text-gray-600 font-semibold rounded-sm hover:bg-gray-300"
          >
            Overview
          </button>
          <button
            class="w-full h-8 bg-gray-200 text-gray-600 font-semibold rounded-sm hover:bg-gray-300"
          >
            Agreement
          </button>
          <button
            class="w-full h-8 bg-gray-200 text-gray-600 font-semibold rounded-sm hover:bg-gray-300"
          >
            Represent
          </button>
        </div>
        <div class="w-full"></div>
      </main>
      <div class="w-1/4 min-h-[440px] bg-white grid grid-flow-row gap-4">
        <div class="text-gray-600 p-4">
          <h4 class="text-sm font-bold">Buying Agent</h4>
          <!-- Image, Name Phone and Email -->
          <div class="flex items-center gap-2 mt-2 ml-4">
            <div class="w-10 h-10 rounded-full bg-gray-300"></div>
            <div class="flex flex-col">
              <h4 class="text-sm font-bold">Name</h4>
              <h4 class="text-sm">Phone</h4>
              <h4 class="text-sm">Email</h4>
            </div>
          </div>
        </div>
        <div class="text-gray-600 p-4">
          <h4 class="text-sm font-bold">Buyers</h4>
          <div class="grid grid-flow-row gap-2">
            <div
              v-for="buyer in offerDetails.buyers"
              :key="buyer"
              class="flex items-center gap-2 mt-2 ml-4"
            >
              <div class="w-10 h-10 rounded-full bg-gray-300">
                <img
                  class="object-cover w-full h-full rounded-full"
                  src="https://picsum.photos/500"
                  alt=""
                />
              </div>
              <div class="flex flex-col">
                <h4 class="text-sm font-bold">{{ buyer }}</h4>
                <h4 class="text-sm">Email</h4>
              </div>
            </div>
          </div>
        </div>
        <div class="p-4 text-gray-600">
          <h4 class="text-sm font-bold">Property</h4>
          <div class="relative">
            <div class="flex flex-row flex-wrap gap-2 m-4 pl-4 overflow-hidden">
              <div class="w-20 h-20">
                <img class="w-full" src="https://picsum.photos/500" alt="" />
              </div>
              <div class="w-20 h-20">
                <img class="w-full" src="https://picsum.photos/400" alt="" />
              </div>
              <div class="w-20 h-20">
                <img class="w-full" src="https://picsum.photos/600" alt="" />
              </div>
              <div class="w-20 h-20">
                <img class="w-full" src="https://picsum.photos/700" alt="" />
              </div>
              <div class="w-20 h-20">
                <img class="w-full" src="https://picsum.photos/800" alt="" />
              </div>
              <div class="w-20 h-20">
                <img class="w-full" src="https://picsum.photos/900" alt="" />
              </div>
            </div>
          </div>
          <div class="w-full pl-8 text-gray-500">
            <div class="text-gray-500">1234 Main St</div>
            <div class="text-sm">Unique Identifier</div>
            <div class="text-sm">City, State</div>
            <div class="text-sm">Asking Price</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

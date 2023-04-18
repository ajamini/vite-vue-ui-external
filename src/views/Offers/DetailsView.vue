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
      <RouterLink to="/offers" class="flex items-center">
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
        <h4 class="text-sm text-gray-500">{{ offerDetails.id }}</h4>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import { useRoute } from 'vue-router'
import OverviewContent from './OverviewContent.vue'

//Start from top of Screen instead of scroll position
window.scrollTo(0, 0)

//Get the id from the route
const { id } = useRoute().params

const activeTab = ref('Overview')

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
  <div class="w-full bg-white">
    <div class="w-full flex justify-start p-8">
      <RouterLink to="/offers" class="flex items-center mr-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="h-12 w-12"
        >
          <circle cx="12" cy="12" r="10" stroke-dasharray="1,4"></circle>
          <polyline points="12 8 8 12 12 16"></polyline>
          <line x1="16" x2="8" y1="12" y2="12"></line>
        </svg>
      </RouterLink>
      <!-- Header section -->
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
    <!-- Tabs and Main contents -->
    <div class="w-full relative">
      <div class="flex shadow-lg md:pl-12 px-4">
        <div
          class="px-6 py-2 text-sm font-medium text-gray-500 cursor-pointer"
          :class="{ ' text-gray-700': activeTab === 'Overview' }"
          @click="activeTab = 'Overview'"
        >
          Overview
          <span
            v-if="activeTab === 'Overview'"
            class="absolute shadow-md border-b-2 border-b-red-500 left-1/3 bottom-0 w-1/3"
          ></span>
        </div>
        <div
          class="px-6 py-2 text-sm font-medium text-gray-500 cursor-pointer"
          :class="{ ' text-gray-700': activeTab === 'Agreement' }"
          @click="activeTab = 'Agreement'"
        >
          Agreement
          <span
            v-if="activeTab === 'Agreement'"
            class="absolute shadow-md border-b-2 border-b-red-500 left-1/3 bottom-0 w-1/3"
          ></span>
        </div>
        <div
          class="px-6 py-2 text-sm font-medium text-gray-500 cursor-pointer"
          :class="{ ' text-gray-700': activeTab === 'Represent' }"
          @click="activeTab = 'Represent'"
        >
          Represent
          <span
            v-if="activeTab === 'Represent'"
            class="absolute shadow-md border-b-2 border-b-red-500 left-1/3 bottom-0 w-1/3"
          ></span>
        </div>
      </div>
      <!-- Buttons for Actions -->
      <div class="relative md:absolute md:right-1/4 md:top-4 p-4 md:p-0">
        <button class="rounded-full shadow bg-white p-2 text-gray-700 hover:bg-gray-100">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-5 h-5"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
            />
          </svg>
        </button>
        <button class="mx-4 rounded-full bg-white shadow p-2 text-gray-700 hover:bg-gray-100">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-5 h-5"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
            />
          </svg>
        </button>
        <button
          class="inline-flex overflow-hidden px-4 py-2 text-xs font-medium leading-6 text-center text-white uppercase transition bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br rounded-full shadow ripple hover:shadow-lg hover:bg-blue-800 focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-5 h-5 mr-2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6.72 13.829c-.24.03-.48.062-.72.096m.72-.096a42.415 42.415 0 0110.56 0m-10.56 0L6.34 18m10.94-4.171c.24.03.48.062.72.096m-.72-.096L17.66 18m0 0l.229 2.523a1.125 1.125 0 01-1.12 1.227H7.231c-.662 0-1.18-.568-1.12-1.227L6.34 18m11.318 0h1.091A2.25 2.25 0 0021 15.75V9.456c0-1.081-.768-2.015-1.837-2.175a48.055 48.055 0 00-1.913-.247M6.34 18H5.25A2.25 2.25 0 013 15.75V9.456c0-1.081.768-2.015 1.837-2.175a48.041 48.041 0 011.913-.247m10.5 0a48.536 48.536 0 00-10.5 0m10.5 0V3.375c0-.621-.504-1.125-1.125-1.125h-8.25c-.621 0-1.125.504-1.125 1.125v3.659M18 10.5h.008v.008H18V10.5zm-3 0h.008v.008H15V10.5z"
            />
          </svg>
          <span>Print Doc</span>
        </button>
      </div>
      <!-- Tab Contents -->
      <div class="w-full mt-4">
        <div v-if="activeTab === 'Overview'">
          <!-- Overview tab content -->
          <div class="mt-8">
            <OverviewContent :offerDetails="offerDetails" />
          </div>
        </div>
        <div v-if="activeTab === 'Agreement'">
          <!-- Agreement tab content goes here -->
          <div class="w-full mt-8 p-4 flex justify-start">
            <div class="w-3/4 grid grid-cols-2 gap-4">
              <div class="px-4">
                <h4 class="text-sm font-medium text-gray-500">Number</h4>
                <p class="text-sm text-gray-600">A-000345</p>
              </div>
              <div class="px-4">
                <h4 class="text-sm font-medium text-gray-500">NART</h4>
                <p class="text-sm text-gray-600">#55569drgr</p>
              </div>
              <div class="px-4">
                <h4 class="text-sm font-medium text-gray-500">NART</h4>
                <p class="text-sm text-gray-600">#55569drgr</p>
              </div>
              <div class="px-4">
                <h4 class="text-sm font-medium text-gray-500">NART</h4>
                <p class="text-sm text-gray-600">#55569drgr</p>
              </div>
              <div class="px-4">
                <h4 class="text-sm font-medium text-gray-500">NART</h4>
                <p class="text-sm text-gray-600">#55569drgr</p>
              </div>
              <div class="px-4">
                <h4 class="text-sm font-medium text-gray-500">NART</h4>
                <p class="text-sm text-gray-600">#55569drgr</p>
              </div>
              <div class="px-4 col-span-2">
                <h3 class="text-2xl font-medium text-gray-500">Samples</h3>
                <div class="mt-4 grid grid-cols-2 gap-4">
                  <div class="w-full">
                    <h4 class="text-sm font-medium text-gray-500">Deadline for Offer</h4>
                    <p class="text-sm text-gray-600">12-03-2023</p>
                  </div>
                  <div class="w-full">
                    <h4 class="text-sm font-medium text-gray-500">Initial Offer Time</h4>
                    <p class="text-sm text-gray-600">25-04-2023</p>
                  </div>
                  <div class="w-full">
                    <h4 class="text-sm font-medium text-gray-500">Deadline for Offer</h4>
                    <p class="text-sm text-gray-600">12-03-2023</p>
                  </div>
                  <div class="w-full">
                    <h4 class="text-sm font-medium text-gray-500">Initial Offer Time</h4>
                    <p class="text-sm text-gray-600">25-04-2023</p>
                  </div>
                </div>
              </div>
              <div class="px-4 col-span-2">
                <h3 class="text-2xl font-medium text-gray-500">Prices</h3>
                <div class="mt-4 grid grid-cols-2 gap-4">
                  <div class="w-full">
                    <h4 class="text-sm font-medium text-gray-500">Actual Pricing</h4>
                    <p class="text-sm text-gray-600">$700</p>
                  </div>
                  <div class="w-full">
                    <h4 class="text-sm font-medium text-gray-500">Offer Price</h4>
                    <p class="text-sm text-gray-600">$699</p>
                  </div>
                  <div class="w-full">
                    <h4 class="text-sm font-medium text-gray-500">IDK Price</h4>
                    <p class="text-sm text-gray-600">$0.0</p>
                  </div>
                  <div class="w-full">
                    <h4 class="text-sm font-medium text-gray-500">Adjustment</h4>
                    <p class="text-sm text-gray-600">AAA</p>
                  </div>
                </div>
              </div>
            </div>
            <!-- Right Panel -->
            <div class="w-1/3">
              <div class="w-full flex items-center text-blue-600">
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
                    d="M10.125 2.25h-4.5c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125v-9M10.125 2.25h.375a9 9 0 019 9v.375M10.125 2.25A3.375 3.375 0 0113.5 5.625v1.5c0 .621.504 1.125 1.125 1.125h1.5a3.375 3.375 0 013.375 3.375M9 15l2.25 2.25L15 12"
                  />
                </svg>
                <span class="text-lg font-bold ml-2">Some Agreement Text</span>
              </div>
              <div class="bg-gray-100 mt-4 p-4 rounded-lg shadow-md">
                <img
                  src="https://placehold.co/600x400"
                  alt="Product Image"
                  class="w-full h-auto object-cover max-w-[600px] max-h-[400px]"
                />
              </div>
              <div class="mt-4">
                <div class="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-8 h-8 text-lightblue"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25zm.75-12h9v9h-9v-9z"
                    />
                  </svg>

                  <span class="ml-2 text-gray-700"> Wish to Agree</span>
                </div>
                <div class="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-8 h-8 text-lightblue"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25zm.75-12h9v9h-9v-9z"
                    />
                  </svg>

                  <span class="ml-2 text-gray-700">Specification</span>
                </div>
                <div class="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-8 h-8 text-lightblue"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25zm.75-12h9v9h-9v-9z"
                    />
                  </svg>

                  <span class="ml-2 text-gray-700">Random Access Mem</span>
                </div>
                <div class="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-8 h-8 text-lightblue"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25zm.75-12h9v9h-9v-9z"
                    />
                  </svg>

                  <span class="ml-2 text-gray-700">Current AStatys</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div v-if="activeTab === 'Represent'">
          <!-- Represent tab content goes here -->
          Represent Contents
        </div>
      </div>
    </div>
  </div>
</template>

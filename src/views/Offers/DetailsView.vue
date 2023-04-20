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

//Status
const currentStatus = ref('signed') //TODO: Change to offerDetails.value.status //Convert to lowercase

const isActive = (status: String) => {
  if (currentStatus.value === status) {
    return true
  } else if (currentStatus.value === 'signed' && (status === 'draft' || status === 'reviewed')) {
    return true
  } else if (
    currentStatus.value === 'submitted' &&
    (status === 'draft' || status === 'reviewed' || status === 'signed')
  ) {
    return true
  } else if (
    currentStatus.value === 'accepted' &&
    (status === 'draft' || status === 'reviewed' || status === 'signed' || status === 'submitted')
  ) {
    return true
  } else {
    return false
  }
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
    <!-- Buttons -->
    <div class="md:w-1/2 w-full flex gap-2 justify-start mt-2">
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
    <div class="w-full mt-4 md:flex gap-4 bg-gray-200 px-4">
      <main class="md:w-3/4 w-full">
        <div class="w-full bg-gray-200 mt-2 py-4">
          <!-- Status -->
          <div class="bg-white h-24 p-4">
            <div
              class="after:mt-4 after:block after:h-1 after:w-full after:rounded-lg after:bg-gray-200"
            >
              <ol class="grid grid-cols-5 text-sm font-medium text-gray-500">
                <li class="relative flex justify-start">
                  <span
                    :class="[isActive('draft') ? 'bg-blue-600' : 'bg-gray-600']"
                    class="absolute -bottom-[1.75rem] start-0 rounded-full text-white z-10"
                  >
                    <svg
                      class="h-5 w-5"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </span>
                  <span
                    :class="[isActive('draft') ? 'text-blue-600' : 'text-gray-600']"
                    class="block"
                  >
                    Draft
                  </span>
                </li>

                <li class="relative flex justify-center">
                  <span
                    :class="[isActive('reviewed') ? 'bg-blue-600' : 'bg-gray-600']"
                    class="absolute -bottom-[1.75rem] left-1/2 -translate-x-1/2 rounded-full text-white z-10"
                  >
                    <svg
                      class="h-5 w-5"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </span>
                  <span
                    :class="[isActive('reviewed') ? 'text-blue-600' : 'text-gray-600']"
                    class="block"
                  >
                    Reviewed
                  </span>
                </li>

                <li class="relative flex justify-center">
                  <span
                    :class="[isActive('signed') ? 'bg-blue-600' : 'bg-gray-600']"
                    class="absolute -bottom-[1.75rem] end-0 rounded-full text-white z-10"
                  >
                    <svg
                      class="h-5 w-5"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </span>

                  <span
                    :class="[isActive('signed') ? 'text-blue-600' : 'text-gray-600']"
                    class="block"
                  >
                    Signed
                  </span>
                </li>
                <li class="relative flex justify-center">
                  <span
                    :class="[isActive('submitted') ? 'bg-blue-600' : 'bg-gray-600']"
                    class="absolute -bottom-[1.75rem] end-0 rounded-full text-white z-10"
                  >
                    <svg
                      class="h-5 w-5"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </span>
                  <span
                    :class="[isActive('submitted') ? 'text-blue-600' : 'text-gray-600']"
                    class="block"
                  >
                    Submitted
                  </span>
                </li>
                <li class="relative flex justify-end">
                  <span
                    :class="[isActive('accepted') ? 'bg-blue-600' : 'bg-gray-600']"
                    class="absolute -bottom-[1.75rem] end-0 rounded-full text-white z-10"
                  >
                    <svg
                      class="h-5 w-5"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </span>
                  <span
                    :class="[isActive('accepted') ? 'text-blue-600' : 'text-gray-600']"
                    class="block"
                  >
                    Accepted
                  </span>
                </li>
              </ol>
            </div>
          </div>
          <div class="p-4 bg-white mt-4 h-48">Documents</div>
          <div class="p-4 bg-white mt-4 h-48">Agreement</div>
          <div class="p-4 bg-white mt-4 h-48">Representation</div>
        </div>
      </main>
      <div class="w-full md:w-1/4 min-h-[420px] bg-white mt-6">
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
            <div class="text-gray-500 flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z"
                />
              </svg>
              <span class="ml-1"> 1234 Main St </span>
            </div>
            <div class="text-sm flex items-center mt-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M5.25 8.25h15m-16.5 7.5h15m-1.8-13.5l-3.9 19.5m-2.1-19.5l-3.9 19.5"
                />
              </svg>

              <span class="ml-1">Unique Identifier </span>
            </div>
            <div class="text-sm flex items-center mt-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                />
              </svg>
              <span class="ml-1"> City, State </span>
            </div>
            <div class="text-sm flex items-center mt-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span class="ml-1">Asking Price</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

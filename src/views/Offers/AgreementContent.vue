<script setup lang="ts">
//OfferDetails from parent
defineProps({
  offerDetails: {
    type: Object,
    required: true
  }
})
</script>
<template>
  <div class="flex justify-start">
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
</template>

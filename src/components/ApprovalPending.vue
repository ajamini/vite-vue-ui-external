<script setup lang="ts">
import { ref } from 'vue'

const isVisible = ref(false)
</script>

<template>
  <button
    type="button"
    class="w- py-3 px-4 text-base font-semibold text-white bg-green-600 rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-opacity-50"
    @click="isVisible = true"
  >
    Pay now (V2)
  </button>

  <SidebarVue v-model:visible="isVisible" class="w-full approval-modal" position="right">
    <h2 class="text-gray-800 font-semibold text-lg">Pending approval</h2>
    <div class="w-full border border-gray-200 p-8 my-4">
      <div class="flex justify-between">
        <div class="flex-1">
          <p class="text-gray-800 font-semibold text-lg">From</p>
          <p class="text-gray-600 text-base">marketplace-b9f277</p>
        </div>
        <div class="flex-1 pl-8">
          <p class="text-gray-800 font-semibold text-lg">Transaction Nr.</p>
          <p class="text-gray-600 text-base">1000.00</p>
        </div>
      </div>
      <div class="flex justify-between border-t my-4 pt-4">
        <div class="flex-1">
          <p class="text-gray-800 font-semibold text-lg">Source</p>
          <p class="text-violet-800 text-sm md:text-base mt-4">
            <span class="bg-violet-300 rounded px-2 py-1">merchants:118271</span>
          </p>
        </div>
        <div class="flex-1 pl-8">
          <p class="text-gray-800 font-semibold text-lg">Destination</p>
          <p class="text-amber-800 text-sm md:text-base mt-4">
            <span class="bg-amber-200 rounded px-2 py-1">merchants:118271</span>
          </p>
        </div>
      </div>
      <div class="flex justify-between border-t my-4 pt-4">
        <div class="flex-1">
          <p class="text-gray-800 font-semibold text-lg">Value</p>
          <p class="text-green-800 font-semibold text-2xl mt-4">$50,000.00</p>
        </div>
        <div class="flex-1 pl-8">
          <p class="text-gray-800 font-semibold text-lg">Description</p>
          <p class="text-gray-800 text-sm md:text-base mt-4">No description provided</p>
        </div>
      </div>
    </div>
    <div class="w-full border border-gray-200 p-8 my-4 flex">
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
          d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
        />
      </svg>
      <p class="text-gray-800 font-semibold text-lg ml-4">
        This <span class="text-green-800 font-semibold">transaction</span> is pending approval.
      </p>
    </div>
    <div class="flex items-center justify-center w-full gap-2">
      <button
        @click="isVisible = false"
        type="button"
        class="w-full py-3 px-4 text-base font-semibold text-gray-800 border-2 rounded hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-opacity-50"
      >
        Reject
      </button>
      <button
        type="button"
        class="w-full py-3 px-4 text-base font-semibold text-white bg-gray-700 rounded hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-opacity-50"
      >
        Pay now
      </button>
    </div>
  </SidebarVue>
</template>

<style>
.approval-modal {
  width: 32rem !important;
}

@media (max-width: 768px) {
  .approval-modal {
    width: 70% !important;
  }
}
</style>

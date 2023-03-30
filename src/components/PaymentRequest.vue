<script setup lang="ts"></script>
<template>
  <div class="mt-4 md:mt-0 mx-auto w-full max-w-[550px] bg-white rounded-lg shadow-lg">
    <form class="py-6 px-9">
      <div class="px-0">
        <span class="mb-1 text-start block text-xl font-semibold text-slate-800">
          Payment request from John Doe
        </span>
        <span class="text-start block text-sm font-medium text-gray-600">
          Hey, let's wrap up phase 1 of the project. I've attached the final invoice.
        </span>
      </div>
      <div class="mb-6 pt-4">
        <div class="payment-wrapper bg-gray-100 p-4">
          <h4 class="text-lg font-semibold text-gray-600 text-start">Payment details</h4>
          <div class="flex items-center justify-between mt-4">
            <label class="text-base font-semibold text-gray-500">Payment #ID</label>
            <span class="text-base font-semibold text-gray-800">#423551</span>
          </div>
          <div class="flex items-center justify-between mt-4">
            <label class="text-base font-semibold text-gray-500">Pay before</label>
            <span class="text-base font-semibold text-gray-800">12/07/2023</span>
          </div>
          <div class="flex items-center justify-between mt-4">
            <label class="text-base font-semibold text-gray-500">Payment method</label>
            <span class="text-base font-semibold text-gray-800">Stripe</span>
          </div>
          <div class="flex items-center justify-between mt-4">
            <label class="text-base font-semibold text-gray-500">Receiver</label>
            <span class="text-base font-semibold text-gray-800">finance@leveling.com</span>
          </div>
          <hr class="my-6 border-2" />
          <div class="flex items-center justify-between">
            <label class="text-base font-semibold text-gray-900">Total amount</label>
            <span class="text-base font-semibold text-gray-800">$1,500</span>
          </div>
        </div>
      </div>
      <hr class="my-6 border-2" />
      <div class="flex items-center justify-center w-full gap-2">
        <button
          type="button"
          class="w-full py-3 px-4 text-base font-semibold text-gray-800 border-2 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-opacity-50"
        >
          Reject payment
        </button>
        <button
          type="button"
          class="w-full py-3 px-4 text-base font-semibold text-white bg-green-600 rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-opacity-50"
        >
          Pay now
        </button>
      </div>
    </form>
  </div>
</template>

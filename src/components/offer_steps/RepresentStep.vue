<script setup lang="ts">
import { defineProps } from 'vue'

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

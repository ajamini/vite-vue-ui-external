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

  <SidebarVue v-model:visible="isVisible" position="right">
    <h2>Right Sidebar</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
      laboris nisi ut aliquip ex ea commodo consequat.
    </p>
  </SidebarVue>
</template>

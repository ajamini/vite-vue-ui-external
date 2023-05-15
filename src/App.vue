<script setup lang="ts">
import { RouterView } from 'vue-router'
import HeaderNav from './components/HeaderNav.vue'
</script>

<template>
  <div class="w-full">
    <HeaderNav />
    <div class="max-w-screen-2xl mx-auto">
      <RouterView />
    </div>
  </div>
</template>

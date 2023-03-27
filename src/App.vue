<script setup lang="ts">
import { RouterView } from 'vue-router'
import HeaderNav from './components/HeaderNav.vue'
</script>

<template>
  <div class="w-full app-wrapper max-w-screen-2xl mx-auto">
    <HeaderNav />
    <div class="main-body-wrapper">
      <RouterView />
    </div>
  </div>
</template>

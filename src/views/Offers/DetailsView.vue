<script setup lang="ts">
import { ref, reactive } from 'vue'
import { useRoute } from 'vue-router'

//Start from top of Screen instead of scroll position
window.scrollTo(0, 0)

//Get the id from the route
// // const { id } = useRoute().params
const { id } = useRoute().params

const offerDetails = ref({})

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
  <div class="w-full">Hi {{ offerDetails }}</div>
</template>

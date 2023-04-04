<script setup lang="ts">
import { ref } from 'vue'

const items = ref([
  {
    title: 'Accordion Item 1',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut tellus justo. Donec ac tellus tellus.',
    image: '',
    expanded: false
  },
  {
    title: 'Accordion Item 2',
    description:
      'Suspendisse semper volutpat lectus, ac consectetur elit feugiat sit amet. Vestibulum nec felis vel purus elementum ullamcorper eu in nulla. Suspendisse potenti.',
    image: 'https://via.placeholder.com/500x300',
    expanded: false
  },
  {
    title: 'Accordion Item 3',
    description:
      'Phasellus quis varius metus. Sed pharetra efficitur dolor, in volutpat turpis mollis id. Nunc id tellus nisi. ',
    image: '',
    expanded: false
  }
])

const toggleAccordion = (index: number) => {
  items.value[index].expanded = !items.value[index].expanded
}
</script>

<template>
  <div class="accordion">
    <div v-for="(item, index) in items" :key="index" class="border-b border-gray-200">
      <div
        class="flex items-center justify-between p-4 cursor-pointer select-none"
        @click="toggleAccordion(index)"
      >
        <h3 class="text-lg font-medium">{{ item.title }}</h3>
        <svg
          class="w-6 h-6 transform transition-transform"
          :class="{ 'rotate-180': item.expanded }"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M5.293 6.707a1 1 0 011.414 0L10 9.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clip-rule="evenodd"
          />
        </svg>
      </div>
      <div class="p-4" :class="{ hidden: !item.expanded, block: item.expanded }">
        <p class="text-gray-700">{{ item.description }}</p>
        <img class="mt-4 rounded-lg" :src="item.image" :alt="item.title" v-if="item.image" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.accordion h3 {
  color: #1a202c;
}

.accordion svg {
  transition: transform 0.2s ease;
}
</style>

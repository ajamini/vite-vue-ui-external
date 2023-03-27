<script setup lang="ts">
const props = defineProps<{
  progress: string
  color: string
}>()
</script>

<template>
  <div class="relative flex h-6 w-full overflow-hidden bg-gray-300">
    <div
      class="relative top-0 left-0 h-full rounded-r-md p-1 text-center text-sm text-blue-100"
      :class="props.color"
      :style="{ width: props.progress + '%' }"
    >
      {{ props.progress }}%
    </div>
  </div>
</template>

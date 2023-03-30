<script setup lang="ts">
import FileUpload from '@/components/FileUpload.vue'
import FileUploadV2 from '@/components/FileUploadV2.vue'
import PaymentRequest from '@/components/PaymentRequest.vue'

//Components are reactivated here
</script>

<template>
  <main class="min-h-screen">
    <section class="mt-4 text-center">
      <h1 class="text-green-700 mt-4 text-2xl font-semibold">File Upload Component</h1>
      <div class="md:flex items-center gap-4 justify-center p-12">
        <!-- component V1 -->
        <file-upload />
        <!-- component V2 -->
        <file-upload-v2 />
      </div>
    </section>
    <section class="mt-4 text-center">
      <h1 class="text-green-700 mt-4 text-2xl font-semibold">Payment Component</h1>
      <div class="md:flex items-center gap-4 justify-center p-12">
        <payment-request />
      </div>
    </section>
  </main>
</template>

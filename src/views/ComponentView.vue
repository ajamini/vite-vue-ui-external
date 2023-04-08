<script setup lang="ts">
import ApprovalPending from '@/components/ApprovalPending.vue'
import FileUpload from '@/components/FileUpload.vue'
import FileUploadV2 from '@/components/FileUploadV2.vue'
import PaymentRequest from '@/components/PaymentRequest.vue'
import OnboardingSteps from '@/components/offer_steps/OnboardingSteps.vue'
import ObjectiveList from '@/components/ObjectiveList.vue'

//Components are reactivated here
</script>

<template>
  <main class="min-h-screen">
    <section class="mt-4 text-center bg-white py-4">
      <h1 class="text-green-700 mt-4 text-2xl font-semibold">Objectives List</h1>
      <div class="flex items-center gap-4 justify-center p-12">
        <div class="w-1/2 p-4 border-2 border-gray-200 rounded">
          <ObjectiveList />
        </div>
      </div>
    </section>

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
        <div class="flex justify-start items-start w-full pt-8 pl-12">
          <ApprovalPending />
        </div>
      </div>
    </section>
    <section class="my-8 text-center">
      <h1 class="text-green-700 mt-4 text-2xl font-semibold">Onboarding Component</h1>
      <div class="md:flex items-center gap-4 justify-center p-12">
        <onboarding-steps />
      </div>
    </section>
  </main>
</template>

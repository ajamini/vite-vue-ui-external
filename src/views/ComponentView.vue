<script setup lang="ts">
//Components are reactivated here
</script>

<template>
  <main class="min-h-screen">
    <section class="mt-4 text-center">
      <h1 class="text-green-700 mt-4 text-2xl font-semibold">File Upload Component</h1>
      <div class="md:flex items-center gap-4 justify-center p-12">
        <!-- component V1 -->
        <div class="mx-auto w-full max-w-[550px] bg-white rounded-lg shadow-lg">
          <form class="py-6 px-9">
            <div class="px-0">
              <span class="mb-1 text-start block text-xl font-semibold text-[#07074D]">
                Upload Offer
              </span>
              <span class="text-start block text-sm font-medium text-gray-600">
                Add your offer here, if selected you will be contacted by our team
              </span>
            </div>
            <div class="mb-6 pt-4">
              <div class="flex items-center justify-center w-full">
                <label
                  for="dropzone-file"
                  class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100"
                >
                  <div class="flex flex-col items-center justify-center pt-5 pb-6">
                    <svg
                      aria-hidden="true"
                      class="w-10 h-10 mb-3 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                      ></path>
                    </svg>
                    <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
                      <span class="font-semibold">Click to upload</span> or drag and drop
                    </p>
                    <p class="text-xs text-gray-500 dark:text-gray-400">PDF, PNG, JPG (MAX. 5MB)</p>
                  </div>
                  <input id="dropzone-file" type="file" class="hidden" />
                </label>
              </div>
            </div>
            <div>
              <button
                class="hover:shadow-form w-full rounded-md bg-darkblue py-3 px-8 text-center text-base font-semibold text-white outline-none"
              >
                Upload File
              </button>
            </div>
          </form>
        </div>
        <!-- component V2 -->
        <div class="mt-4 md:mt-0 mx-auto w-full max-w-[550px] bg-white rounded-lg shadow-lg">
          <form class="py-6 px-9">
            <div class="px-0">
              <span class="mb-1 text-start block text-xl font-semibold text-[#07074D]">
                Upload Offer
              </span>
              <span class="text-start block text-sm font-medium text-gray-600">
                Add your offer here, if selected you will be contacted by our team
              </span>
            </div>
            <div class="mb-6 pt-4">
              <div class="mb-5 mt-4 rounded-md bg-[#F5F7FB] py-4 px-8">
                <div class="flex items-center justify-between">
                  <span class="truncate pr-3 text-base font-medium text-[#07074D]">
                    Cover Letter.pdf
                  </span>
                  <button class="text-[#07074D]">
                    <svg
                      width="10"
                      height="10"
                      viewBox="0 0 10 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M0.279337 0.279338C0.651787 -0.0931121 1.25565 -0.0931121 1.6281 0.279338L9.72066 8.3719C10.0931 8.74435 10.0931 9.34821 9.72066 9.72066C9.34821 10.0931 8.74435 10.0931 8.3719 9.72066L0.279337 1.6281C-0.0931125 1.25565 -0.0931125 0.651788 0.279337 0.279338Z"
                        fill="currentColor"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M0.279337 9.72066C-0.0931125 9.34821 -0.0931125 8.74435 0.279337 8.3719L8.3719 0.279338C8.74435 -0.0931127 9.34821 -0.0931123 9.72066 0.279338C10.0931 0.651787 10.0931 1.25565 9.72066 1.6281L1.6281 9.72066C1.25565 10.0931 0.651787 10.0931 0.279337 9.72066Z"
                        fill="currentColor"
                      />
                    </svg>
                  </button>
                </div>
              </div>

              <div class="rounded-md bg-[#F5F7FB] py-4 px-8">
                <div class="flex items-center justify-between">
                  <span class="truncate pr-3 text-base font-medium text-[#07074D]">
                    Main-Offer.pdf
                  </span>
                  <button class="text-[#07074D]">
                    <svg
                      width="10"
                      height="10"
                      viewBox="0 0 10 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M0.279337 0.279338C0.651787 -0.0931121 1.25565 -0.0931121 1.6281 0.279338L9.72066 8.3719C10.0931 8.74435 10.0931 9.34821 9.72066 9.72066C9.34821 10.0931 8.74435 10.0931 8.3719 9.72066L0.279337 1.6281C-0.0931125 1.25565 -0.0931125 0.651788 0.279337 0.279338Z"
                        fill="currentColor"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M0.279337 9.72066C-0.0931125 9.34821 -0.0931125 8.74435 0.279337 8.3719L8.3719 0.279338C8.74435 -0.0931127 9.34821 -0.0931123 9.72066 0.279338C10.0931 0.651787 10.0931 1.25565 9.72066 1.6281L1.6281 9.72066C1.25565 10.0931 0.651787 10.0931 0.279337 9.72066Z"
                        fill="currentColor"
                      />
                    </svg>
                  </button>
                </div>
                <div class="relative mt-5 h-[6px] w-full rounded-lg bg-[#E2E5EF]">
                  <div class="absolute left-0 right-0 h-full w-[75%] rounded-lg bg-lightblue"></div>
                </div>
              </div>
            </div>

            <div class="flex items-center justify-center w-full">
              <label
                for="dropzone-file"
                class="flex flex-col items-center justify-center w-full h-12 text-teal-600 hover:text-teal-800 cursor-pointer"
              >
                <span class="font-semibold">Add more files</span>

                <input id="dropzone-file" type="file" class="hidden" />
              </label>
            </div>
          </form>
        </div>
      </div>
    </section>
  </main>
</template>

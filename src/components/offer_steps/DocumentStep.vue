<script setup lang="ts">
import { reactive, ref } from 'vue'
//Sample PDF
import pdf_doc from '@/assets/sample_pdf.pdf'

const menuOpen = ref()
const doc_url = ref(pdf_doc) // Update this with the url of the document you want to display

const docs = reactive([
  {
    id: 1,
    title: 'Martin Emil Andresen',
    status: 'submitted',
    created_at: '4 January 2023, 12:00 PM'
  },
  {
    id: 2,
    title: 'Vigilante Aiden',
    status: 'pending',
    created_at: '2 February 2023, 12:00 PM'
  },
  {
    id: 3,
    title: 'Doc title number 3',
    status: 'overdue',
    created_at: '3 March 2023, 12:00 PM'
  },
  {
    id: 4,
    title: 'John Silverhand',
    status: 'pending',
    created_at: '4 April 2023, 12:00 PM'
  },
  {
    id: 5,
    title: 'Victor Wang',
    status: 'submitted',
    created_at: '5 May 2023, 12:00 PM'
  }
])

const toggleMenu = (id: number) => {
  menuOpen.value = menuOpen.value === id ? null : id
}

//Pass to Parent with Define Expose
</script>

<template>
  <div class="md:flex justify-start w-full bg-gray-200 shadow-2xl mb-6">
    <!-- List of Docs -->
    <div class="grid grid-flow-row w-full md:w-1/2 md:pr-2">
      <div
        v-for="doc in docs"
        :key="doc.id"
        class="w-full flex justify-start items-center md:px-8 border-y border-gray-200 h-28 bg-white relative"
        :class="{
          'border-b border-gray-200': doc.id !== docs.length,
          'border-b-0': doc.id === docs.length
        }"
      >
        <div class="text-gray-500 text-2xl font-semibold pl-2">{{ doc.id }}</div>
        <div class="flex ml-4 items-center">
          <div
            class="w-7 h-7 uppercase rounded-sm bg-indigo-500 flex items-center justify-center text-white text-sm font-medium"
          >
            {{ doc.title.substring(0, 2) }}
          </div>
        </div>
        <div class="flex flex-col ml-4 w-full">
          <div class="font-sans text-gray-700 text-sm md:text-lg font-medium">{{ doc.title }}</div>
          <div class="text-gray-500 text-sm font-medium">
            <span
              :class="{
                'text-red-500': doc.status === 'overdue',
                'text-yellow-500': doc.status === 'pending',
                'text-green-500': doc.status === 'submitted'
              }"
              class="text-gray-700 font-medium capitalize"
              >{{ doc.status }}</span
            >
            <span class="mx-1">|</span>
            {{ doc.created_at }}
          </div>
        </div>
        <div class="relative ml-auto" ref="menu">
          <button
            class="text-gray-500 cursor-pointer hover:text-gray-600 focus:outline-none"
            @click.prevent="toggleMenu(doc.id)"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"
              />
            </svg>
          </button>

          <div
            v-if="menuOpen === doc.id"
            class="absolute right-0 z-50 mt-2 w-40 bg-white rounded-md shadow-xl"
          >
            <div
              class="w-full px-4 inline-flex gap-2 py-3 cursor-pointer items-center hover:bg-gray-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M7.5 7.5h-.75A2.25 2.25 0 004.5 9.75v7.5a2.25 2.25 0 002.25 2.25h7.5a2.25 2.25 0 002.25-2.25v-7.5a2.25 2.25 0 00-2.25-2.25h-.75m-6 3.75l3 3m0 0l3-3m-3 3V1.5m6 9h.75a2.25 2.25 0 012.25 2.25v7.5a2.25 2.25 0 01-2.25 2.25h-7.5a2.25 2.25 0 01-2.25-2.25v-.75"
                />
              </svg>

              <span class="text-gray-700 font-medium">Download</span>
            </div>
            <div
              class="w-full border-t px-4 inline-flex gap-2 py-3 cursor-pointer items-center hover:bg-gray-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-5 h-5"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6.72 13.829c-.24.03-.48.062-.72.096m.72-.096a42.415 42.415 0 0110.56 0m-10.56 0L6.34 18m10.94-4.171c.24.03.48.062.72.096m-.72-.096L17.66 18m0 0l.229 2.523a1.125 1.125 0 01-1.12 1.227H7.231c-.662 0-1.18-.568-1.12-1.227L6.34 18m11.318 0h1.091A2.25 2.25 0 0021 15.75V9.456c0-1.081-.768-2.015-1.837-2.175a48.055 48.055 0 00-1.913-.247M6.34 18H5.25A2.25 2.25 0 013 15.75V9.456c0-1.081.768-2.015 1.837-2.175a48.041 48.041 0 011.913-.247m10.5 0a48.536 48.536 0 00-10.5 0m10.5 0V3.375c0-.621-.504-1.125-1.125-1.125h-8.25c-.621 0-1.125.504-1.125 1.125v3.659M18 10.5h.008v.008H18V10.5zm-3 0h.008v.008H15V10.5z"
                />
              </svg>
              <span class="text-gray-700 font-medium">Print</span>
            </div>
            <div
              class="w-full px-4 border-t inline-flex gap-2 py-3 cursor-pointer items-center hover:bg-gray-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-5 h-5"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
                />
              </svg>

              <span class="text-gray-700 font-medium">Email</span>
            </div>
            <div
              class="w-full border-t px-4 inline-flex gap-2 py-3 cursor-pointer items-center hover:bg-gray-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-5 h-5"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                />
              </svg>

              <span class="text-gray-700 font-medium">Edit</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Preview of Doc -->
    <div class="flex md:w-1/2 mt-4 md:mt-0">
      <div class="overflow-auto w-full h-full">
        <iframe class="w-full h-full" :src="doc_url"></iframe>
      </div>
    </div>
  </div>
</template>

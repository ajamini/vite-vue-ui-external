<script setup lang="ts">
import SidebarMenu from '@/components/SidebarMenu.vue'
</script>

<template>
  <div class="w-full p-8">
    <h1 class="text-gray-700 font-bold text-2xl">Admin</h1>
    <div class="md:flex w-full border-t-2 my-4">
      <!-- Left Side -->
      <div class="w-full md:w-80 mt-4">
        <SidebarMenu />
      </div>
      <!-- Right Side -->
      <div class="w-full mt-4 md:ml-4 rounded-md border p-4 bg-white">
        <h4 class="text-gray-500 text-xl font-bold">Edit Profile</h4>
        <div class="w-full flex justify-center mt-4">
          <div class="w-1/2 flex justify-center">
            <div class="relative">
              <img
                src="https://picsum.photos/690"
                class="shadow-xl rounded-full align-middle border-none max-w-[80px]"
              />
              <!-- Edit Picture button -->
              <div class="absolute bottom-0 right-0">
                <label
                  for="file-upload"
                  class="flex items-center justify-center w-8 h-8 rounded-full bg-blue-500 cursor-pointer hover:bg-gray-200 text-white hover:text-gray-700"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-4 h-4"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
                    />
                  </svg>
                </label>
                <input id="file-upload" type="file" class="hidden" accept="image/*" />
              </div>
            </div>
          </div>
        </div>
        <div class="w-full md:w-1/2 mt-4 mx-auto">
          <div class="flex justify-start">
            <div class="w-1/2">
              <label class="block text-gray-500 text-sm font-bold mb-2" for="first_name"
                >First Name</label
              >
              <InputText
                class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="first_name"
                type="text"
                placeholder="First Name"
                value="John"
              />
            </div>
            <div class="w-1/2 ml-4">
              <label class="block text-gray-500 text-sm font-bold mb-2" for="last_name"
                >Last Name</label
              >
              <InputText
                class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="last_name"
                type="text"
                placeholder="Last Name"
                value="Doe"
              />
            </div>
          </div>
          <div class="w-full mt-4">
            <label class="block text-gray-500 text-sm font-bold mb-2" for="email">Email</label>
            <InputText
              class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Email"
              value="demo@mail.com"
            />
          </div>
          <!-- Contact Number -->
          <div class="w-full mt-4">
            <label class="block text-gray-500 text-sm font-bold mb-2" for="contact_number"
              >Contact Number</label
            >
            <InputText
              class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="contact_number"
              type="text"
              placeholder="Contact Number"
              value="09123456789"
            />
          </div>
          <!-- Address -->
          <div class="w-full mt-4">
            <label class="block text-gray-500 text-sm font-bold mb-2" for="address">Address</label>
            <InputText
              class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="address"
              type="text"
              placeholder="Address"
              value="1234 Main St"
            />
          </div>
          <!-- City and State -->
          <div class="flex justify-start mt-4">
            <div class="w-1/2">
              <label class="block text-gray-500 text-sm font-bold mb-2" for="city">City</label>
              <InputText
                class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="city"
                type="text"
                placeholder="City"
                value="Manchester"
              />
            </div>
            <div class="w-1/2 ml-4">
              <label class="block text-gray-500 text-sm font-bold mb-2" for="state">State</label>
              <InputText
                class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="state"
                type="text"
                placeholder="State"
                value="Metro Manila"
              />
            </div>
          </div>
          <!-- Zip Code and Country -->
          <div class="flex justify-start mt-4">
            <div class="w-1/2">
              <label class="block text-gray-500 text-sm font-bold mb-2" for="zip_code"
                >Zip Code</label
              >
              <InputText
                class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="zip_code"
                type="text"
                placeholder="Zip Code"
                value="4C4 4C4"
              />
            </div>
            <div class="w-1/2 ml-4">
              <label class="block text-gray-500 text-sm font-bold mb-2" for="country"
                >Country</label
              >
              <InputText
                class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="country"
                type="text"
                placeholder="Country"
                value="United Kingdom"
              />
            </div>
          </div>
          <!-- Save Button -->
          <div class="flex justify-end mt-4">
            <PrimeButton
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              label="Save"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

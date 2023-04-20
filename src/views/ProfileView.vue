<script setup lang="ts"></script>

<template>
  <div class="w-full p-8">
    <h1 class="text-gray-700 font-bold text-2xl">Admin</h1>
    <div class="md:flex w-full border-t-2 my-4">
      <!-- Left Side -->
      <div class="w-full md:w-80 mt-4">
        <div class="static border bg-white h-[256px] rounded-md divide-y">
          <div
            class="flex text-gray-500 items-center p-4 border-l-4 border-l-black bg-gray-100 cursor-pointer"
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
                d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
              />
            </svg>

            <span class="font-semibold text-base ml-1">User Profile</span>
          </div>
          <div
            class="flex text-gray-500 items-center p-4 border-l-4 border-l-white hover:bg-gray-100 hover:border-l-gray-100 cursor-pointer"
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
                d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 011.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.56.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.893.149c-.425.07-.765.383-.93.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 01-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.397.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 01-.12-1.45l.527-.737c.25-.35.273-.806.108-1.204-.165-.397-.505-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.107-1.204l-.527-.738a1.125 1.125 0 01.12-1.45l.773-.773a1.125 1.125 0 011.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            <span class="font-semibold text-base ml-1">User Management</span>
          </div>
          <div
            class="flex text-gray-500 items-center p-4 border-l-4 border-l-white hover:bg-gray-100 hover:border-l-gray-100 cursor-pointer"
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
                d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
              />
            </svg>

            <span class="font-semibold text-base ml-1">Notifications</span>
          </div>
          <div
            class="flex text-gray-500 items-center p-4 border-l-4 border-l-white hover:bg-gray-100 hover:border-l-gray-100 cursor-pointer"
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
                d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z"
              />
            </svg>

            <span class="font-semibold text-base ml-1">Console Log</span>
          </div>
        </div>
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

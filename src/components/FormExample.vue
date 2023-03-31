<template>
  <div class="grid gap-6 mb-6 md:grid-cols-2">
    <div>
      <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900"
        >First name</label
      >
      <input
        type="text"
        id="first_name"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        placeholder="John"
        required
      />
    </div>
    <div>
      <label for="last_name" class="block mb-2 text-sm font-medium text-gray-900">Last name</label>
      <input
        type="text"
        id="last_name"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        placeholder="Doe"
        required
      />
    </div>
    <div>
      <label for="company" class="block mb-2 text-sm font-medium text-gray-900">Company</label>
      <input
        type="text"
        id="company"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        placeholder="Upwork"
        required
      />
    </div>
    <div>
      <label for="phone" class="block mb-2 text-sm font-medium text-gray-900">Phone number</label>
      <input
        type="tel"
        id="phone"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        placeholder="123-45-678"
        pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
        required
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import router from '@/router'
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { useToast } from 'primevue/usetoast'

//Contact ID from URL
const { id } = useRoute().params
const toast = useToast()
console.log('Edit This id:', id)

//Start from top of Screen instead of scroll position
window.scrollTo(0, 0)

//More actions menu
const actionMenu = ref()
const menuItems = ref([
  {
    label: 'Options',
    items: [
      {
        label: 'Refresh',
        icon: 'pi pi-refresh',
        command: () => {
          // toast.add({ severity: 'success', summary: 'Updated', detail: 'Data Updated', life: 3000 });
        }
      },
      {
        label: 'Delete',
        icon: 'pi pi-times',
        command: () => {
          // toast.add({ severity: 'warn', summary: 'Delete', detail: 'Data Deleted', life: 3000 });
        }
      }
    ]
  },
  {
    label: 'Navigate',
    items: [
      {
        label: 'Dashboard',
        icon: 'pi pi-home',
        url: '/'
      },
      {
        label: 'Contacts',
        icon: 'pi pi-users',
        to: '/contacts'
      }
    ]
  }
])

const toggleActions = (event: Event) => {
  actionMenu.value.toggle(event)
}

// Retrive Temp data from Local Storage
const contacts = ref(JSON.parse(localStorage.getItem('contacts') || '[]'))

//Form data
const contactData = ref({
  id: 0,
  name: '',
  email: '',
  phone: '',
  created_at: ''
})

//Set form data on load
contacts.value.forEach((contact: any) => {
  if (contact.id === Number(id)) {
    contactData.value = contact
  } else {
    //SHow error message if contact not found
    toast.add({
      severity: 'error',
      summary: 'Error',
      detail: 'Contact not found',
      life: 3000
    })
    //Redirect to contacts page after 3 seconds
    //setTimeout(() => {
    //  router.push('/contacts')
    // }, 3000)
  }
})

//Error message object for Validation
const errorMessage = ref({
  name: '',
  email: '',
  phone: ''
})

//Update form data
const updateContact = () => {
  //Validate form
  if (contactData.value.name === '') {
    errorMessage.value.name = 'Name is required'
  } else {
    errorMessage.value.name = ''
  }
  if (contactData.value.email === '') {
    errorMessage.value.email = 'Email is required'
  } else {
    errorMessage.value.email = ''
  }
  if (contactData.value.phone === '') {
    errorMessage.value.phone = 'Phone is required'
  } else {
    errorMessage.value.phone = ''
  }

  //If no error, Update contact
  if (
    errorMessage.value.name === '' &&
    errorMessage.value.email === '' &&
    errorMessage.value.phone === ''
  ) {
    console.log('Update Contact:', contactData.value)
    //TODO: Update contact in DB
    contacts.value.forEach((contact: any) => {
      if (contact.id === Number(id)) {
        contact.name = contactData.value.name
        contact.email = contactData.value.email
        contact.phone = contactData.value.phone
      }
    })
    //Update Local Storage for persistent
    localStorage.setItem('contacts', JSON.stringify(contacts.value))

    toast.add({
      severity: 'success',
      summary: 'Updated',
      detail: 'Contact Updated',
      life: 3000
    })
    //Redirect to contacts page after 3 seconds
    setTimeout(() => {
      router.push('/contacts')
    }, 3000)
  }
}

//Dropdown Items
const countries = ref([
  { name: 'Afghanistan', code: 'AF' },
  { name: 'Åland Islands', code: 'AX' },
  { name: 'Albania', code: 'AL' },
  { name: 'Algeria', code: 'DZ' },
  { name: 'American Samoa', code: 'AS' },
  { name: 'AndorrA', code: 'AD' },
  { name: 'Angola', code: 'AO' },
  { name: 'Anguilla', code: 'AI' },
  { name: 'Antarctica', code: 'AQ' },
  { name: 'Antigua and Barbuda', code: 'AG' },
  { name: 'Argentina', code: 'AR' },
  { name: 'Armenia', code: 'AM' },
  { name: 'Aruba', code: 'AW' },
  { name: 'Australia', code: 'AU' },
  { name: 'Austria', code: 'AT' },
  { name: 'Azerbaijan', code: 'AZ' },
  { name: 'Bahamas', code: 'BS' },
  { name: 'Bahrain', code: 'BH' },
  { name: 'Bangladesh', code: 'BD' },
  { name: 'Barbados', code: 'BB' },
  { name: 'Belarus', code: 'BY' },
  { name: 'Belgium', code: 'BE' },
  { name: 'Belize', code: 'BZ' },
  { name: 'Benin', code: 'BJ' },
  { name: 'Bermuda', code: 'BM' },
  { name: 'Bhutan', code: 'BT' },
  { name: 'Bolivia', code: 'BO' },
  { name: 'Bosnia and Herzegovina', code: 'BA' },
  { name: 'Botswana', code: 'BW' },
  { name: 'Bouvet Island', code: 'BV' },
  { name: 'Brazil', code: 'BR' },
  { name: 'British Indian Ocean Territory', code: 'IO' },
  { name: 'Brunei Darussalam', code: 'BN' },
  { name: 'Canada', code: 'CA' },
  { name: 'USA', code: 'US' }
])

const filteredCountries = ref()
const selectedCountryAuto = ref()
const selCountryDropdown = ref()
const selCountryBoth = ref()

const fruit = ref()

const searchCountry = (event: any) => {
  setTimeout(() => {
    filteredCountries.value = countries.value.filter((country: any) => {
      return country.name.toLowerCase().startsWith(event.query.toLowerCase())
    })
  }, 250)
}
</script>

<template>
  <div class="w-full">
    <div class="md:flex justify-between">
      <div class="text-gray-600 flex my-4 p-8 text-4xl font-semibold">
        <RouterLink to="/contacts" class="mr-3">
          <i class="pi pi-arrow-left text-lightblue" style="font-size: 1.5rem"></i>
        </RouterLink>
        <h1 class="mt-1">Edit Contact</h1>
      </div>
      <div class="grid grid-flow-col mb-4 md:mb-0 items-center gap-4 px-8">
        <button
          label="Toggle"
          @click="toggleActions"
          aria-haspopup="true"
          aria-controls="overlay_menu"
          class="inline-block px-4 py-2 text-xs font-semibold leading-6 text-center text-gray-700 uppercase transition rounded ripple border hover:bg-gray-200 focus:outline-none"
        >
          More Actions <i class="pi pi-chevron-down ml-1" style="font-size: 0.7rem"></i>
        </button>
        <PrimeMenu ref="actionMenu" id="overlay_menu" :model="menuItems" :popup="true" />
        <button
          @click="updateContact"
          class="inline-block px-6 py-2 text-xs font-medium leading-6 text-center text-white uppercase transition bg-green-500 rounded shadow ripple hover:shadow-lg hover:bg-green-600 focus:outline-none"
        >
          Save
        </button>
      </div>
    </div>

    <div class="w-full p-8 bg-white min-h-screen md:grid md:grid-cols-6">
      <div class="sidenav">
        <h4 class="text-gray-600 text-base font-semibold">Contact Details</h4>
      </div>
      <div class="col-span-3 md:pr-20 mt-4 md:mt-0">
        <TabView class="tabview-custom">
          <TabPanel>
            <template #header>
              <i class="pi pi-clone mx-2"></i>
              <span
                :class="{
                  'text-red-500 font-semibold':
                    errorMessage.name || errorMessage.email || errorMessage.phone
                }"
                >Basics</span
              >
            </template>
            <div class="form-wrapper pt-4 max-w-md">
              <div class="input-wrapper grid grid-flow-row">
                <label class="text-gray-600 font-medium" for="name">Name</label>
                <InputText
                  id="name"
                  v-model="contactData.name"
                  :class="{ 'p-invalid': errorMessage.name }"
                  aria-describedby="name-help"
                />
                <small class="p-error" id="text-error">{{ errorMessage.name || '&nbsp;' }}</small>
              </div>
              <div class="input-wrapper grid grid-flow-row mt-4">
                <label class="text-gray-600 font-medium" for="email">Email</label>
                <InputText
                  id="email"
                  :class="{ 'p-invalid': errorMessage.email }"
                  v-model="contactData.email"
                  aria-describedby="email-help"
                />
                <small class="p-error" id="text-error">{{ errorMessage.email || '&nbsp;' }}</small>
              </div>
              <div class="input-wrapper grid grid-flow-row mt-4">
                <label class="text-gray-600 font-medium" for="phone">Phone</label>
                <InputText
                  id="phone"
                  v-model="contactData.phone"
                  aria-describedby="phone-help"
                  :class="{ 'p-invalid': errorMessage.phone }"
                />
                <small class="p-error" id="text-error">{{ errorMessage.phone || '&nbsp;' }}</small>
              </div>
            </div>
          </TabPanel>
          <TabPanel>
            <template #header>
              <i class="pi pi-book mx-2"></i>
              <span>Form V2</span>
            </template>
            <div class="form-wrapper-tab max-w-md">
              <div class="max-w-3xl mx-auto">
                <div class="bg-white rounded-lg shadow-lg p-6 my-8">
                  <h2 class="text-lg font-bold mb-4">Personal Information</h2>

                  <div class="mb-4">
                    <label for="name" class="block text-gray-700 font-semibold mb-2">Name</label>
                    <InputText
                      id="name"
                      name="name"
                      v-model="contactData.name"
                      :class="{ 'p-invalid': errorMessage.name }"
                      class="w-full border-gray-300 rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
                      placeholder="Enter your name"
                    />
                    <small class="p-error" id="text-error">{{
                      errorMessage.name || '&nbsp;'
                    }}</small>
                  </div>

                  <div class="mb-4">
                    <label for="email" class="block text-gray-700 font-semibold mb-2"
                      >Email Address</label
                    >
                    <InputText
                      type="email"
                      id="email"
                      name="email"
                      :class="{ 'p-invalid': errorMessage.email }"
                      v-model="contactData.email"
                      class="w-full border-gray-300 rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
                      placeholder="Enter your email"
                    />
                    <small class="p-error" id="text-error">{{
                      errorMessage.email || '&nbsp;'
                    }}</small>
                  </div>

                  <div class="mb-4">
                    <label for="phone" class="block text-gray-700 font-semibold mb-2"
                      >Phone Number</label
                    >
                    <InputText
                      type="tel"
                      id="phone"
                      name="phone"
                      v-model="contactData.phone"
                      aria-describedby="phone-help"
                      :class="{ 'p-invalid': errorMessage.phone }"
                      class="w-full border-gray-300 rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
                      placeholder="Enter your phone number"
                    />
                    <small class="p-error" id="text-error">{{
                      errorMessage.phone || '&nbsp;'
                    }}</small>
                  </div>
                </div>
                <div class="bg-white rounded-lg shadow-lg p-6 mb-8">
                  <h2 class="text-lg font-bold mb-4">Address Information</h2>

                  <div class="mb-4">
                    <label for="street" class="block text-gray-700 font-semibold mb-2"
                      >Street Address</label
                    >
                    <input
                      type="text"
                      id="street"
                      name="street"
                      class="w-full border-gray-300 rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
                      placeholder="Enter your street address"
                    />
                  </div>

                  <div class="mb-4">
                    <label for="city" class="block text-gray-700 font-semibold mb-2">City</label>
                    <input
                      type="text"
                      id="city"
                      name="city"
                      class="w-full border-gray-300 rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
                      placeholder="Enter your city"
                    />
                  </div>

                  <div class="mb-4">
                    <label for="state" class="block text-gray-700 font-semibold mb-2">State</label>
                    <input
                      type="text"
                      id="state"
                      name="state"
                      class="w-full border-gray-300 rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
                      placeholder="Enter your state"
                    />
                  </div>

                  <div class="mb-4">
                    <label for="zip" class="block text-gray-700 font-semibold mb-2">ZIP Code</label>
                    <input
                      type="text"
                      id="zip"
                      name="zip"
                      class="w-full border-gray-300 rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
                      placeholder="Enter your ZIP code"
                    />
                  </div>
                </div>
              </div>
            </div>
          </TabPanel>
          <TabPanel>
            <template #header>
              <i class="pi pi-cog mx-2"></i>
              <span>Form III</span>
            </template>
            <div class="max-w-3xl mx-auto">
              <div class="bg-white rounded-lg shadow-lg p-6 mb-8">
                <h2 class="text-lg font-bold mb-4">Name</h2>

                <div class="md:grid grid-cols-3 gap-4">
                  <div class="mb-4">
                    <label for="first-name" class="block text-gray-700 font-semibold mb-2"
                      >First Name</label
                    >
                    <input
                      type="text"
                      id="first-name"
                      name="first-name"
                      class="w-full border-gray-300 rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
                      placeholder="Enter your first name"
                    />
                  </div>

                  <div class="mb-4">
                    <label for="middle-name" class="block text-gray-700 font-semibold mb-2"
                      >Middle Name</label
                    >
                    <input
                      type="text"
                      id="middle-name"
                      name="middle-name"
                      class="w-full border-gray-300 rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
                      placeholder="Enter your middle name"
                    />
                  </div>

                  <div class="mb-4">
                    <label for="last-name" class="block text-gray-700 font-semibold mb-2"
                      >Last Name</label
                    >
                    <input
                      type="text"
                      id="last-name"
                      name="last-name"
                      class="w-full border-gray-300 rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
                      placeholder="Enter your last name"
                    />
                  </div>
                </div>
              </div>
              <div class="bg-white rounded-lg shadow-lg p-6 mb-8">
                <h2 class="text-lg font-bold mb-4">Countries</h2>
                <div class="w-3/4">
                  <div class="mb-4">
                    <label for="first-name" class="block text-gray-600 font-semibold mb-2"
                      >Select Country (Dropdown + AutoComplete)</label
                    >
                    <AutoComplete
                      :style="{ width: '100%' }"
                      optionLabel="name"
                      :suggestions="filteredCountries"
                      v-model="selCountryBoth"
                      dropdown
                      @complete="searchCountry"
                      forceSelection
                    />
                  </div>

                  <div class="mb-4">
                    <label for="first-name" class="block text-gray-600 font-semibold mb-2"
                      >Select Country (AutoComplete)</label
                    >
                    <AutoComplete
                      :style="{ width: '100%' }"
                      optionLabel="name"
                      :suggestions="filteredCountries"
                      v-model="selectedCountryAuto"
                      @complete="searchCountry"
                      forceSelection
                    />
                  </div>
                  <div class="mb-4">
                    <label for="first-name" class="block text-gray-600 font-semibold mb-2"
                      >Select Country (Dropdown)</label
                    >
                    <DropdownVue
                      v-model="selCountryDropdown"
                      :options="countries"
                      optionLabel="name"
                      placeholder="Select a City"
                      class="w-full md:w-14rem"
                    />
                  </div>
                  <h2 class="text-lg font-bold mb-4 mt-8">Fav Fruit (Radio Buttons)</h2>
                  <div class="flex flex-wrap gap-3">
                    <div class="flex align-items-center">
                      <RadioButton v-model="fruit" inputId="fruit1" name="apple" value="Apple" />
                      <label for="fruit1" class="ml-2">Apple</label>
                    </div>
                    <div class="flex align-items-center">
                      <RadioButton v-model="fruit" inputId="fruit2" name="orange" value="Orange" />
                      <label for="fruit2" class="ml-2">Orange</label>
                    </div>
                    <div class="flex align-items-center">
                      <RadioButton v-model="fruit" inputId="fruit3" name="banana" value="Banana" />
                      <label for="fruit3" class="ml-2">Banana</label>
                    </div>
                    <div class="flex align-items-center">
                      <RadioButton v-model="fruit" inputId="fruit4" name="grape" value="Grape" />
                      <label for="fruit4" class="ml-2">Grape</label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabPanel>
        </TabView>
      </div>
      <div class="col-span-2 flex justify-center pt-4 mt-4 md:mt-0">
        <!-- Insight Card with Icon to show few Keywords -->
        <div class="w-64 h-52 rounded shadow-lg bg-darkblue">
          <div class="flex">
            <svg class="w-12 h-12 text-lightblue m-4" viewBox="0 0 20 20" fill="currentColor">
              <path
                fill-rule="evenodd"
                d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 14a6 6 0 110-12 6 6 0 010 12zm-2-6a2 2 0 114 0 2 2 0 01-4 0z"
                clip-rule="evenodd"
              />
            </svg>
            <span class="text-base text-primary mt-6"> Insights </span>
          </div>
          <div class="flex justify-center mt-4">
            <div class="flex flex-col">
              <span class="text-sm text-primary">Created</span>
              <span class="text-sm text-primary">Last Updated</span>
            </div>
            <div class="flex flex-col ml-4">
              <span class="text-sm text-lightblue">2020-Jan-01</span>
              <span class="text-sm text-lightblue">2021-Mar-07</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <ToastVue />
  </div>
</template>

<style>
input.p-autocomplete-input {
  border: 1px solid #e2e8f0;
  border-radius: 0.25rem;
  padding: 0.5rem;
  width: 100%;
  outline: none;
  box-shadow: none;
  transition: all 0.2s ease-in-out;
}
</style>

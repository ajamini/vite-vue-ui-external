<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import { useConfirm } from 'primevue/useconfirm'
import { useToast } from 'primevue/usetoast'

const confirm = useConfirm()
const toast = useToast()

const showViewModal = ref(false)
const showAddModal = ref(false)

const viewContactDetails = ref({
  id: 0,
  name: '',
  email: '',
  phone: '',
  created_at: ''
})

//Temp data
const contacts = ref([
  {
    id: 1,
    name: 'John Doe',
    email: 'john@mail.com',
    phone: '555-555-5555',
    created_at: '2020-Jan-01'
  },
  {
    id: 2,
    name: 'Karen Williams',
    email: 'karen@mail.com',
    phone: '444-444-4444',
    created_at: '2021-Mar-07'
  },
  {
    id: 3,
    name: 'Henry Johnson',
    email: 'henry@gmail.com',
    phone: '333-333-3333',
    created_at: '2023-May-09'
  },
  {
    id: 4,
    name: 'Sara Jackson',
    email: 'sara@mail.com',
    phone: '222-222-2222',
    created_at: '2021-Apr-14'
  },
  {
    id: 5,
    name: 'Silverhand',
    email: 'silver@cp.net',
    phone: '111-111-1111',
    created_at: '2022-Dec-30'
  }
])

//Store to Local Storage to persist data
if (localStorage.getItem('contacts') === null) {
  localStorage.setItem('contacts', JSON.stringify(contacts.value))
} else {
  contacts.value = JSON.parse(localStorage.getItem('contacts') || '[]')
}

//Search Contact
let searchInput = ref('')
function filteredList() {
  return contacts.value.filter((contact) => {
    //Name, Email and Phone
    return (
      contact.name.toLowerCase().includes(searchInput.value.toLowerCase()) ||
      contact.email.toLowerCase().includes(searchInput.value.toLowerCase()) ||
      contact.phone.toLowerCase().includes(searchInput.value.toLowerCase())
    )
  })
}

//View Contact Details
function viewContact(event: Event, id: number) {
  viewContactDetails.value = contacts.value.find(
    (contact) => contact.id === id
  ) as (typeof contacts.value)[0]
  showViewModal.value = true
}

//Delete Contact
function deleteContact(event: Event, id: number) {
  confirm.require({
    message: 'Are you sure you want to delete this contact?',
    header: 'Delete Contact',
    icon: 'pi pi-exclamation-triangle',
    acceptIcon: 'pi pi-check',
    rejectIcon: 'pi pi-times',
    acceptClass: 'p-button-danger',
    target: event.currentTarget as HTMLElement,

    accept: () => {
      contacts.value.splice(
        contacts.value.findIndex((contact) => contact.id === id),
        1
      )
      toast.add({
        severity: 'info',
        summary: 'Success',
        detail: 'Contact Deleted Successfully',
        life: 3000
      })
      console.log('Deleted', id)
    },
    reject: () => {
      //Do nothing
      console.log('Rejected')
    }
  })
}

//Form data for New Contact
const contactData = ref({
  id: 0,
  name: '',
  email: '',
  phone: '',
  created_at: ''
})
//Error message object for Validation
const errorMessage = ref({
  name: '',
  email: '',
  phone: ''
})
//Add New Contact
const saveContact = () => {
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

  //If no error, save to Local Storage
  if (
    errorMessage.value.name === '' &&
    errorMessage.value.email === '' &&
    errorMessage.value.phone === ''
  ) {
    contactData.value.id = contacts.value.length + 1
    contactData.value.created_at = new Date().toLocaleDateString()
    contacts.value.push(contactData.value)
    localStorage.setItem('contacts', JSON.stringify(contacts.value))
    console.log('Saved', contactData.value)
    showAddModal.value = false
    toast.add({
      severity: 'success',
      summary: 'Success',
      detail: 'Contact Added Successfully',
      life: 3000
    })
  }
}

//Clear form data and error messages before opening modal
const showForm = () => {
  contactData.value = {
    id: 0,
    name: '',
    email: '',
    phone: '',
    created_at: ''
  }
  //Clear error messages
  errorMessage.value = {
    name: '',
    email: '',
    phone: ''
  }
  //Open modal
  showAddModal.value = true
}
</script>

<template>
  <div class="w-full">
    <div class="text-gray-700 flex my-4 p-8 text-4xl font-semibold">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-10 h-10 mr-2 text-lightblue"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
        />
      </svg>

      <h1 class="mt-1">Contacts</h1>
    </div>
    <div class="w-full p-8 bg-white">
      <DataTable
        :value="filteredList()"
        tableStyle="min-width: 50rem"
        paginator
        dataKey="id"
        :rows="10"
        :rowsPerPageOptions="[10, 20, 50]"
      >
        <template #header>
          <div class="md:flex justify-between">
            <div class="pt-2 relative text-gray-600">
              <input
                class="border-2 border-gray-300 w-full bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
                type="search"
                name="search"
                placeholder="Search"
                v-model="searchInput"
              />
              <div class="absolute right-0 top-0 mt-5 mr-4">
                <svg
                  class="text-gray-600 h-4 w-4 fill-current cursor-text"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  version="1.1"
                  id="Capa_1"
                  x="0px"
                  y="0px"
                  viewBox="0 0 56.966 56.966"
                  style="enable-background: new 0 0 56.966 56.966"
                  xml:space="preserve"
                  width="512px"
                  height="512px"
                >
                  <path
                    d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z"
                  />
                </svg>
              </div>
            </div>
            <div class="w-48 mt-4 md:mt-0">
              <button
                @click="showForm"
                class="block w-full px-6 py-2 text-xs font-medium leading-6 text-center text-white uppercase transition bg-darkblue rounded shadow ripple hover:shadow-lg hover:bg-opacity-80 focus:outline-none"
              >
                Add a Contact
              </button>
            </div>
          </div>
        </template>
        <template #empty> No customers found. </template>
        <TableColumn field="id" header="ID" style="width: 5%"></TableColumn>
        <TableColumn sortable field="name" header="Name" style="width: 25%"></TableColumn>
        <TableColumn field="phone" header="Telephone" style="width: 25%"></TableColumn>
        <TableColumn
          class="text-sm"
          field="created_at"
          header="Date Added"
          style="width: 20%"
        ></TableColumn>
        <!-- View, Edit and Delete -->
        <TableColumn header="Actions" style="width: 20%" field="id">
          <template #body="slotProps">
            <div class="flex justify-start">
              <button
                @click="viewContact($event, slotProps.data.id)"
                class="flex items-center justify-center w-8 h-8 mr-0.5 text-lightblue transition-colors duration-150 cursor-pointer focus:outline-none hover:opacity-90"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-5 h-5 mt-0.5"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </button>
              <RouterLink
                :to="{ name: 'contact-edit', params: { id: slotProps.data.id } }"
                class="flex items-center justify-center w-8 h-8 mr-1 text-darkblue transition-colors duration-150 cursor-pointer hover:opacity-90 focus:outline-none"
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
              </RouterLink>
              <div class="delete-wrapper">
                <button
                  @click="deleteContact($event, slotProps.data.id)"
                  class="flex items-center justify-center w-8 h-8 mr-1 text-darkred transition-colors duration-150 cursor-pointer hover:text-gray-500 focus:outline-none"
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
                      d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </template>
        </TableColumn>
        <ConfirmPopup></ConfirmPopup>
        <DialogModal
          v-model:visible="showViewModal"
          modal
          header="Contact Details"
          :style="{ width: '50vw' }"
          :breakpoints="{ '960px': '75vw', '641px': '100vw' }"
        >
          <div class="w-full">
            <div class="w-full px-8 py-4 bg-darkblue rounded text-primary grid grid-cols-3">
              <div class="font-semibold">
                <h4 class="text-primary">Name:</h4>
                <h4 class="text-primary mt-4">Email:</h4>
                <h4 class="text-primary mt-4">Phone:</h4>
              </div>

              <div class="text-primary col-span-2 grid grid-flow-row">
                <span class="">{{ viewContactDetails.name }}</span>
                <span class="mt-4">{{ viewContactDetails.email }}</span>
                <span class="mt-4">{{ viewContactDetails.phone }}</span>
              </div>
            </div>
          </div>
        </DialogModal>
      </DataTable>
    </div>
    <!--  Contact Details Modal -->
    <DialogModal
      v-model:visible="showViewModal"
      modal
      header="Contact Details"
      :style="{ width: '50vw' }"
      :breakpoints="{ '960px': '75vw', '641px': '100vw' }"
    >
      <div class="w-full">
        <div class="w-full px-8 py-4 bg-darkblue rounded text-primary grid grid-cols-3">
          <div class="font-semibold">
            <h4 class="text-primary">Name:</h4>
            <h4 class="text-primary mt-4">Email:</h4>
            <h4 class="text-primary mt-4">Phone:</h4>
          </div>

          <div class="text-primary col-span-2 grid grid-flow-row">
            <span class="">{{ viewContactDetails.name }}</span>
            <span class="mt-4">{{ viewContactDetails.email }}</span>
            <span class="mt-4">{{ viewContactDetails.phone }}</span>
          </div>
        </div>
      </div>
    </DialogModal>
    <!-- Add Contact Modal - Form -->
    <DialogModal
      v-model:visible="showAddModal"
      modal
      header="Add new contact"
      :style="{ width: '35vw' }"
      :breakpoints="{ '960px': '75vw', '641px': '100vw' }"
    >
      <div class="w-full">
        <form class="col-span-2 px-4 mt-4 md:mt-0">
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
        </form>
      </div>
      <template #footer>
        <button
          class="inline-block px-6 py-2 text-xs font-medium leading-6 text-center text-white uppercase transition bg-darkred rounded shadow ripple hover:shadow-lg hover:bg-red-600 focus:outline-none"
          @click="showAddModal = false"
        >
          Cancel
        </button>
        <button
          class="inline-block px-6 py-2 text-xs font-medium leading-6 text-center text-white uppercase transition bg-lightblue rounded shadow ripple hover:shadow-lg hover:bg-sky-700 focus:outline-none"
          @click="saveContact"
          autofocus
        >
          Add
        </button>
      </template>
    </DialogModal>
    <ToastVue />
  </div>
</template>

<style>
.p-datatable-header {
  background-color: #fff !important;
  border: none !important;
}
.p-datatable .p-datatable-thead > tr > th {
  background-color: #fff !important;
}
.p-column-title {
  font-weight: 500;
  color: #94a3b8;
}
</style>

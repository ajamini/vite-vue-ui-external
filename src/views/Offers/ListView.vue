<script setup lang="ts">
import { ref, reactive } from 'vue'
import { RouterLink } from 'vue-router'
import { useConfirm } from 'primevue/useconfirm'
import { useToast } from 'primevue/usetoast'

const confirm = useConfirm()
const toast = useToast()

//Temp data ~ Should be fetched from API
const offersData = reactive([
  {
    id: 1,
    created_at: '2021-05-01',
    mls: 'Some Name',
    buyers: ['Tom Hanks', 'Keanu Reevs', 'Edward Norton'],
    offerDate: '2022-05-09',
    seller: 'Seller YZK',
    purchasePrice: 76000,
    depositAmount: 1000,
    depositTerms: '10% of Purchase Price',
    irrevocableDate: '2022-05-19',
    completionDate: '2022-06-15',
    conditions: {
      id: 1,
      title: 'Condition Item 1',
      description: 'List of Conditions, Condition 1, Condition 2, Condition 3',
      is_list: true,
      attributes: {
        salmon: 'Salmon Value',
        southeast: 'Yes',
        practical: 'probably',
        loan: 'nope'
      }
    },
    represent: {
      selectedRep: 'buyer',
      guest: 'Guest Name',
      location: 'Location'
    }
  },
  {
    id: 2,
    created_at: '2021-05-01',
    mls: 'John Doe',
    buyers: ['Robert JR', 'Brad Pitt', 'Johhny Depp', 'Tom Cruise'],
    offerDate: '2022-05-09',
    seller: 'Seller YZK',
    purchasePrice: 76000,
    depositAmount: 1000,
    depositTerms: '10% of Purchase Price',
    irrevocableDate: '2022-05-19',
    completionDate: '2022-06-15',
    conditions: {
      id: 1,
      title: 'Condition Item 1',
      description: 'List of Conditions, Condition 1, Condition 2, Condition 3',
      is_list: true,
      attributes: {
        salmon: 'Salmon Value',
        southeast: 'Yes',
        practical: 'probably',
        loan: 'nope'
      }
    },
    represent: {
      selectedRep: 'seller',
      guest: 'Guest',
      location: 'Location'
    }
  }
])

//Store to Local Storage to persist data
if (localStorage.getItem('offersData') === null) {
  localStorage.setItem('offersData', JSON.stringify(offersData))
} else {
  offersData.values = JSON.parse(localStorage.getItem('offersData') || '[]')
}

//Search Offer
let searchInput = ref('')
function filteredList() {
  return offersData.filter((offer) => {
    return (
      offer.buyers[0].toLowerCase().includes(searchInput.value.toLowerCase()) ||
      offer.mls.toLowerCase().includes(searchInput.value.toLowerCase()) ||
      offer.seller.toLowerCase().includes(searchInput.value.toLowerCase()) ||
      offer.conditions.title.toLowerCase().includes(searchInput.value.toLowerCase()) ||
      // Buyers is an array, so we need to loop through it
      offer.buyers.some((buyer) => buyer.toLowerCase().includes(searchInput.value.toLowerCase()))
    )
  })
}

// //Delete Offer
// function deleteContact(event: Event, id: number) {
//   confirm.require({
//     message: 'Are you sure you want to delete this contact?',
//     header: 'Delete Contact',
//     icon: 'pi pi-exclamation-triangle',
//     acceptIcon: 'pi pi-check',
//     rejectIcon: 'pi pi-times',
//     acceptClass: 'p-button-danger',
//     target: event.currentTarget as HTMLElement,

//     accept: () => {
//       contacts.value.splice(
//         contacts.value.findIndex((contact) => contact.id === id),
//         1
//       )
//       toast.add({
//         severity: 'info',
//         summary: 'Success',
//         detail: 'Contact Deleted Successfully',
//         life: 3000
//       })
//       console.log('Deleted', id)
//     },
//     reject: () => {
//       //Do nothing
//       console.log('Rejected')
//     }
//   })
// }
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
        class="w-10 h-10 mt-1 mr-0.5 text-lightblue"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M2.25 7.125C2.25 6.504 2.754 6 3.375 6h6c.621 0 1.125.504 1.125 1.125v3.75c0 .621-.504 1.125-1.125 1.125h-6a1.125 1.125 0 01-1.125-1.125v-3.75zM14.25 8.625c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v8.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 01-1.125-1.125v-8.25zM3.75 16.125c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 01-1.125-1.125v-2.25z"
        />
      </svg>

      <h1 class="mt-1">Offers</h1>
    </div>
    <div class="w-full p-8 bg-white">
      <DataTable
        :value="filteredList()"
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
              <RouterLink
                to="/offers/create"
                class="block w-full px-6 py-2 text-xs font-medium leading-6 text-center text-white uppercase transition bg-darkblue rounded shadow ripple hover:shadow-lg hover:bg-opacity-80 focus:outline-none"
              >
                Add New Offer
              </RouterLink>
            </div>
          </div>
          <ConfirmPopup />
        </template>
        <TableColumn field="id" header="ID" style="width: 5%"></TableColumn>
        <TableColumn sortable field="mls" header="MLS#" style="width: 10%"></TableColumn>
        <TableColumn field="buyers" header="Buyers" style="width: 40%">
          <template #body="slotProps">
            <div class="flex justify-start gap-2">
              <div v-for="(buyer, index) in slotProps.data.buyers" :key="index" class="text-sm">
                {{ buyer }}
                <span v-if="index < slotProps.data.buyers.length - 1">,</span>
              </div>
            </div>
          </template>
        </TableColumn>
        <TableColumn field="seller" header="Seller" style="width: 10%"></TableColumn>
        <TableColumn
          class="text-sm"
          field="offerDate"
          header="Offer Date"
          style="width: 10%"
        ></TableColumn>
        <TableColumn
          class="text-sm"
          field="created_at"
          header="Created At"
          style="width: 10%"
        ></TableColumn>
        <!-- View, Edit and Delete -->
        <TableColumn header="Actions" style="width: 20%" field="id">
          <template #body="slotProps">
            <div class="flex justify-start">
              <RouterLink
                :to="{ name: 'offer-details', params: { id: slotProps.data.id } }"
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
              </RouterLink>
              <!-- :to="{ name: 'offers', params: { id: slotProps.data.id } }" -->
              <RouterLink
                :to="{ name: 'offers' }"
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
                <!-- @click="deleteContact($event, slotProps.data.id)" -->
                <button
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
      </DataTable>
    </div>
    <ToastVue />
  </div>
</template>

<style>
div.p-dataview-content > div {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  grid-gap: 1rem;
}
@media screen and (max-width: 768px) {
  div.p-dataview-content > div {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}
@media screen and (max-width: 640px) {
  div.p-dataview-content > div {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
}

.p-dataview-header {
  background-color: #fff !important;
  border: none !important;
}

ul.p-autocomplete-multiple-container {
  width: 100%;
}

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

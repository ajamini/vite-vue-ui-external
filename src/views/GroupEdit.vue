<script setup lang="ts">
import router from '@/router'
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { useToast } from 'primevue/usetoast'

//Group ID from URL
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
        label: 'Groups',
        icon: 'pi pi-users',
        to: '/groups'
      }
    ]
  }
])

const toggleActions = (event: Event) => {
  actionMenu.value.toggle(event)
}

// Retrive Temp data from Local Storage
const groups = ref(JSON.parse(localStorage.getItem('groups') || '[]'))

//Form data
const groupData = ref({
  id: 0,
  name: '',
  members: [],
  created_at: ''
})

//Set form data on load
groups.value.forEach((group: any) => {
  if (group.id === Number(id)) {
    groupData.value = group
  } else {
    //SHow error message if Group not found
    toast.add({
      severity: 'error',
      summary: 'Error',
      detail: 'Group not found',
      life: 3000
    })
    //Redirect to group page after 3 seconds
    //setTimeout(() => {
    //  router.push('/groups')
    // }, 3000)
  }
})

//Error message object for Validation
const errorMessage = ref({
  name: '',
  members: ''
})

//TODO: Contacts should be retrived from DB
const suggestedItems = ref([
  {
    id: 1,
    name: 'Wraith'
  },
  {
    id: 2,
    name: 'Bangalore'
  },
  {
    id: 3,
    name: 'Bloodhound'
  },
  {
    id: 4,
    name: 'Pathfinder'
  },
  {
    id: 5,
    name: 'Watson'
  }
])
//Store Filtered Contacts/Items for Autocomplete
const filteredContactItems = ref<{ id: number; name: string }[]>([])

const contactSearch = (event: any) => {
  setTimeout(() => {
    if (!event.query.trim().length) {
      filteredContactItems.value = [...suggestedItems.value]
    } else {
      filteredContactItems.value = suggestedItems.value.filter((item) => {
        return item.name.toLowerCase().startsWith(event.query.toLowerCase())
      })
    }
  }, 250)
}

//Update form data
const updateGroup = () => {
  //Validate form
  if (groupData.value.name === '') {
    errorMessage.value.name = 'Name is required'
  } else {
    errorMessage.value.name = ''
  }
  if (groupData.value.members.length === 0) {
    errorMessage.value.members = 'Members are required'
  } else {
    errorMessage.value.members = ''
  }
  //If no error, Update Group
  if (errorMessage.value.name === '' && errorMessage.value.members === '') {
    console.log('Update Contact:', groupData.value)
    //TODO: Update Group in DB
    groups.value.forEach((contact: any) => {
      if (contact.id === Number(id)) {
        contact.name = groupData.value.name
        contact.members = groupData.value.members
      }
    })
    //Update Local Storage for persistent
    localStorage.setItem('groups', JSON.stringify(groups.value))

    toast.add({
      severity: 'success',
      summary: 'Updated',
      detail: 'Group Updated',
      life: 3000
    })
    //Redirect to groups page after 3 seconds
    setTimeout(() => {
      router.push('/groups')
    }, 3000)
  }
}
</script>

<template>
  <div class="w-full">
    <div class="md:flex justify-between">
      <div class="text-gray-600 flex my-4 p-8 text-4xl font-semibold">
        <RouterLink to="/groups" class="mr-3">
          <i class="pi pi-arrow-left text-lightblue" style="font-size: 1.5rem"></i>
        </RouterLink>
        <h1 class="mt-1">Edit Group</h1>
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
          @click="updateGroup"
          class="inline-block px-6 py-2 text-xs font-medium leading-6 text-center text-white uppercase transition bg-green-500 rounded shadow ripple hover:shadow-lg hover:bg-green-600 focus:outline-none"
        >
          Save
        </button>
      </div>
    </div>

    <div class="w-full p-8 bg-white min-h-screen md:grid md:grid-cols-5">
      <div class="sidenav">
        <h4 class="text-gray-600 text-base font-semibold">Group Details</h4>
      </div>
      <form class="col-span-2 md:pr-20 mt-4 md:mt-0">
        <div class="input-wrapper grid grid-flow-row">
          <label class="text-gray-600 font-medium" for="name">Name</label>
          <InputText
            id="name"
            v-model="groupData.name"
            :class="{ 'p-invalid': errorMessage.name }"
            aria-describedby="name-help"
          />
          <small class="p-error" id="text-error">{{ errorMessage.name || '&nbsp;' }}</small>
        </div>
        <div class="input-wrapper grid grid-flow-row mt-4">
          <label class="text-gray-600 font-medium" for="contact">Contact</label>
          <AutoComplete
            v-model="groupData.members"
            dropdown
            multiple
            :suggestions="filteredContactItems"
            @complete="contactSearch"
            forceSelection
            option-label="name"
            :class="{ 'p-invalid': errorMessage.members }"
          />
          <small class="p-error" id="text-error">{{ errorMessage.members || '&nbsp;' }}</small>
        </div>
      </form>
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
ul.p-autocomplete-multiple-container {
  width: 100%;
}
</style>

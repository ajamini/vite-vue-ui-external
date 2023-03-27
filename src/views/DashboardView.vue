<script setup lang="ts">
import { ref, onMounted } from 'vue'
import DashboardStats from '@/components/DashboardStats.vue'
import DashboardTasks from '@/components/DashboardTasks.vue'

//Chart data
onMounted(() => {
  chartData.value = setChartData()
})

const chartData = ref()
const chartOptions = ref({
  cutout: '60%'
})

const setChartData = () => {
  const documentStyle = getComputedStyle(document.body)

  return {
    labels: ['A', 'B', 'C'],
    datasets: [
      {
        data: [540, 325, 702],
        backgroundColor: [
          documentStyle.getPropertyValue('--blue-500'),
          documentStyle.getPropertyValue('--yellow-500'),
          documentStyle.getPropertyValue('--green-500')
        ],
        hoverBackgroundColor: [
          documentStyle.getPropertyValue('--blue-400'),
          documentStyle.getPropertyValue('--yellow-400'),
          documentStyle.getPropertyValue('--green-400')
        ]
      }
    ]
  }
}

//Temp data
const contacts = [
  {
    id: 1,
    name: 'John Doe',
    email: 'john@mail.com',
    phone: '555-555-5555',
    type: 'personal',
    created_at: '2020-01-01'
  },
  {
    id: 2,
    name: 'Karen Williams',
    email: 'karen@mail.com',
    phone: '444-444-4444',
    type: 'personal',
    created_at: '2021-01-01'
  },
  {
    id: 3,
    name: 'Henry Johnson',
    email: 'henry@gmail.com',
    phone: '333-333-3333',
    type: 'professional',
    created_at: '2023-01-01'
  },
  {
    id: 4,
    name: 'Sara Jackson',
    email: 'sara@mail.com',
    phone: '222-222-2222',
    type: 'professional',
    created_at: '2021-01-01'
  },
  {
    id: 5,
    name: 'Silverhand',
    email: 'silver@cp.net',
    phone: '111-111-1111',
    type: 'professional',
    created_at: '2022-01-01'
  }
]

const clientGroups = [
  {
    id: 1,
    name: 'Group 1',
    members: ['John', 'Karen', 'Henry', 'Sara', 'Silverhand']
  },
  {
    id: 2,
    name: 'Group 2',
    members: ['Karen', 'Henry', 'Sara', 'Silverhand']
  },
  {
    id: 3,
    name: 'Group 3',
    members: ['Henry', 'Sara', 'Silverhand', 'V']
  },
  {
    id: 4,
    name: 'Group 4',
    members: ['Sara', 'Silverhand', 'Trevor']
  },
  {
    id: 5,
    name: 'Group 5',
    members: ['Silverhand', 'John', 'Karen', 'Henry', 'Sara']
  },
  {
    id: 6,
    name: 'Group 6',
    members: ['John', 'Karen', 'Henry', 'Sara', 'Silverhand']
  }
]
</script>

<template>
  <main class="w-full bg-primary p-6">
    <DashboardStats />
    <div class="md:flex gap-4 mt-8 w-full">
      <div class="md:w-3/5 rounded-md bg-white p-4 shadow-lg">
        <div class="card card-w-title global-sales p-fluid">
          <h5 class="font-semibold text-gray-800 mb-4">Recent Contacts</h5>
          <DataTable
            :value="contacts"
            responsiveLayout="scroll"
            dataKey="id"
            :rows="5"
            style="margin-bottom: 20px"
            :paginator="true"
          >
            <TableColumn field="name" header="Name" :sortable="true">
              <template #body="slotProps">
                <span class="p-column-title">Name</span>
                {{ slotProps.data.name }}
              </template>
            </TableColumn>
            <TableColumn field="email" header="Email" :sortable="true">
              <template #body="slotProps">
                <span class="p-column-title">Email</span>
                {{ slotProps.data.email }}
              </template>
            </TableColumn>
            <TableColumn field="type" header="Type" :sortable="true">
              <template #body="slotProps">
                <span class="p-column-title">Status</span>
                <span
                  :class="
                    'product-badge capitalize status-' +
                    (slotProps.data.type ? slotProps.data.type.toLowerCase() : '')
                  "
                  >{{ slotProps.data.type }}</span
                >
              </template>
            </TableColumn>
            <TableColumn field="created_at" header="Date" :sortable="true">
              <template #body="slotProps">
                <span class="p-column-title">Date</span>
                {{ slotProps.data.created_at }}
              </template>
            </TableColumn>
          </DataTable>
        </div>
      </div>
      <div class="md:w-2/5 mt-4 md:mt-0 rounded-md bg-white p-4 shadow-lg">
        <DashboardTasks />
      </div>
    </div>
    <div class="md:flex gap-4 mt-4 w-full">
      <div class="md:w-2/5 mt-4 md:mt-0 flex justify-center rounded-md bg-white p-4 shadow-lg">
        <PrimeChart
          type="doughnut"
          :data="chartData"
          :options="chartOptions"
          class="w-full md:w-30rem"
        />
      </div>
      <div class="md:w-3/5 rounded-md bg-white p-4 shadow-lg md:mt-0 mt-4">
        <div class="card card-w-title global-sales p-fluid">
          <h5 class="font-semibold text-gray-800 mb-4">Client Groups</h5>
          <DataTable
            :value="clientGroups"
            responsiveLayout="scroll"
            dataKey="id"
            :rows="5"
            style="margin-bottom: 20px"
            :paginator="true"
          >
            <TableColumn field="id" header="ID" :sortable="true">
              <template #body="slotProps">
                <span class="p-column-title">ID</span>
                {{ slotProps.data.id }}
              </template>
            </TableColumn>
            <TableColumn field="name" header="Name" :sortable="true">
              <template #body="slotProps">
                <span class="p-column-title">Name</span>
                {{ slotProps.data.name }}
              </template>
            </TableColumn>

            <TableColumn field="members" header="Members" :sortable="false">
              <template #body="slotProps">
                <div class="grid grid-flow-col gap-2 justify-start">
                  <span
                    class="bg-slate-200 rounded-full px-2"
                    v-for="member in slotProps.data.members"
                    :key="member"
                  >
                    {{ member }}
                  </span>
                </div>
              </template>
            </TableColumn>
          </DataTable>
        </div>
      </div>
    </div>
  </main>
</template>

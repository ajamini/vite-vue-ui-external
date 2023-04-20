<script setup lang="ts">
import { ref } from 'vue'

import SidebarMenu from '@/components/SidebarMenu.vue'

const permissions = ref({
  viewThreads: true,
  resolveThreads: false,
  viewUsers: true,
  viewRoles: false,
  viewInvitations: false,
  viewSettings: false,
  viewLogs: false,
  viewReports: false,
  viewAnalytics: true,
  viewNotifications: true,
  viewSupport: true,
  viewBilling: false
})
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
      <div class="w-full mt-4 md:ml-4 rounded-md border p-4">
        <h4 class="text-gray-500 text-xl font-bold">Users Management</h4>
        <div class="w-full mt-4">
          <TabView :active-index="1">
            <TabPanel header="Profiles">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum.
              </p>
            </TabPanel>
            <TabPanel header="Roles">
              <div class="w-full">
                <div class="w-full">
                  <h3 class="text-gray-900 text-sm font-bold">Owner (Admin)</h3>
                  <p class="text-gray-500 text-xs">Manage all users and roles</p>
                </div>
                <div class="flex justify-between p-4">
                  <h4 class="text-gray-600 text-sm font-bold">Permissions</h4>
                  <!-- Reset to Default Button -->
                  <button
                    class="bg-gray-100 text-red-600 text-xs font-bold py-2 px-2 rounded-sm outline hover:bg-red-600 hover:text-gray-100"
                  >
                    Reset to Default
                  </button>
                </div>
                <div class="w-full p-4">
                  <div class="grid grid-cols-2 md:gap-x-[10rem] gap-y-2 gap-x-4">
                    <div class="flex justify-between md:px-8">
                      <div class="text-gray-700 text-sm">1. View Threads</div>
                      <InputSwitch v-model="permissions.viewThreads" />
                    </div>
                    <div class="flex justify-between md:px-8">
                      <div class="text-gray-700 text-sm">1.2 Resolve Threads</div>
                      <InputSwitch v-model="permissions.resolveThreads" />
                    </div>
                  </div>
                  <hr class="w-full my-6 border-1" />
                  <div class="grid grid-cols-2 md:gap-x-[10rem] gap-y-2 gap-x-4">
                    <div class="flex justify-between md:px-8">
                      <div class="text-gray-700 text-sm">2. View Users</div>
                      <InputSwitch v-model="permissions.viewBilling" />
                    </div>
                    <div class="flex justify-between md:px-8">
                      <div class="text-gray-700 text-sm">2.1 View Billing</div>
                      <InputSwitch v-model="permissions.viewUsers" />
                    </div>
                  </div>
                  <hr class="w-full my-6 border-1" />
                  <div class="grid grid-cols-2 md:gap-x-[10rem] gap-y-2 gap-x-4">
                    <div class="flex justify-between md:px-8">
                      <div class="text-gray-700 text-sm">3. View Reports</div>
                      <InputSwitch v-model="permissions.viewReports" />
                    </div>
                    <div class="w-full md:px-8">
                      <div class="flex justify-between">
                        <div class="text-gray-700 text-sm">3.1 View Analytics</div>
                        <InputSwitch v-model="permissions.viewSettings" />
                      </div>
                      <div class="flex justify-between mt-4">
                        <div class="text-gray-700 text-sm">3.2 View Support</div>
                        <InputSwitch v-model="permissions.viewSupport" />
                      </div>
                    </div>
                  </div>
                  <hr class="w-full my-6 border-1" />
                  <div class="grid grid-cols-2 md:gap-x-[10rem] gap-y-2 gap-x-4">
                    <div class="flex justify-between md:px-8">
                      <div class="text-gray-700 text-sm">2. View Users</div>
                      <InputSwitch v-model="permissions.viewBilling" />
                    </div>
                    <div class="flex justify-between md:px-8">
                      <div class="text-gray-700 text-sm">2.1 View Billing</div>
                      <InputSwitch v-model="permissions.viewUsers" />
                    </div>
                  </div>
                  <hr class="w-full my-6 border-1" />
                  <div class="grid grid-cols-2 md:gap-x-[10rem] gap-y-2 gap-x-4">
                    <div class="flex justify-between md:px-8">
                      <div class="text-gray-700 text-sm">2. View Users</div>
                      <InputSwitch v-model="permissions.viewBilling" />
                    </div>
                    <div class="flex justify-between md:px-8">
                      <div class="text-gray-700 text-sm">2.1 View Billing</div>
                      <InputSwitch v-model="permissions.viewUsers" />
                    </div>
                  </div>
                  <hr class="w-full my-6 border-1" />
                  <div class="grid grid-cols-2 md:gap-x-[10rem] gap-y-2 gap-x-4">
                    <div class="flex justify-between md:px-8">
                      <div class="text-gray-700 text-sm">2. View Users</div>
                      <InputSwitch v-model="permissions.viewBilling" />
                    </div>
                    <div class="flex justify-between md:px-8">
                      <div class="text-gray-700 text-sm">2.1 View Billing</div>
                      <InputSwitch v-model="permissions.viewUsers" />
                    </div>
                  </div>
                  <hr class="w-full my-6 border-1" />
                  <div class="grid grid-cols-2 md:gap-x-[10rem] gap-y-2 gap-x-4">
                    <div class="flex justify-between md:px-8">
                      <div class="text-gray-700 text-sm">2. View Users</div>
                      <InputSwitch v-model="permissions.viewBilling" />
                    </div>
                    <div class="flex justify-between md:px-8">
                      <div class="text-gray-700 text-sm">2.1 View Billing</div>
                      <InputSwitch v-model="permissions.viewUsers" />
                    </div>
                  </div>
                </div>
              </div>
            </TabPanel>
            <TabPanel header="Invitations">
              <p>
                At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
                praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias
                excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui
                officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem
                rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est
                eligendi optio cumque nihil impedit quo minus.
              </p>
            </TabPanel>
          </TabView>
        </div>
      </div>
    </div>
  </div>
</template>

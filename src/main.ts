import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import PrimeVue from 'primevue/config'
import Button from 'primevue/button'
import Ripple from 'primevue/ripple'
import ConfirmationService from 'primevue/confirmationservice'
import Toast from 'primevue/toast'
import ToastService from 'primevue/toastservice'

import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import ColumnGroup from 'primevue/columngroup'
import Row from 'primevue/row'
import InputText from 'primevue/inputtext'
import Checkbox from 'primevue/checkbox'
import TieredMenu from 'primevue/tieredmenu'
import Chart from 'primevue/chart'
import ConfirmPopup from 'primevue/confirmpopup'
import Menu from 'primevue/menu'
import Dialog from 'primevue/dialog'

import './assets/main.css'

import 'primevue/resources/themes/saga-blue/theme.css' //theme
import 'primevue/resources/primevue.min.css' //core css
import 'primeicons/primeicons.css' //icons

const app = createApp(App)

app.use(router)
app.use(PrimeVue, { ripple: true })
app.use(ConfirmationService)
app.use(ToastService)

app.directive('ripple', Ripple)

app.component('PrimeButton', Button)
app.component('DataTable', DataTable)
app.component('TableColumn', Column)
app.component('TableColumnGroup', ColumnGroup)
app.component('TableRow', Row)
app.component('InputText', InputText)
app.component('PrimeCheckbox', Checkbox)
app.component('TieredMenu', TieredMenu)
app.component('PrimeChart', Chart)
app.component('ConfirmPopup', ConfirmPopup)
app.component('PrimeMenu', Menu)
app.component('ToastVue', Toast)
app.component('DialogModal', Dialog)

app.mount('#app')

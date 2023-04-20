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
import DataView from 'primevue/dataview'
import InputText from 'primevue/inputtext'
import Checkbox from 'primevue/checkbox'
import TieredMenu from 'primevue/tieredmenu'
import Chart from 'primevue/chart'
import ConfirmPopup from 'primevue/confirmpopup'
import Menu from 'primevue/menu'
import Dialog from 'primevue/dialog'
import AutoComplete from 'primevue/autocomplete'
import Calendar from 'primevue/calendar'
import InputNumber from 'primevue/inputnumber'
import Sidebar from 'primevue/sidebar'
import TabView from 'primevue/tabview'
import TabPanel from 'primevue/tabpanel'
import Dropdown from 'primevue/dropdown'
import RadioButton from 'primevue/radiobutton'
import Accordion from 'primevue/accordion'
import SelectButton from 'primevue/selectbutton'
import AccordionTab from 'primevue/accordiontab'
import InputSwitch from 'primevue/inputswitch'

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
app.component('InputNumber', InputNumber)
app.component('PrimeCheckbox', Checkbox)
app.component('TieredMenu', TieredMenu)
app.component('PrimeChart', Chart)
app.component('ConfirmPopup', ConfirmPopup)
app.component('PrimeMenu', Menu)
app.component('ToastVue', Toast)
app.component('DialogModal', Dialog)
app.component('AutoComplete', AutoComplete)
app.component('CalendarVue', Calendar)
app.component('SidebarVue', Sidebar)
app.component('TabView', TabView)
app.component('TabPanel', TabPanel)
app.component('DropdownVue', Dropdown)
app.component('RadioButton', RadioButton)
app.component('DataView', DataView)
app.component('AccordionVue', Accordion)
app.component('AccordionTab', AccordionTab)
app.component('SelectButton', SelectButton)
app.component('InputSwitch', InputSwitch)

app.mount('#app')

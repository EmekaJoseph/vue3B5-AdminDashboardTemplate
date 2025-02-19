// @ts-nocheck



//bootstrap@5.3.3
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'

//bootstrap-icons
import 'bootstrap-icons/font/bootstrap-icons.css'

// animate.css
import 'animate.css';

//vue3-apexcharts
import VueApexCharts from "vue3-apexcharts";

// vue3-easy-data-table 
import Vue3EasyDataTable from 'vue3-easy-data-table';
import 'vue3-easy-data-table/dist/style.css';

// vue3-datepicker
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'

//vue-select@beta
import vSelect from "vue-select";
import "vue-select/dist/vue-select.css";

// vue-sweetalert2
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

//Vue3ProgressPlugin
import { Vue3ProgressPlugin } from '@marcoschulte/vue3-progress';
import '@marcoschulte/vue3-progress/dist/index.css';

import VueWriter from "vue-writer";

import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.component('VueDatePicker', VueDatePicker);
app.component('vSelect', vSelect);
app.component('EasyDataTable', Vue3EasyDataTable);



app.use(createPinia())
app.use(VueApexCharts);
app.use(VueSweetalert2);
app.use(Vue3ProgressPlugin);
app.use(VueWriter);
app.use(router)

app.mount('#app')

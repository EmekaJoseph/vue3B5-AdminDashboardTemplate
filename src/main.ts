// @ts-nocheck

// https://getbootstrap.com/
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'

// https://icons.getbootstrap.com/
import 'bootstrap-icons/font/bootstrap-icons.css'

// https://animate.style/
import 'animate.css';

// https://www.npmjs.com/package/vue3-apexcharts
import VueApexCharts from "vue3-apexcharts";

// https://hc200ok.github.io/vue3-easy-data-table-doc/getting-started.html
import Vue3EasyDataTable from 'vue3-easy-data-table';
import 'vue3-easy-data-table/dist/style.css';

// https://vue3datepicker.com/
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'

// https://vue-select.org/
//vue-select@beta
import vSelect from "vue-select";
import "vue-select/dist/vue-select.css";

// https://www.npmjs.com/package/vue-sweetalert2
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

// https://github.com/marcoschulte/vue3-progress
import { Vue3ProgressPlugin } from '@marcoschulte/vue3-progress';
import '@marcoschulte/vue3-progress/dist/index.css';

// https://www.npmjs.com/package/vue-writer
import VueWriter from "vue-writer";

// https://www.npmjs.com/package/vue3-otp-input
import VOtpInput from "vue3-otp-input";

// https://vueup.github.io/vue-quill/
import { QuillEditor } from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css';

// https://www.npmjs.com/package/vue-tel-input
import VueTelInput from 'vue-tel-input';
import 'vue-tel-input/vue-tel-input.css';

//https://michalsnik.github.io/aos/
import "aos/dist/aos.css";

// https://www.npmjs.com/package/@fortawesome/fontawesome-free
// import '@fortawesome/fontawesome-free/css/all.min.css';

import './assets/styles/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.component('VueDatePicker', VueDatePicker);
app.component('vSelect', vSelect);
app.component('EasyDataTable', Vue3EasyDataTable);
app.component('v-otp-input', VOtpInput)
app.component('QuillEditor', QuillEditor)

app.use(createPinia())
app.use(VueApexCharts);
app.use(VueSweetalert2);
app.use(Vue3ProgressPlugin);
app.use(VueWriter);
app.use(VueTelInput);
app.use(router)

app.mount('#app')

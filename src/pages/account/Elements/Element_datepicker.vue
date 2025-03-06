<template>
    <div class="card h-100 border-0 shadow-sm">
        <div class="card-header border-0 fw-bold bg-transparent">
            Date Picker
        </div>
        <div class="card-body">
            <VueDatePicker class=".dp__theme_dark" :flow="flow" :format="format" :teleport="true" v-model="date"
                hide-input-icon :clearable="false" :enable-time-picker="false" auto-apply />
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useDateFormat } from '@vueuse/core';


const date = ref(new Date())
const flow = ref(['year', 'month', 'calendar']);

const format = (date: Date) => {
    const dd = useDateFormat(date, 'MMM D, YYYY')
    return dd.value
}


</script>

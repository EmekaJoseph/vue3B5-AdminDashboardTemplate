<template>
    <div class="card h-100 border-0 shadow-sm">
        <div class="card-header border-0 fw-bold bg-transparent">
            Date Picker (Range)

        </div>
        <div class="card-body">
            <CustomDateRangePicker v-model="dateRange" />
        </div>
    </div>
</template>

<script setup lang="ts">
import CustomDateRangePicker from '@/components/customDateRangePicker.vue';
import { ref } from 'vue';


const dateRange = ref()


</script>

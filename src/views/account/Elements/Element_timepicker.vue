<template>
    <div class="card h-100 border-0 shadow-sm">
        <div class="card-header border-0 fw-bold bg-transparent">
            Time Picker
        </div>
        <div class="card-body">
            <VueDatePicker :teleport="true" v-model="time" hide-input-icon :clearable="false" time-picker
                :format="'hh:mm a'" :is24="false">
            </VueDatePicker>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const time = ref('12:00')

</script>

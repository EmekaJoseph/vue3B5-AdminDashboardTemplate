<template>
    <div class="card h-100 border-0 shadow-sm">
        <div class="card-header border-0 fw-bold bg-transparent">
            Select
        </div>
        <div class="card-body">
            <v-select placeholder="select an item" :clearable="true" append-to-body
                :calculate-position="useFunctions.vueSelectPositionCalc" :options label="name"></v-select>
        </div>
    </div>
</template>

<script setup lang="ts">
import useFunctions from '@/stores/useFunctions';
import { ref } from 'vue';


const options = ref([
    { name: 'Male', value: 1 },
    { name: 'Female', value: 2 }
])


</script>

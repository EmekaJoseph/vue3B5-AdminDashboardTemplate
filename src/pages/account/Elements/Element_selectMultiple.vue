<template>
    <div class="card h-100 border-0 shadow-sm">
        <div class="card-header border-0 fw-bold bg-transparent">
            Select (Multiple)
        </div>
        <div class="card-body">
            <v-select placeholder="select multiple" multiple append-to-body
                :calculate-position="useFunctions.vueSelectPositionCalc" :options label="name"></v-select>
        </div>
    </div>
</template>

<script setup lang="ts">
import useFunctions from '@/stores/useFunctions';
import { ref } from 'vue';


const options = ref([
    { name: 'One', value: 1 },
    { name: 'Two', value: 2 },
    { name: 'Three', value: 3 },
    { name: 'Four', value: 4 },
    { name: 'Five', value: 5 },
    { name: 'Six', value: 6 },
])


</script>

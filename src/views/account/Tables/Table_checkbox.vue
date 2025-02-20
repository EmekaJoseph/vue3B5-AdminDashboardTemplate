<template>
    <div class="card h-100 border-0 shadow-sm">
        <div class="card-header border-0 fw-bold bg-transparent">
            with Checkbox
            <span class="small float-end">
                items: {{ items.length }}, selected: {{ seletedItems.length }}
            </span>
        </div>
        <div class="card-body">
            <EasyDataTable show-index :loading="loading" alternating :headers="headers" :items="items"
                v-model:items-selected="seletedItems" buttons-pagination>
                <template #header="header">
                    <span>{{ header.text == '#' ? 'S/N' : header.text }}</span>
                </template>

            </EasyDataTable>
        </div>
    </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import type { Header, Item } from 'vue3-easy-data-table';


const headers = ref<Header[]>([
    { text: 'Name', value: 'name' },
    { text: 'Age', value: 'age' },
])

const loading = ref<boolean>(false)
const items = ref<Item[]>([
    { name: 'Chigozie', age: '50' },
    { name: 'Emeka', age: '45' },
    { name: 'Kunle', age: '32' },
])

const seletedItems = ref<Item[]>([])

</script>

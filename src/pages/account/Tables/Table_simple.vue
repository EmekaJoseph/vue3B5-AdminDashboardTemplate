<template>

    <div class="card h-100 border-0 shadow-sm">
        <div class="card-header border-0 fw-bold bg-transparent">
            Simple Table
            <span class="small float-end">
                items: {{ items.length }}
            </span>
        </div>
        <div class="card-body">
            <EasyDataTable show-index :loading="loading" alternating :headers="headers" :items="items"
                buttons-pagination>
                <template #header="header">
                    <span>{{ header.text == '#' ? 'S/N' : header.text }}</span>
                </template>

                <template #item-action="item">
                    <button class="btn-sm border-0 bg-transparent text-info-emphasis hover-tiltY">
                        <i class="bi bi-pencil-fill"></i>
                    </button>
                    <button class="btn-sm border-0 bg-transparent text-danger-emphasis hover-tiltY">
                        <i class="bi bi-trash3"></i>
                    </button>

                </template>
            </EasyDataTable>
        </div>
    </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import type { Header, Item } from 'vue3-easy-data-table';


const headers = ref<Header[]>([
    { text: 'Name', value: 'name', sortable: true },
    { text: 'Age', value: 'age', sortable: true },
    { text: 'Action', value: 'action' },
])

const loading = ref<boolean>(false)
const items = ref<Item[]>([
    { name: 'Chigozie', age: '50' },
    { name: 'Emeka', age: '45' },
    { name: 'Kunle', age: '32' },
])

</script>

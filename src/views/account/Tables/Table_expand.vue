<template>

    <div class="card h-100 border-0 shadow-sm">
        <div class="card-header border-0 fw-bold bg-transparent">
            Expandable Items
            <span class="small float-end">
                items: {{ items.length }}
            </span>
        </div>
        <div class="card-body">
            <EasyDataTable :loading="loading" alternating :headers="headers" :items="items" @expand-row="loadExpansion"
                buttons-pagination>
                <template #expand="item">
                    {{ item.desc }}
                </template>
            </EasyDataTable>
        </div>
    </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import type { Header, Item } from 'vue3-easy-data-table';


const headers = ref<Header[]>([
    { text: 'Group', value: 'group' },
    { text: 'people', value: 'age' },
])

const loading = ref<boolean>(false)
const items = ref<Item[]>([
    { group: 'Group 1', age: '50' },
    { group: 'Group 2', age: '45' },
])


const loadExpansion = async (index: any) => {
    const expandedItem = items.value[index];
    expandedItem.desc = ''
    expandedItem.expandLoading = true;
    setTimeout(() => {
        expandedItem.expandLoading = false;
        expandedItem.desc = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem unde nam dolore facilis eum minus
                    neque maxime dolor praesentium, eveniet omnis. Voluptatem, ut. Consequuntur, rerum veritatis
                    praesentium magnam nam dolore.`
    }, 1000);
};
</script>

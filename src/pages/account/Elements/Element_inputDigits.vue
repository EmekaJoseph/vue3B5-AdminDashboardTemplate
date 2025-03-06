<template>
    <div class="card h-100 border-0 shadow-sm">
        <div class="card-header border-0 fw-bold bg-transparent">
            Input digits (Maska)
        </div>
        <div class="card-body">
            <input placeholder="0.00" type="text" v-model="money" class="form-control " v-maska data-maska="9,99#.##"
                data-maska-tokens="9:[0-9]:repeated" data-maska-reversed />
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { vMaska } from "maska/vue"

const money = ref<string>('')


</script>

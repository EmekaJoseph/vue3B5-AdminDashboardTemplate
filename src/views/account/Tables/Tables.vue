<template>
    <div class="row g-3">
        <div class="col-lg-6 animate__animated animate__fadeIn">
            <Table_simple />
        </div>
        <div class="col-lg-6 animate__animated animate__slideInRight">
            <Table_checkbox />
        </div>
        <div class="col-lg-6 animate__animated animate__slideInUp">
            <Table_expand />
        </div>

    </div>
</template>
<script setup lang="ts">
import Table_checkbox from './Table_checkbox.vue';
import Table_expand from './Table_expand.vue';
import Table_simple from './Table_simple.vue';



</script>

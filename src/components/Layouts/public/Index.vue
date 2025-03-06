<template>
    <div>
        <Layout_header />

        <div class="min-vh-100 bg-white" style="padding-bottom: 130px;">
            <RouterView />
        </div>

        <Layout_Footer />
    </div>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router';
import Layout_Footer from './Footer.vue';
import Layout_header from './Header.vue';
import { onMounted } from 'vue';



onMounted(() => {
    // public routes will only use light-theme
    document.documentElement.setAttribute('data-bs-theme', 'light')
})
</script>

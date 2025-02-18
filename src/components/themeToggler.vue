<template>
    <span @click="template.toggleTheme" class="cursor-pointer">
        <i v-if="template.appTheme == 'dark'" class="bi bi-sun"></i>
        <i v-else class="bi bi-moon"></i>
    </span>

</template>
<script setup lang="ts">
import { useTemplateStore } from '@/stores/template';
import { watchEffect } from 'vue';
const template = useTemplateStore()

watchEffect(() => {
    document.documentElement.setAttribute('data-bs-theme', template.appTheme)
})
</script>
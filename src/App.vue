<template>
  <RouterView />
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router';
import { useTemplateStore } from './stores/template';

const templateStore = useTemplateStore()
</script>

<style>
.btn-custom {
  background-color: v-bind('templateStore.appBtn.bg');
  color: #fff !important;
}

.btn-custom:hover {
  background-color: v-bind('templateStore.appBtn.hover');
}

body,
.offcanvas {
  background-color: var(--bs-component-bg) !important;
}

[data-bs-theme="dark"] {
  --bs-component-bg: #1f2948;
}


[data-bs-theme="light"] {
  --bs-component-bg: #fff;
}
</style>
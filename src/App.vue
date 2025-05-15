<template>
  <RouterView />
</template>

<script setup lang="ts">
import { RouterView, useRoute } from 'vue-router';
import { watch, nextTick } from 'vue'

// @ts-ignore
import * as bootstrap from 'bootstrap'

const route = useRoute()

// import { useIdleLogout } from '@/stores/inactivityWatcher';
// useIdleLogout()


watch(() => [route.fullPath, /*templateStore.activateToolTip*/], async () => {
  await nextTick();
  document.querySelectorAll('[data-bs-toggle="tooltip"]').forEach(el => {
    const instance = bootstrap.Tooltip.getInstance(el);
    if (instance) instance.dispose();
    bootstrap.Tooltip.getOrCreateInstance(el);
  });
});


</script>
<template>
  <RouterView />
</template>

<script setup lang="ts">
import { RouterView, useRoute } from 'vue-router';
import { watch } from 'vue'

// @ts-ignore
import * as bootstrap from 'bootstrap'

const route = useRoute()

// import { useIdleLogout } from '@/stores/inactivityWatcher';
// useIdleLogout()


watch(() => [route.fullPath, /*templateStore.activateToolTip*/], () => {
  setTimeout(() => {
    // Destroy existing tooltips first
    const existingTooltips = document.querySelectorAll('[data-bs-toggle="tooltip"]')
    existingTooltips.forEach(el => {
      const tooltip = bootstrap.Tooltip.getInstance(el)
      if (tooltip) tooltip.dispose()
    })

    // Re-initialize tooltips
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
    tooltipTriggerList.forEach(el => {
      new bootstrap.Tooltip(el)
    })
  }, 0)
})


</script>
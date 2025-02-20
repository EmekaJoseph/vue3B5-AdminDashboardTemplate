<template>
  <div class="sidebar ">
    <Layout_menu />
  </div>
</template>

<script setup lang="ts">
import Layout_menu from './Layout_menu.vue';



</script>

<style scoped>
.sidebar {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  width: 250px !important;
  border-right: 1px solid var(--bs-border-color);
  background-color: var(--sidebar-bg);
  overflow-y: auto;
  padding-top: 100px;
  overflow-x: hidden;
}

[data-bs-theme="light"] {
  .sidebar {
    border: none !important;
  }
}


@media (max-width: 767px) {
  .sidebar {
    display: none;
  }
}
</style>
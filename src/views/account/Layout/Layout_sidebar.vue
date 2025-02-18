<template>
  <div class="sidebar ">

  </div>
</template>

<script setup lang="ts">


</script>

<style scoped>
.sidebar {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  width: 250px !important;
  border-right: 1px solid #cccccc44;
  background-color: var(--sidebar-bg);
  overflow-y: auto;
}


@media (max-width: 767px) {
  .sidebar {
    display: none;
  }
}
</style>
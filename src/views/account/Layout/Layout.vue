<template>

  <Layout_navbar />
  <Layout_sidebar />

  <div class="router-page">
    <div class="container py-4">
      <RouterView />
    </div>
  </div>

</template>

<script setup lang="ts">
import Layout_sidebar from './Layout_sidebar.vue';
import Layout_navbar from './Layout_navbar.vue';

</script>

<style scoped>
.router-page {
  margin-left: 250px;
}


@media (max-width: 767px) {
  .router-page {
    margin-left: 0px;
  }

}
</style>
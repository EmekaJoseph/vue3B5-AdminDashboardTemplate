<template>
  <nav class="navbar navbar-expand-lg shadow-sm">
    <div class="container">
      <span class="navbar-brand">

        <a class="btn border-0 btn-lg p-2 d-md-none" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button"
          aria-controls="offcanvasExample">
          <i class="bi bi-text-left"></i>
        </a>
        Admin Template
      </span>
      <span>
        <ThemeToggler />
      </span>
    </div>
  </nav>




  <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
    <div class="offcanvas-header">
      <h5 class="offcanvas-title" id="offcanvasExampleLabel">Menu</h5>
      <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div class="offcanvas-body">
      ...
    </div>
  </div>




</template>

<script setup lang="ts">
import ThemeToggler from '@/components/themeToggler.vue';

</script>

<style scoped>
.navbar {
  margin-left: 250px;
}

.offcanvas {
  width: 250px;
}


@media (max-width: 767px) {
  .navbar {
    margin-left: 0px;
  }

}
</style>
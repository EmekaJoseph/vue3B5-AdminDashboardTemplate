<template>
  <nav class="navbar navbar-expand-lg shadow-sm">
    <div class="container-fluid px-lg-3">
      <span class="navbar-brand">

        <a class="btn border-0 btn-lg p-2 d-md-none" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button"
          aria-controls="offcanvasExample">
          <i class="bi bi-text-left"></i>
        </a>
        Admin Template
      </span>
      <div class="d-flex">
        <span class="mx-4 d-none d-md-inline">
          <ThemeToggler />
        </span>

        <span class="account-icon dropdown-toggl cursor-pointer me-lg-5" id="triggerId" data-bs-toggle="dropdown"
          aria-haspopup="true" aria-expanded="false"></span>

        <div class="dropdown-menu dropdown-menu-end" aria-labelledby="triggerId">
          <router-link to="/" class="dropdown-item bg-transparent">
            <i class="bi bi-power"></i> Logout
          </router-link>
        </div>
      </div>
    </div>
  </nav>



  <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
    <div class="offcanvas-header">
      <h5 class="offcanvas-title" id="offcanvasExampleLabel">Menu</h5>
      <button ref="offcanvasCloser" type="button" class="btn-close" data-bs-dismiss="offcanvas"
        aria-label="Close"></button>
    </div>
    <div class="offcanvas-body">
      <Layout_menu />
    </div>
  </div>




</template>

<script setup lang="ts">
import ThemeToggler from '@/components/themeToggler.vue';
import Layout_menu from './Layout_menu.vue';
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';


const route = useRoute()
const offcanvasCloser = ref<any>(null)

watch(() => route.path, () => {
  offcanvasCloser.value?.click()
})

</script>

<style scoped>
.navbar {
  /* margin-left: 250px; */
  z-index: 1000;
  background-color: var(--navbar-bg) !important;
}

.offcanvas {
  width: 250px;
}


@media (max-width: 767px) {
  .navbar {
    margin-left: 0px;
  }

}


.navbar .account-icon {
  height: 26px !important;
  width: 26px !important;
  border-radius: 50% !important;
  background: url('/images/account.png');
  /* background-color: red; */
  border: 1px solid #e8e5e5;
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  /* override navbar properties */
  /* display: block !important; */
}
</style>
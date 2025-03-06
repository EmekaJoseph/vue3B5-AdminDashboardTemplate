<template>
  <section class="min-vh-100">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-6 ">

          <div class="row min-vh-100 justify-content-center align-items-center">
            <div class="col-md-8">

              <div class="card border-0 bg-transparent">
                <div class="card-header bg-transparent border-0 pb-4">
                  <router-link to="/">
                    <img src="/images/logo.png" width="150" alt="">
                  </router-link>
                </div>
                <div class="card-body">

                  <h4 class=" fw-bold fw-700">Sign-In</h4>
                  <p class="text-muted mb-4">Access Oysterchecks using your email and password.</p>

                  <form class="row g-3 animate__animated animate__fadeIn">

                    <div class="col-12">
                      <div class="form-floating">
                        <input type="text" class="form-control" id="email_input" placeholder="" />
                        <label for="email_input">Email Address</label>
                      </div>
                    </div>

                    <div class="col-12">
                      <CustomPasswordField />
                      <router-link to="#" class="mt-1 float-end small text-decoration-none">
                        Forgot password?
                      </router-link>
                    </div>

                    <div class="col-12 mt-4">
                      <router-link class="btn btn-theme btn-lg w-100 shadow" to="/account/dashboard">
                        SIGN-IN
                      </router-link>
                    </div>




                    <div class="mt-4 text-center">
                      Dont have an account yet?
                      <router-link to="/register" class="text-decoration-none">Sign up</router-link>
                    </div>

                    <div class="mt-5 text-muted">
                      <i class="bi bi-c-circle"></i>
                      Oysterchecks {{ new Date().getFullYear() }}.
                      All Rights Reserved
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>

        <AuthSideSlider />

      </div>
    </div>
  </section>


</template>

<script setup lang="ts">
import CustomPasswordField from '@/components/customPasswordField.vue';
import AuthSideSlider from './authSideSlider.vue';
</script>
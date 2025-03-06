<template>
  <section class="min-vh-100">
    <div class="container-fluid">
      <div class="row">

        <AuthSideSlider />

        <div class="col-md-6 ">
          <div class="row min-vh-100 justify-content-center align-items-center">
            <div class="col-md-9">
              <div class="card border-0 bg-transparent">
                <div class="card-header bg-transparent border-0 pb-4">
                  <router-link to="/">
                    <img src="/images/logo.png" width="150" alt="">
                  </router-link>
                </div>

                <div class="card-body">

                  <h4 class=" fw-bold fw-700">Sign Up</h4>
                  <p class="text-muted mb-4">Hassle-free sign up proces. Start verifying individuals and businesses
                    within 5 minutes.</p>

                  <form class="row g-3 animate__animated animate__fadeIn">
                    <div class="col-lg-6">
                      <div class="form-floating">
                        <input type="text" class="form-control" id="firstanme_input" placeholder="" />
                        <label for="firstanme_input">First Name *</label>
                      </div>
                    </div>

                    <div class="col-lg-6">
                      <div class="form-floating">
                        <input type="text" class="form-control" id="lastname_input" placeholder="" />
                        <label for="lastname_input">Last Name *</label>
                      </div>
                    </div>


                    <div class="col-12">
                      <div class="form-floating">
                        <input type="email" class="form-control" id="work_email_input" placeholder="" />
                        <label for="work_email_input">Work Email *</label>
                      </div>
                    </div>

                    <div class="col-12">
                      <CustomNumberField :is-form-floating="true" placeholder="Enter Phone" :is-money-format="false" />
                    </div>

                    <div class="col-12">
                      <div class="form-floating">
                        <input type="email" class="form-control" id="companyname_input" placeholder="" />
                        <label for="companyname_input">CompanyName *</label>
                      </div>
                    </div>

                    <div class="col-12">
                      <div class="form-check form-check-inline">
                        <input class="form-check-input" type="checkbox" id="agree" value="option1" />
                        <label class="form-check-label" for="agree">
                          I agree to Oystercheck's
                          <router-link to="#">Privacy Policy</router-link>
                          & <router-link to="#">Terms of Service</router-link>
                        </label>
                      </div>


                    </div>



                    <!-- <div class="col-12">
                      <CustomPasswordField id="password1" />
                    </div>

                    <div class="col-12">
                      <CustomPasswordField id="password2" />
                    </div> -->

                    <div class="col-12 mt-4">
                      <router-link class="btn btn-theme btn-lg w-100 shadow" to="/account/dashboard">
                        SIGN UP
                      </router-link>
                    </div>


                    <div class="mt-4 text-cente">
                      Already have an account?
                      <router-link to="/login">Login</router-link>
                    </div>
                  </form>


                  <div class="mt-5 text-muted">
                    <i class="bi bi-c-circle"></i>
                    Oysterchecks {{ new Date().getFullYear() }}.
                    All Rights Reserved
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import CustomNumberField from '@/components/customNumberField.vue';
import CustomPasswordField from '@/components/customPasswordField.vue';
import AuthSideSlider from './authSideSlider.vue';

</script>

<style></style>

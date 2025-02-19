<template>
  <section class="min-vh-100">
    <div class="container-fluid">
      <div class="row">
        <div class=" auth-image col-md-6 bg-secondary-subtle min-vh-100 d-none d-sm-block ">
        </div>
        <div class="col-md-6 ">
          <div class="row min-vh-100 justify-content-center align-items-center">
            <div class="col-md-8">
              <div class="card border-0">
                <div class="card-body">

                  <form class="row g-3 animate__animated animate__fadeIn">

                    <h3 class="text-center fw-bold">Register</h3>

                    <div class="col-12">
                      <div class="form-floating">
                        <input type="text" class="form-control" id="email_input" placeholder="" />
                        <label for="email_input">Email Address</label>
                      </div>
                    </div>

                    <div class="col-12">
                      <div class="form-floating">
                        <input type="password" class="form-control" id="passw_input" placeholder="" />
                        <label for="passw_input">Password</label>
                      </div>
                    </div>

                    <div class="col-12">
                      <div class="form-floating">
                        <input type="password" class="form-control" id="passw_input2" placeholder="" />
                        <label for="passw_input2">Repeat Password</label>
                      </div>
                    </div>

                    <div class="col-12 mt-4">
                      <router-link class="btn btn-custom btn-lg w-100 shadow" to="/account/dashboard">
                        CREATE ACCOUNT
                      </router-link>
                    </div>


                    <div class="mt-4 text-center">
                      Already have an account?
                      <router-link to="/">Login</router-link>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>


</template>

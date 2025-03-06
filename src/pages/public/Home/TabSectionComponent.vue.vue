<template>
    <section class="container mt-5 py-5" data-aos="fade-up">
        <ul class="nav nav-tabs justify-content-center border-0" id="myTab" role="tablist">
            <li class="nav-item" role="presentation">
                <button class="nav-link active" id="tabOne-tab" data-bs-toggle="tab" data-bs-target="#tabOne"
                    type="button" role="tab" aria-controls="tabOne" aria-selected="true">
                    BPSS Screening
                </button>
            </li>
            <li class="nav-item" role="presentation">
                <button class="nav-link" id="tabTwo-tab" data-bs-toggle="tab" data-bs-target="#tabTwo" type="button"
                    role="tab" aria-controls="tabTwo" aria-selected="false">
                    BS7858 Vetting
                </button>
            </li>
            <li class="nav-item" role="presentation">
                <button class="nav-link" id="tabThree-tab" data-bs-toggle="tab" data-bs-target="#tabThree" type="button"
                    role="tab" aria-controls="tabThree" aria-selected="false">
                    Employment Screening
                </button>
            </li>
        </ul>

        <!-- Tab panes -->
        <div class="tab-content p-3 py-5 bg-light min-vh-50">
            <div class="tab-pane active" id="tabOne" role="tabpanel" aria-labelledby="tabOne-tab">
                <div class="row g-3">
                    <div class="col-lg-6">
                        BS7858 VETTING
                        <h3 class="text-black mt-2" style="font-weight: 500;">What is it</h3>
                        <p>
                            Anyone working in a secure environment where the security and/or safety of people, goods,
                            services,
                            data or property is an operational requirement. This could be those working in public-facing
                            roles
                            or who hold positions of authority.
                        </p>
                        <p>
                            Anyone working in a secure environment where the security and/or safety of people, goods,
                            services, data or property is an operational requirement. This could be those working in
                            public-facing roles or who hold positions of authority.
                        </p>
                        <div class="my-3">
                            <button class="btn btn-theme p-2 px-3 rounded-4 hover-tiltX">
                                Get Started Now <i class="bi bi-arrow-right"></i>
                            </button>
                        </div>
                    </div>

                    <div class="col-lg-6">
                        <img src="/images/landing/laptop.png" style="width: 100%;" alt="">
                    </div>
                </div>
            </div>
            <div class="tab-pane" id="tabTwo" role="tabpanel" aria-labelledby="tabTwo-tab">
                <div class="row g-3">
                    <div class="col-lg-6">
                        <img src="/images/landing/laptop.png" style="width: 100%;" alt="">
                    </div>
                    <div class="col-lg-6">
                        BS7858 VETTING
                        <h3 class="text-black mt-2" style="font-weight: 500;">What is it</h3>
                        <p>
                            Anyone working in a secure environment where the security and/or safety of people, goods,
                            services,
                            data or property is an operational requirement. This could be those working in public-facing
                            roles
                            or who hold positions of authority.
                        </p>
                        <p>
                            Anyone working in a secure environment where the security and/or safety of people, goods,
                            services, data or property is an operational requirement. This could be those working in
                            public-facing roles or who hold positions of authority.
                        </p>
                        <div class="my-3">
                            <button class="btn btn-theme p-2 px-3 rounded-4 hover-tiltX">
                                Get Started Now <i class="bi bi-arrow-right"></i>
                            </button>
                        </div>
                    </div>


                </div>
            </div>
            <div class="tab-pane" id="tabThree" role="tabpanel" aria-labelledby="tabThree-tab">
                <div class="row g-3">
                    <div class="col-lg-6">
                        BS7858 VETTING
                        <h3 class="text-black mt-2" style="font-weight: 500;">What is it</h3>
                        <p>
                            Anyone working in a secure environment where the security and/or safety of people, goods,
                            services,
                            data or property is an operational requirement. This could be those working in public-facing
                            roles
                            or who hold positions of authority.
                        </p>
                        <p>
                            Anyone working in a secure environment where the security and/or safety of people, goods,
                            services, data or property is an operational requirement. This could be those working in
                            public-facing roles or who hold positions of authority.
                        </p>
                        <div class="my-3">
                            <button class="btn btn-theme p-2 px-3 rounded-4 hover-tiltX">
                                Get Started Now <i class="bi bi-arrow-right"></i>
                            </button>
                        </div>
                    </div>

                    <div class="col-lg-6">
                        <img src="/images/landing/laptop.png" style="width: 100%;" alt="">
                    </div>
                </div>
            </div>
        </div>

    </section>



</template>

<script setup lang="ts">

// @ts-ignore
import AOS from "aos";
import { onMounted } from 'vue';

onMounted(() => {
    AOS.init();
})
</script>

<style scoped>
.nav-link {
    color: #111;
    border: none !important;
    font-weight: 500;
    padding: 15px;
}


.nav-link.active {
    background-color: var(--bs-light);
    color: var(--theme-color) !important;
    /* border-bottom: 2px solid var(--theme-color) !important; */
}
</style>
<template>
    <AboutUsTemplate>
        <template #body>
            <div class="row g-3">
                <div v-for="({ icon, title, text }, key) in cards" :key class="col-md-3">
                    <div class="card h-100 bg-white hover-tiltY shadow">
                        <div class="card-body">
                            <div class="icon fs-3 text-center">
                                <i :class="icon"></i>
                            </div>
                            <div class="text-center fw-bold fs-4">{{ title }}</div>
                            <div class="text-center text-muted">{{ text }}</div>
                        </div>
                    </div>
                </div>
                <div class="col-md-5 mt-5">
                    <div class="card bg-light h-100 border-0">

                        <div class="card-body p-md-4">
                            <h4 class="fw-bold fw-700 mb-4">Ready to get started?</h4>
                            <form @submit.prevent class="row g-3">
                                <div class="col-12">
                                    <input type="text" class="form-control form-control-lg bg-white"
                                        placeholder="Enter full name">
                                </div>
                                <div class="col-12">
                                    <input type="email" class="form-control form-control-lg bg-white"
                                        placeholder="Enter email">
                                </div>
                                <div class="col-12">
                                    <input type="text" class="form-control form-control-lg bg-white"
                                        placeholder="Enter phone number">
                                </div>
                                <div class="col-12">
                                    <input type="text" class="form-control form-control-lg bg-white"
                                        placeholder="Enter company name">
                                </div>
                                <div class="col-12">
                                    <input type="text" class="form-control form-control-lg bg-white"
                                        placeholder="Enter company address">
                                </div>
                                <div class="col-12">
                                    <button type="submit" class="float-end btn btn-theme">
                                        Send Signup Request
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div class="col-md-7">
                    <div class="card h-100 border-0">
                        <div class="card-body d-flex justify-content-center align-items-center">
                            <div>
                                <h1 class="fw-bold fw-700">
                                    Looking for Comprehensive and Exceptional background checks, KYC & AML compliance
                                    Solutions?
                                </h1>
                                <div class="text-muted mt-3">
                                    You are at the right place because Oysterchecks provides you with a wide range of
                                    KYC &
                                    AML
                                    compliance Solutions.
                                </div>
                                <hr>
                                <div class="text-muted mt-3">
                                    We will contact you once we receive your request.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </template>
    </AboutUsTemplate>


</template>


<script setup lang="ts">
import AboutUsTemplate from '@/components/Layouts/public/aboutUsTemplate.vue';

const cards: { icon: string, title: string, text: string }[] = [
    { icon: 'bi bi-phone', title: 'Call Us', text: '+23417001770' },
    { icon: 'bi bi-geo-alt', title: 'Visit Us', text: 'Adeola Adeoye Street, Off Toyin Street, Ikeja' },
    { icon: 'bi bi-envelope', title: 'Mail Us', text: 'enquiries@oysterchecks.com' },
    { icon: 'bi bi-headset', title: 'Live Chat', text: 'Chat with Us 24/7' },
]

</script>
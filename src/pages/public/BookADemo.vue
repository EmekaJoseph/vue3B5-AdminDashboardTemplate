<template>
    <div class="bg-theme min-vh-100">
        <div class="container pb-5">
            <div class="min-vh-100 row g-3 container justify-content-center align-items-center pt-3 pb-5">
                <div class="col-md-6">
                    <h1 class="text-white fw-600 ">
                        Stop Fraud, Build Trust, & Drive Growth with Mobile-First
                        <span class="text-danger fw-600">Fraud Detection</span>
                    </h1>
                    <div class="mt-5 text-white">
                        Know which devices, users, and accounts to trust with the global standard for device
                        identification.
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="card border-0 bg-white">
                        <div class="card-header fw-bold bg-transparent border-0">
                            Book a Live Demo
                            <span class="float-end small">
                                <span class="text-danger small">*</span>
                                Compulsory fields
                            </span>
                        </div>
                        <div class="card-body">
                            <form class="row g-3">
                                <div class="col-lg-6">
                                    <div class="form-floating">
                                        <input type="text" class="form-control" id="firstName" placeholder="" />
                                        <label for="firstName">First Name <span class="text-danger">*</span></label>
                                    </div>
                                </div>
                                <div class="col-lg-6">
                                    <div class="form-floating">
                                        <input type="text" class="form-control" id="lastName" placeholder="" />
                                        <label for="lastName">Last Name <span class="text-danger">*</span></label>
                                    </div>
                                </div>

                                <div class="col-12">
                                    <div class="form-floating">
                                        <input type="text" class="form-control" id="companyEmail" placeholder="" />
                                        <label for="companyEmail">Company Email <span
                                                class="text-danger">*</span></label>
                                    </div>
                                </div>

                                <div class="col-lg-6">
                                    <div class="form-floating">
                                        <input type="text" class="form-control" id="jobTtile" placeholder="" />
                                        <label for="jobTtile">Job Title <span class="text-danger">*</span></label>
                                    </div>
                                </div>
                                <div class="col-lg-6">
                                    <div class="form-floating">
                                        <input type="text" class="form-control" id="companyName" placeholder="" />
                                        <label for="companyName">Company <span class="text-danger">*</span></label>
                                    </div>
                                </div>
                                <div class="col-lg-6">
                                    <div class="form-floating">
                                        <input type="text" class="form-control" id="country" placeholder="" />
                                        <label for="country">Country <span class="text-danger">*</span></label>
                                    </div>
                                </div>
                                <div class="col-lg-6">
                                    <div class="form-floating">
                                        <input type="text" class="form-control" id="phone" placeholder="" />
                                        <label for="phone">Phone </label>
                                    </div>
                                </div>
                                <div class="col-12">
                                    <div class="fw-bold">
                                        The platform(s) that you are looking to protect:
                                    </div>
                                    <div class="row g-3">
                                        <div class="col-lg-6">
                                            <span class="cursor-pointer">
                                                <i class="bi bi-square text-theme"></i>
                                                Mobile App
                                            </span>
                                        </div>
                                        <div class="col-lg-6">
                                            <span class="cursor-pointer">
                                                <i class="bi bi-square"></i>
                                                Website
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-12">
                                    <div class="fw-bold">
                                        What are you looking to protect against:
                                    </div>
                                    <div class="row g-3 justify-content-cente">
                                        <div v-for="({ name, value }, key) in protectAgainsts" :key class="col-lg-4">
                                            <span class="cursor-pointer" @click="addRemove(value)">
                                                <i v-if="!protectAgainstsSelected.includes(value)"
                                                    class="bi bi-square text-theme"></i>
                                                <i v-else class="bi bi-check-square-fill text-theme"></i>
                                                {{ name }}
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-12">
                                    <div class="form-floating mb-3">
                                        <textarea class="form-control" id="additional" rows="3"></textarea>
                                        <label for="additional">Additional Information</label>
                                    </div>
                                </div>

                                <div class="col-12">
                                    <div class="d-md-flex align-items-md-center">
                                        <div class="col-md-3">
                                            <button class="btn btn-theme" disabled>
                                                Book A Demo
                                            </button>
                                        </div>
                                        <span>
                                            By submitting this form, you agree to our Terms of Use and Privacy Policy
                                        </span>
                                    </div>
                                </div>


                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <section class="py-5 bg-white container">
        <h3 class="text-center fw-bold mt-5">
            The Fraud Detection Solution Built for Every Industry
        </h3>
        <div class="text-muted fs-5 text-center">
            Leverage real-time fraud signals to eliminate risk blind spots, provide superior user experiences, and
            accelerate growth.
        </div>

        <div class="mt-4 row g-3">
            <div v-for="({ icon, text }, key) in imgsTexts" :key class="col text-center hover-tiltY">
                <img :src="'/images/landing/' + icon" alt="">
                <div class="small">{{ text }}</div>
            </div>
        </div>

        <div class="row g-3 mt-5">
            <div class="col-md-4" v-for="({ icon, text }, key) in cards" :key>
                <div class="card text-start h-100">
                    <img class="card-img-top" :src="'/images/landing/' + icon" alt="Title" />
                    <div class="card-body">
                        <p class="card-text">
                            {{ text }}
                        </p>
                    </div>
                </div>

            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';


const protectAgainsts: { name: string, value: string }[] = [
    { name: 'Account takeover', value: 'account_takeover' },
    { name: 'Fake accounts', value: 'fake_accounts' },
    { name: 'Referral & promo abuse', value: 'referal_promo' },
    { name: 'Payment fraud', value: 'payment_fraud' },
    { name: 'Incentive abuse', value: 'incentive_abuse' },
    { name: 'Spam & abuse', value: 'spam_abuse' },
    { name: 'Indenity Fraud', value: 'indentity_fraud' },
    { name: 'Ad fraud', value: 'ad_fraud' },
]
const protectAgainstsSelected = ref<string[]>([])

function addRemove(value: string) {
    if (protectAgainstsSelected.value.includes(value))
        protectAgainstsSelected.value = protectAgainstsSelected.value.filter((x: string) => x !== value)
    else
        protectAgainstsSelected.value.push(value)
}


const imgsTexts: { icon: string, text: string }[] = [
    { icon: 'ride_img.png', text: 'Ride-Hailing' },
    { icon: 'socialMedia_img.png', text: 'Social Media & Networking' },
    { icon: 'superapps_img.png', text: 'Superapps' },
    { icon: 'media_img.png', text: 'Media & Streaming' },
    { icon: 'online_deliveryimg.png', text: 'Online Delivery ' },
    { icon: 'e-wallet_img.png', text: 'E-wallet' },
    { icon: 'marketplace_img.png', text: 'E-commerce & Marketplace' },
    { icon: 'digital_img.png', text: 'Digital & Neobanking' },
    { icon: 'gaming_img.png', text: 'Gaming' },
    { icon: 'casinos_img.png', text: 'Online Casinos' },
]

const cards: { icon: string, text: string }[] = [
    { icon: 'shield_id.png', text: `Harness the global standard for device identification. Device IDs you can trust, no matter how device parameters change.` },
    { icon: 'risk_img.png', text: `Expose tools and techniques used for fraud on your ecosystem. Stop sophisticated attacks before they cause harm.` },
    { icon: 'device_img.png', text: `Identify if a device session can be trusted. Accurate trust signals that empower instant action.` },

]



</script>
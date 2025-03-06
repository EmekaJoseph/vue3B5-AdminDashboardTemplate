<template>
    <section class="container">
        <div class="col-lg-7">
            <h2>
                Background check screening is a way to verify a candidate’s information and background during the
                recruitment process
            </h2>
            <p>
                Are the qualifications on their CV correct? What is their employment history?
            </p>
        </div>

        <div class="mt-5">
            <div class="row g-3">
                <div v-for="({ title, info, link }, index) in screeningCards" :key="index" class="col-md-4" data-aos="zoom-out">
                    <div class="card h-100 shadow-sm" style="border-color: var(--theme-color);">
                        <div class="card-header fw-bolder bg-transparent border-0 ">
                            {{ title }}
                        </div>
                        <div class="card-body text-muted">
                            {{ info }}
                            <div v-if="link" class="mt-2">
                                <router-link class="text-decoration-none theme-color" :to="link">Read
                                    more..</router-link>
                            </div>
                        </div>

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

const screeningCards: { title: string, info: string, link?: string }[] = [
    { title: `PER Screening`, info: `Access our comprehensive data sets, which have been compiled from over 20,000 government sources, allow`, link: `/` },
    { title: `Sanction Screening`, info: `Screen against thousands of government regulatory and law enforcement watchlists, and over 100 International and National Sanctions lists that are updated daily.`, },
    { title: `Know Your Business Check`, info: `Primary source company intelligence via Know Your Business (KYB) Solution. Access primary source, company intelligence to optimize your KYC processes.`, },
    { title: `AML Consulting Service`, info: `Work with our accredited advisers to assess the money laundering and terrorism financing risk to your business.`, },
    { title: `ID Verification (IDV)`, info: `MemberCheck, a sister company of NameScan, trusted by many companies for their AML/CTF needs, proudly`, },
]
</script>



<style scoped>
section {
    padding-top: 100px;
}

section h2 {
    font-weight: 700;
    font-size: 24px;
    color: var(--theme-color);
}

section p {
    font-weight: 300;
    font-size: 24px;
    line-height: 35.5px;
    color: var(--theme-color);
}

@media (max-width: 767px) {
    section {
        padding-top: 200px;
    }

}
</style>
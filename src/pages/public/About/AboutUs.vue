<template>
    <AboutUsTemplate>
        <template #body>
            <h1 class="text-center fw-600">
                Why Choose Us
            </h1>
            <div class="text-center text-muted fs-6">
                Be as careful of the books you read, as of the company you keep; for your habits and character will be
                as much influenced by the former as the latter.
            </div>
            <div class="row g-3 mt-5">
                <div v-for="({ topic, text, icon }, key) in displayInfo" :key class="col-md-4" data-aos="fade-up">
                    <h5 class="fw-bold">
                        <img :src="icon" alt="">
                        {{ topic }}
                    </h5>
                    <p class="fs-6 mt-3">{{ text }}</p>
                </div>
            </div>
        </template>
    </AboutUsTemplate>

</template>

<script setup lang="ts">
import AboutUsTemplate from '@/components/Layouts/public/aboutUsTemplate.vue';
// @ts-ignore
import AOS from "aos";
import { onMounted } from 'vue';

onMounted(() => {
    AOS.init();
})


const displayInfo: { icon: string, topic: string, text: string }[] = [
    { icon: `/images/landing/icon_1.png`, topic: `Unbeatable IT Expertise`, text: 'Oysterchecks provides you an access to a platform built on complex data analytics technology by highly-experienced professionals to help in meeting your specific needs. We provide comprehensive automated Background Checks, KYC , Transaction Monitoring, AML screening services in a single API.' },
    { icon: `/images/landing/icon_2.png`, topic: `Creative And Innovative`, text: 'Our IT team consists of highly experienced experts who are always working on improving our platform to accommodate the rapidly evolving changes. Our cutting-edge technology ensures that our platform runs on advanced technology which provides more optimal solutions in a quicker and effective way.' },
    { icon: `/images/landing/icon_3.png`, topic: `Client Support`, text: `Our support team is always keeping touch with our clients to ensure we learn more about their changing needs and help us design new solutions to address their new requirements. Any assistance or need arising from a client is addressed within a short turnaround time of one hour.` },
    { icon: `/images/landing/icon_1.png`, topic: `Data Security`, text: `Oysterchecks provides you an access to a platform built on complex data analytics technology by highly-experienced professionals to help in meeting your specific needs. We provide comprehensive automated Background Checks, KYC , Transaction Monitoring, AML screening services in a single API.` },
    { icon: `/images/landing/icon_2.png`, topic: `Operations On Global Basis`, text: `We have collaborated with other international bodies which have provided us with global access and processing of data. This has enabled us to conduct various checks on any employee on a global basis. This should eliminate your worry of hiring employees from other countries because our services will provide global background check report.` },
    { icon: `/images/landing/icon_3.png`, topic: `Always With You Throughout Your Journey`, text: `When you become our client, we assign you a supportive team that will keep close interaction and follow up to ensure that you get the best from our services. The team is able to know about your changing needs and modify earlier solutions to suit your new requirements in a more efficient way. Working with Oysterchecks will never make you feel alone` },
    { icon: `/images/landing/icon_1.png`, topic: `Operations On Global Basis`, text: `We have collaborated with other international bodies which have provided us with global access and processing of data. This has enabled us to conduct various checks on any employee on a global basis. This should eliminate your worry of hiring employees from other countries because our services will provide global background check report.` },
    { icon: `/images/landing/icon_2.png`, topic: `Oysterchecks Team`, text: `Meet the Oyster Check team Building an exceptional background screening, KYC & AML compliance Solutions We are a team of dedicated experts who are determined in offering exceptional and quality services to our clients.` },
    { icon: `/images/landing/icon_3.png`, topic: `Automated Services`, text: `Our platform provides automated services which can be accessed easily by our clients and provide results in a faster way.` },
]

</script>

<style scoped>
img {
    vertical-align: baseline;
}
</style>
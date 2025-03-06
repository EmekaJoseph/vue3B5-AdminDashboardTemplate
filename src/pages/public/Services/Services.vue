<template>
    <AboutUsTemplate>
        <template #body>
            <div class="row g-3 ">
                <div v-for="({ title, text }, key) in services" :key class="col-md-12">

                    <h1 class="fw-600"> {{ title }} </h1>

                    <p class="fs-6 mt-3"> {{ text }} </p>

                </div>
            </div>

        </template>
    </AboutUsTemplate>
</template>

<script setup lang="ts">
import AboutUsTemplate from '@/components/Layouts/public/aboutUsTemplate.vue';


const services: { title: string, text: string }[] = [
    {
        title: `Why Employee Screening & Background Checks?`,
        text: `Employees are regarded as the real assets of any organization and they are expected to be
        professional and ethical in their career. In order to have suitable employees, companies perform
        background checks to reduce chances for negligent hiring. Having ethical and professional
        employees leads to increased productivity as well as reducing potential risks which could result
        from hiring unsuitable employees. In addition, having appropriate candidates leads to creation
        of a good working environment which leaves the supervisors and HR to concentrate on other
        activities.` },
    {
        title: ` Why Use Our Services`,
        text: `Oysterchecks is focused on simplifying your pre-employment checks by performing extensive checks
        in a smooth and a quicker way and at the same time meeting the essential regulatory and
        professional standards. If you are hiring employees from outside the country, you will be able
        to obtain global background check report by using our services. We have access to global data
        which enables us to deliver such results easily and quickly. We are able to provide support and
        assistance when integrating our platform with your onboarding application. This will enable you
        to access screening solutions more easily and rapidly..` },
]


</script>

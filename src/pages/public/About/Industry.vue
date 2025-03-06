<template>
    <AboutUsTemplate>
        <template #body>
            <div class="row g-3 ">
                <div class="col-md-12">
                    <h1 class="fw-600">
                        Industries
                    </h1>
                    <p class="fs-6 mt-3">
                        Oysterchecks takes pride in providing background screening, KYC and AML checks services to a
                        variety of clients in different industries. We have a great team of IT experts who ensure that
                        our services meet the needs of our diverse clients. Our services are fully tested and automated
                        for businesses in the following sectors:
                    </p>

                    <div class="mt-5">

                        <ul class="list-group list-group-flush">
                            <li v-for="(sector, key) in sectors" :key class="list-group-item border-0">
                                <i class="bi bi-check-square"></i> {{ sector }}
                            </li>
                        </ul>

                    </div>
                </div>
            </div>

        </template>
    </AboutUsTemplate>
</template>

<script setup lang="ts">
import AboutUsTemplate from '@/components/Layouts/public/aboutUsTemplate.vue';

const sectors: string[] = [
    'HR and Recruitment',
    'Public Sector',
    'Finance',
    'Construction',
    'Hospitality',
    'Retail',
    'Fintech',
    'Asset and wealth management.',
    'Bank'
]
</script>

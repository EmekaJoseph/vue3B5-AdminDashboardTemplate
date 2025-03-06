<template>
    <AboutUsTemplate>
        <template #body>
            <div class="row g-3 ">
                <div class="col-md-4">
                    <img src="/images/landing/core_values.png" style="width: 300px;" alt="core_values">
                </div>

                <div class="col-md-8">
                    <h1 class="fw-600">
                        Core Values
                    </h1>
                    <p class="fs-6 mt-3">
                        Oysterchecks believes in integrity and honesty principles in order to build trust. Integrity and
                        honesty are one of the fundamental values that we seek in any client before we could carry out a
                        business. We believe practicing honesty and integrity builds trust which is an essential pillar
                        in helping us deliver successful results to our clients. As a part of our business process, we
                        always require truthful information which is treated as confidential in order to deliver optimal
                        solutions.
                    </p>
                </div>
            </div>

        </template>
    </AboutUsTemplate>
</template>

<script setup lang="ts">
import AboutUsTemplate from '@/components/Layouts/public/aboutUsTemplate.vue';
</script>

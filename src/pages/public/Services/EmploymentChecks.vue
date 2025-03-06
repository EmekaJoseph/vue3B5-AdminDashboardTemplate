<template>
    <section class="bg-theme min-vh-100 d-flex justify-content-center text-white text-center py-5">
        <div class="container">
            <h1 class="fw-600">Employment Checks</h1>
            <div>Choose the perfect plan for your business needs.</div>

            <div class="row g-3 g-lg-2 mt-5">
                <div v-for="({ name, price, list }, key) in perfectPlans" :key class="col-lg-3">
                    <div class="card bg-white border-0">
                        <h5 class="card-header bg-transparent border-0 fw-bold text-theme pt-3">
                            {{ name }}
                        </h5>
                        <div class="card-body text-start">
                            <span class="fw-bold fs-2 fw-600">
                                {{ price }}
                            </span>
                            <span class="small">/month</span>

                            <hr class="faint">
                            <h6 class="fw-bold">What you get:</h6>
                            <ul class="list-group list-group-flush">
                                <li v-for="(li, key) in list" class="list-group-item border-0 py-0">
                                    <i class="bi bi-check-lg text-success me-2"></i>
                                    {{ li }}
                                </li>
                            </ul>

                            <div class="col-12 mt-4">
                                <button class="btn btn-lg btn-theme w-100">
                                    Get Started
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="container py-5">
        <div class="table-responsive mt-5">
            <table class="table">
                <thead>
                    <tr>
                        <th class="bg-secondary-subtle fw-bold py-3" colspan="5">
                            Optional extra checks
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Adverse media & undercover journalism check</td>
                        <td>100</td>
                        <td>100</td>
                        <td>100</td>
                        <td>Unlimited</td>
                    </tr>

                    <tr v-for="({ name, col1, col2, col3, col4 }, key) in otherTablechecks" :key>
                        <td>{{ name }}</td>
                        <td>
                            <span v-if="col1"> <i class="bi bi-check-circle-fill fs-4 text-success"></i> </span>
                            <span v-else> <i class="bi bi-dash-lg"></i> </span>
                        </td>
                        <td>
                            <span v-if="col2"> <i class="bi bi-check-circle-fill fs-4 text-success"></i> </span>
                            <span v-else> <i class="bi bi-dash-lg"></i> </span>
                        </td>
                        <td>
                            <span v-if="col3"> <i class="bi bi-check-circle-fill fs-4 text-success"></i> </span>
                            <span v-else> <i class="bi bi-dash-lg"></i> </span>
                        </td>
                        <td>
                            <span v-if="col4"> <i class="bi bi-check-circle-fill fs-4 text-success"></i> </span>
                            <span v-else> <i class="bi bi-dash-lg"></i> </span>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

    </section>

    <section class="container py-5">
        <div class="row g-3">
            <div v-for="({ name, price, list, color }, key) in lowerCardPlans" :key class="col-6">
                <div class="card shadow-sm h-100">
                    <div class="card-header text-center text-white py-3"
                        :class="color == 'theme' ? 'bg-theme' : 'bg-danger'">
                        {{ name }}
                    </div>
                    <div class="card-body">
                        <span class="fw-bold fs-2 fw-600">{{ price }}</span>
                        <span class="small">/month</span>



                        <div class="fw-bold mt-4">You will get:</div>

                        <ul class="list-group list-group-flush mt-3">
                            <li v-for="(li, key) in list" class="list-group-item border-0 py-0">
                                <i class="bi bi-check-lg text-success me-2"></i>
                                {{ li }}
                            </li>
                        </ul>
                    </div>
                    <div class="card-footer bg-transparent border-0">
                        <button class="btn btn-lg w-100" :class="color == 'theme' ? 'btn-theme' : 'btn-danger'">
                            Get Started</button>
                    </div>
                </div>
            </div>
        </div>

    </section>

</template>

<script setup lang="ts">



const perfectPlans: { name: string, price: string, list: string[], popular?: boolean }[] = [
    {
        name: 'GDPR screening',
        price: '100,000',
        list: [
            'DBS check',
            'Credit check (including PEP & sanctions)'
        ]
    },
    {
        name: 'Entry Screening',
        price: '150,000',
        list: [
            'DBS check',
            'Credit check (including PEP & sanctions)',
            'ID verification',
            'RTW check'
        ]
    },
    {
        name: 'Mid-tier package',
        price: '250,000',
        list: [
            'DBS check',
            'Credit check (including PEP & sanctions)',
            'ID verification',
            'RTW check',
            '3-year employment referencing (including gap analysis)',
            'Adverse media, social media & undercover journalistic checks'
        ]
    },
    {
        name: 'Director & senior management',
        price: '500,000',
        list: [
            'DBS check',
            'Credit check (including PEP & sanctions)',
            'ID verification',
            'RTW check',
            '3-year employment referencing (including gap analysis)',
            'Adverse media, social media & undercover journalistic checks',
            'Qualification verification',
            'Directorship check'
        ]
    },
]



const otherTablechecks: { name: string, col1: boolean, col2: boolean, col3: boolean, col4: boolean }[] = [
    { name: 'Character reference', col1: true, col2: false, col3: true, col4: true },
    { name: 'DBS basic ', col1: true, col2: true, col3: true, col4: true },
    { name: 'DBS enhanced', col1: false, col2: false, col3: false, col4: true },
    { name: 'DBS standard', col1: true, col2: true, col3: true, col4: true },
    { name: 'DBS volunteer', col1: false, col2: false, col3: true, col4: true },
    { name: 'UK directorship check', col1: false, col2: true, col3: true, col4: true },
    { name: 'UK driving license check', col1: false, col2: false, col3: false, col4: true },
    { name: 'Previous reference', col1: false, col2: false, col3: true, col4: true },
    { name: 'Two previous references', col1: false, col2: false, col3: true, col4: true },
    { name: 'Employment history (including gap analysis)', col1: false, col2: false, col3: true, col4: true },
    { name: 'Mobile App Integration', col1: false, col2: false, col3: true, col4: true },
]



const lowerCardPlans: { name: string, price: string, list: string[], color: 'theme' | 'red' }[] = [
    {
        name: 'BS7858 SCREENING',
        price: '150,000',
        color: 'theme',
        list: [
            'ID verification',
            'RTW check',
            '5-year employment referencing (including gap analysis)',
            'Basic DBS',
            'Credit check (including PEP and sanctions)'
        ]
    },
    {
        name: 'Director & senior management',
        price: '250,000',
        color: 'red',
        list: [
            'ID verification',
            'RTW check',
            '5-year employment referencing (including gap analysis)',
            'Basic DBS',
        ]
    },
]


</script>
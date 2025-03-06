<template>
    <div class="head-topic">
        <div class="content container">
            <h1 class="fw-700">AML solutions to mitigate financial crime risks</h1>
            <h4>Discover how our dynamic, real time data fights financial crime.</h4>
        </div>
    </div>

    <section class="container mt-5">
        <div class="row g-3">
            <div v-for="({ topic, text }, key) in firstCards" :key class="col-md-4">
                <div class="card h-100">
                    <h5 class="card-header py-3 fw-bold bg-transparent border-0">
                        {{ topic }}
                    </h5>
                    <div class="card-body text-muted">
                        {{ text }}
                    </div>
                    <div class="card-footer bg-transparent border-0 pb-3">
                        <button class="btn btn-theme-outline btn-lg">
                            Learn more <i class="bi bi-arrow-right"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="container mt-5">
        <div class="row g-3 justify-content-center align-items-center mt-5">
            <div class="col-md-6 order-2 order-md-1 fs-4">
                Oysterchecks is at the frontier of making screening processes easier Through the automation of deep KYC
                background checks on companies and people, Oysterchecks uses the best technology to do the research
                “heavy lifting” that a human would normally do. To learn more watch our explainer video.
            </div>

            <div class="col-md-6 order-1 order-md-2">
                <img src="/images/landing/laptop.png" style="width: 100%;" alt="">
            </div>


        </div>
    </section>

    <section class="container mt-5">
        <div class="row g-3 mt-5">
            <div class="col-12 fs-3">
                Financial institutions and, increasingly, corporates are overwhelmed by the scale and complexity of
                their KYC / KY3P workloads. They are trying to cope with:
            </div>

            <div class="col-md-4">
                <div class="card h-100">
                    <div class="card-body">
                        <div class="d-flex justify-content-center align-items-center">
                            <div class="col-8">
                                A myriad of sources and extensive checklists of information to gather and
                                verify</div>
                            <div class="col-4 text-center text-muted">
                                <i class="bi bi-bounding-box-circles fs-1"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="card h-100">
                    <div class="card-body">
                        <div class="d-flex justify-content-center align-items-center">
                            <div class="col-8">
                                Large, diffuse client bases, often international in character</div>
                            <div class="col-4 text-center text-muted">
                                <i class="bi bi-chat fs-1"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-md-4">
                <div class="card h-100">
                    <div class="card-body">
                        <div class="d-flex justify-content-center align-items-center">
                            <div class="col-8">
                                Ever-evolving regulatory requirements coupled with internal pressure to deliver</div>
                            <div class="col-4 text-center text-muted">
                                <i class="bi bi-card-checklist fs-1"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>

        <p class="text-muted mt-5">
            This is set against a backdrop of the systemic risk of human error along with an aspiration to go further
            and automatically run batch processes like remediation work or continuous risk monitoring programmes.
        </p>

        <p class="text-muted">
            By combining artificial intelligence, linguistic and cultural sensitivity and deep domain knowledge,
            smartKYC sets new standards for KYC quality, transforms productivity and hardwires compliance conformance.
        </p>
    </section>

    <section class="container mt-5">
        <h1 class="fw-600 fw-bold text-center pricing-large-text">
            Our Pricing
        </h1>

        <div class="mt-3">
            <div class="row g-3 g-lg-2 mt-5">
                <div v-for="({ name, price, list, buttonText, desc, per }, key) in pricings" :key class="col-md-4">
                    <div class="card bg-white h-100">
                        <h5 class="card-header bg-transparent border-0 fw-bold text-theme pt-3">
                            {{ name }}
                        </h5>
                        <div class="card-body text-start">
                            <span class="fw-bold fs-2 fw-600">
                                {{ price }}
                            </span>
                            <span class="small">
                                {{ per }}
                            </span>
                            <div class="my-3 text-muted">
                                {{ desc }}
                            </div>

                            <hr class="faint">
                            <h6 class="fw-bold">What you get:</h6>
                            <ul class="list-group list-group-flush">
                                <li v-for="(li, key) in list" class="list-group-item border-0 py-0">
                                    <i class="bi bi-check-lg text-success me-2"></i>
                                    {{ li }}
                                </li>
                            </ul>
                        </div>
                        <div class="card-footer py-3 bg-transparent border-0">
                            <button class="btn btn-lg btn-theme w-100">
                                {{ buttonText }}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

</template>


<script setup lang="ts">




const firstCards: { topic: string, text: string, hasReadMore?: boolean }[] = [
    { topic: 'PER Screening', text: 'Access our comprehensive data sets, which have been compiled from over 20,000 government sources.' },
    { topic: 'Sanction Screening', text: 'Screen against thousands of government regulatory and law enforcement watchlists, and over 100 International and National Sanctions lists that are updated daily.' },
    { topic: 'Know Your Business Check', text: 'Primary source company intelligence via Know Your Business (KYB) Solution. Access primary source, company intelligence to optimize your KYC processes.' },
    { topic: 'AML Consulting Service', text: 'Work with our accredited advisers to assess the money laundering and terrorism financing risk to your business.' },
    { topic: 'ID Verification (IDV)', text: 'MemberCheck, a sister company of NameScan, trusted by many companies for their AML/CTF needs.' },
    { topic: 'Pre Employment Checks', text: 'Ensures only people with right to work in the UK and the character work for you. We conduct series of pre-employment.' },
]



const pricings: { name: string, price: string, list: string[], per: string, desc: string, buttonText: string }[] = [
    {
        name: 'BS7858 Vetting',
        price: '150,000',
        per: '',
        desc: 'Description of the tier list will go here, copy should be concise and impactful.',
        list: [
            'Amazing feature one.',
            'Wonderful feature two',
            'Priceless feature three',
            'Splended feature four'
        ],
        buttonText: 'Try for FREE'
    },
    {
        name: 'BPSS clearance',
        price: '250,000',
        per: '/month',
        desc: 'Description of the tier list will go here, copy should be concise and impactful.',
        list: [
            'Amazing feature one.',
            'Wonderful feature two',
            'Priceless feature three',
            'Splended feature four',
            'Delightful feature five'
        ],
        buttonText: 'Subscribe Now'
    },
    {
        name: 'Employment screening',
        price: 'Custom',
        per: 'yearly billing only',
        desc: 'Description of the tier list will go here, copy should be concise and impactful.',
        list: [
            'Amazing feature one.',
            'Wonderful feature two',
            'Priceless feature three',
            'Splended feature four',
            'Delightful feature five'
        ],
        buttonText: 'Contact Sales'
    },
]


</script>


<style scoped>
.head-topic {
    position: relative;
    min-height: 65vh;
    background: url('/images/landing/amlsolutionbg-shape.png');
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;

    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    text-align: center;
}

.head-topic::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.58);
}

@media (min-width: 767px) {
    .head-topic h1 {
        font-size: 4rem;
    }

    .pricing-large-text {
        font-size: 4rem;
    }
}

.head-topic .content {
    color: #fff;
    position: relative;
}
</style>
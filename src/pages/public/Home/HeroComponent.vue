<template>
    <div class="min-vh-100 bg-theme hero">
        <Carousel v-bind="carouselConfig">
            <Slide v-for="({ upper, header, info, image }, index) in slideItems" :key="index">
                <div class="container">
                    <div class="row min-vh-100 justify-content-center align-items-center hero-slider-content">
                        <div class="col-lg-6">
                            <div class=" text-uppercase text-white">{{ upper }}</div>
                            <h1>{{ header }}</h1>
                            <div class="text-white">
                                {{ info }}
                            </div>
                            <button class="btn btn-light mt-3 rounded-4 py-2 text-theme hover-tiltX">
                                Get Started now!
                            </button>
                        </div>
                        <div class="col-lg-6">
                            <img class="side-img animate__animated animate__slideInUp" :src="image" alt="">
                        </div>
                    </div>

                </div>
            </Slide>
        </Carousel>




        <div class="floating-cards container">
            <div class="row g-3 justify-content-center">
                <div class="col-md-4">
                    <div class="card bg-white shadow cursor-pointer hover-tiltY py-3">
                        <div class="card-body d-flex justify-content-center align-items-center">
                            <span class="badge bg-primary me-2">+</span>
                            <span>BPSS Screening</span>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card bg-white shadow cursor-pointer hover-tiltY py-3">
                        <div class="card-body d-flex justify-content-center align-items-center">
                            <span class="badge bg-info me-2">+</span>
                            <span>BS7858 Vetting</span>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card bg-white shadow cursor-pointer hover-tiltY py-3">
                        <div class="card-body d-flex justify-content-center align-items-center">
                            <span class="badge bg-success me-2">+</span>
                            <span>Employment Screening</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import 'vue3-carousel/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'


const carouselConfig = {
    itemsToShow: 1,
    wrapAround: true,
    autoplay: 5000
}


const slideItems: { upper: string, header: string, info: string, image: string }[] = [
    {
        upper: `Digital Verifications`,
        header: `Background Checking Services`,
        info: `Comprehensive and Exceptional background checks, KYC & AML compliance Solutions`,
        image: `/images/landing/hero1.png`
    },

    {
        upper: `Digital Verifications`,
        header: `Background Checking Services`,
        info: `Comprehensive and Exceptional background checks, KYC & AML compliance Solutions`,
        image: `/images/landing/hero2.png`
    },

]

</script>

<style scoped>
.side-img {
    width: 100%;
}


.hero {
    /* padding-bottom: 150px; */
    position: relative;
}


.floating-cards {
    position: absolute;
    bottom: -50px;
    /* Adjust to make it float over the edge */
    left: 50%;
    transform: translateX(-50%);
    /* width: 90%; */
    z-index: 999;
}

.hero-slider-content h1 {
    font-size: 50px;
    line-height: 60px;
    font-weight: 700;
    color: #fff;
}


@media (max-width: 767px) {
    .hero-slider-content h1 {
        font-size: 2.25rem;
        line-height: 40px;
    }

    .floating-cards {
        bottom: -150px;
    }
}
</style>
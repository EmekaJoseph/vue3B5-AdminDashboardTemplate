<template>
    <div class="col-md-6 min-vh-100 d-none d-sm-block " style="background-color: #eee;">
        <Carousel v-bind="carouselConfig">
            <Slide v-for="({ header, info, image }, index) in slideItems" :key="index">
                <div class="container">
                    <div class="row min-vh-100 justify-content-center align-items-center">

                        <div class="col-md-10">
                            <span class="d-flex justify-content-center">
                                <img class="side-img " :src="image" alt="">
                            </span>

                            <h4 class="text-center mt-5 fw-700 text-muted">
                                {{ header }}
                            </h4>

                            <p class="text-center">
                                {{ info }}
                            </p>

                        </div>
                    </div>

                </div>
            </Slide>
            <template #addons>
                <CarouselPagination />
            </template>
        </Carousel>
    </div>
</template>

<script setup lang="ts">
import 'vue3-carousel/carousel.css'
import { Carousel, Slide, Pagination as CarouselPagination, Navigation } from 'vue3-carousel'


const carouselConfig = {
    itemsToShow: 1,
    wrapAround: true,
    autoplay: 5000
}


const slideItems: { header: string, info: string, image: string }[] = [
    {
        header: `Comprehensive Background Checks`,
        info: `Tired Of Poor And Shallow Background Checks? Relax and get to enjoy comprehensive background checks from us. Oysterchecks is dedicated in
                conducting extensive background checks which are essential in the recruitment process.`,
        image: `/images/landing/hero1.png`
    },

    {
        header: `Had Enough Of Inconsistent KYC Check Results`,
        info: `Oysterchecks addresses these shortcomings by performing KYC checks on people, ID documents and companies in a more effective way.`,
        image: `/images/landing/frontpage2.png`
    },

]

</script>

<style scoped>
.side-img {
    width: 70%;
}
</style>
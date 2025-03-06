<template>
    <nav class="navbar navbar-expand-lg sticky-top" :class="customClass">
        <div class="container">
            <router-link class="navbar-brand" to="/">
                <img src="/images/logo-white.png" alt="">
            </router-link>

            <button ref="mobileToggler" class="navbar-toggler d-lg-none text-white border-0" type="button"
                data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                aria-expanded="false" aria-label="Toggle navigation">
                <i class=" bi bi-list"></i>
            </button>
            <div class="collapse navbar-collapse" id="collapsibleNavId">
                <ul class="navbar-nav me-auto mt-2 mt-lg-0">
                    <li class="nav-item">
                        <router-link class="nav-link" to="/">Home</router-link>
                    </li>
                    <li class="nav-item dropdown" :class="{ 'dropdown-closed': forceCloseDropdown }">
                        <a class="nav-link dropdown-toggle" href="#" id="aboutUsId" data-bs-toggle="dropdown"
                            aria-haspopup="true" aria-expanded="false">About Us</a>
                        <div class="dropdown-menu animate__animated animate__slideInUp animate__faster"
                            aria-labelledby="aboutUsId">
                            <router-link v-for="({ name, link }, index) in aboutUsLinks" :key="index"
                                class="dropdown-item hover-tiltY" :to="link">{{ name }}</router-link>

                        </div>
                    </li>

                    <li class="nav-item dropdown" :class="{ 'dropdown-closed': forceCloseDropdown }">
                        <a class="nav-link dropdown-toggle" href="#" id="servicesId" data-bs-toggle="dropdown"
                            aria-haspopup="true" aria-expanded="false">Services</a>
                        <div class="dropdown-menu animate__animated animate__slideInUp animate__faster"
                            aria-labelledby="servicesId">
                            <router-link v-for="({ name, link }, index) in servicesLinks" :key="index"
                                class="dropdown-item hover-tiltY" :to="link">{{ name }}</router-link>

                        </div>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/technology">Technology</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/contact-us">Contact Us</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/book-a-demo">Book a Demo</router-link>
                    </li>



                </ul>
                <div class="d-flex my-2 my-lg-0 gap-3">
                    <router-link to="/register" class="btn btn-light text-theme hover-tiltX">Register</router-link>
                    <router-link to="login" class="btn btn-outline-light hover-tiltX">Login</router-link>
                    <!-- <button class="btn btn-outline-success my-2 my-sm-0" type="submit">
                        Search
                    </button> -->
                </div>
            </div>
        </div>
    </nav>


</template>

<script setup lang="ts">
import { computed, onMounted, ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import { useWindowSize } from '@vueuse/core'

const headerDropped = ref<boolean>(false)
const windowSize = useWindowSize()

const route = useRoute()
const forceCloseDropdown = ref(false);
const mobileToggler = ref<any>(null)
watch(() => route.path, () => {
    // console.log(windowSize.width.value);

    if (windowSize.width.value <= 576) mobileToggler.value?.click()


    forceCloseDropdown.value = true;
    setTimeout(() => {
        forceCloseDropdown.value = false;
    }, 300);
})

const customClass = computed(() => ({
    // 'animate__animated animate__slideInDown animate__faster': headerDropped.value,
    'shadow-sm': headerDropped.value
}))

onMounted(() => {
    window.addEventListener("scroll", function () {
        const scrollThreshold = 50;
        if (window.scrollY > scrollThreshold)
            headerDropped.value = true;
        else
            headerDropped.value = false;
    })
})



// data
const aboutUsLinks: { name: string, link: string }[] = [
    { name: 'About Us', link: '/about-us' },
    { name: 'Who We Are', link: '/who-we-are' },
    { name: 'Core Values', link: '/core-values' },
    { name: 'Mission', link: '/mission' },
    { name: 'Why Choose Us', link: '/why-choose-us' },
    { name: 'Industry', link: '/industry' },
]

const servicesLinks: { name: string, link: string }[] = [
    { name: 'Employment Checks', link: '/employment-checks' },
    { name: 'Periodic KYC   ', link: '/periodic-kyc' },
    { name: 'Transaction', link: '/transaction' },
    { name: 'AML Solution', link: '/aml-solution' },
    { name: 'BPSS Clearance', link: 'bpss-clearance' },
    { name: 'BS7858 Vetting', link: '#' },

]

</script>



<style scoped>
.navbar {
    background-color: var(--theme-color);
    color: #fff;
    padding-block: 17px;
}

.navbar-brand img {
    width: 200px
}

.nav-item {
    padding-inline: 7px;
}

.nav-item a {
    font-size: 13px;
    font-weight: 600;
    transition: all 0.3s ease-in-out 0s;
    color: #cecbcb !important;
    text-decoration: none;
    /* display: inline-block; */
    transition: all ease-in-out 0.4s;
}

.nav-item a:hover {
    color: #fff !important;
    transform: translateY(-5px) !important;
}


/* dropdown */


.dropdown-menu {
    margin-top: 0;
    width: 240px;
}



.dropdown-menu a {
    text-transform: inherit;
    font-weight: normal;
    display: block;
    color: #424141 !important;
    padding: 8px 15px;
}

.dropdown-menu a:hover {
    background-color: var(--theme-color);
    color: #fff !important;
}

/* Arrow (Quote-like element) */
.dropdown-menu::before {
    content: "";
    position: absolute;
    top: -7px;
    left: 20px;
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    border-bottom: 8px solid white;
    display: block;
}


@media (min-width: 767px) {
    .dropdown:hover .dropdown-menu {
        display: block;
    }
}


.dropdown-closed .dropdown-menu {
    display: none !important;
    /* Force hiding */
}


@media (max-width: 767px) {
    .navbar {
        background: linear-gradient(75deg, #2f3541 5%, #162e66) !important;
        padding: .45rem 1rem !important;
    }

    .navbar-brand img {
        width: 110px
    }
}
</style>
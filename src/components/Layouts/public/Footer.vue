<template>
    <footer>
        <div class="container">
            <div class="row">
                <div class="col-lg-3 col-md-6">
                    <img src="/images/logo-white.png" width="150" alt="">
                    <div class="mt-4">
                        We are an award-winning multinational company. We believe in quality and international
                        standard.
                    </div>
                </div>
                <div class="col-lg-3 col-md-6">
                    <div class="fw-bold">Pages</div>
                    <div class="mt-4">
                        <ul class="list-unstyled">
                            <li>
                                <router-link to="/terms-of-use">Privacy Policy</router-link>
                            </li>
                            <li>
                                <router-link to="/about-us">About us</router-link>
                            </li>
                            <li>
                                <router-link to="/who-we-are">FAQ</router-link>
                            </li>

                        </ul>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6">
                    <div class="fw-bold">Quick Links</div>
                    <div class="mt-4">
                        <ul class="list-unstyled">
                            <li>
                                <router-link to="/">Home</router-link>
                            </li>
                            <li>
                                <router-link to="/services">Services</router-link>
                            </li>
                            <li>
                                <router-link to="/industry">Industry</router-link>
                            </li>
                            <li>
                                <router-link to="/periodic-kyc">KYC</router-link>
                            </li>

                        </ul>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6">
                    <div class="fw-bold">GET IN TOUCH</div>
                    <div class="fw-bold">Locations:</div>
                    <div class="mt-4">
                        <ul class="list-unstyled">
                            <li>
                                <i class="bi bi-geo-alt-fill me-2"></i>
                                International House 24 Holborn Viaduct
                                London EC1A 2BN
                                United Kingdom
                                +44 74665 88324,

                            </li>
                            <li>
                                <i class="bi bi-geo-alt-fill me-2"></i>
                                Africa: Nigeria
                                2nd Floor, 1 Adeola Adeoye Street,
                                Off Toyin Street,
                                Ikeja, Lagos Nigeria
                                +234- 915-341-4314
                            </li>
                            <li>
                                <i class="bi bi-geo-alt-fill me-2"></i>
                                Europe - Ireland
                                21 Gillabbey Terrace, Gillabbey Street,
                                Cork, T12 KPN4
                                Republic of Ireland
                                +353 877123968
                            </li>

                            <li>
                                <i class="bi bi-envelope-fill me-2"></i>
                                All enquiries:
                                enquiries@oysterchecks.com
                                Technical Assistance & Support
                                support@oysterchecks.com
                            </li>


                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>

<style scoped>
footer {
    /* z-index: 99; */
    font-size: 14px;
    color: #fff;
    position: relative;
    padding-block: 40px;
    background: #0A142F;
}

footer li {
    margin-block: 10px;
}

li a {
    display: inline-block;
    transition: all ease-in-out 0.4s;
    text-decoration: none !important;
    color: #bab7b7;
}

li a:hover {
    color: #fff;
    transform: translateX(5px) !important;
}
</style>
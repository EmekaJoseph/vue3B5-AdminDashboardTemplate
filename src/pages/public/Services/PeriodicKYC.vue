<template>
    <div class="head-topic">
        <div class="content container">
            <h1 class="fw-700">Periodic KYC Refresh</h1>
            <h4>Receive alerts on material changes to client risk profiles as reported in corporate databases,
                registries, or open web media. Ensure those alerts are relevant, genuinely new information, and are
                delivered with appropriate timing.</h4>
        </div>
    </div>


    <section class="container pt-5">
        <div class="row g-3 pt-lg-5">
            <div class="col-md-6 order-2 order-md-1">
                <h1 class="text-theme fw-600">What is Periodic KYC?</h1>
                <div class="text-muted">
                    Periodic refresh or Periodic KYC is the process used to regularly review, verify and update
                    information relating to clients after they have been onboarded.
                </div>
                <div class="py-3">
                    <div class="fw-bold">
                        Often used by banks or financial institutions, periodic refresh includes activities such as:
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item py-0 border-0">
                            <i class="bi bi-circle-fill text-danger small"></i> Re-verifying customer information
                        </li>
                        <li class="list-group-item py-0 border-0">
                            <i class="bi bi-circle-fill text-danger small"></i> Reviewing and updating customer risk
                            profiles
                        </li>
                        <li class="list-group-item py-0 border-0">
                            <i class="bi bi-circle-fill text-danger small"></i> Monitoring customer transactions and
                            online presence to detect suspicious activity for financial crime such as money laundering.
                        </li>
                    </ul>

                </div>


            </div>
            <div class="col-md-6 order-1 order-md-2">
                <img src="/images/landing/kyc_img.jpg" style="width: 100%;" alt="">
            </div>
        </div>

        <div class="text-muted">
            Traditionally, KYC is conducted periodically, after a specified amount of time has elapsed.
        </div>
        <div class="text-muted">
            The frequency at which periodic refresh is performed at pre-defined frequencies can vary depending
            on the regulatory requirements of the jurisdiction, the financial risk appetite of the financial
            institution and on the risk profile of the customer.
        </div>
        <p class="text-muted">
            If the customer has a low-risk small retail profile, refresh can be done at yearly or even three
            yearly intervals. However, if the customer has a high-risk corporate profile, periodic refresh can
            be done between monthly or annual intervals.
        </p>

        <section class="my-3">
            <h1 class="fw-600">Why Periodic Refresh is Needed</h1>
            <div class="text-muted">
                Regulatory authorities require financial institutions to identify and verify their customers, as well as
                regularly monitor customer activity.
            </div>
            <p class="text-muted">
                Periodic refresh helps ensure customer information used by institutions is accurate and that systems are
                able to detect suspicious activity.
            </p>
            <p class="text-muted">
                By regularly reviewing and updating customer information financial institutions can detect any changes
                in a customer’s information or activity that may indicate financial crime and take appropriate action to
                prevent financial crimes such as money laundering and terrorist financing.
            </p>
        </section>

        <section class="my-3">
            <h1 class="fw-600">Problems with Current Solutions</h1>
            <div class="text-muted fw-bold">
                Since periodic refresh is done at pre-defined frequencies, information relating to the customer can be
                missed in between the intervals that periodic refresh is performed.
            </div>

            <ul class="list-group list-group-flush mt-3">
                <li class="list-group-item py-0 border-0">
                    <i class="bi bi-circle-fill text-danger small"></i> If information on the company is updated on a
                    corporate registry, the change won’t be detected until the next periodic refresh interval leading to
                    information associated with the customer to not be updated.
                </li>

                <li class="list-group-item py-0 border-0">
                    <i class="bi bi-circle-fill text-danger small"></i> Another example of this can be when the
                    customer has been reported to commit money laundering in the media, the periodic refresh system will
                    not be able to detect this <span class="text-danger">adverse media</span> as it happens and so the
                    risk profile of this customer will have changed without the financial institution realising.
                </li>

            </ul>
        </section>

        <section class="my-3">
            <h1 class="fw-600">Oysterchecks’s Solution</h1>
            <p class="text-muted">
                With Oysterchecks's <span class="text-warning">award-winning technology</span> , businesses can
                eliminate the need for manual methods of
                document verification and can instead use artificial intelligence identity verification solutions.
            </p>
            <p class="text-muted">
                With smartKYC, you will not just receive alerts on material changes to client risk profiles as reported
                in corporate databases, registries or open web media, but we also ensure those alerts are relevant,
                genuinely new information and are delivered with appropriate timing.
            </p>
        </section>

    </section>
</template>


<style scoped>
.head-topic {
    position: relative;
    min-height: 65vh;
    background: url('/images/landing/kyc_bg.jpg');
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
}


.head-topic .content {
    color: #fff;
    position: relative;
}
</style>
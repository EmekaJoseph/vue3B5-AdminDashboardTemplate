<template>
    <section class="img-panel">
        <h1 class="title">
            {{ route.meta.name }}
            <div class=" faint-bg">
                <span class="me-2">Home</span>
                <span v-if="route.meta?.parent" class="me-2">
                    <i class="bi bi-chevron-right"></i>
                    {{ route.meta.parent }}
                </span>
                <span class="me-2">
                    <i class="bi bi-chevron-right"></i>
                    {{ route.meta.name }}
                </span>
            </div>
        </h1>
    </section>

    <section class="container" style="padding-top: 100px;">
        <slot name="body"></slot>
    </section>

</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';

const route = useRoute()

</script>
<style scoped>
.img-panel {
    min-height: 170px;
    background: url('/images/landing/header-bg.jpg');
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;

    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    text-align: center;
}

.img-panel .title {
    color: #fff;
    font-size: 2.652em;
    font-weight: 600;
}

.faint-bg {
    background-color: #11111150;
    font-size: 12px;
    padding: 10px;
    text-align: center;
}

@media (max-width: 767px) {
    .img-panel {
        min-height: 120px;
    }

    .img-panel .title {
        font-size: 1.25rem;
    }
}
</style>
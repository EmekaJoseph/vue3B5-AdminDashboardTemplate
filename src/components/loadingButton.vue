<template>
    <button :type="type" class="btn" :class="className" :disabled="loading" :aria-busy="loading">
        <div v-if="loading" class="loader" aria-hidden="true"></div>
        <slot v-else></slot>
    </button>
</template>

<script setup lang="ts">

defineProps({
    className: { type: String, default: '' },
    loading: { type: Boolean, default: false },
    type: {
        type: String as () => 'button' | 'submit' | 'reset',
        default: 'button'
    },

})
</script>

<style scoped>
/* https://css-loaders.com/dots/ */
.loader {
    width: 2em;
    aspect-ratio: 4;
    margin: 0.5rem auto;
    --_g: no-repeat radial-gradient(circle closest-side, #ccc 90%, #0000);
    background:
        var(--_g) 0% 50%,
        var(--_g) 50% 50%,
        var(--_g) 100% 50%;
    background-size: calc(100%/3) 100%;
    animation: l7 1s infinite linear;
}

.btn-lg .loader {
    width: 3em;
}

.btn-sm .loader {
    width: 1.5em;
}

@keyframes l7 {
    33% {
        background-size: calc(100%/3) 0%, calc(100%/3) 100%, calc(100%/3) 100%
    }

    50% {
        background-size: calc(100%/3) 100%, calc(100%/3) 0%, calc(100%/3) 100%
    }

    66% {
        background-size: calc(100%/3) 100%, calc(100%/3) 100%, calc(100%/3) 0%
    }
}

.btn {
    transition: opacity 0.2s;
}

.btn:disabled {
    opacity: 0.7;
}
</style>
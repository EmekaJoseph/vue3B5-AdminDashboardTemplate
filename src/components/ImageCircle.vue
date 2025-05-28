<template>
    <div class="image-circle" :style="{ 'background-image': `url(${src})` }"></div>
</template>

<script setup lang="ts">

const props = defineProps({
    height: {
        type: String,
        default: '100px'
    },
    src: {
        type: String,
        required: true
    }
})
</script>



<style lang="css" scoped>
.image-circle {
    height: v-bind('props.height');
    width: v-bind('props.height');
    border-radius: 50%;
    background-color: #e8e5e5;
    border: 1px solid #e8e5e5;
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
}
</style>
<template>
    <div class="dropzone" v-bind="getRootProps()">
        <div class="text-center small">
            <span v-if="imgSaving" class="spinner-border spinner-border-sm" aria-hidden="true"></span>
            <div class="text-muted">{{ text }}</div>
        </div>
        <input v-bind="getInputProps()" />
    </div>
    <span v-if="img?.name">
        <i class="bi bi-check-circle-fill text-success"></i>
        {{ img?.name }}
    </span>
</template>

<script setup lang="ts">

import useFxn from '@/stores/useFunctions';
import { ref } from 'vue';
import { useDropzone } from 'vue3-dropzone';

const props = defineProps({
    formats: {
        type: Array as () => string[],
        required: true,
        default: () => ['png', 'jpg', 'jpeg', 'svg']
    },
    text: {
        type: String,
        required: false,
        default: 'Click to replace or drag and drop'
    }
})


const emit = defineEmits(['fileUploaded']);


// image
const img = ref<any>(null)
const imgSaving = ref<boolean>(false);

// file input
const { getRootProps, getInputProps } = useDropzone({
    multiple: false,
    onDrop: (acceptFiles: any[], rejectReasons: any) => {
        if (!useFxn.isExtension(acceptFiles[0].name, props.formats)) {
            useFxn.toast('Please upload valid format', 'warning');
            return;
        }
        img.value = acceptFiles[0];
        emit('fileUploaded', img.value);
        imgSaving.value = false;
    },
});



</script>

<style scoped>
.dropzone {
    width: 100%;
    height: 70px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    row-gap: 5px;
    border: 2px dashed var(--bs-secondary);
    /* background-color: var(--bs-light); */
    transition: 0.3s ease all;
    cursor: pointer;
    border-radius: 10px;
}

.dropzone:hover {
    border-color: var(--bs-primary);
    background-color: #f0f8ff;
    color: var(--bs-primary);

}
</style>
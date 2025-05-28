<template>
    <vue-tel-input :custom-validate="false" :value="modelValue" @update:modelValue="emitValue"
        :class="`${className} ${size}-field`" :dropdownOptions :inputOptions></vue-tel-input>
</template>

<script setup lang="ts">
const props = defineProps({
    modelValue: String,
    className: { type: String, default: '' },
    placeholder: { type: String, default: '' },
    size: {
        type: String,
        default: 'large',
        validator: (value: string) => ['large', 'normal'].includes(value)
    },
})

const emit = defineEmits(['update:modelValue'])

function emitValue(event: Event) {
    emit('update:modelValue', event);
}

const dropdownOptions = {
    showDialCodeInList: true,
    showDialCodeInSelection: false,
    showFlags: true,
    showSearchBox: true,
    searchBoxPlaceholder: 'Search country',
}

const inputOptions = {
    autofocus: false,
    showDialCode: true,
    placeholder: props.placeholder || 'Enter Phone Number',
    type: 'tel',
    maxlength: 15,
}
</script>

<style scoped>
.large-field {
    width: 100%;
    height: 50px;
}

.normal-field {
    width: 100%;
    height: 40px;
}
</style>

<style>
.vti__dropdown-list {
    z-index: 9999 !important;
}
</style>
<template>
    <div :class="{ 'form-floating': isFormFloating }">
        <input :id :placeholder="dynamicPlaceholder" type="text" :value="modelValue" @input="emitValue"
            class="form-control w-100" :class="className" v-maska :data-maska="isMoneyFormat ? '9,99#.##' : '9#'"
            data-maska-tokens="9:[0-9]:repeated" data-maska-reversed />
        <label v-if="isFormFloating" :for="id">{{ placeholder }}</label>
    </div>
</template>

<script setup lang="ts">
import { vMaska } from "maska/vue"
import { computed } from "vue";

const props = defineProps({
    modelValue: String,
    className: { type: String, default: '' },
    placeholder: String,
    id: { type: String, default: 'fieldId' },
    isMoneyFormat: { type: Boolean, default: true },
    isFormFloating: { type: Boolean, default: false },
});

const emit = defineEmits(['update:modelValue'])

const emitValue = (event: Event) => emit('update:modelValue', (event.target as HTMLInputElement).value);

const dynamicPlaceholder = computed(() => props.placeholder ?? (props.isMoneyFormat ? '0.00' : '0'));

</script>
<template>
    <div :class="{ 'form-floating': floatLabel }">
        <input :type class="form-control w-100" :id :class="className" :value="modelValue" @input="emitValue"
            :placeholder :aria-label="placeholder" />
        <label v-if="floatLabel" :for="id">{{ placeholder }}</label>
    </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';

const id = ref<string>('');
onMounted(() => {
    id.value = `input-${Math.random().toString(36).slice(2, 10)}`;
});

defineProps({
    modelValue: String,
    className: { type: String, default: '' },
    placeholder: { type: String, default: '' },
    floatLabel: { type: Boolean, default: true },
    type: { type: String, default: 'text' },
});

const emit = defineEmits(['update:modelValue'])

function emitValue(event: Event) {
    const target = event.target as HTMLInputElement;
    emit('update:modelValue', target.value);
}

</script>

<style scoped></style>
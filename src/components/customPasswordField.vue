<template>

    <div class="form-floating password-field ">
        <input :type="isPasswordVisible ? 'text' : 'password'" class="form-control w-100" :id="id" :class="className"
            :value="modelValue" @input="emitValue" :placeholder :aria-label="placeholder" />
        <label :for="id">{{ placeholder }}</label>

        <span @click="isPasswordVisible = !isPasswordVisible" class="icon"
            :title="isPasswordVisible ? 'Hide password' : 'Show password'">
            <i v-if="!isPasswordVisible" class="bi bi-eye-slash"></i>
            <i v-else class="bi bi-eye"></i>
        </span>
    </div>

    <!-- <span class="password-field">
        <input :type="isPasswordVisible ? 'text' : 'password'" class="form-control w-100" :class="className"
            :value="modelValue" @input="emitValue" :placeholder="placeholder" :aria-label="placeholder" />

        <span @click="isPasswordVisible = !isPasswordVisible" class="icon"
            :title="isPasswordVisible ? 'Hide password' : 'Show password'">
            <i v-if="!isPasswordVisible" class="bi bi-eye-slash"></i>
            <i v-else class="bi bi-eye"></i>
        </span>
    </span> -->
</template>

<script setup lang="ts">
import { ref } from 'vue';

defineProps({
    modelValue: String,
    className: { type: String, default: '' },
    placeholder: { type: String, default: 'Enter password' },
    id: { type: String, default: 'fieldId' },
});

const emit = defineEmits(['update:modelValue'])

function emitValue(event: Event) {
    const target = event.target as HTMLInputElement;
    emit('update:modelValue', target.value);
}

const isPasswordVisible = ref<boolean>(false)

</script>

<style scoped>
.password-field {
    position: relative;
    display: flex;
    align-items: center;
}



.icon {
    position: absolute;
    right: 1rem;
    cursor: pointer;
    color: #6c757d;
}
</style>
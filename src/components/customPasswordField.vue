<template>
    <div class="password-field " :class="{ 'form-floating': floatLabel }">
        <input :type="isPasswordVisible ? 'text' : 'password'" class="form-control w-100" :id :class="className"
            :value="modelValue" @input="emitValue" :placeholder :aria-label="placeholder" />
        <label v-if="floatLabel" :for="id">{{ placeholder }}</label>

        <span @click="isPasswordVisible = !isPasswordVisible" class="icon"
            :title="isPasswordVisible ? 'Hide password' : 'Show password'">
            <i v-if="!isPasswordVisible" class="bi bi-eye-slash"></i>
            <i v-else class="bi bi-eye"></i>
        </span>
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
    placeholder: { type: String, default: 'Enter password' },
    floatLabel: { type: Boolean, default: true },
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
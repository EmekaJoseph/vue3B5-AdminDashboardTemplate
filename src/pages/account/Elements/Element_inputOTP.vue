<template>
    <div class="card h-100 border-0 shadow-sm">
        <div class="card-header border-0 fw-bold bg-transparent">
            Input OTP (vue-otp)
            <span v-if="otpIsCompleted" class="ms-2 text-success-emphasis fw-bold">
                {{ otpInput }}!
            </span>
        </div>
        <div class="card-body">
            <v-otp-input :is-disabled="isDisabled" ref="otpInputRef" input-classes="otp-input" separator=" "
                inputType="number" inputmode="numeric" :num-inputs="6" v-model:value="otpInput"
                :should-auto-focus="true" :should-focus-order="true" @on-change="handleOnChange"
                @on-complete="handleOnComplete" />
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import type VOtpInput from "vue3-otp-input";

const otpInputRef = ref<InstanceType<typeof VOtpInput> | null>(null);
const otpInput = ref("");
const isDisabled = ref<boolean>(false);
const otpIsCompleted = ref<boolean>(false)

const handleOnComplete = async (value: string) => {
    // console.log("OTP completed: ", value);
    otpIsCompleted.value = true

};


const handleOnChange = (value: string) => {
    // console.log("OTP changed: ", value);
    otpIsCompleted.value = false
};


</script>

<style>
.otp-input {
    width: 40px;
    height: 40px;
    padding: 5px;
    margin: 0 10px;
    font-size: 14px;
    border-radius: 4px;
    border: 1px solid var(--bs-border-color);
    text-align: center;
    /* background-color: #D1E3FF; */
}


/* .otp-input.is-complete {
   
} */

.otp-input:focus {
    border-color: var(--theme-color) !important
}

.otp-input::-webkit-inner-spin-button,
.otp-input::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
}

@media(max-width: 767px) {
    .otp-input {
        width: 30px;
        height: 30px;

    }
}
</style>

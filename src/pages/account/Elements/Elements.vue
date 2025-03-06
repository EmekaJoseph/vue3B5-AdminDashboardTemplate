<template>
    <div class="row g-3">
        <div class="col-lg-4 animate__animated animate__fadeIn">
            <Element_datepicker />
        </div>
        <div class="col-lg-5 animate__animated animate__fadeIn">
            <Element_datepickerRange />
        </div>
        <div class="col-lg-3 animate__animated animate__fadeIn">
            <Element_timepicker />
        </div>
        <div class="col-lg-4 animate__animated animate__fadeIn">
            <Element_select />
        </div>
        <div class="col-lg-8 animate__animated animate__fadeIn">
            <Element_selectMultiple />
        </div>
        <div class="col-lg-4 animate__animated animate__fadeIn">
            <Element_inputDigits />
        </div>
        <div class="col-lg-8 animate__animated animate__fadeIn">
            <Element_inputOTP />
        </div>


    </div>
</template>
<script setup lang="ts">
import Element_datepicker from './Element_datepicker.vue'
import Element_datepickerRange from './Element_datepickerRange.vue';
import Element_timepicker from './Element_timepicker.vue';

import Element_select from './Element_select.vue';
import Element_selectMultiple from './Element_selectMultiple.vue';

import Element_inputDigits from './Element_inputDigits.vue';
import Element_inputOTP from './Element_inputOTP.vue';

</script>

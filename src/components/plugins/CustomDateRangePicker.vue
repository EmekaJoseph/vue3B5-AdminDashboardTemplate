<script setup lang="ts">
import { ref, toRefs, watch, onMounted } from 'vue';
import { useDateFormat } from '@vueuse/core';
import {
    endOfMonth, endOfYear, startOfMonth,
    startOfYear, subMonths, subDays
} from 'date-fns';


onMounted(() => {
    setDateRange()
})

function setDateRange() {
    const endDate = new Date();
    const startDate = new Date(new Date().setDate(endDate.getDate() - 7));
    localValue.value = [startDate, endDate];
    // localValue.value = [new Date(), new Date()];
}

const props = defineProps({
    modelValue: {
        type: Array,
        default: () => [null, null]
    },
})
const emit = defineEmits(['update:modelValue']);
const { modelValue } = toRefs(props);

const localValue = ref(props.modelValue)

const date_display = (date: Date[]) => {
    const dateMe1 = useDateFormat(date[0], 'MMM D, YYYY')
    const dateMe2 = useDateFormat(date[1], 'MMM D, YYYY')
    return `${dateMe1.value} - ${dateMe2.value}`;
}

const presetDates = ref([
    {
        label: 'Today',
        value: [new Date(), new Date()],

    },
    {
        label: 'Yesterday',
        value: [subDays(new Date(), 1), subDays(new Date(), 1)],
    },
    {
        label: 'Last week',
        value: [subDays(new Date(), 7), new Date()],

    },
    {
        label: 'Last 14 days',
        value: [subDays(new Date(), 14), new Date()],
    },
    {
        label: 'Last 30 days',
        value: [subDays(new Date(), 30), new Date()],
    },
    {
        label: 'Last month',
        value: [startOfMonth(subMonths(new Date(), 1)), endOfMonth(subMonths(new Date(), 1))],
    },
    {
        label: 'This month',
        value: [startOfMonth(new Date()), endOfMonth(new Date())],

    },
    {
        label: 'Last 6 months',
        value: [subMonths(new Date(), 6), new Date()],
    },
    {
        label: 'Last year',
        value: [startOfYear(subMonths(new Date(), 12)), endOfYear(subMonths(new Date(), 12))],
    },
]);

watch(() => localValue.value, () => {
    emit('update:modelValue', localValue.value);

})
</script>

<template>
    <VueDatePicker hide-input-icon :teleport="true" :clearable="false" :format="date_display" auto-apply
        v-model="localValue" range :preset-dates="presetDates">
        <template #preset-date-range-button="{ label, value, presetDate }">
            <span role="button" :tabindex="0" @click="presetDate(value)" @keyup.enter.prevent="presetDate(value)"
                @keyup.space.prevent="presetDate(value)">
                {{ label }}
            </span>
        </template>
    </VueDatePicker>
</template>
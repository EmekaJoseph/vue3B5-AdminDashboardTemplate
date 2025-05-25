<template>
    <div ref="tooltipParent" :class="{ 'form-floating': formFloating }" class="position-relative">
        <input :id="id" :placeholder="dynamicPlaceholder" type="text" :value="modelValue" @input="handleOnInput"
            @focus="showTooltip" @blur="hideTooltip" class="form-control w-100" :class="className" v-maska
            :data-maska="moneyFormat ? '9,99#.##' : '9#'" data-maska-tokens="9:[0-9]:repeated" data-maska-reversed />
        <label v-if="formFloating" :for="id">{{ placeholder }}</label>
        <div v-if="showTooltipFlag && numberCategory && tooltip" class="tooltip bs-tooltip-auto fade show"
            role="tooltip" :style="tooltipPosition" ref="tooltipElement">
            <div class="tooltip-arrow"></div>
            <div class="tooltip-inner">{{ numberCategory }}</div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { vMaska } from "maska/vue"
import { computed, ref, onMounted, onBeforeUnmount, nextTick } from "vue";

const props = defineProps({
    modelValue: String,
    className: { type: String, default: '' },
    placeholder: String,
    id: { type: String, default: 'fieldId' },
    moneyFormat: { type: Boolean, default: true },
    formFloating: { type: Boolean, default: false },
    tooltip: { type: Boolean, default: true },
});

const emit = defineEmits(['update:modelValue']);

const numberCategory = ref('');
const showTooltipFlag = ref(false);
const tooltipParent = ref<HTMLElement | null>(null);
const tooltipElement = ref<HTMLElement | null>(null);
const tooltipPosition = ref({ top: '0', right: '0' });
let typingTimer: ReturnType<typeof setTimeout> | null = null;
const typingDelay = 1500; // 1.5 second delay after typing stops

function handleOnInput(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    numberCategory.value = getNumberCategory(value);
    emit('update:modelValue', value);

    if (typingTimer) clearTimeout(typingTimer);

    if (numberCategory.value) {
        showTooltipFlag.value = true;
        nextTick(updateTooltipPosition);
    }

    typingTimer = setTimeout(() => {
        showTooltipFlag.value = false;
    }, typingDelay);
}

function showTooltip() {
    if (numberCategory.value) {
        showTooltipFlag.value = true;
        nextTick(updateTooltipPosition);
    }
}

function hideTooltip() {
    showTooltipFlag.value = false;
    if (typingTimer) {
        clearTimeout(typingTimer);
    }
}

function updateTooltipPosition() {
    if (tooltipParent.value && tooltipElement.value) {
        const parentRect = tooltipParent.value.getBoundingClientRect();
        const tooltipWidth = tooltipElement.value.offsetWidth;

        tooltipPosition.value = {
            top: `${parentRect.top - tooltipElement.value.offsetHeight - 5}px`,
            right: `${window.innerWidth - parentRect.right}px`
        };
    }
}

const dynamicPlaceholder = computed(() => props.placeholder ?? (props.moneyFormat ? '0.00' : '0'));

function getNumberCategory(value: any) {
    if (!value) return '';
    const numStr = value.toString().replace(/,/g, '');
    if (!numStr) return '';

    const number = parseInt(numStr, 10);
    if (isNaN(number)) return '';

    if (number >= 1_000_000_000) return 'billions';
    if (number >= 1_000_000) return 'millions';
    if (number >= 1_000) return 'thousands';
    if (number >= 100) return 'hundreds';
    return '';
}

onMounted(() => {
    window.addEventListener('resize', updateTooltipPosition);
});

onBeforeUnmount(() => {
    window.removeEventListener('resize', updateTooltipPosition);
    if (typingTimer) {
        clearTimeout(typingTimer);
    }
});
</script>

<style scoped>
.tooltip {
    position: fixed;
    z-index: 1070;
    pointer-events: none;
    opacity: 1;
    transition: opacity 0.15s;
}

.tooltip-arrow {
    position: absolute;
    top: 100%;
    left: 10px;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 5px 5px 0 5px;
    border-color: #000 transparent transparent transparent;
}

.tooltip-inner {
    max-width: 200px;
    padding: 3px 8px;
    color: #fff;
    text-align: center;
    background-color: #000;
    border-radius: 0.25rem;
}
</style>
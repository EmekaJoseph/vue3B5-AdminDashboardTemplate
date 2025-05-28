<template>
    <div class="position-relativ">
        <form @submit.prevent="" class="col-md-12 p-3 p-lg-2 px- form-container">
            <div class="row g-3">
                <div class="col-lg-10">
                    <div class="input-group position-relative searchingBar border-right-l">
                        <span class="input-group-text" id="addon-search"><i class="bi bi-search"></i> </span>
                        <button type="button" v-if="searchForm.keyword" @click="searchForm.keyword = ''"
                            class="btn btn-sm border-0">
                            <i class="bi bi-x-circle-fill"></i>
                        </button>
                        <input ref="titleField" v-model="searchForm.keyword" type="text" class="form-control"
                            :placeholder="placeholderProp" aria-describedby="addon-search">
                    </div>
                </div>

                <div class="col-lg-2">
                    <button v-if="!formIsSearching" @click="emitSearch" class="w-100 btn btn-theme" btnType="submit">
                        Search
                    </button>
                    <!-- <primaryButtonLoading v-else className="w-100" /> -->
                </div>
            </div>
        </form>

    </div>
</template>

<script lang="ts" setup>
import { ref, reactive, watch } from 'vue';

const titleField = ref<any>(null)
const formIsSearching = ref(false)

const searchForm = reactive({
    keyword: '',
    // location: ''
})

const props = defineProps({
    placeholderProp: {
        type: String,
        default: 'search keyword',
        required: false
    },
    url: {
        type: String,
        required: false
    }
})



const emits = defineEmits(['search'])

function emitSearch() {
    emits('search', searchForm.keyword)
}

watch(() => searchForm.keyword, () => {
    if (searchForm.keyword.length == 0) emits('search', null)
})


</script>


<style lang="css" scoped>
.form-container {
    border-radius: 20px;
}

.form-container {
    background-color: #fff;
    border: 1px solid var(--bs-secondary)
}

.input-group .form-control,
.input-group .input-group-text {
    background-color: #fff !important;
    outline: 0;
    border-width: 0 0 1px;
    font-size: 14px;
    border-radius: 0px;
}

@media (min-width: 994px) {

    .input-group .form-control,
    .input-group .input-group-text {
        border: none !important;
    }
}

.location-select-icon {
    position: absolute;
    left: 10px;
    top: 40%;
    margin-right: 15px;
    transform: translateY(-50%);
    cursor: pointer;
    color: #6c757d;
}
</style>

<style>
.country-chooser-jobform .vs__search::placeholder,
.country-chooser-jobform .vs__dropdown-toggle,
.country-chooser-jobform .vs__dropdown-menu {
    background-color: transparent !important;
    outline: 0;
    border-width: 0 0 1px;
    font-size: 14px;
    border-radius: 0px;
    padding-left: 20px;
    /* border: none !important; */
}

@media (min-width: 994px) {

    .country-chooser-jobform .vs__search::placeholder,
    .country-chooser-jobform .vs__dropdown-toggle,
    .country-chooser-jobform .vs__dropdown-menu {
        border: none !important;
    }


    /* .form-container,
.btn {
    border-radius: 0px !important;
} */
}


/* .country-chooser-jobform .vs__clear,
.country-chooser-jobform .vs__open-indicator {
    fill: #394066;
} */


.searchingBar-suggestions {
    list-style: none;
    padding: 0;
    /* margin: 0; */
    position: absolute;
    background-color: #fff;
    border: 1px solid #f2eeee;
    border-top: none;
    border-radius: 0px 0px 5px 5px !important;
    width: 100%;
    margin-top: 45px;
    z-index: 10000;
}

.searchingBar-suggestions li {
    padding: 8px;
    cursor: pointer;
}

.searchingBar-suggestions li:hover {
    background-color: #f0f0f0;
}

.form-select-search-job {
    border: none;
    border-bottom: 1px solid #94a3b8;
}
</style>

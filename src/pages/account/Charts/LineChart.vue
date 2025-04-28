<template>
    <apexchart type="line" :options="chartOptions" :series="series">
    </apexchart>

</template>
<script setup lang="ts">
import { onMounted, ref } from 'vue';


onMounted(() => {
    loadChartOptions()
})


const series = ref<any>([{
    name: 'Clients',
    data: [500, 200, 500, 600, 500]
}])
const datesArray = ref(['2025-01-03', '2025-04-03', '2025-06-03', '2025-07-03', '2025-08-03'])
const chartOptions = ref({})
function loadChartOptions() {
    chartOptions.value = {
        chart: {
            // height: 800,
            // width: 600,
            type: 'line',
            animations: {
                enabled: true,
                easing: 'linear',
                dynamicAnimation: {
                    speed: 1000
                }
            },
            toolbar: {
                show: true
            },
            zoom: {
                enabled: false
            }
        },
        dataLabels: {
            enabled: false
        },
        markers: {
            size: 1,
        },
        stroke: {
            curve: 'smooth',
            show: true,
            lineCap: 'round', //butt, square
            width: 3,
            dashArray: 0,
        },
        states: {
            hover: {
                enabled: false,
            }
        },

        xaxis: {
            categories: datesArray.value,
            type: "datetime",
            labels: {
                datetimeFormatter: {
                    year: 'yyyy',
                    month: 'MMM \'yyyy',
                    day: 'dd MMM',
                    hour: 'HH:mm'
                }
            }
        },
        yaxis: {
            title: {
                // text: 'Clients'
            },
            // tickAmount: 5,
            // min: 0,
            // max: 100,
        },
        colors: ['#E63468'],
        legend: {
            show: true
        },
        tooltip: {
            enabled: true,
        },
    }
}
</script>

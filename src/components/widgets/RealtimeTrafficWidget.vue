<script setup>
import { onMounted, onBeforeUnmount, ref } from "vue";
import Chart from "chart.js/auto";
import WidgetCard from "../ui/WidgetCard.vue";
import { realtimeTraffic } from "../../data/widgetsData.js";

const canvasRef = ref(null);
let chartInstance = null;

onMounted(() => {
  chartInstance = new Chart(canvasRef.value, {
    type: "line",
    data: {
      labels: realtimeTraffic.labels,
      datasets: [
        {
          data: realtimeTraffic.data,
          borderColor: "#35b8e0",
          backgroundColor: "rgba(53, 184, 224, 0.15)",
          fill: true,
          tension: 0.35,
          pointRadius: 0,
          borderWidth: 2,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: { legend: { display: false }, tooltip: { enabled: true } },
      scales: {
        x: { grid: { display: false }, ticks: { display: false } },
        y: { grid: { color: "#eef1f7" }, ticks: { display: false } },
      },
    },
  });
});

onBeforeUnmount(() => {
  chartInstance?.destroy();
});
</script>

<template>
  <WidgetCard title="Realtime Traffic" eyebrow>
    <div class="chart-wrap"><canvas ref="canvasRef"></canvas></div>
  </WidgetCard>
</template>

<style scoped>
.chart-wrap {
  height: 220px;
}
</style>

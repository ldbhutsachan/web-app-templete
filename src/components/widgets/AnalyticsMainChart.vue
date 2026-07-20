<script setup>
import { onMounted, onBeforeUnmount, ref } from "vue";
import Chart from "chart.js/auto";
import WidgetCard from "../ui/WidgetCard.vue";
import { analyticsMainChart } from "../../data/analyticsData.js";

const colors = ["#3979f6", "#22b573", "#ee3158"];
const canvasRef = ref(null);
let chartInstance = null;

onMounted(() => {
  chartInstance = new Chart(canvasRef.value, {
    type: "line",
    data: {
      labels: analyticsMainChart.labels,
      datasets: analyticsMainChart.series.map((data, i) => ({
        data,
        borderColor: colors[i],
        backgroundColor: "transparent",
        fill: false,
        tension: 0.4,
        pointRadius: 0,
        borderWidth: 2,
      })),
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
  <WidgetCard title="Traffic Overview" eyebrow>
    <div class="main-chart-wrap"><canvas ref="canvasRef"></canvas></div>
  </WidgetCard>
</template>

<style scoped>
.main-chart-wrap {
  height: 220px;
}
</style>

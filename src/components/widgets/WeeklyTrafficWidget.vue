<script setup>
import { onMounted, onBeforeUnmount, ref } from "vue";
import Chart from "chart.js/auto";
import WidgetCard from "../ui/WidgetCard.vue";
import { weeklyTraffic } from "../../data/widgetsData.js";

const canvasRef = ref(null);
let chartInstance = null;

onMounted(() => {
  chartInstance = new Chart(canvasRef.value, {
    type: "bar",
    data: {
      labels: weeklyTraffic.labels,
      datasets: [
        {
          data: weeklyTraffic.data,
          backgroundColor: "#3979f6",
          borderRadius: 4,
          maxBarThickness: 36,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: { legend: { display: false }, tooltip: { enabled: true } },
      scales: {
        x: { grid: { display: false } },
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
  <WidgetCard title="Weekly Traffic" eyebrow>
    <div class="chart-wrap"><canvas ref="canvasRef"></canvas></div>
  </WidgetCard>
</template>

<style scoped>
.chart-wrap {
  height: 200px;
}
</style>

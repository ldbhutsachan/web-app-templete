<script setup>
import { onMounted, onBeforeUnmount, ref } from "vue";
import Chart from "chart.js/auto";
import WidgetCard from "../ui/WidgetCard.vue";
import { changesChart } from "../../data/widgetsData.js";

const canvasRef = ref(null);
let chartInstance = null;

onMounted(() => {
  chartInstance = new Chart(canvasRef.value, {
    type: "bar",
    data: {
      labels: changesChart.labels,
      datasets: [
        {
          data: changesChart.data,
          backgroundColor: "#ee3158",
          borderRadius: 4,
          maxBarThickness: 22,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: { legend: { display: false }, tooltip: { enabled: true } },
      scales: {
        x: { grid: { display: false }, ticks: { font: { size: 10 } } },
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
  <WidgetCard title="Changes" eyebrow>
    <div class="chart-wrap"><canvas ref="canvasRef"></canvas></div>
  </WidgetCard>
</template>

<style scoped>
.chart-wrap {
  height: 200px;
}
</style>
